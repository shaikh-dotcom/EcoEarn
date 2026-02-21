import React, { useState } from "react";
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// ── Constants ──────────────────────────────────────────────────
const COUNTRIES = [
  { code: "BD", dial: "+880", flag: "🇧🇩" },
  { code: "US", dial: "+1", flag: "🇺🇸" },
  { code: "GB", dial: "+44", flag: "🇬🇧" },
  { code: "IN", dial: "+91", flag: "🇮🇳" },
  { code: "AU", dial: "+61", flag: "🇦🇺" },
  { code: "CA", dial: "+1", flag: "🇨🇦" },
  { code: "DE", dial: "+49", flag: "🇩🇪" },
  { code: "FR", dial: "+33", flag: "🇫🇷" },
  { code: "JP", dial: "+81", flag: "🇯🇵" },
  { code: "CN", dial: "+86", flag: "🇨🇳" },
  { code: "BR", dial: "+55", flag: "🇧🇷" },
  { code: "PK", dial: "+92", flag: "🇵🇰" },
  { code: "AE", dial: "+971", flag: "🇦🇪" },
  { code: "SG", dial: "+65", flag: "🇸🇬" },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// ── Google SVG ─────────────────────────────────────────────────
const GoogleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 48 48"
    style={{ marginRight: "10px" }}
  >
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

// ── Helper: save user + location to Firestore ──────────────────
// Called after every successful auth (login, signup, Google).
// merge:true means we never wipe existing user data.
const saveUserLocation = (uid, extraData = {}) => {
  return new Promise((resolve) => {
    const writeDoc = async (coords = {}) => {
      await setDoc(
        doc(db, "users", uid),
        { uid, online: true, lastSeen: new Date(), ...coords, ...extraData },
        { merge: true },
      );
      resolve();
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          writeDoc({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => writeDoc(), // denied — save without coords
      );
    } else {
      writeDoc();
    }
  });
};

// ── Toast ──────────────────────────────────────────────────────
const Toast = ({ message, type }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 9999,
      background:
        type === "success"
          ? "linear-gradient(135deg,rgba(0,255,136,.18),rgba(87,247,223,.18))"
          : "linear-gradient(135deg,rgba(255,68,68,.18),rgba(255,100,100,.18))",
      border: `1px solid ${type === "success" ? "rgba(0,255,136,.45)" : "rgba(255,68,68,.45)"}`,
      borderRadius: "10px",
      padding: "10px 22px",
      color: type === "success" ? "#00ff88" : "#ff7070",
      fontFamily: "'Outfit',sans-serif",
      fontSize: "0.82rem",
      fontWeight: 600,
      whiteSpace: "nowrap",
      backdropFilter: "blur(12px)",
      boxShadow:
        type === "success"
          ? "0 0 20px rgba(0,255,136,.2)"
          : "0 0 20px rgba(255,68,68,.2)",
      animation: "fadeSlideIn .25s ease",
    }}
  >
    {type === "success" ? "✅ " : "⚠️ "}
    {message}
  </div>
);

// ── Inline field error ─────────────────────────────────────────
const FieldError = ({ msg }) =>
  msg ? (
    <p
      style={{
        color: "#ff7070",
        fontSize: "0.74rem",
        fontFamily: "'Outfit',sans-serif",
        margin: "-6px 0 0 4px",
        letterSpacing: ".2px",
      }}
    >
      {msg}
    </p>
  ) : null;

