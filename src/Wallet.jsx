import {
  LeafCoinIcon,
  BkashIcon,
  NagadIcon,
  RocketIcon,
  VisaIcon,
  MastercardIcon,
} from "./Icons";
import { useState } from "react";
import { auth } from "./firebase";

const TRANSACTIONS = [
  {
    name: "Recycled Plastic",
    points: "+150",
    date: "09.06.2023",
    positive: true,
  },
  {
    name: "Cash Out (bKash)",
    points: "-500",
    date: "08.06.2023",
    positive: false,
  },
  {
    name: "Recycled Plastic",
    points: "+150",
    date: "23.09.2023",
    positive: true,
  },
  {
    name: "Cash Out (bKash)",
    points: "-500",
    date: "23.09.2023",
    positive: false,
  },
  {
    name: "E-Waste Drop-off",
    points: "+400",
    date: "01.10.2023",
    positive: true,
  },
  {
    name: "Recycled Metal",
    points: "+200",
    date: "15.10.2023",
    positive: true,
  },
];

const PAYMENT_METHODS = [
  {
    name: "bKash",
    icon: <BkashIcon />,
    color: "#ff4d8d",
    borderColor: "rgba(255,77,141,0.5)",
  },
  {
    name: "Nagad",
    icon: <NagadIcon />,
    color: "#ff8c00",
    borderColor: "rgba(255,140,0,0.5)",
  },
  {
    name: "Rocket",
    icon: <RocketIcon />,
    color: "#c084fc",
    borderColor: "rgba(192,132,252,0.5)",
  },
  {
    name: "Visa",
    icon: <VisaIcon />,
    color: "#4db8ff",
    borderColor: "rgba(77,184,255,0.5)",
  },
  {
    name: "Mastercard",
    icon: <MastercardIcon />,
    color: "#ff6b00",
    borderColor: "rgba(255,107,0,0.5)",
  },
];

const Wallet = ({ setActivePage }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState("form"); // form | loading | error

  const handleConfirm = async () => {
    if (!amount || !phone) return;
    setStep("loading");
    try {
      const res = await fetch(
        "https://ecoearn-backend-1.onrender.com/api/initiate-payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: parseFloat(amount),
            phone,
            method: selectedMethod.name,
            userName: auth.currentUser?.displayName || "EcoEarn User",
            userEmail: auth.currentUser?.email || "user@ecoearn.com",
          }),
        },
      );
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // SSLCommerz handles OTP itself
      } else {
        setStep("error");
      }
    } catch (err) {
      console.error("Payment Error:", err);
      setStep("error");
    }
  };

  const openModal = (method) => {
    setSelectedMethod(method);
    setShowModal(true);
    setStep("form");
    setAmount("");
    setPhone("");
  };

  return (
    <div className="wallet-page">
      <div className="wallet-content">
        {/* ── Balance Card ── */}
        <div className="balance-card">
          <p className="balance-label">Current Balance:</p>
          <div className="balance-amount">
            <LeafCoinIcon />
            <span className="balance-num">8,400 Eco-Points</span>
          </div>
        </div>

        {/* ── Withdraw Section ── */}
        <div className="withdraw-section">
          <h3 className="withdraw-title">Withdraw to Cash</h3>
          <div className="payment-methods">
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.name}
                className="payment-card"
                style={{
                  borderColor: method.borderColor,
                  boxShadow: `0 0 16px ${method.borderColor}`,
                }}
              >
                <div className="payment-icon">{method.icon}</div>
                <button
                  className="withdraw-btn"
                  style={{ borderColor: method.color, color: method.color }}
                  onClick={() => openModal(method)}
                >
                  Withdraw
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Transaction History ── */}
        <div className="tx-section">
          <h3 className="tx-title">Transaction History</h3>
          <div className="tx-list">
            {TRANSACTIONS.map((tx, i) => (
              <div key={i} className="tx-row">
                <span className="tx-name">{tx.name}</span>
                <span
                  className={`tx-points ${tx.positive ? "tx-positive" : "tx-negative"}`}
                >
                  - {tx.positive ? "+" : ""}
                  {tx.points} Eco-Points -
                </span>
                <span className="tx-date">{tx.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      {showModal && (
        <div className="withdraw-overlay" onClick={() => setShowModal(false)}>
          <div
            className="withdraw-box"
            style={{ "--method-color": selectedMethod.color }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Form Step ── */}
            {step === "form" && (
              <>
                <div className="withdraw-header">
                  <div className="modal-icon">{selectedMethod.icon}</div>
                  <h3 className="withdraw-title-text">
                    Withdraw via {selectedMethod.name}
                  </h3>
                  <button
                    className="withdraw-close"
                    onClick={() => setShowModal(false)}
                  >
                    ✕
                  </button>
                </div>

                <div className="modal-body">
                  <div className="withdraw-balance">
                    Available: <span>8,400 EP</span> ≈ $4.20
                  </div>

                  <label className="withdraw-label">Amount (Eco-Points)</label>
                  <input
                    className="withdraw-input"
                    type="number"
                    placeholder="e.g. 1000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <p className="withdraw-hint">
                    ≈ ${amount ? (amount * 0.0005).toFixed(2) : "0.00"} USD
                  </p>

                  <label className="withdraw-label">
                    {selectedMethod.name} Phone Number
                  </label>
                  <input
                    className="withdraw-input"
                    type="tel"
                    placeholder="e.g. 01XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button
                  className="withdraw-confirm-btn"
                  onClick={handleConfirm}
                >
                  Confirm Withdrawal
                </button>
              </>
            )}

            {/* ── Loading Step ── */}
            {step === "loading" && (
              <div className="withdraw-success">
                <div className="spinner" />
                <p>Connecting to Gateway...</p>
              </div>
            )}

            {/* ── Error Step ── */}
            {step === "error" && (
              <div className="withdraw-success">
                <div style={{ fontSize: "2.5rem" }}>❌</div>
                <h3 style={{ fontFamily: "Orbitron", color: "#ff4d6d" }}>
                  Connection Failed
                </h3>
                <p style={{ color: "#a0c4aa", fontSize: "0.85rem" }}>
                  Please try again.
                </p>
                <button
                  className="withdraw-confirm-btn"
                  onClick={() => setStep("form")}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
