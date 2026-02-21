import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-eco">Eco</span>
        <span className="logo-earn">Earn</span>
      </div>
      <div className="main-links">
        <Link to="#">Home</Link>
        <Link to="#">Dashboard</Link>
        <Link to="#">Marketplace</Link>
      </div>
      <div className="log-sign-links">
        {user ? (
          <button
            className="sign-up"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/home")}
          >
            Go to Dashboard
          </button>
        ) : (
          <>
            <Link className="log-in" onClick={() => setShowModal(true)}>
              Log in
            </Link>
            <Link className="sign-up" onClick={() => setShowModal(true)}>
              Sign up
            </Link>
          </>
        )}
      </div>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;
