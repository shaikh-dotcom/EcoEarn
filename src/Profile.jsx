import { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AIChatBot from "./AIChatBot";

// ── Custom SVG Icons ───────────────────────────────────────────

const LeafIcon = ({ size = 32, glow = false }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    {glow && (
      <filter id="leafGlow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    )}
    <path
      d="M16 4C16 4 6 8 6 18C6 23.523 10.477 28 16 28C21.523 28 26 23.523 26 18C26 8 16 4 16 4Z"
      stroke="#00ff88"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(0,255,136,0.15)"
      filter={glow ? "url(#leafGlow)" : undefined}
    />
    <path
      d="M16 28C16 28 16 18 16 14"
      stroke="#00ff88"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M16 20C16 20 11 16 8 14"
      stroke="#00ff88"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.6"
    />
    <path
      d="M16 17C16 17 20 14 23 12"
      stroke="#00ff88"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.6"
    />
  </svg>
);

const RecycleIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    {/* Arrow top */}
    <path
      d="M14 4 L17 9 L15.2 9 L15.2 13 L12.8 13 L12.8 9 L11 9 Z"
      fill="#00ff88"
      fillOpacity="0.9"
    />
    {/* Arrow bottom-right */}
    <path
      d="M22 17.5 L19.5 17.5 L20.5 15.8 L17.5 10.8 L19.8 9.5 L23.5 15.8 Z"
      fill="#00ff88"
      fillOpacity="0.9"
    />
    {/* Arrow bottom-left */}
    <path
      d="M6 17.5 L8.2 9.5 L10.5 10.8 L7.5 15.8 L8.5 17.5 Z"
      fill="#00ff88"
      fillOpacity="0.9"
    />
    {/* Bottom bar left */}
    <path
      d="M6 17.5 L11 17.5"
      stroke="#00ff88"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Bottom bar right */}
    <path
      d="M17 17.5 L22 17.5"
      stroke="#00ff88"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Center circle */}
    <circle
      cx="14"
      cy="14"
      r="2.5"
      fill="#00ff88"
      fillOpacity="0.3"
      stroke="#00ff88"
      strokeWidth="1"
    />
  </svg>
);

const TreeIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="rgba(0,255,136,0.08)" />
    {/* Trunk */}
    <rect
      x="14"
      y="22"
      width="4"
      height="6"
      rx="1"
      fill="#57f7df"
      fillOpacity="0.8"
    />
    {/* Bottom layer */}
    <path
      d="M8 22 L16 10 L24 22 Z"
      fill="rgba(0,255,136,0.15)"
      stroke="#00ff88"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Middle layer */}
    <path
      d="M10 17 L16 7 L22 17 Z"
      fill="rgba(0,255,136,0.2)"
      stroke="#00ff88"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Top layer */}
    <path
      d="M12 13 L16 5 L20 13 Z"
      fill="rgba(0,255,136,0.3)"
      stroke="#00ff88"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const CloudIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="rgba(87,247,223,0.08)" />
    {/* Cloud shape */}
    <path
      d="M22 20H11C8.79 20 7 18.21 7 16C7 14.07 8.43 12.44 10.31 12.07C10.11 11.57 10 11.04 10 10.5C10 8.01 12.01 6 14.5 6C16.43 6 18.09 7.18 18.76 8.86C19.16 8.64 19.61 8.5 20.1 8.5C21.71 8.5 23 9.79 23 11.4C23 11.59 22.98 11.77 22.95 11.95C24.15 12.37 25 13.51 25 14.85C25 17.14 23.21 20 22 20Z"
      fill="rgba(87,247,223,0.15)"
      stroke="#57f7df"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Upload arrow */}
    <path
      d="M16 24 L16 20"
      stroke="#57f7df"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M13.5 22 L16 19.5 L18.5 22"
      stroke="#57f7df"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WalletIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
    <rect
      x="4"
      y="10"
      width="28"
      height="20"
      rx="3"
      stroke="#57f7df"
      strokeWidth="1.8"
      fill="rgba(87,247,223,0.08)"
    />
    <path d="M4 16 L32 16" stroke="#57f7df" strokeWidth="1.8" />
    <path
      d="M4 12 C4 12 8 10 18 10 C28 10 32 12 32 12"
      stroke="#57f7df"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect
      x="22"
      y="19"
      width="8"
      height="5"
      rx="2"
      fill="rgba(87,247,223,0.2)"
      stroke="#57f7df"
      strokeWidth="1.2"
    />
    <circle cx="26" cy="21.5" r="1" fill="#57f7df" />
  </svg>
);

const EcoCoinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <circle
      cx="10"
      cy="10"
      r="8.5"
      stroke="#00ff88"
      strokeWidth="1.5"
      fill="rgba(0,255,136,0.15)"
    />
    <circle
      cx="10"
      cy="10"
      r="5.5"
      stroke="#00ff88"
      strokeWidth="1"
      strokeOpacity="0.4"
      fill="none"
    />
    {/* Leaf inside coin */}
    <path
      d="M10 6.5C10 6.5 7 8 7 11C7 12.657 8.343 14 10 14C11.657 14 13 12.657 13 11C13 8 10 6.5 10 6.5Z"
      fill="rgba(0,255,136,0.4)"
      stroke="#00ff88"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <line
      x1="10"
      y1="14"
      x2="10"
      y2="11"
      stroke="#00ff88"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

const BotIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
    {/* Head */}
    <rect
      x="4"
      y="8"
      width="18"
      height="14"
      rx="4"
      stroke="#00ff88"
      strokeWidth="1.5"
      fill="rgba(0,255,136,0.1)"
    />
    {/* Antenna */}
    <line
      x1="13"
      y1="4"
      x2="13"
      y2="8"
      stroke="#00ff88"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="13" cy="3.5" r="1.5" fill="#00ff88" />
    {/* Eyes */}
    <circle cx="9.5" cy="14" r="1.8" fill="#00ff88" fillOpacity="0.9" />
    <circle cx="16.5" cy="14" r="1.8" fill="#00ff88" fillOpacity="0.9" />
    {/* Mouth */}
    <path
      d="M9 18.5 Q13 21 17 18.5"
      stroke="#00ff88"
      strokeWidth="1.3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Ear left */}
    <rect
      x="1.5"
      y="12"
      width="2.5"
      height="5"
      rx="1"
      fill="#00ff88"
      fillOpacity="0.5"
    />
    {/* Ear right */}
    <rect
      x="22"
      y="12"
      width="2.5"
      height="5"
      rx="1"
      fill="#00ff88"
      fillOpacity="0.5"
    />
  </svg>
);

const SignOutIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M6 14H3C2.448 14 2 13.552 2 13V3C2 2.448 2.448 2 3 2H6"
      stroke="#ff7070"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11 11 L14 8 L11 5"
      stroke="#ff7070"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="14"
      y1="8"
      x2="6"
      y2="8"
      stroke="#ff7070"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// ── Sustainability Score Gauge ─────────────────────────────────
