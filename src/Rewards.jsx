import EcoMap from "./Ecomap";
import {
  BottleIcon,
  ChipIcon,
  LocationIcon,
  TruckIcon,
  CoinsIcon,
  LeafIcon,
  WalletIcon,
  ChartIcon,
  LeafCoinIcon,
} from "./Icons";

const CircularProgress = ({ percent }) => {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  return (
    <svg width="140" height="140" viewBox="0 0 140 140">
      <defs>
        <filter id="circGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Track */}
      <circle
        cx="70"
        cy="70"
        r={r}
        stroke="#1a3a2a"
        strokeWidth="10"
        fill="none"
      />
      {/* Progress */}
      <circle
        cx="70"
        cy="70"
        r={r}
        stroke="#00ff88"
        strokeWidth="10"
        fill="none"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 70 70)"
        filter="url(#circGlow)"
      />
      {/* Percentage text */}
      <text
        x="70"
        y="65"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="22"
        fontWeight="700"
        fontFamily="Orbitron"
      >
        {percent}%
      </text>
      <text
        x="70"
        y="84"
        textAnchor="middle"
        fill="#6b8f71"
        fontSize="11"
        fontFamily="Space Grotesk"
      >
        completed
      </text>
    </svg>
  );
};

const MiniLineChart = () => (
  <svg width="100%" height="80" viewBox="0 0 260 80" preserveAspectRatio="none">
    <defs>
      <filter id="lineGlow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00ff88" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Grid lines */}
    {[20, 40, 60].map((y) => (
      <line
        key={y}
        x1="0"
        y1={y}
        x2="260"
        y2={y}
        stroke="#1a3a2a"
        strokeWidth="1"
      />
    ))}
    {/* Area fill */}
    <path
      d="M0 70 L40 55 L80 60 L120 40 L160 45 L200 25 L240 15 L260 10 L260 80 L0 80 Z"
      fill="url(#lineGrad)"
    />
    {/* Line */}
    <polyline
      points="0,70 40,55 80,60 120,40 160,45 200,25 240,15 260,10"
      stroke="#00ff88"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#lineGlow)"
    />
    {/* Dots */}
    {[
      [40, 55],
      [120, 40],
      [200, 25],
      [260, 10],
    ].map(([x, y], i) => (
      <circle
        key={i}
        cx={x}
        cy={y}
        r="3"
        fill="#00ff88"
        filter="url(#lineGlow)"
      />
    ))}
  </svg>
);

const Rewards = ({ setActivePage }) => {
  return (
    <div className="rewards-page">
      {/* Header */}
      <div className="rewards-header">
        <div>
          <h1 className="rewards-title">ECO-EARN AI</h1>
          <p className="rewards-subtitle">
            Recycle. Earn. Thrive. Your Waste, Your Wealth.
          </p>
        </div>
      </div>
      {/* Step Cards */}
      <div className="step-cards">
        <div className="step-card step-blue">
          <div className="step-icons">
            <BottleIcon />
            <ChipIcon />
          </div>
          <p className="step-label blue">List Items</p>
          <p className="step-sub">Plastic & E-Waste</p>
          <div className="step-line blue-line" />
        </div>

        <div
          className="step-card step-green"
          onClick={() => setActivePage("map")}
          style={{ cursor: "pointer" }}
        >
          <div className="step-icons">
            <LocationIcon />
            <TruckIcon />
          </div>
          <p className="step-label green">Drop-off or Pickup</p>
          <p className="step-sub">&nbsp;</p>
          <div className="step-line green-line" />
        </div>

        <div className="step-card step-purple">
          <div className="step-icons">
            <CoinsIcon />
            <LeafIcon />
          </div>
          <p className="step-label purple">Get Eco-Points</p>
          <p className="step-sub">Cash & Rewards</p>
          <div className="step-line purple-line" />
        </div>
      </div>

      {/* Dashboard Panel */}
      <div className="eco-dashboard">
        <h2 className="dash-heading">Your Eco-Dashboard</h2>

        <div className="dash-top">
          {/* Left — circular + points */}
          <div className="dash-left">
            <CircularProgress percent={75} />
            <div className="dash-points">
              <h3 className="points-num">Eco-Points: 1,250</h3>
              <p className="points-cash">Cash Value: $12.50</p>
              <p className="points-impact">
                <span className="impact-label">Environmental Impact:</span> 50kg
                CO₂ Saved
              </p>
            </div>
          </div>

          {/* Right — world map placeholder */}
          <div className="world-map">
            <EcoMap />
          </div>
        </div>

        {/* Bottom row */}
        <div className="dash-bottom">
          {/* Earnings chart */}
          <div className="earnings-panel">
            <div className="panel-head">
              <ChartIcon />
              <span>Earnings History</span>
            </div>
            <MiniLineChart />
            <div className="chart-x-labels">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          {/* Digital Wallet */}
          <div
            className="wallet-panel"
            onClick={() => setActivePage("wallet")}
            style={{ cursor: "pointer" }}
          >
            <div className="panel-head">
              <WalletIcon />
              <span>Digital Wallet</span>
            </div>
            <div className="wallet-card-visual">
              <span className="wallet-card-label">ECO-WALLET</span>
              <div className="wallet-card-lines">
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="wallet-actions">
              <button className="wallet-btn-outline">Withdraw Cash</button>
              <button className="wallet-btn-green">Redeem Services</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="rewards-footer"></div>
    </div>
  );
};

export default Rewards;
