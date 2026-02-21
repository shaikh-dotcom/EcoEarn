import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Navbar from "./Navbar";
import AuthModal from "./AuthModal";
import {
  TrackEarningsIcon,
  RewardsShopIcon,
  FindBinsSearchIcon,
} from "./Icons";
const Interface = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleCardClick = () => {
    if (user) {
      navigate("/home");
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="interface">
      <Navbar></Navbar>
      <p className="hero-tag">Gen Z's Future of Recycling</p>
      <p className="hero-heading">
        TURN YOUR <span className="trash">TRASH </span>
        <br />
        INTO <span className="cash">CASH</span>
      </p>
      <div className="hero-cards-container">
        <div
          className="hero-card card-track-earnings"
          onClick={handleCardClick}
        >
          <span className="card-icon">
            <TrackEarningsIcon></TrackEarningsIcon>
          </span>
          <p>Track Earnings</p>
        </div>
        <div
          className="hero-card card-find-bins-left"
          onClick={handleCardClick}
        >
          <span className="card-icon">
            <FindBinsSearchIcon></FindBinsSearchIcon>
          </span>
          <p>Find Bins</p>
        </div>
        <div className="hero-card card-rewards-shop" onClick={handleCardClick}>
          <span className="card-icon">
            <RewardsShopIcon></RewardsShopIcon>
          </span>
          <p>Rewards Shop</p>
        </div>
      </div>
      <div className="hero-bottom">
        <p className="hero-subtitle">Gen Z's Future of Recycling</p>
        <div className="hero-buttons">
          <button className="btn-join">JOIN THE REVOLUTION</button>
          <button className="btn-learn">Learn More</button>
        </div>
      </div>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Interface;
