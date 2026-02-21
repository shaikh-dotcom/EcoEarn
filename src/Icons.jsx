// Icons.jsx
export const TrackEarningsIcon = ({ width = "32", height = "32" }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="rgba(0,255,136,0.1)" />
    <rect
      x="7"
      y="18"
      width="4"
      height="8"
      rx="1.5"
      fill="#57f7df"
      opacity="0.6"
    />
    <rect
      x="14"
      y="13"
      width="4"
      height="13"
      rx="1.5"
      fill="#57f7df"
      opacity="0.8"
    />
    <rect x="21" y="8" width="4" height="18" rx="1.5" fill="#57f7df" />
  </svg>
);

export const FindBinsIcon = ({ width = "32", height = "32" }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="rgba(255,100,150,0.1)" />
    <rect
      x="10"
      y="13"
      width="12"
      height="12"
      rx="1.5"
      stroke="#f78fb3"
      strokeWidth="1.8"
    />
    <path
      d="M13 13V11a3 3 0 0 1 6 0v2"
      stroke="#f78fb3"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <line
      x1="16"
      y1="16"
      x2="16"
      y2="20"
      stroke="#f78fb3"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const RewardsShopIcon = ({ width = "32", height = "32" }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="rgba(255,200,0,0.1)" />
    <rect
      x="8"
      y="15"
      width="16"
      height="10"
      rx="1.5"
      stroke="#ffd700"
      strokeWidth="1.8"
    />
    <path
      d="M8 15h16v-2a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2z"
      stroke="#ffd700"
      strokeWidth="1.8"
    />
    <path
      d="M16 11c0 0-2-3 0-4s2 4 0 4z"
      stroke="#ffd700"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 11c0 0 2-3 0-4"
      stroke="#ffd700"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line x1="16" y1="13" x2="16" y2="25" stroke="#ffd700" strokeWidth="1.8" />
  </svg>
);

export const FindBinsSearchIcon = ({ width = "32", height = "32" }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="rgba(94,234,212,0.1)" />
    <circle cx="15" cy="15" r="5.5" stroke="#57f7df" strokeWidth="1.8" />
    <line
      x1="19"
      y1="19"
      x2="23"
      y2="23"
      stroke="#57f7df"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const PlasticBottlesIcon = ({ width = "90", height = "90" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="blueGlow">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="pinkGlow">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="purpleGlow">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#blueGlow)">
      <rect
        x="6"
        y="30"
        width="20"
        height="36"
        rx="3"
        stroke="#4db8ff"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="9"
        y="24"
        width="14"
        height="8"
        rx="2"
        stroke="#4db8ff"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="12"
        y="19"
        width="8"
        height="6"
        rx="1.5"
        stroke="#4db8ff"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M26 34 Q36 34 36 42 Q36 50 26 50"
        stroke="#4db8ff"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="34"
        x2="10"
        y2="48"
        stroke="#4db8ff"
        strokeWidth="1"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
    </g>
    <g filter="url(#purpleGlow)">
      <rect
        x="36"
        y="18"
        width="13"
        height="50"
        rx="4"
        stroke="#a78bfa"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="38"
        y="12"
        width="9"
        height="8"
        rx="2"
        stroke="#a78bfa"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="40"
        y="8"
        width="5"
        height="5"
        rx="1.5"
        stroke="#a78bfa"
        strokeWidth="1.5"
        fill="none"
      />
      <line
        x1="39"
        y1="22"
        x2="39"
        y2="44"
        stroke="#a78bfa"
        strokeWidth="1"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
    </g>
    <g filter="url(#pinkGlow)">
      <rect
        x="55"
        y="36"
        width="16"
        height="30"
        rx="3"
        stroke="#f472b6"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="57"
        y="29"
        width="12"
        height="9"
        rx="2"
        stroke="#f472b6"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="60"
        y="24"
        width="6"
        height="6"
        rx="1.5"
        stroke="#f472b6"
        strokeWidth="1.5"
        fill="none"
      />
      <line
        x1="58"
        y1="40"
        x2="58"
        y2="54"
        stroke="#f472b6"
        strokeWidth="1"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const LaptopRecycleIcon = ({ width = "80", height = "80" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="10"
      y="12"
      width="60"
      height="42"
      rx="4"
      fill="#1a1a2e"
      stroke="#00ff88"
      strokeWidth="1.5"
    />
    <rect x="14" y="16" width="52" height="34" rx="2" fill="#0d1117" />
    <line
      x1="14"
      y1="24"
      x2="26"
      y2="24"
      stroke="#00ff88"
      strokeWidth="0.5"
      strokeOpacity="0.4"
    />
    <line
      x1="26"
      y1="24"
      x2="26"
      y2="20"
      stroke="#00ff88"
      strokeWidth="0.5"
      strokeOpacity="0.4"
    />
    <line
      x1="54"
      y1="40"
      x2="66"
      y2="40"
      stroke="#00ff88"
      strokeWidth="0.5"
      strokeOpacity="0.4"
    />
    <line
      x1="54"
      y1="40"
      x2="54"
      y2="44"
      stroke="#00ff88"
      strokeWidth="0.5"
      strokeOpacity="0.4"
    />
    <line
      x1="14"
      y1="38"
      x2="20"
      y2="38"
      stroke="#a78bfa"
      strokeWidth="0.5"
      strokeOpacity="0.4"
    />
    <line
      x1="20"
      y1="38"
      x2="20"
      y2="44"
      stroke="#a78bfa"
      strokeWidth="0.5"
      strokeOpacity="0.4"
    />
    <g transform="translate(40, 33)">
      <path
        d="M0 -12 L4 -6 L2 -6 L2 -2 L-2 -2 L-2 -6 L-4 -6 Z"
        fill="#00ff88"
        fillOpacity="0.9"
      />
      <path
        d="M10.4 6 L5.6 6 L7.1 3.6 L3.6 -2 L7.2 -4 L11.4 3 Z"
        fill="#00ff88"
        fillOpacity="0.9"
      />
      <path
        d="M-10.4 6 L-11.4 3 L-7.2 -4 L-3.6 -2 L-7.1 3.6 L-5.6 6 Z"
        fill="#00ff88"
        fillOpacity="0.9"
      />
      <circle
        cx="0"
        cy="0"
        r="3"
        fill="#00ff88"
        fillOpacity="0.3"
        stroke="#00ff88"
        strokeWidth="1"
      />
      <circle cx="0" cy="0" r="14" fill="#00ff88" fillOpacity="0.05" />
    </g>
    <path
      d="M6 54 L10 54 L10 58 L70 58 L70 54 L74 54 L74 60 Q74 64 70 64 L10 64 Q6 64 6 60 Z"
      fill="#1a1a2e"
      stroke="#00ff88"
      strokeWidth="1.5"
    />
    <rect
      x="22"
      y="56"
      width="36"
      height="2"
      rx="1"
      fill="#00ff88"
      fillOpacity="0.2"
    />
    <rect
      x="32"
      y="59"
      width="16"
      height="3"
      rx="1.5"
      fill="#00ff88"
      fillOpacity="0.15"
      stroke="#00ff88"
      strokeWidth="0.5"
      strokeOpacity="0.3"
    />
    <rect
      x="14"
      y="16"
      width="52"
      height="34"
      rx="2"
      fill="none"
      stroke="#00ff88"
      strokeWidth="0.5"
      strokeOpacity="0.5"
    />
  </svg>
);

export const createUserIcon = () =>
  L.divIcon({
    className: "",
    html: `<div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#57f7df,#aef58f);border:3px solid #fff;box-shadow:0 0 20px rgba(87,247,223,0.8);display:flex;align-items:center;justify-content:center;font-size:18px;">👤</div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });

export const BottleIcon = ({ width = "60", height = "60" }) => (
  <svg width={width} height={height} viewBox="0 0 36 36" fill="none">
    <defs>
      <filter id="blueGlow2">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#blueGlow2)">
      <rect
        x="12"
        y="10"
        width="12"
        height="22"
        rx="3"
        stroke="#4db8ff"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="14"
        y="6"
        width="8"
        height="5"
        rx="1.5"
        stroke="#4db8ff"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="15"
        y="3"
        width="6"
        height="4"
        rx="1"
        stroke="#4db8ff"
        strokeWidth="1.5"
        fill="none"
      />
      <line
        x1="14"
        y1="15"
        x2="14"
        y2="26"
        stroke="#4db8ff"
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const ChipIcon = ({ width = "60", height = "60" }) => (
  <svg width={width} height={height} viewBox="0 0 36 36" fill="none">
    <defs>
      <filter id="blueGlow3">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#blueGlow3)">
      <rect
        x="10"
        y="10"
        width="16"
        height="16"
        rx="2"
        stroke="#4db8ff"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="13"
        y="13"
        width="10"
        height="10"
        rx="1"
        stroke="#4db8ff"
        strokeWidth="1"
        strokeOpacity="0.5"
        fill="none"
      />
      <line
        x1="14"
        y1="10"
        x2="14"
        y2="7"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="18"
        y1="10"
        x2="18"
        y2="7"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="10"
        x2="22"
        y2="7"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="14"
        y1="26"
        x2="14"
        y2="29"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="18"
        y1="26"
        x2="18"
        y2="29"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="26"
        x2="22"
        y2="29"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="14"
        x2="7"
        y2="14"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="18"
        x2="7"
        y2="18"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="22"
        x2="7"
        y2="22"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="14"
        x2="29"
        y2="14"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="18"
        x2="29"
        y2="18"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="22"
        x2="29"
        y2="22"
        stroke="#4db8ff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const LocationIcon = ({ width = "60", height = "60" }) => (
  <svg width={width} height={height} viewBox="0 0 36 36" fill="none">
    <defs>
      <filter id="greenGlow2">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#greenGlow2)">
      <path
        d="M18 4C13.6 4 10 7.6 10 12C10 18 18 28 18 28C18 28 26 18 26 12C26 7.6 22.4 4 18 4Z"
        stroke="#00ff88"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <circle
        cx="18"
        cy="12"
        r="3"
        stroke="#00ff88"
        strokeWidth="1.5"
        fill="none"
      />
    </g>
  </svg>
);

export const TruckIcon = ({ width = "60", height = "60" }) => (
  <svg width={width} height={height} viewBox="0 0 36 36" fill="none">
    <defs>
      <filter id="greenGlow3">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#greenGlow3)">
      <rect
        x="3"
        y="12"
        width="20"
        height="14"
        rx="2"
        stroke="#00ff88"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M23 16L29 16L33 20V26H23V16Z"
        stroke="#00ff88"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <circle
        cx="9"
        cy="27"
        r="3"
        stroke="#00ff88"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="27"
        cy="27"
        r="3"
        stroke="#00ff88"
        strokeWidth="1.5"
        fill="none"
      />
      <line
        x1="3"
        y1="18"
        x2="23"
        y2="18"
        stroke="#00ff88"
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
    </g>
  </svg>
);

export const CoinsIcon = ({ width = "60", height = "60" }) => (
  <svg width={width} height={height} viewBox="0 0 36 36" fill="none">
    <defs>
      <filter id="purpleGlow2">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#purpleGlow2)">
      <ellipse
        cx="18"
        cy="10"
        rx="10"
        ry="3.5"
        stroke="#c084fc"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M8 10V16C8 17.9 12.5 19.5 18 19.5S28 17.9 28 16V10"
        stroke="#c084fc"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M8 16V22C8 23.9 12.5 25.5 18 25.5S28 23.9 28 22V16"
        stroke="#c084fc"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M14 26V29"
        stroke="#c084fc"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 26V29"
        stroke="#c084fc"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const LeafIcon = ({ width = "60", height = "60" }) => (
  <svg width={width} height={height} viewBox="0 0 36 36" fill="none">
    <defs>
      <filter id="purpleGlow3">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#purpleGlow3)">
      <path
        d="M18 6C18 6 8 10 8 20C8 26 13 30 18 30C18 30 18 20 28 14C28 14 24 6 18 6Z"
        stroke="#c084fc"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M18 30C18 30 16 22 22 16"
        stroke="#c084fc"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const WalletIcon = ({ width = "28", height = "28" }) => (
  <svg width={width} height={height} viewBox="0 0 28 28" fill="none">
    <rect
      x="2"
      y="7"
      width="24"
      height="17"
      rx="3"
      stroke="#07f3ff"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M2 12H26" stroke="#07f3ff" strokeWidth="1.5" />
    <rect
      x="18"
      y="15"
      width="6"
      height="4"
      rx="1"
      stroke="#07f3ff"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M6 7V5C6 3.9 6.9 3 8 3H20C21.1 3 22 3.9 22 5V7"
      stroke="#07f3ff"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

export const ChartIcon = ({ width = "28", height = "28" }) => (
  <svg width={width} height={height} viewBox="0 0 28 28" fill="none">
    <polyline
      points="3,22 9,14 14,17 20,8 25,11"
      stroke="#00ff88"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="3"
      y1="22"
      x2="25"
      y2="22"
      stroke="#00ff88"
      strokeWidth="1"
      strokeOpacity="0.4"
    />
    <line
      x1="3"
      y1="4"
      x2="3"
      y2="22"
      stroke="#00ff88"
      strokeWidth="1"
      strokeOpacity="0.4"
    />
  </svg>
);

export const LeafCoinIcon = ({ width = "86", height = "86" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 114.86"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
  >
    <title>leaves</title>
    <path
      fill="#01a437"
      d="M59.07 110.77C110.92 105 139.6 71.12 112.44 0c-21.29 14.9-50.39 24.6-65 44.55C57 52.94 64.89 62.23 67.08 74.37c13.19-16.08 27.63-30.72 35.23-47-7.79 39.07-20 53.84-38.78 73.81a93.64 93.64 0 0 1-4.46 9.62Zm-14.9 4C4 105-15.18 76.09 14.27 24.75c23.8 22.92 65.79 37.48 38.39 85.86a27.08 27.08 0 0 1-1.83 2.93c-4.93-23.92-24.62-42.85-30.4-62.93 1.34 32.81 10.8 42.39 25.45 64.25-.57 0-1.14-.06-1.71-.13Z"
    />
  </svg>
);

export const WalletNavIcon = ({ width = "18", height = "18" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="3" />
    <path d="M16 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    <path d="M2 10h20" />
    <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
  </svg>
);

export const EarnNavIcon = ({ width = "18", height = "18" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2a7 7 0 1 0 0 14A7 7 0 0 0 12 2z" />
    <path d="M12 6v6l4 2" />
    <path d="M5 19l-2 2M19 19l2 2M12 16v3" />
  </svg>
);

export const ImpactNavIcon = ({ width = "18", height = "18" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h4M18 12h4M12 2v4M12 18v4" />
    <path d="M12 12 Q16 8 20 10" />
    <path d="M12 12 Q8 16 6 14" />
  </svg>
);

export const ProfileNavIcon = ({ width = "18", height = "18" }) => (
  <svg
    width={width}
    height={height}
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

export const SettingsNavIcon = ({ width = "18", height = "18" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const BkashIcon = ({ width = "86", height = "86" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox="-18.0015 -28.3525 156.013 170.115"
  >
    <g fill="none">
      <path fill="#D12053" d="M96.58 62.45l-53.03-8.31 7.03 31.6z" />
      <path fill="#E2136E" d="M96.58 62.45L56.62 6.93 43.56 54.15z" />
      <path fill="#D12053" d="M42.32 53.51L.45 0l54.83 6.55z" />
      <path fill="#9E1638" d="M23.25 31.15L0 9.24h6.12z" />
      <path fill="#D12053" d="M107.89 35.46l-9.84 26.69L82.1 40.09z" />
      <path fill="#E2136E" d="M56.77 84.14l38.61-15.51L97 63.7z" />
      <path fill="#9E1638" d="M25.89 113.41l16.54-58.02 8.39 37.75z" />
      <path fill="#E2136E" d="M109.43 35.67l-4.06 11.02 14.64-.24z" />
    </g>
  </svg>
);

export const NagadIcon = ({ width = "80", height = "80" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="80"
    width="80"
    preserveAspectRatio="xMidYMid meet"
    y="0"
    x="0"
    id="Layer_1"
    version="1.1"
    viewBox="-13.305 -31.2 115.31 187.2"
  >
    <style type="text/css">{`
        .st0 { fill: #ec1c24; }
        .st1 { fill: #231f20; }
        .st3 { fill: #ea2227; }
        .st4 { fill: #f69220; }
      `}</style>

    <path
      id="path20"
      d="M29.9 79.2H.9c-.5 0-.9.4-.9.9v2.2c0 .5.4.9.9.9h21.5v11.9c-.6-.9-1.3-1.7-2.1-2.5-2.5-2.6-5.3-3.9-8.1-3.9-2.2 0-4.2 1.1-5.7 3.2-1.2 1.7-2 3.7-2 5.5 0 1.9.3 4.3 1.7 6.5 1.8 2.7 4.6 3.5 7.1 3.5 3.3 0 6.1-2.3 6.1-5.2 0-1.7-.9-3.2-2.5-4.1l-1.6-.9v2.4c-.1.6-1.3 1.7-2.6 1.7-1.1 0-2.2-.5-2.8-1.1-.5-.5-.6-1.3-.6-1.9 0-.8.3-1.6.9-2.4.7-.8 1.4-1.2 2.5-1.2 2.9-.1 5.3 1.3 7.3 4.2 1.6 2.4 2.4 4.7 2.4 7.2l.1 6 4.3 2.6c.1.1.3.1.5.1.5 0 .9-.4.9-.9V83.3h1.7c.5 0 .9-.4.9-.9v-2.2c0-.6-.4-1-.9-1"
      className="st0"
    />
    <path
      id="path22"
      d="M87.7 79.2H51c-.5 0-.9.4-.9.9v4.1c-3.5-3.7-6.7-5.6-9.6-5.6-2.7-.1-5.1.6-6.9 2.1-1.9 1.5-3 3.3-3 5.4 0 6.4 7.2 6.4 9 5.4.3-.2.7-.4 1.2-.4 1.5 0 2 1.1 2 2.1 0 1.5-2.1 2.8-4.7 2.8-1.4 0-2.3-.4-2.9-1.2l-1.1-1.7-.8 1.9c-.2.5-.4 1-.4 1.7 0 1.5.8 2.9 2.1 4.1 1.3 1.1 2.9 1.7 4.6 1.7 2.7 0 5-1 6.5-3 1.2-1.6 1.8-3.5 1.8-5.6 0-1.2-.4-2.4-1.4-3.8-1.2-1.7-2.6-2.5-4.2-2.5-.6 0-1.3.2-2 .4-.3.1-.8.2-.9.2-.2 0-.7-.1-1-.5-.2-.2-.6-.7-.6-1.4.1-1.6 1.5-3.2 4-3.2h.1c1.7 0 3.4.8 5.1 2.4 1.3 1.2 2.3 2.5 3.1 3.9v22.8l4.3 2.5c.1.1.3.1.5.1.5 0 .9-.4.9-.9V83.3h6.5v19.8l5.2 2.1c.1 0 .2.1.3.1.5 0 .9-.4.9-.8v-.2c.9-5.8 3.4-9.9 7.7-12.3v1.1c0 .8.1 3 .1 4.2 0 .7.1 1.2.1 1.6 0 2.2.3 5.8 1.1 8.3 1.4 4.9 3.8 6 5.6 6.1h.1c1 0 1.8-.3 2.4-.8.3-.3.7-.9.7-1.9 0-.9-.1-1.6-.4-2.1l-.4-.7-.8.2c-.9.2-1.2.2-1.3.2h-.2c-.2 0-.3 0-.4-.1-.3-.1-.8-.6-1.2-2.2-.3-1.2-.4-2.7-.4-3.6 0-6.4 1.3-11.2 3.4-12.3l.1-.1c.3-.2.5-.5.5-.8 0-.2 0-.3-.1-.4v-.3c-1-2-3.1-3.4-6-4.2l-.2-.1h-.2c-2.3.4-5 2-8.4 4.8-.9.7-1.7 1.5-2.5 2.2v-7.9h19.7c.5 0 .9-.4.9-.9v-2.2c0-.5-.4-.9-.9-.9"
      className="st0"
    />

    {/* Small text/label paths */}
    <path
      id="path24"
      d="M2.9 120.3v1.8l1.5-.6.5.4v.5c0 .6-.2 1.1-.5 1.5-.3.4-.8.6-1.4.6-.6 0-1.2-.3-1.7-.8-.4-.4-.7-1-1-1.7l.4-.3c.5 1.5 1.3 2.2 2.3 2.2.4 0 .7-.1.9-.4.3-.3.4-.6.4-1 0-.2 0-.3-.1-.5l-1.4.6-.5-.4v-1.9H0v-.4h5.3v.5H2.9z"
      className="st1"
    />
    <path
      transform="translate(-5.7 -1.1)"
      id="polygon26"
      className="st1"
      d="M11.5 125.6v-4.2h-.7v-.4h1.9v.4H12v4.2z"
    />
    <path
      id="path28"
      d="M9.9 120.3v.3c.4 0 .8.1 1.2.4.4.3.6.6.6 1 0 .3-.1.6-.4.8-.2.2-.5.3-.9.3h-.1v-.5h.3c.4 0 .6-.2.6-.6 0-.5-.4-.7-1.3-.8v3.3h-.5c-.2-.5-.5-.9-.9-1.2-.4-.4-.9-.6-1.3-.6l-.2-.6c.3-.2 1.1-.7 2.4-1.4v-.3H6.9v-.5h5.3v.5H9.9zm-.6.9c-.2.1-.5.2-.8.5l-.7.6c.3.1.5.4.8.6.1.1.4.4.7.8z"
      className="st1"
    />
    <path
      id="path30"
      d="M19.2 119.1c-.9-.6-1.7-.9-2.3-.9-.6 0-1 .1-1.3.4-.4.3-.5.7-.5 1.3h.6v.5h-.6v4.1h-.5v-4.1H14v-.5h.6c0-.7.2-1.2.7-1.6.4-.4 1-.5 1.7-.5.4 0 .9.1 1.3.3.3.1.7.4 1.2.7z"
      className="st1"
    />
    <path
      id="path32"
      d="M19.6 120.3v4.1h-.5c-.3-.4-.7-.8-1.4-1.2-.7-.4-1.3-.6-1.8-.6l-.2-.6c.3-.2.8-.5 1.6-.8.2-.1.8-.3 1.8-.7v-.2h-3.8v-.4h4.8v.5h-.5zm-.5.9c-.5.2-1.4.5-2.5 1.1 1 .3 1.8.8 2.5 1.4z"
      className="st1"
    />
    <path
      id="path34"
      d="M20 119.9h5.2v.5H20zm2.9 4.5c-.6 0-1.1-.3-1.6-.8-.4-.5-.7-1-.9-1.6l.3-.3c.2.6.5 1.1.8 1.5.4.5.9.8 1.4.8.4 0 .7-.1 1-.4.2-.3.3-.6.3-1-.4.3-.7.4-1.1.4-.3 0-.6-.1-.9-.3-.3-.2-.4-.5-.4-.9 0-.3.1-.6.3-.8.2-.2.5-.3.8-.3.2 0 .5.1.6.2.2.1.2.3.2.5s-.1.4-.3.5l-.4-.3c.1-.1.2-.2.2-.3 0-.2-.1-.3-.3-.3-.2 0-.3.1-.4.2-.1.1-.2.3-.2.4 0 .2.1.4.2.5.2.1.3.2.6.2.4 0 .8-.2 1.1-.5l.5.5c0 .6-.2 1.1-.5 1.5-.3.4-.7.6-1.3.6"
      className="st1"
    />
    <path
      transform="translate(-5.7 -1.1)"
      id="polygon36"
      className="st1"
      d="M31.4 125.6v-4.2h-.7v-.4h1.8v.4h-.6v4.2z"
    />
    <path
      id="path38"
      d="M28.9 124.8c-.6 0-1-.1-1.2-.3-.4-.5-.7-1.1-.7-1.7 0-.4.1-.8.4-1.3.2-.3.5-.6.9-1.1h-1.6v-.5h2.6v.5c-.4.2-.8.5-1.2.9-.4.5-.5.9-.5 1.4 0 1.1.5 1.7 1.4 1.7.1 0 .3-.1.4-.2v.5c-.2 0-.3.1-.5.1"
      className="st1"
    />
    <path
      id="path40"
      d="M32.4 120.3v4.1h-.5v-2.7c0-.1-.1-.2-.2-.5-.3-.5-.8-.8-1.3-.8-.2 0-.4.1-.6.3l-.3.3c.2-.1.4-.1.6-.1.3 0 .5.1.7.2.2.1.3.3.3.6s-.1.6-.4.9c-.2.3-.5.5-.8.6l-.3-.4c.2-.1.4-.2.6-.4.2-.2.4-.4.4-.6 0-.1-.1-.2-.4-.3-.2-.1-.4-.1-.6-.1h-.2l-.3-.5.6-.6c.2-.2.5-.3.8-.3.6 0 1.1.3 1.5.9v-1h1.1v.5h-.7z"
      className="st1"
    />
    <path
      id="path42"
      d="M37 120.3v4.1h-.5c-.3-.4-.7-.8-1.4-1.2-.7-.4-1.3-.6-1.8-.6l-.2-.6c.8-.5 1.9-1 3.3-1.5v-.2h-3.6v-.4h4.7v.5H37zm-.6.9c-.9.3-1.7.7-2.4 1.1.9.3 1.7.8 2.4 1.4zm-1.4 3.4c-.2-.2-.4-.3-.8-.5l.2-.4c.3.1.6.3.9.6z"
      className="st1"
    />
    <path
      id="path44"
      d="M44.6 119.1c-.9-.6-1.7-.9-2.3-.9-.6 0-1 .1-1.3.4-.4.3-.5.7-.5 1.3h.6v.5h-.6v4.1H40v-4.1h-.7v-.5h.6c0-.7.2-1.2.7-1.6.4-.4 1-.5 1.7-.5.4 0 .9.1 1.3.3.3.1.7.4 1.2.7z"
      className="st1"
    />
    <path
      id="path46"
      d="M43.7 120.3v1.8l1.5-.6.5.4v.5c0 .6-.2 1.1-.5 1.5-.3.4-.8.6-1.4.6-.6 0-1.2-.3-1.7-.8-.4-.4-.7-1-1-1.7l.4-.3c.5 1.5 1.3 2.2 2.3 2.2.4 0 .7-.1.9-.4.3-.3.4-.6.4-1 0-.2 0-.3-.1-.5l-1.4.6-.5-.4v-1.9h-2.4v-.4H46v.5h-2.3z"
      className="st1"
    />
    <path
      id="path48"
      d="M51.1 119.1c-.9-.6-1.7-.9-2.3-.9-.6 0-1 .1-1.3.4-.4.3-.5.7-.5 1.3h.6v.5H47v4.1h-.5v-4.1h-.6v-.5h.6c0-.7.2-1.2.7-1.6.4-.4 1-.5 1.7-.5.4 0 .9.1 1.3.3.3.1.7.4 1.2.7z"
      className="st1"
    />
    <path
      id="path50"
      d="M50.8 120.3c.2.5.6.8 1.2.8h.2l.4.5c-.3.6-.5 1.1-.5 1.4 0 .7.1 1.2.3 1.4l-.4.2c-.3-.4-.4-.8-.4-1.3 0-.3 0-.6.1-.8 0-.1.1-.4.2-.9-.4 0-.8-.2-1.1-.4-.4-.3-.6-.6-.7-.9-.6.4-.9.9-.9 1.3 0 .3.1.5.4.5.1 0 .3 0 .4-.1.1-.1.3-.2.3-.3h.5c.1.2.2.5.2.9 0 1-.5 1.6-1.6 1.6-.2 0-.4-.1-.6-.2-.1 0-.3-.2-.6-.3-.2-.3-.4-.7-.7-1.3l.3-.3c.1.4.4.8.8 1.3l.4.2c.1.1.3.1.4.1.3 0 .6-.1.8-.2.2-.2.3-.4.3-.7 0-.2 0-.3-.1-.4-.3.3-.5.4-.8.4-.3 0-.5-.1-.6-.3-.2-.2-.2-.4-.2-.7 0-.4.2-.8.6-1.3h-2.1v-.6H53v.5h-2.2z"
      className="st1"
    />
    <path
      id="path52"
      d="M53.8 120.3v3.6h.3c.4 0 .9-.1 1.4-.4.5-.3.8-.6.8-1.1 0-.5-.2-.7-.7-.7-.1 0-.4.1-.7.3l-.2-.5c.3-.2.7-.3 1.1-.3.3 0 .6.1.8.4.2.2.2.5.2.8 0 .5-.2.9-.7 1.2-.4.3-.8.5-1.3.6-.3.1-.9.1-1.6.1v-4.1h-.4v-.3H56v-.1c0-.3-.1-.6-.4-.8-.2-.2-.5-.3-.8-.3-.4 0-.9.2-1.6.5l-.2-.4c.6-.4 1.2-.6 1.8-.6.5 0 .9.2 1.2.5.3.3.5.7.5 1.1h.8v.5z"
      className="st1"
    />
    <path
      transform="translate(-5.7 -1.1)"
      id="polygon54"
      className="st1"
      d="M63.5 125.6v-4.2h-.7v-.4h1.8v.4H64v4.2z"
    />
    <path
      id="path56"
      d="M63.7 120.3v4.1h-.5v-.8c0-1-.2-1.5-.7-1.5-.2 0-.3.1-.5.3-.1.2-.2.3-.2.5h-.6c0-.2-.1-.4-.2-.6-.1-.2-.3-.3-.5-.3s-.4.1-.5.3c-.1.2-.2.4-.2.6 0 .5.3.8.9.8h.2l-.2.5h-.2c-.4 0-.7-.1-1-.4-.2-.3-.4-.6-.4-1s.1-.7.4-1c.2-.3.6-.4 1-.4s.7.2 1 .7c.3-.5.6-.7 1-.7.3 0 .5.2.7.7v-1.9h-4.4v-.3h5.5v.5h-.6z"
      className="st1"
    />
    <path
      id="path58"
      d="M66.9 122.6c0 .3.1.6.2.9.2.3.4.5.7.5.1 0 .3 0 .4-.1l.2.5c-.2.1-.4.1-.5.1-.9 0-1.3-.7-1.3-2.1 0-.8.5-1.6 1.5-2.5h.8v.5c-.5.1-.9.3-1.3.8-.5.4-.7.9-.7 1.4"
      className="st1"
    />
    <path
      id="path60"
      d="M73.3 120.3v4.1h-.5v-.8c0-1-.2-1.5-.7-1.5-.2 0-.3.1-.5.3-.1.2-.2.3-.2.5h-.6c0-.2-.1-.4-.2-.6-.1-.2-.3-.3-.5-.3s-.4.1-.5.3c-.1.2-.2.4-.2.6 0 .5.3.8.9.8h.2l-.2.5h-.2c-.4 0-.7-.1-1-.4-.2-.3-.4-.6-.4-1s.1-.7.4-1c.2-.3.6-.4 1-.4s.7.2 1 .7c.3-.5.6-.7 1-.7.3 0 .5.2.7.7v-1.9h-4.4v-.3h5.5v.5h-.6z"
      className="st1"
    />
    <path
      id="path62"
      d="M77.9 120.3v4.1h-.5v-.3c0-.4-.2-.8-.7-1.3-.5-.4-.9-.7-1.3-.7-.2 0-.4.1-.5.2-.1.1-.2.3-.2.5s.1.4.2.5c.1.1.3.2.5.2.1 0 .2 0 .4-.1l.2.5c-.2.1-.4.1-.7.1-.3 0-.6-.1-.8-.4-.2-.2-.3-.5-.3-.8 0-.3.1-.6.3-.9.2-.2.5-.4.9-.4.8 0 1.5.5 2.1 1.4v-2.7h-3.7v-.3h4.7v.5h-.6z"
      className="st1"
    />
    <path
      id="path64"
      d="M80.4 124.8c-.6 0-1-.1-1.2-.3-.4-.5-.7-1.1-.7-1.7 0-.4.1-.8.4-1.3.2-.3.5-.6.9-1.1h-1.6v-.5h2.6v.5c-.4.2-.8.5-1.2.9-.4.5-.5.9-.5 1.4 0 1.1.5 1.7 1.4 1.7.1 0 .3-.1.4-.2v.5c-.2 0-.3.1-.5.1"
      className="st1"
    />
    <path
      id="path66"
      d="M81 120.3v1.8c.8-.5 1.5-.9 2.1-1.1l.5.7c-.3.7-.4 1.2-.4 1.5 0 .3.1.7.2 1.2l-.4.2c-.2-.5-.3-.9-.3-1.1 0-.6.1-1.1.2-1.7-.6.2-1.3.7-2.1 1.4l-.4-.4v-2.4H80v-.5h4v.5h-3z"
      className="st1"
    />
    <path
      id="path68"
      d="M88.1 120.3v4.1h-.5v-.3c0-.4-.2-.8-.7-1.3-.5-.4-.9-.7-1.3-.7-.2 0-.4.1-.5.2-.1.1-.2.3-.2.5s.1.4.2.5c.1.1.3.2.5.2.1 0 .2 0 .4-.1l.2.5c-.2.1-.4.1-.7.1-.3 0-.6-.1-.8-.4-.2-.2-.3-.5-.3-.8 0-.3.1-.6.3-.9.2-.2.5-.4.9-.4.8 0 1.5.5 2.1 1.4v-2.7H84v-.3h4.7v.5h-.6z"
      className="st1"
    />
    <rect id="rect70" fill="none" d="M0 0h88.6v124.7H0z" />

    <g transform="translate(-5.7 -1.1)" id="g134">
      <path
        id="path72"
        d="M80.4 39.7c0 .9 0 1.9-.1 2.8-.3 4-1.3 7.7-2.9 11.2-.6 1.4-1.4 2.7-2.2 4-6 9.5-16.5 15.7-28.5 15.7-5.1 0-10-1.2-14.4-3.2C20.9 64.8 13 53.1 13 39.7 13 26.4 20.6 15 31.7 9.5c-.9 1.1-1.7 2.4-2.4 3.6-.1.1-.1.2-.2.3-.4.4-.9.7-1.3 1.1L26.3 16l-.3.3c-.1.1-.2.2-.3.4-.2.2-.4.4-.5.6-.3.4-.7.8-1 1.3-1.4 1.8-2.6 3.9-3.5 6l-.3.6c-.1.3-.2.5-.3.8 0 .1-.1.3-.1.4-.1.4-.3.8-.4 1.2-.1.3-.2.5-.2.8 0 .1-.1.3-.1.4-.1.3-.1.5-.2.8-.2.8-.4 1.7-.5 2.6 0 .2-.1.4-.1.7 0 .2 0 .3-.1.5 0 .3 0 .5-.1.8v2.2c0 9.2 4.2 17.4 10.8 22.8 5.1 4.2 11.6 6.7 18.6 6.7 6.4 0 12.4-2.1 17.2-5.6 3.5-2.6 6.5-5.9 8.6-9.7.3-.5.5-1 .8-1.5 1.7-3.5 2.7-7.5 2.8-11.6v-1c0-1 0-1.9-.1-2.8.1 0 .1.1.1.1.5.4.9.8 1.3 1.2.4-.7.8-1.4 1.3-2 .3 1.3.5 2.6.6 3.9.1.8.1 1.8.1 2.8"
        className="st3"
      />
      <path
        id="path74"
        d="M77.1 36.3v1c0 6-2.5 11-2.8 11.6-.2.5-.5 1-.8 1.5-2.1 3.8-5.1 7.2-8.6 9.7-4.8 3.5-10.8 5.6-17.2 5.6-7.1 0-13.6-2.5-18.6-6.7-6.6-5.4-10.8-13.6-10.8-22.8V34c0-.3 0-.5.1-.8 0-.2 0-.3.1-.5 0-.2.1-.4.1-.7.1-.9.3-1.7.5-2.6.1-.3.1-.5.2-.8 0-.1.1-.3.1-.4.1-.3.1-.5.2-.8.1-.4.3-.8.4-1.2 0-.1.1-.3.1-.4.1-.3.2-.5.3-.8l.3-.6c.9-2.1 2.1-4.2 3.5-6 .3-.4.7-.8 1-1.3.2-.2.3-.4.5-.6.1-.1.2-.2.3-.4l.3-.3 1.5-1.5c.4-.4.9-.8 1.3-1.1-.1.1-.1.2-.2.3-.1.1-.1.2-.2.4-1.7 3.5-2.8 7.5-3.2 11.9-.1 1.2-.2 2.4-.2 3.6 0 15.4 9 27.9 20.2 27.9h1.1c1.6 0 3.2-.2 4.7-.6 7.6-2.1 13.1-9 13.1-17.2V39c-.1-4.9-2.2-9.2-5.5-12.4 2.3.1 4.5.4 6.7.9 4.1 1.1 7.9 3 11.1 5.6.1 0 .1.1.2.1.1 1.2.2 2.1.2 3.1"
        className="st4"
      />
      <path
        id="path76"
        d="M77.2 36.3v1c0 6.3-2.8 11.7-2.8 11.7-.2.5-.5 1-.8 1.5-2.1 3.8-5.1 7.2-8.7 9.8-5.1 3.6-11 5.6-17.3 5.6-6.8 0-13.5-2.4-18.7-6.7-6.9-5.6-10.8-14-10.8-22.9 0-8.9 4-17.3 10.9-22.9l.3-.2c-.1.1-.1.2-.2.3-.1.1-.1.2-.2.3-6.7 5.6-10.6 13.8-10.6 22.5 0 8.8 3.9 17.1 10.7 22.7 5.2 4.3 11.8 6.6 18.6 6.6 6.2 0 12.1-1.9 17.1-5.5 3.5-2.5 6.5-5.9 8.6-9.7.3-.5.5-1 .8-1.5 0-.1 2.8-5.4 2.8-11.6v-1c0-.9 0-1.9-.1-2.8v-.1c.1 0 .1.1.2.1l.1.1c.1.9.1 1.8.1 2.7"
        className="st4"
      />
      <path
        id="path78"
        d="M69.2 18s-24-4.5-35.3 16.4c0 0 2-14.5 19.2-21L49.7 7s6.9-6.2 19-4.6z"
        className="st3"
      />
      <path
        id="path80"
        d="M39.4 29.1s9.6-12.5 31.5-9.3l-.3-7.3s9.2-.3 16.6 6.1l-9.1 13.8s-6.3-7.3-19.3-7.5c-5.3-.1-11.8.6-19.4 4.2"
        className="st4"
      />
      <path
        id="path82"
        d="M29.9 40.5s-11-23.9 14.5-39.3l6.1 11.2s-4.1 1.4-8.5 5.2c-4.8 4.1-10 11.1-12.1 22.9"
        className="st4"
      />

      <g id="g132">
        <path
          id="path84"
          d="M44.4 34s-2.1.5-2-.6c0-.4.2-.5.4-.4 0-.2-.4-.7.5-1 .3-.4.6-.8.7-1 .1-.3.3-.6 1.1-.5.8.2 1.7 1 1.8 1.2.5 0 1 .1.8.2-.2.1-.3.3-.2.3 0 0 .3.2-.5.2 0 .2.2.2.3.3.1.1 0 .2 0 .2s.1.4-.3.3c-.4-.2-.4-.3-.6-.3-.1 0-.4.1-.4.2s.5.4-.1.5c-.1.1.2.2 0 .3-.2.1-1.1.8-1.5.9-.4 0-.5-.1-.5-.3 0-.2.2-.3.5-.3.1-.1.1-.2 0-.2"
          className="st0"
        />
        <path
          id="path86"
          d="M44.2 36.2c-.2 0-.8-.4-.5-.6.3-.2 1.7-1.1 2-1.2.3-.1.7.3.3.6-.3.3-1.8 1.2-1.8 1.2"
          className="st0"
        />
        <path
          id="path88"
          d="M46.4 35.2c0-.2.2-1.1.2-1.3 0-.2.7-.2.5.5-.1.8-.7 1-.7.8"
          className="st0"
        />
        <path
          id="path90"
          d="M47.3 33.6s3.8-.2 4.1 0c.3.2 1.6 2.2 1.3 4-.3 1.8-.9 2.3-3.3 2.5 0-.6-.1-2.1-.4-2.5-.2-.4-1.1-1.3-1.5-1.3 0 .4-.1 1.7-.1 1.7s-1.2.1-1.4-.2v-1.9s1.1-1 1.2-1.2c.2.1.2.7 1.6.6.1-.2-1.5 0-1.5-1.7"
          className="st0"
        />
        <path
          id="path92"
          d="M45.9 35.3s-1.2 1-1.5 1.2c-.1.3-.3 1.4 1.3 1.4.1-.7.2-2.6.2-2.6"
          className="st0"
        />
        <path
          id="path94"
          d="M43 36.8c-.4 0-.7-.1-.6-.4 0-.3.6-.6.9-.5.3.1.9.2.9 1.5.2.3 1 .8 1.9.9.9.1 1.5-.1 1.5.2v1.8s-1.1 0-3.9-2c-.2-.3-.4-.5-.4-1 0-.2-.2-.5-.3-.5"
          className="st0"
        />
        <path
          id="path96"
          d="M42.1 37c-.5 0-1.8 1.1-.8 1.6.3-.2.5-.5.5-.5s-.2.6.3.8c.5.2.3-.3.6-.3.2.3.2.4.5.4s.3-.8 0-1.2c-.3-.5-.6-.7-1.1-.8"
          className="st0"
        />
        <path
          id="path98"
          d="M47.8 37.2v3.5s1.2-.4 1.3-.7c0-.6-.2-2.8-1.3-2.8"
          className="st0"
        />
        <path
          id="path100"
          d="M45 39.5s1.4.9 2.2 1.3c-.1.2-.7.9-.9.9-.2-.1-1.2-1.5-1.3-2.2"
          className="st0"
        />
        <path id="polygon102" className="st0" d="M38.3 40.8h1.8v.7h-1.7z" />
        <path id="polygon104" className="st0" d="M58.8 40.5h-7.9l1.3 1h6.6z" />
        <path
          id="path106"
          d="M49.4 40.4c.1-.1 1 .6.8.7-.3.1-2.7 1.2-2.9 1.1-.2-.1-.2-.7.1-.8.2-.1 1.6-.5 2-1"
          className="st0"
        />
        <path
          id="path108"
          d="M46.7 42.1c-.3-.2-1.9 1.4-1.2 1.5.7.1 2.4.4 2.8.6.4-.2.8-.5.7-.7.3 0 .7.4 1.1.3.4-.2 2.3-1.6 2.4-1.8-.4-.3-1.2-.8-1.6-.8-.3 0-2.9 1.5-4.2.9"
          className="st0"
        />
        <path
          id="path110"
          d="M45.9 44c.2 0 2.2.8 2.7.7.5-.1.6-.6.9-.6.3 0 .4.3.9 0s1.3-1 1.5-1.2c0 .3 0 1.2-1.8 2s-6.1 2-6.2 2.6c.2.1.7-.1 1.1-.3.2.2.6.7.5 1.7-.1.9-.8 2.5-.8 2.9v2.6c0 .2.4 1.3-.2 1.2-.5-.1-.9-.1-1.1-.1-.2 0-.6.4-1 .3-.4-.1-1-.2-1-.4s.4-.2.8-.3c.4-.1.6-.5 1.3-.8 0-.5-.2-3.9-.2-4.6 0-.7-.2-2.2.1-2.8.1-.6 1.7-2.9 2.5-2.9"
          className="st0"
        />
        <path
          id="path112"
          d="M48.5 46.1c0 .2 1.2 3.3 1.8 3.4.5.1 5.6-1 6.6-.7.3.4.9 1.1.9 1.6 0 0 .1 1 0 1.1.2 0 .6-.1.7-.4.1-.3 0-1.6.1-1.9 0-.2.6-1.5-.2-1.4-.8 0-3.2 0-4-.2-.8-.2-2.5-.5-2.9-.3-.4.2-.9.9-.9 1.1-.2 0-.2-.1-.1-.7.2-.5.8-2.1.7-2.9-.6 0-2.7 1.3-2.7 1.3"
          className="st0"
        />
        <path
          id="path114"
          d="M45.6 41.2c.1.1.1.4.3.5l-4.1-.3s-.5-.3-.3-.4z"
          className="st0"
        />
        <path
          id="path116"
          d="M41.1 40.8h4.1s-.3-.5-.4-.8c-.7 0-3.8.1-3.8.1s-.4 0-.4.8c-.1.2.3.5.5-.1"
          className="st0"
        />
        <path
          id="path118"
          d="M37.2 41.5h.8s.3-.1 0-.4c-.3-.3-.8-.5-.4-1.1-.4-.1-1-.2-.9 1.1h-.4s-.1-.7-1.1-.7c-.9 0-3.3 1-3.3 1s2.6.7 3.3.7c.7 0 1.1-.6 1.1-.6h.3s.1.5.3.7v.8s-.4.1-.3.6c.1.4.4.4.4.4.1 0 .2-.1.5-.1.2-.2.1-.7-.3-.9v-.6s.3-.2.3-.4-.3-.2-.3-.5"
          className="st0"
        />
        <path
          id="path120"
          d="M42.1 45.5c.3-.2.4-.6.4-.6v-2.4c0-.6-1-1-1.1-1h-.1c-.1.1-.4.3-.6.3-.3 0-.4 0-.7-.3-.8 0-1.2 1-1.3 1 0 .2-.1 1.9 0 2.2.1.3.3.5.4.6-.2.6-1 3.8.1 4.2v.5H42v-.6c1-.4.3-3.1.1-3.9m-3.1-3c.1-.1.4-.9 1-.9.3.3.5.3.8.3.3 0 .5-.2.7-.3.3.1.9.4.9.8v2.4c0 .1-.1.3-.3.4h-.5v-1h-1.9v1h-.4c-.1-.1-.3-.3-.3-.5-.1-.2-.1-1.4 0-2.2m1.9 6.6h-.5c-.1 0-.2-.1-.2-.2s.1-.2.2-.2h.5c.1 0 .2.1.2.2s-.1.2-.2.2m1 .2l-1.3-1.5-1.2 1.5c-.8-.3-.3-2.8 0-3.9H42c.2 1.1.7 3.5-.1 3.9"
          className="st0"
        />
        <path
          id="path122"
          d="M41.5 46.5c.3-.4-.1-.7-.1-.7h-1.6c-.5 0-.3.7-.3.7l1 .9s.7-.4 1-.9"
          className="st0"
        />
        <path
          id="path124"
          d="M40.9 47.5l1 1.2s-.1-1.4-.1-1.8c-.3 0-.9.6-.9.6"
          className="st0"
        />
        <path
          id="path126"
          d="M39.4 46.9c0 .5-.1 1.8-.1 1.8l1-1.2s-.6-.6-.9-.6"
          className="st0"
        />
        <path
          id="path128"
          d="M41.3 43.9h.2v-.2c0-.1-.1-.2-.2-.2h-1.5c-.1 0-.2.1-.2.2v.2h.2z"
          className="st0"
        />
        <path
          id="path130"
          d="M39.1 50.2h-.2v.2c0 .1.1.2.2.2H42c.1 0 .2-.1.2-.2v-.2H42z"
          className="st0"
        />
      </g>
    </g>
  </svg>
);

export const RocketIcon = ({ width = "86", height = "86" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="86"
    height="86"
    viewBox="0 0 378 253.05"
  >
    <path
      d="M0 253.05h378V0H0Zm0 0"
      style={{
        stroke: "none",
        fillRule: "evenodd",
        fill: "#8d349300",
        fillOpacity: 1,
      }}
    />
    <path
      d="m263.395 41.11-44.887 44.886 3.148 25.203 8.274-17.328 25.59 32.684 35.832-110.25-119.309 49.613 32.293 16.93 59.059-41.739"
      style={{
        stroke: "none",
        fillRule: "evenodd",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M207.102 167.11h-26.383c-16.34.984-21.656-25.985-1.574-29.532h27.957Zm17.312-47.25h-47.25c-36.031 5.515-39.77 57.882-.394 64.972h47.644v-47.254c15.883.527 19.164 20.344 7.48 27.563 2.364 2.757 11.817 12.996 11.817 12.996 24.805-21.395 10.629-56.57-19.297-58.278"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M323.246 143.484h-17.324l-7.485 17.328h22.051c4.434-.199 4.63 6.297 0 6.692h-38.191v-29.926h58.668V119.86h-8.66c-2.563-36.617-46.368-37.699-57.883-17.714 2.265 1.867 12.992 11.418 12.992 11.418 6.598-10.336 24.906-9.844 27.563 6.296h-50.004v64.973h56.304c12.797-.2 18.703-9.648 20.082-17.723.786-12.992-7.09-21.656-18.113-23.625M154.719 119.86h-22.836c-7.285 8.859-19.887 44.69 5.117 71.663 0 0 10.828-9.253 12.992-11.023-7.676-7.484-20.472-38 4.727-60.64M96.59 192.148c0 7.907-6.41 14.313-14.317 14.313-7.906 0-14.312-6.406-14.312-14.313 0-7.906 6.406-14.316 14.312-14.316 7.907 0 14.317 6.41 14.317 14.316"
      style={{
        stroke: "none",
        fillRule: "evenodd",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M96.05 167.11H69.669c-16.34.984-21.656-25.985-1.574-29.532H96.05Zm-29.925-47.25c-36.027 5.515-39.77 57.882-.395 64.972h.262c2.797-6.21 9.031-10.535 16.281-10.535 7.25 0 13.485 4.324 16.278 10.535h14.824v-64.973h-47.25M82.313 96.504a1.49 1.49 0 0 1-1.489 1.488H73.29v-3.144h7.535c.82 0 1.489.668 1.489 1.488Zm.75 8c5.8-.984 8.656-12.895-.793-15.55H66.914v22.64h6.297v-7.09l7.09 7.09h9.847l-7.085-7.09"
      style={{
        stroke: "none",
        fillRule: "evenodd",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M101.113 105.11a5.043 5.043 0 1 1 0-10.087 5.043 5.043 0 0 1 0 10.086Zm0-16.516c-6.336 0-11.472 5.136-11.472 11.472 0 6.336 5.136 11.473 11.472 11.473 6.336 0 11.473-5.137 11.473-11.473 0-6.336-5.137-11.472-11.473-11.472M166.2 95.113h10.312v-6.652h-8.727c-6.86 0-12.472 5.18-12.472 11.508 0 6.328 5.613 11.508 12.472 11.508h8.727v-6.653h-10.313a4.722 4.722 0 0 1-3.726-1.836h14.039V96.95h-14.04a4.722 4.722 0 0 1 3.727-1.836M125.21 104.824a4.736 4.736 0 0 1-4.722-4.722v-.266a4.736 4.736 0 0 1 4.723-4.723h9.8v-6.652h-8.788c-6.86 0-12.473 5.18-12.473 11.508 0 6.328 5.613 11.508 12.473 11.508h8.789v-6.653h-9.801M200.46 88.898h-22.222v5.954h8.137v16.273h5.95V94.852h8.136v-5.954"
      style={{
        stroke: "none",
        fillRule: "evenodd",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="m147.566 99.926 10.938-11.028h-8.852l-6.152 6.204v-6.204h-5.95v22.227h5.95v-6.371l6.32 6.371h8.856l-11.11-11.2M237.055 195.848c-.985.195-1.848.812-2.594 1.851-.719.988-1.074 1.988-1.074 3.004 0 .61.125 1.203.379 1.774.316.73.75 1.09 1.297 1.09.277 0 .636-.149 1.078-.45l.617 1.653c-.559.335-1.102.503-1.63.503-.714 0-1.401-.265-2.065-.796-.383-.309-.75-.899-1.094-1.77-.172-.426-.258-1.07-.258-1.926v-.601c0-1.348.715-2.864 2.144-4.551.305-.348.817-.844 1.532-1.477h2.246v1.637c-.211.027-.406.047-.578.059"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M245.133 195.793h-4.403c1.247.805 1.891 1.86 1.946 3.16.793.313 1.613.93 2.457 1.856Zm1.87 0v9.352h-1.87v-1.208c0-.417-.317-.949-.95-1.597a9.98 9.98 0 0 0-1.503-1.285 3.272 3.272 0 0 0-1.903-.602c-.699 0-1.207.297-1.523.899a.489.489 0 0 0-.059.253c0 .25.121.473.368.676.242.203.488.301.742.301.195 0 .672-.144 1.425-.434l.551 1.7c-.836.425-1.527.64-2.086.64a3.005 3.005 0 0 1-1.71-.523 3.072 3.072 0 0 1-1.133-1.38c-.106-.245-.16-.546-.16-.91 0-1.058.44-1.866 1.316-2.425a3.513 3.513 0 0 1 1.953-.602h.18c-.016-.324-.188-.691-.52-1.101-.332-.402-.656-.606-.976-.606h-2.07v-1.148h-.833v-1.64h12.04v1.64h-1.278"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M250.645 195.793v9.352h-1.872v-9.352h-1.378v-1.64h4.496v1.64h-1.246"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M259.77 197.816c-.348.118-.72.25-1.122.407-.586.257-1.652.726-3.199 1.398l-.355.156c1.476.516 2.886 1.282 4.234 2.293.172.13.32.239.442.328Zm-.11-2.023h-8.426v-1.64h11.664v1.64h-1.293v9.352h-1.652c-.16-.48-.969-1.227-2.43-2.235-.593-.41-1.418-.812-2.464-1.2-1.118-.417-2.004-.62-2.668-.62l-.496-1.863c.433-.352 1.64-.954 3.613-1.805.836-.363 2.219-.906 4.152-1.629"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M265.246 195.793v9.352h-1.867v-9.352H262v-1.64h4.492v1.64h-1.246"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M272.34 206.719a23.941 23.941 0 0 0-2.426-1.922c-.41-.281-1.094-.598-2.047-.945-.754-.274-1.199-.41-1.332-.41l.024-2.188c.156 0 .398.008.722.027.324.02.567.031.727.031.847 0 1.535-.109 2.066-.328 1.004-.422 1.508-.918 1.508-1.492 0-.422-.191-.773-.574-1.054-.371-.22-.75-.43-1.133-.633a.74.74 0 0 0-.316-.078 1.9 1.9 0 0 0-.739.171c-.332.157-.48.329-.457.52.067.484.578.687 1.532.613l-1.012 1.551c-.41.027-.828-.102-1.254-.387-.77-.52-1.152-1.152-1.152-1.902s.39-1.332 1.171-1.75c.637-.348 1.368-.523 2.188-.523.355 0 .668.062.926.175.258.118.52.246.785.387 1.27.648 1.906 1.629 1.906 2.945 0 .946-.39 1.707-1.172 2.29-.597.437-1.453.753-2.566.949.332.152.808.418 1.43.793 1.062.8 1.918 1.52 2.566 2.152Zm-6.5-10.926v-1.64h5.523a.743.743 0 0 0 .024-.137c0-.86-.407-1.422-1.215-1.696a1.447 1.447 0 0 0-.36-.039c-.199 0-.44.04-.734.117-.394.106-.637.165-.715.18-.316.05-.593.149-.832.293a6.08 6.08 0 0 1-1.054.574l-.594-1.386c.715-.496 1.652-.918 2.82-1.27a4.904 4.904 0 0 1 1.39-.215c.466 0 .985.168 1.571.508.992.594 1.508 1.617 1.55 3.07h1.071v1.641h-8.445"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M285.473 195.793v9.352h-1.868v-3.711c0-.325-.14-.653-.418-.996-.277-.34-.574-.512-.89-.512-.293 0-.57.18-.836.539-.266.363-.395.77-.395 1.234h-2.023c0-.52-.133-.965-.398-1.34-.27-.375-.575-.566-.922-.566-.293 0-.575.105-.84.312-.266.208-.41.45-.438.723l-.058.484v.192c0 .96.586 1.441 1.761 1.441.188 0 .504-.039.954-.117l-.657 1.887a8.19 8.19 0 0 1-.695.066c-.875 0-1.684-.324-2.426-.972-.293-.246-.527-.621-.715-1.125a3.721 3.721 0 0 1-.257-1.325c0-1.011.308-1.832.933-2.457.625-.629 1.442-.945 2.45-.945.94 0 1.73.45 2.367 1.344.687-.895 1.433-1.344 2.226-1.344.442 0 .863.2 1.277.598v-2.762h-10.109v-1.64h13.035v1.64h-1.058M299.605 197.816c-.343.118-.718.25-1.117.407-.586.257-1.652.726-3.199 1.398l-.36.156c1.481.516 2.891 1.282 4.239 2.293l.437.328Zm-.105-2.023h-8.426v-1.64h11.664v1.64h-1.293v9.352h-1.652c-.16-.48-.969-1.227-2.43-2.235-.597-.41-1.418-.812-2.468-1.2-1.114-.417-2-.62-2.665-.62l-.5-1.863c.438-.352 1.645-.954 3.618-1.805.836-.363 2.218-.906 4.152-1.629"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M305.875 195.793c-.594.816-.887 1.492-.887 2.023 0 .246.301 1.235.907 2.961.312.871.472 1.59.472 2.164 0 1.09-.61 1.848-1.828 2.278-.371.144-1.031.258-1.984.351l.25-1.617c1.105-.234 1.66-.621 1.66-1.168 0-.508-.23-1.285-.692-2.34-.46-1.05-.687-1.824-.687-2.316 0-.637.266-1.414.797-2.336h-1.945v-1.64h5.214v1.64h-1.277"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M309.875 195.793v9.352h-1.871v-9.352h-1.375v-1.64h4.492v1.64h-1.246M314.582 196.418c-.187-.129-.375-.184-.562-.156-.707.117-1.06.465-1.06 1.047 0 .3.118.574.353.828.234.25.496.379.789.379l.257-.04c.536-.167.801-.492.801-.972 0-.453-.191-.816-.578-1.086Zm1.652 9.832c-2.37-1.996-3.976-3.195-4.828-3.598l.024-2.582c3.257 2.332 5.39 4.192 6.394 5.578v1.922Zm-2.043-6.027c-.875 0-1.578-.278-2.109-.828-.527-.551-.793-1.262-.793-2.13 0-.804.27-1.472.816-2.011.54-.54 1.215-.809 2.028-.809 1.097 0 1.89.551 2.383 1.653.21.468.32.93.32 1.382 0 .84-.23 1.512-.688 2.004-.457.493-1.109.739-1.957.739M329.586 193.055c-2.18-1.368-3.961-2.055-5.348-2.055-1.636 0-2.84.52-3.605 1.555-.266.363-.41.898-.438 1.597h1.313v1.641h-1.313v9.352h-1.902v-9.352h-1.246v-1.64h1.246c.039-1.329.477-2.407 1.312-3.235.832-.824 1.965-1.332 3.399-1.527.144-.012.426-.043.836-.098h.394c1.141 0 2.274.246 3.403.738.61.285 1.61.852 3 1.707l-1.051 1.317"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
    <path
      d="M326.164 197.953c-.305.23-.77.543-1.394.93-.157.066-.34.199-.543.398-.207.203-.403.387-.59.555.199.18.515.434.957.758.41.465.933 1.043 1.57 1.726Zm1.871-2.16v.059c.781.039 1.598.285 2.445.738 1.192.652 1.79 1.535 1.79 2.652 0 .653-.2 1.215-.598 1.688a2.829 2.829 0 0 1-1.567.933c-.644.153-1.19.172-1.644.07v-1.769c.215.027.41.043.598.043.937 0 1.406-.34 1.406-1.012 0-.804-.813-1.308-2.43-1.515v7.465h-1.648c-.27-.52-.532-.918-.797-1.204a20.278 20.278 0 0 1-.719-.933c-.117-.168-.336-.38-.652-.64-.32-.259-.54-.47-.656-.638-.055-.078-.204-.164-.442-.253-.808-.286-1.465-.43-1.969-.43l-.496-1.86c.414-.296 1.34-.855 2.785-1.667.106-.079.547-.336 1.325-.778a81.75 81.75 0 0 1 1.398-.816v-.133h-5.906v-1.64h12.84v1.64h-5.063M336.277 196.418c-.183-.129-.37-.184-.558-.156-.707.117-1.059.465-1.059 1.047 0 .3.117.574.352.828.23.25.496.379.789.379l.258-.04c.535-.167.8-.492.8-.972 0-.453-.195-.816-.582-1.086Zm1.657 9.832c-2.372-1.996-3.98-3.195-4.829-3.598l.02-2.582c3.262 2.332 5.39 4.192 6.398 5.578v1.922Zm-2.043-6.027c-.875 0-1.579-.278-2.11-.828-.531-.551-.797-1.262-.797-2.13 0-.804.274-1.472.817-2.011.543-.54 1.219-.809 2.027-.809 1.102 0 1.895.551 2.387 1.653.21.468.316.93.316 1.382 0 .84-.226 1.512-.683 2.004-.457.493-1.114.739-1.957.739M129.14 205.945l3.485 1.176 1.395-1.176-3.485-1.222-1.394 1.222M127.281 200.676c.352.101.817-.465 1.164-.93v2.168c0 .828-.66 1.55-1.164 1.55h-4.875v-2.788h4.875Zm3.024-4.403v-2.109H102.94v2.11h4.598v4.71h3.95s1.12-.359 1.394-.93v1.86c0 .828-.621 1.55-1.395 1.55h-5.804c-.352 0-.7-.155-.7-1.55v-4.39h-2.043v5.632c0 .465.293 2.106 1.762 2.106h7.871c1.227-.04 2.098-1.29 2.164-2.34v-5.399h-1.855c-.195.829-.078 1.395-.93 1.602h-2.324v-2.852h6.738v8.989h2.32v-8.989h1.63v8.989h7.663c.543 0 2.325-.453 2.325-2.414v-5.325h-1.86c0 .516-.078 1.293-.93 1.293h-5.109v-2.543h7.899M132.86 201.293h4.644v-2.477h-4.645ZM147.723 203.773h-4.645c-.695-.101-1.16-.925-1.16-1.859v-2.48h5.805Zm-7.653-9.609v2.11h7.653v1.25h-7.653v5.011c.164 1.633 1 2.727 2.59 2.727h6.922v-8.989h1.625v8.989h2.09v-11.098H140.07M163.332 196.273h9.477v1.25h-2.786c-.117.88-1.55 1.356-1.859 0h-4.832v5.325c0 .515.078 2.203 1.496 2.414h3.8v-1.797h-2.554c-.504-.156-.93-.465-.93-1.238v-2.793h2.555v1.55h2.324v-1.238c-.156-.57 2.438-.52 2.555 0v5.516h2.09v-8.989h1.394v8.989h2.09v-11.098h-14.82v2.11M158.531 197.895c-.89 0-1.613-.329-1.613-.73 0-.4.723-.727 1.613-.727s1.614.328 1.614.726c0 .402-.723.73-1.614.73Zm1.504-3.11h-4.937v2.914c.195.93.691 2.078 2.382 2.168h3.95v-3.594c-.118-.609-.543-1.386-1.395-1.488M155.426 200.96v1.83l5.969 2.476v-1.938l-5.97-2.367M208.574 197.895c-.89 0-1.613-.329-1.613-.73 0-.4.723-.727 1.613-.727s1.613.328 1.613.726c0 .402-.722.73-1.613.73Zm1.504-3.11h-4.933v2.914c.19.93.687 2.078 2.378 2.168h3.95v-3.594c-.118-.609-.543-1.386-1.395-1.488M205.469 200.96v1.83l5.969 2.476v-1.938l-5.97-2.367M220.895 203.773h-4.645c-.7-.101-1.16-.925-1.16-1.859v-2.48h5.77l.03.312h.005Zm1.859-6.25v-1.25h3.848v-2.109h-13.36v2.11h7.653v1.25h-7.653v5.011c.164 1.633 1 2.727 2.586 2.727h6.926v-5.516h1.855c.309 0 .387-.156.465.309v.93c-.117.468-.156.777-.465.93h-.683v1.858h1.379c.465-.05 1.316-.566 1.394-1.238v-5.012h-3.945M192.063 203.773h-4.649c-.695-.101-1.16-.925-1.16-1.859v-2.48h5.809Zm-7.657-9.609v2.11h7.656v1.25h-7.656v5.011c.168 1.633 1.004 2.727 2.59 2.727h6.922v-8.989h2.422l-.883 1.762v1.242h1.629c.863.098 1.16.672 1.16 2.168 0 1.035-.238 1.782-1.039 1.864h-1.52v1.859h1.63c.464 0 2.593.207 2.788-1.86.23-4.187.422-5.273-2.558-5.581l.437-1.454h3.274v8.989h2.09v-11.098h-18.942"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#8c3493",
        fillOpacity: 1,
      }}
    />
  </svg>
);

export const VisaIcon = ({ width = "86", height = "86" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 1000.046 323.653"
  >
    <g transform="matrix(4.4299631,0,0,4.4299631,-81.165783,-105.04783)">
      <polygon
        points="116.145,95.719 97.858,95.719 109.296,24.995 127.582,24.995"
        style={{ fill: "#00579f" }}
      />
      <path
        d="m 182.437,26.724 c -3.607,-1.431 -9.328,-3.011 -16.402,-3.011 -18.059,0 -30.776,9.63 -30.854,23.398 -0.15,10.158 9.105,15.8 16.027,19.187 7.075,3.461 9.48,5.72 9.48,8.805 -0.072,4.738 -5.717,6.922 -10.982,6.922 -7.301,0 -11.213,-1.126 -17.158,-3.762 l -2.408,-1.13 -2.559,15.876 c 4.289,1.954 12.191,3.688 20.395,3.764 19.188,0 31.68,-9.481 31.828,-24.153 0.073,-8.051 -4.814,-14.22 -15.35,-19.261 -6.396,-3.236 -10.313,-5.418 -10.313,-8.729 0.075,-3.01 3.313,-6.093 10.533,-6.093 5.945,-0.151 10.313,1.278 13.622,2.708 l 1.654,0.751 2.487,-15.272 0,0 z"
        style={{ fill: "#00579f" }}
      />
      <path
        d="m 206.742,70.664 c 1.506,-4.063 7.301,-19.788 7.301,-19.788 -0.076,0.151 1.503,-4.138 2.406,-6.771 l 1.278,6.094 c 0,0 3.463,16.929 4.215,20.465 -2.858,0 -11.588,0 -15.2,0 l 0,0 z m 22.573,-45.669 -14.145,0 c -4.362,0 -7.676,1.278 -9.558,5.868 l -27.163,64.855 19.188,0 c 0,0 3.159,-8.729 3.838,-10.609 2.105,0 20.771,0 23.479,0 0.525,2.483 2.182,10.609 2.182,10.609 l 16.932,0 -14.753,-70.723 0,0 z"
        style={{ fill: "#00579f" }}
      />
      <path
        d="M 82.584,24.995 64.675,73.222 62.718,63.441 C 59.407,52.155 49.023,39.893 37.435,33.796 l 16.404,61.848 19.338,0 28.744,-70.649 -19.337,0 0,0 z"
        style={{ fill: "#00579f" }}
      />
      <path
        d="m 48.045,24.995 -29.422,0 -0.301,1.429 c 22.951,5.869 38.151,20.016 44.396,37.02 L 56.322,30.94 c -1.053,-4.517 -4.289,-5.796 -8.277,-5.945 l 0,0 z"
        style={{ fill: "#faa61a" }}
      />
    </g>
  </svg>
);

export const MastercardIcon = ({ width = "86", height = "86" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 620"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
  >
    <path fill="#FF5A00" d="M364 66.1h270.4v485.8H364z" />
    <path
      fill="#EB001B"
      d="M382 309c0-98.7 46.4-186.3 117.6-242.9C447.2 24.9 381.1 0 309 0 138.2 0 0 138.2 0 309s138.2 309 309 309c72.1 0 138.2-24.9 190.6-66.1C428.3 496.1 382 407.7 382 309z"
    />
    <path
      fill="#F79E1B"
      d="M999.2 309c0 170.8-138.2 309-309 309-72.1 0-138.2-24.9-190.6-66.1 72.1-56.7 117.6-144.2 117.6-242.9S570.8 122.7 499.6 66.1C551.9 24.9 618 0 690.1 0 861 0 999.2 139.1 999.2 309z"
    />
    <text
      x="500"
      y="330"
      fill="white"
      fontSize="120"
      fontWeight="bold"
      textAnchor="middle"
      letterSpacing="2"
    >
      MASTERCARD
    </text>
  </svg>
);