// ── AuthModal ──────────────────────────────────────────────────
const AuthModal = ({ onClose }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [activeTab, setActiveTab] = useState("login");
  const [loading, setLoading] = useState(false);

  // Central toast
  const [toast, setToast] = useState(null);
  const fireToast = (message, type = "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // ── Switch tabs → clear errors ─────────────────────────────
  const switchTab = (tab) => {
    setActiveTab(tab);
    setLoginErrors({});
    setSignupErrors({});
    setToast(null);
  };

  // ══════════════════════════════════════════════════════════════
  //  LOGIN
  // ══════════════════════════════════════════════════════════════
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({});

  const validateLogin = () => {
    const e = {};
    if (!loginData.email) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(loginData.email))
      e.email = "Enter a valid email address.";
    if (!loginData.password) e.password = "Password is required.";
    setLoginErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLoginSubmit = async () => {
    if (!validateLogin()) return;
    setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password,
      );
      await saveUserLocation(cred.user.uid, { email: loginData.email });
      fireToast("Welcome back! Logged in successfully.", "success");
      setTimeout(() => navigate("/home"), 1600);
    } catch (err) {
      const msg =
        err.code === "auth/user-not-found"
          ? "No account found with this email."
          : err.code === "auth/wrong-password"
            ? "Incorrect password. Please try again."
            : err.code === "auth/invalid-credential"
              ? "Incorrect email or password."
              : err.code === "auth/invalid-email"
                ? "Invalid email address."
                : err.code === "auth/too-many-requests"
                  ? "Too many attempts. Try again later."
                  : "Login failed. Please check your details.";
      fireToast(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  // ══════════════════════════════════════════════════════════════
  //  SIGNUP
  // ══════════════════════════════════════════════════════════════
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [signupErrors, setSignupErrors] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [gender, setGender] = useState("");
  const [dobMonth, setDobMonth] = useState("");
  const [dobDate, setDobDate] = useState("");
  const [dobYear, setDobYear] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const set = (field, val) => setSignupData((p) => ({ ...p, [field]: val }));

  const validateSignup = () => {
    const e = {};
    if (!signupData.firstName.trim()) e.firstName = "First name is required.";
    if (!signupData.lastName.trim()) e.lastName = "Last name is required.";
    if (!signupData.email) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(signupData.email))
      e.email = "Enter a valid email address.";
    if (!signupData.password) e.password = "Password is required.";
    else if (signupData.password.length < 6)
      e.password = "Password must be at least 6 characters.";
    if (!signupData.confirmPassword)
      e.confirmPassword = "Please confirm your password.";
    else if (signupData.password !== signupData.confirmPassword)
      e.confirmPassword = "Passwords do not match.";
    if (!dobMonth || !dobDate || !dobYear)
      e.dob = "Please select your full date of birth.";
    setSignupErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSignupSubmit = async () => {
    if (!validateSignup()) {
      fireToast("Please fix the highlighted fields.", "error");
      return;
    }
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        signupData.email,
        signupData.password,
      );
      await saveUserLocation(cred.user.uid, {
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        email: signupData.email,
        phone: `${selectedCountry.dial}${signupData.phone}`,
        gender: gender || null,
        dob: `${dobYear}-${String(dobMonth).padStart(2, "0")}-${String(dobDate).padStart(2, "0")}`,
      });
      fireToast("Account created! Welcome to EcoEarn 🌱", "success");
      setTimeout(() => navigate("/home"), 1800);
    } catch (err) {
      const msg =
        err.code === "auth/email-already-in-use"
          ? "An account with this email already exists."
          : err.code === "auth/invalid-email"
            ? "Invalid email address."
            : err.code === "auth/weak-password"
              ? "Password is too weak (min 6 chars)."
              : "Sign up failed. Please try again.";
      fireToast(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  // ══════════════════════════════════════════════════════════════
  //  GOOGLE — works for both login AND signup automatically
  // ══════════════════════════════════════════════════════════════
  const handleGoogleAuth = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Firebase tells you if this is a brand new user
      const isNewUser = result._tokenResponse?.isNewUser;

      if (activeTab === "login" && isNewUser) {
        // They tried to log in but have no account
        await user.delete(); // remove the auto-created account
        fireToast("No account found. Please sign up first.", "error");
        setLoading(false);
        return;
      }

      const [firstName = "", ...rest] = (user.displayName || "").split(" ");
      const lastName = rest.join(" ");
      await saveUserLocation(user.uid, {
        firstName,
        lastName,
        email: user.email,
        photoURL: user.photoURL || null,
      });
      fireToast(`Welcome, ${firstName || "Eco Hero"}! 🌿`, "success");
      setTimeout(() => navigate("/home"), 1500);
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        fireToast("Sign-in cancelled.", "error");
      } else {
        fireToast("Google sign-in failed. Try again.", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  // ── Error border helper ────────────────────────────────────
  const errBorder = (hasErr) =>
    hasErr ? { borderColor: "rgba(255,68,68,0.65)" } : {};

  // ══════════════════════════════════════════════════════════════
  //  RENDER
  // ══════════════════════════════════════════════════════════════
  return (
    <div className="modal-overlay">
      {/* keyframe for toast slide-in */}
      <style>{`
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translate(-50%, -48%); }
    to   { opacity: 1; transform: translate(-50%); }
  }
`}</style>

      <div className="modal-box" style={{ position: "relative" }}>
        {toast && <Toast message={toast.message} type={toast.type} />}

        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* Tabs */}
        <div className="modal-tabs">
          {["login", "signup"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "tab tab-active" : "tab"}
              onClick={() => switchTab(tab)}
            >
              {tab === "login" ? "Log In" : "Sign Up"}
            </button>
          ))}
        </div>

        {/* ════ LOGIN ════ */}
        {activeTab === "login" && (
          <div className="modal-form">
            <h2 className="modal-title">Welcome Back</h2>

            <div className="input-group">
              <span className="input-icon">📧</span>
              <input
                type="email"
                placeholder="Email address"
                className="modal-input"
                style={errBorder(loginErrors.email)}
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>
            <FieldError msg={loginErrors.email} />

            <div className="input-group">
              <span className="input-icon">🔒</span>
              <input
                type="password"
                placeholder="Password"
                className="modal-input"
                style={errBorder(loginErrors.password)}
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
            <FieldError msg={loginErrors.password} />

            <button
              className="modal-btn"
              onClick={handleLoginSubmit}
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>

            <p className="modal-forgot">Forgot password?</p>

            <div className="divider">
              <div className="divider-line" />
              <span className="divider-text">OR</span>
              <div className="divider-line" />
            </div>

            <button
              className="google-btn"
              onClick={handleGoogleAuth}
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              <GoogleIcon />
              {loading ? "Please wait…" : "Continue with Google"}
            </button>
          </div>
        )}

        {/* ════ SIGNUP ════ */}
        {activeTab === "signup" && (
          <div className="modal-form">
            <h2 className="modal-title">Create Account</h2>

            {/* Name row */}
            <div className="input-row">
              <div style={{ flex: 1 }}>
                <div className="input-group">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    placeholder="First name"
                    className="modal-input"
                    style={errBorder(signupErrors.firstName)}
                    value={signupData.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                  />
                </div>
                <FieldError msg={signupErrors.firstName} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="input-group">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="modal-input"
                    style={errBorder(signupErrors.lastName)}
                    value={signupData.lastName}
                    onChange={(e) => set("lastName", e.target.value)}
                  />
                </div>
                <FieldError msg={signupErrors.lastName} />
              </div>
            </div>

            {/* Email */}
            <div className="input-group">
              <span className="input-icon">📧</span>
              <input
                type="email"
                placeholder="Email address"
                className="modal-input"
                style={errBorder(signupErrors.email)}
                value={signupData.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </div>
            <FieldError msg={signupErrors.email} />

            {/* Phone */}
            <div className="phone-row">
              <div style={{ position: "relative" }}>
                <button
                  className="country-selector"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <span>{selectedCountry.flag}</span>
                  <span>{selectedCountry.dial}</span>
                  <span>▼</span>
                </button>
                {showCountryDropdown && (
                  <div className="country-dropdown">
                    {COUNTRIES.map((c) => (
                      <div
                        key={c.code}
                        className={`country-option ${selectedCountry.code === c.code ? "selected" : ""}`}
                        onClick={() => {
                          setSelectedCountry(c);
                          setShowCountryDropdown(false);
                        }}
                      >
                        <span>{c.flag}</span>
                        <span>{c.code}</span>
                        <span className="country-dial">{c.dial}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="input-group">
                <span className="input-icon">📱</span>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="modal-input"
                  value={signupData.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <span className="input-icon">🔒</span>
              <input
                type="password"
                placeholder="Password (min 6 characters)"
                className="modal-input"
                style={errBorder(signupErrors.password)}
                value={signupData.password}
                onChange={(e) => set("password", e.target.value)}
              />
            </div>
            <FieldError msg={signupErrors.password} />

            {/* Confirm password */}
            <div className="input-group">
              <span className="input-icon">🔒</span>
              <input
                type="password"
                placeholder="Confirm password"
                className="modal-input"
                style={errBorder(signupErrors.confirmPassword)}
                value={signupData.confirmPassword}
                onChange={(e) => set("confirmPassword", e.target.value)}
              />
            </div>
            <FieldError msg={signupErrors.confirmPassword} />

            {/* Gender */}
            <div>
              <p className="field-label">
                GENDER <span>(optional)</span>
              </p>
              <div className="gender-options">
                {["Male", "Female", "Non-binary"].map((g) => (
                  <button
                    key={g}
                    className={`gender-btn ${gender === g ? "active" : ""}`}
                    onClick={() => setGender(gender === g ? "" : g)}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* DOB */}
            <div>
              <p className="field-label">DATE OF BIRTH</p>
              <div className="dob-row">
                <select
                  value={dobMonth}
                  onChange={(e) => setDobMonth(e.target.value)}
                  className="modal-input"
                  style={errBorder(signupErrors.dob)}
                >
                  <option value="" disabled>
                    Month
                  </option>
                  {MONTHS.map((m, i) => (
                    <option key={m} value={i + 1}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  value={dobDate}
                  onChange={(e) => setDobDate(e.target.value)}
                  className="modal-input"
                  style={errBorder(signupErrors.dob)}
                >
                  <option value="" disabled>
                    Day
                  </option>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <select
                  value={dobYear}
                  onChange={(e) => setDobYear(e.target.value)}
                  className="modal-input"
                  style={errBorder(signupErrors.dob)}
                >
                  <option value="" disabled>
                    Year
                  </option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
              <FieldError msg={signupErrors.dob} />
            </div>

            <button
              className="modal-btn"
              onClick={handleSignupSubmit}
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Creating account…" : "Create Account"}
            </button>

            <div className="divider">
              <div className="divider-line" />
              <span className="divider-text">OR</span>
              <div className="divider-line" />
            </div>

            <button
              className="google-btn"
              onClick={handleGoogleAuth}
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              <GoogleIcon />
              {loading ? "Please wait…" : "Continue with Google"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
