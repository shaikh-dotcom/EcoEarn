import { useState, useEffect } from "react";
import EcoMap from "./Ecomap";
import { LaptopRecycleIcon, PlasticBottlesIcon, WalletNavIcon } from "./Icons";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import AIChatBot from "./AIChatBot";
import Rewards from "./Rewards";
import Wallet from "./Wallet";
// ── Icons ──────────────────────────────────────────────

const SignOutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M6 14H3C2.448 14 2 13.552 2 13V3C2 2.448 2.448 2 3 2H6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11 11 L14 8 L11 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="14"
      y1="8"
      x2="6"
      y2="8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const HomeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);
const MapIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>
);
const ProfileIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const RewardsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M12 11V3" />
    <path d="M12 3c0 0-3-2 0-3s2 3 0 3z" />
    <path d="M12 3c0 0 3-2 0-3" />
    <line x1="3" y1="11" x2="21" y2="11" />
    <line x1="12" y1="11" x2="12" y2="22" />
  </svg>
);
const BellIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
const UserIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
// ── Main Dashboard ─────────────────────────────────────
const Home = ({ user }) => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    localStorage.removeItem("activePage");
    await signOut(auth);
    navigate("/");
  };

  const [activePage, setActivePage] = useState(
    () => localStorage.getItem("activePage") || "home",
  );
  const [notifications, setNotifications] = useState(3);
  const handleSetActivePage = (page) => {
    localStorage.setItem("activePage", page);
    setActivePage(page);
  };
  const navItems = [
    { id: "home", label: "Home", icon: <HomeIcon /> },
    { id: "map", label: "Map", icon: <MapIcon /> },
    { id: "profile", label: "Profile", icon: <ProfileIcon /> },
    { id: "rewards", label: "Rewards", icon: <RewardsIcon /> },
    { id: "wallet", label: "Wallet", icon: <WalletNavIcon /> },
  ];
  return (
    <div
      className={`dashboard ${activePage === "rewards" ? "dashboard-rewards" : ""}`}
    >
      {/* ── Sidebar ── */}
      <aside className="sidebar">
        <div
          className="sidebar-logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <span className="logo-eco">Eco</span>
          <span className="logo-earn">Earn</span>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activePage === item.id ? "nav-item-active" : ""}`}
              onClick={() => handleSetActivePage(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
          {activePage === "profile" && (
            <button className="sidebar-signout" onClick={handleSignOut}>
              <SignOutIcon />
              <span>Sign Out</span>
            </button>
          )}
        </nav>
      </aside>
      {/* ── Main Content ── */}
      <main className="dashboard-main">
        {/* Top bar */}
        <div className="dashboard-topbar">
          <div className="reward-progress-section">
            <p className="reward-label">
              Next Reward:{" "}
              <span className="reward-highlight">
                500 EcoPoints — Plant a Tree
              </span>
            </p>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: "62%" }} />
            </div>
          </div>
          <div className="topbar-actions">
            {/* Notification */}
            <div className="topbar-icon-btn">
              <BellIcon />
              {notifications > 0 && (
                <span className="notif-badge">{notifications}</span>
              )}
            </div>
            {/* Profile avatar */}
            <div
              className="topbar-avatar"
              onClick={() => handleSetActivePage("profile")}
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="profile"
                  className="topbar-avatar-img"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <UserIcon />
              )}
            </div>
          </div>
        </div>
        {/* Waste category cards */}
        {activePage === "home" && (
          <>
            <div className="waste-cards">
              <div className="waste-card waste-plastic">
                <PlasticBottlesIcon />
                <span className="waste-card-label">Plastic Waste</span>
              </div>
              <div className="waste-card waste-electronic">
                <LaptopRecycleIcon />
                <span className="waste-card-label">Electronic Waste</span>
              </div>
            </div>
            {/* Map section */}
            <div className="map-section">
              <h3 className="map-title">Nearby Drop-off Points</h3>
              <EcoMap />
            </div>
          </>
        )}
        {activePage === "map" && (
          <div className="map-section" style={{ flex: 1 }}>
            <h3 className="map-title">Nearby Drop-off Points</h3>
            <EcoMap />
          </div>
        )}
        {activePage === "profile" && <Profile />}
        {activePage === "rewards" && (
          <Rewards setActivePage={handleSetActivePage} />
        )}
        {activePage === "wallet" && (
          <Wallet setActivePage={handleSetActivePage} />
        )}
      </main>
      <AIChatBot />
    </div>
  );
};
export default Home;