const ScoreGauge = ({ score = 92 }) => {
  const radius = 70;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = Math.PI * normalizedRadius;
  const progress = (score / 100) * circumference;

  return (
    <div className="gauge-wrapper">
      <svg
        width={radius * 2}
        height={radius + 20}
        viewBox={`0 0 ${radius * 2} ${radius + 20}`}
      >
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#57f7df" />
            <stop offset="100%" stopColor="#aef58f" />
          </linearGradient>
        </defs>
        {/* Track */}
        <path
          d={`M ${stroke / 2} ${radius} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 - stroke / 2} ${radius}`}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        {/* Fill */}
        <path
          d={`M ${stroke / 2} ${radius} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 - stroke / 2} ${radius}`}
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${progress} ${circumference}`}
          style={{ transition: "stroke-dasharray 1.2s ease" }}
        />
        {/* Leaf in center using foreignObject */}
        <g transform={`translate(${radius - 12}, ${radius - 28})`}>
          <LeafIcon size={24} />
        </g>
      </svg>
      <div className="gauge-score-text">
        <span className="gauge-score-number">{score}</span>
        <span className="gauge-score-max">/100</span>
      </div>
    </div>
  );
};

// ── Badge ──────────────────────────────────────────────────────
const Badge = ({ title = "Emerald Recycler" }) => (
  <div className="badge-card">
    <div className="badge-glow-bg" />
    <div className="badge-leaf-icon">
      <LeafIcon size={68} glow />
    </div>
    <div className="badge-hex">
      <svg width="90" height="100" viewBox="0 0 90 100">
        <defs>
          <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#57f7df" stopOpacity="0.9" />
          </linearGradient>
          <filter id="hexGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polygon
          points="45,5 85,27.5 85,72.5 45,95 5,72.5 5,27.5"
          fill="url(#hexGrad)"
          fillOpacity="0.2"
          stroke="url(#hexGrad)"
          strokeWidth="2"
          filter="url(#hexGlow)"
        />
        {/* Recycle icon inside hex */}
        <g transform="translate(31, 34)">
          <RecycleIcon size={28} />
        </g>
      </svg>
    </div>
    <p className="badge-title">{title}</p>
  </div>
);

// ── Stat Card ──────────────────────────────────────────────────
const StatCard = ({ icon, value, label }) => (
  <div className="stat-card">
    <div className="stat-card-icon">{icon}</div>
    <span className="stat-card-value">{value}</span>
    <span className="stat-card-label">{label}</span>
  </div>
);

// ── AI Assistant Bubble ────────────────────────────────────────
const AIBubble = () => {
  const messages = [
    "Ready for your Friday plastic pickup?",
    "You're 80pts away from your next reward!",
    "Great job this week, keep it up!",
    "3 bins nearby are available right now.",
  ];
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ai-bubble-wrapper">
      <div className="ai-speech-bubble">{messages[msgIndex]}</div>
      <div className="ai-avatar">
        <BotIcon size={34} />
      </div>
    </div>
  );
};

// ── Main Profile Component ─────────────────────────────────────
const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;
    const fetchUser = async () => {
      const snap = await getDoc(doc(db, "users", user.uid));
      if (snap.exists()) setUserData(snap.data());
      setLoading(false);
    };
    fetchUser();
  }, [user]);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const displayName = userData
    ? `${userData.firstName || ""} ${userData.lastName || ""}`.trim()
    : user?.displayName || "Eco Hero";

  const email = userData?.email || user?.email || "";

  return (
    <div className="profile-wrapper">
      {/* ── Top: Profile Info + Wallet ── */}
      <div className="profile-top-row">
        <div className="profile-info-card">
          <p className="profile-info-label">Profile</p>
          <h2 className="profile-info-name">{loading ? "..." : displayName}</h2>
          <p className="profile-info-email">{email}</p>
        </div>

        <div className="wallet-card">
          <div className="wallet-info">
            <p className="wallet-label">Wallet</p>
            <div className="wallet-amount-row">
              <EcoCoinIcon size={28} />
              <span className="wallet-amount">4,500</span>
            </div>
            <p className="wallet-sublabel">Eco-Points</p>
          </div>
          <WalletIcon size={48} />
        </div>
      </div>

      {/* ── Middle: Badge + Score + Stats ── */}
      <div className="profile-middle-row">
        <div className="profile-badge-col">
          <Badge title="Emerald Recycler" />
        </div>

        <div className="profile-right-col">
          <div className="score-card">
            <p className="score-card-label">Sustainability Score</p>
            <ScoreGauge score={92} />
          </div>

          <div className="stat-cards-row">
            <StatCard
              icon={<CloudIcon size={48} />}
              value="120kg"
              label="CO₂ Saved"
            />
            <StatCard
              icon={<TreeIcon size={48} />}
              value="14"
              label="Trees Planted"
            />
          </div>
        </div>
      </div>

      {/* ── Bottom: AI Bubble + Sign Out ── */}
      <div className="profile-bottom-row">
        <AIChatBot />
      </div>
    </div>
  );
};

export default Profile;
