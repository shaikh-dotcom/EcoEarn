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

export const SVGTreeComponent = ({ width = "32", height = "32" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    viewBox="0 0 1865 3000"
  >
    <path
      fillRule="nonzero"
      fill="rgb(0%, 0%, 0%)"
      fillOpacity={1}
      d="M 874.707031 2998.660156 C 684.675781 2991.988281 486.351562 2956.328125 486.476562 2928.859375 C 486.507812 2921.460938 528.386719 2902.074219 579.542969 2885.785156 C 686.519531 2851.71875 788.332031 2793.941406 822.023438 2748.1875 C 836.457031 2728.582031 851.789062 2672.359375 862.363281 2600.265625 C 871.742188 2536.300781 889.257812 2417.402344 901.285156 2336.046875 C 922.847656 2190.191406 928.023438 1947.609375 911.867188 1839.871094 L 904.015625 1787.460938 L 852.382812 1795.371094 C 823.988281 1799.710938 798.085938 1805.640625 794.820312 1808.511719 C 791.566406 1811.398438 798.984375 1831.339844 811.3125 1852.839844 L 833.738281 1891.921875 L 804.917969 1867.449219 C 789.0625 1853.988281 772.019531 1837.429688 767.035156 1830.660156 C 761.929688 1823.710938 757.890625 1827.78125 757.800781 1840 C 757.640625 1858.648438 754.128906 1859.519531 732.582031 1846.160156 C 711.941406 1833.359375 705.574219 1833.839844 696.265625 1848.800781 C 686.609375 1864.328125 683.808594 1863.871094 676.832031 1845.710938 C 664.761719 1814.238281 646.671875 1819.988281 646.671875 1855.308594 C 646.671875 1880.730469 640.726562 1886.121094 612.699219 1886.121094 C 587.175781 1886.121094 574.847656 1877.359375 563.121094 1850.859375 C 554.539062 1831.46875 551.265625 1805.828125 555.847656 1793.890625 C 563.5 1773.921875 561.828125 1774.03125 534.933594 1795.160156 C 518.839844 1807.859375 487.488281 1836.660156 465.238281 1859.179688 C 429.742188 1895.109375 424.792969 1897.050781 424.792969 1875.011719 C 424.792969 1844.75 378.9375 1816.011719 360.335938 1834.621094 C 353.460938 1841.488281 340.746094 1844.398438 332.089844 1841.089844 C 323.433594 1837.761719 312.683594 1840.980469 308.210938 1848.210938 C 296.027344 1867.921875 243.566406 1864.089844 235.433594 1842.890625 C 225.34375 1816.621094 202.910156 1819.960938 202.910156 1847.730469 C 202.910156 1875.308594 165.738281 1893.328125 152.621094 1872.109375 C 135.710938 1844.738281 75.761719 1827.21875 45.410156 1840.769531 C 2.378906 1859.988281 -16.167969 1833.921875 16.964844 1800.78125 C 34.621094 1783.128906 40.761719 1765.628906 35.988281 1746.621094 C 27.808594 1714.039062 70.722656 1664.390625 85.871094 1688.898438 C 91.6875 1698.320312 100.433594 1694.53125 112.445312 1677.371094 C 135.21875 1644.859375 153.246094 1644.359375 144.847656 1676.460938 C 136.941406 1706.730469 160.359375 1709.609375 169.898438 1679.550781 C 173.660156 1667.679688 186.789062 1641.980469 199.070312 1622.410156 C 215.726562 1595.890625 217.484375 1585.441406 205.996094 1581.320312 C 197.527344 1578.289062 190.597656 1570.039062 190.597656 1562.988281 C 190.597656 1555.648438 199.054688 1557.191406 210.421875 1566.628906 C 227.09375 1580.460938 232.484375 1580.050781 244.320312 1563.988281 C 252.066406 1553.480469 271.144531 1538.109375 286.722656 1529.808594 C 307.234375 1518.878906 312.90625 1507.960938 307.277344 1490.21875 C 303.003906 1476.75 306.1875 1457.679688 314.347656 1447.828125 C 323.964844 1436.230469 324.566406 1429.941406 315.984375 1429.941406 C 308.765625 1429.941406 293.796875 1442.410156 282.738281 1457.679688 L 262.628906 1485.410156 L 243.558594 1457.679688 C 222.054688 1426.410156 178.183594 1420.210938 178.183594 1448.441406 C 178.183594 1458.609375 172.4375 1466.929688 165.417969 1466.929688 C 156.621094 1466.929688 156.621094 1459.511719 165.417969 1443.089844 C 184.75 1406.960938 181.417969 1402.621094 141.199219 1411.460938 C 104.925781 1419.421875 89.714844 1403.390625 117.351562 1386.308594 C 133.476562 1376.351562 95.925781 1331.339844 71.492188 1331.339844 C 45.339844 1331.339844 52.03125 1304.871094 87.5625 1267.789062 C 105.527344 1249.050781 120.777344 1218.691406 121.460938 1200.339844 C 122.734375 1164.410156 153.53125 1142.761719 153.53125 1177.730469 C 153.53125 1193.609375 157.457031 1195.5 169.585938 1185.441406 C 190.160156 1168.371094 239.824219 1181.019531 239.824219 1203.351562 C 239.824219 1212.730469 245.605469 1220.410156 252.65625 1220.410156 C 269.003906 1220.410156 308.28125 1182.941406 317.277344 1158.769531 C 321.675781 1146.96875 324.511719 1150.789062 325.128906 1169.351562 C 326.039062 1194.058594 330.730469 1197.269531 356.921875 1190.691406 C 379.546875 1185.019531 387.738281 1187.871094 387.738281 1201.46875 C 387.738281 1216.851562 395.046875 1215.890625 430.882812 1195.738281 C 455.773438 1181.761719 474.023438 1177.25 474.023438 1185.070312 C 474.023438 1192.558594 485.058594 1195.738281 498.675781 1192.179688 C 514.695312 1188 523.332031 1191.820312 523.332031 1203.070312 C 523.332031 1224.308594 538.058594 1225.390625 557.847656 1205.621094 C 565.972656 1197.46875 572.644531 1194.910156 572.644531 1199.890625 C 572.644531 1204.871094 583.734375 1203.019531 597.300781 1195.761719 C 618.792969 1184.25 621.953125 1186.378906 621.953125 1212.378906 C 621.953125 1229.648438 631.023438 1245.390625 643.523438 1249.800781 C 655.378906 1253.980469 673.417969 1260.980469 683.585938 1265.371094 C 700.019531 1272.441406 700.019531 1270.730469 683.585938 1249.949219 C 662.679688 1223.519531 634.28125 1174.648438 634.28125 1165.109375 C 634.28125 1161.640625 645.371094 1158.78125 658.933594 1158.78125 C 672.625 1158.78125 683.585938 1167 683.585938 1177.269531 C 683.585938 1202.519531 704.785156 1200.589844 718.988281 1174.058594 C 732.625 1148.570312 723.097656 1084.820312 705.640625 1084.820312 C 699.023438 1084.820312 690.914062 1095.050781 687.644531 1107.578125 C 683.171875 1124.648438 673.460938 1128.859375 648.734375 1124.410156 C 630.609375 1121.160156 608.601562 1112.800781 599.824219 1105.851562 C 588.1875 1096.628906 578.695312 1100.601562 564.726562 1120.539062 C 546.476562 1146.601562 544.792969 1146.828125 528.683594 1125.578125 C 518.628906 1112.308594 511.632812 1109.519531 511.394531 1118.710938 C 510.847656 1140.808594 441.203125 1138.089844 432.585938 1115.628906 C 428.675781 1105.46875 416.984375 1097.140625 406.609375 1097.140625 C 379.355469 1097.140625 383.421875 1060.179688 414.300781 1027.320312 C 439.101562 1000.910156 441.921875 1000.449219 456.832031 1020.351562 C 471.230469 1039.570312 472.101562 1038.929688 465.757812 1013.730469 C 461.886719 998.371094 453.832031 982.78125 447.847656 979.089844 C 441.777344 975.320312 442.667969 961.761719 449.867188 948.28125 C 459.867188 929.609375 458.484375 922.550781 443.742188 916.890625 C 433.285156 912.871094 424.550781 897.710938 424.34375 883.179688 C 423.980469 859.308594 422.707031 858.839844 411.398438 878.320312 C 404.488281 890.191406 391.648438 899.890625 382.867188 899.890625 C 362.703125 899.890625 326.097656 860.148438 326.097656 838.261719 C 326.097656 829.148438 317.625 812.339844 307.257812 800.890625 C 280.613281 771.449219 303.328125 710.019531 336.90625 720.679688 C 353.359375 725.890625 361.902344 720.808594 366.558594 703.019531 C 373.886719 675 411.421875 669.769531 435.402344 693.421875 C 447.910156 705.769531 454.164062 704.589844 466.820312 687.460938 C 475.511719 675.691406 487.121094 670.148438 492.621094 675.128906 C 498.132812 680.109375 498.640625 677.261719 493.714844 668.78125 C 488.839844 660.308594 465.296875 653.390625 441.402344 653.390625 C 395.613281 653.390625 386.40625 623 431.929688 622.109375 C 444.910156 621.929688 463.832031 616.460938 473.992188 610.089844 C 484.15625 603.730469 502.214844 600.128906 514.125 602.089844 C 526.03125 604.058594 539.199219 596.75 543.382812 585.839844 C 550.308594 567.78125 552.890625 567.75 572.492188 585.480469 C 592.476562 603.570312 593.574219 602.730469 588.015625 573.621094 C 583.691406 551.011719 567.011719 535.660156 528.007812 518.410156 C 498.296875 505.261719 473.988281 489.511719 473.988281 483.398438 C 473.988281 462.769531 521.453125 428.890625 536.9375 438.460938 C 547.464844 444.980469 549.757812 441.648438 544.394531 427.671875 C 539.773438 415.628906 544.492188 403.089844 556.066406 396.609375 C 573.703125 386.730469 573.648438 382.929688 555.519531 355.230469 C 531.9375 319.238281 539.394531 308.210938 587.289062 308.210938 C 613.292969 308.210938 625.515625 300.339844 633.953125 278.148438 C 646.296875 245.691406 691.71875 214.640625 718.75 220.179688 C 728.128906 222.109375 732.859375 216.46875 729.53125 207.359375 C 726.277344 198.441406 717.894531 192.328125 710.914062 193.800781 C 703.933594 195.25 691.777344 188.710938 683.894531 179.21875 C 672.679688 165.691406 675.058594 156.449219 694.914062 136.609375 C 720.234375 111.28125 720.292969 111.28125 763.535156 135.511719 L 806.8125 159.820312 L 806.8125 129.210938 C 806.8125 112.378906 812.359375 98.609375 819.140625 98.609375 C 825.921875 98.609375 831.46875 104.148438 831.46875 110.929688 C 831.46875 117.710938 837.613281 123.261719 845.121094 123.261719 C 852.628906 123.261719 855.648438 115.121094 851.828125 105.171875 C 842.738281 81.46875 865.121094 68.160156 885.546875 85.121094 C 904.671875 100.988281 917.769531 90.609375 917.769531 59.578125 C 917.769531 31.871094 922.734375 31.589844 961.660156 57.089844 C 992.316406 77.179688 992.339844 77.160156 979.710938 43.960938 C 964.421875 3.75 964.222656 0 977.3125 0 C 982.949219 0 994.984375 13.871094 1004.050781 30.820312 C 1013.121094 47.761719 1027.53125 61.628906 1036.070312 61.628906 C 1044.609375 61.628906 1060.449219 70.488281 1071.28125 81.320312 C 1082.121094 92.160156 1098.691406 98.050781 1108.121094 94.429688 C 1117.558594 90.808594 1128.160156 95.339844 1131.679688 104.539062 C 1135.210938 113.71875 1130.230469 124.25 1120.589844 127.941406 C 1110.039062 131.980469 1106.25 142.890625 1111.03125 155.351562 C 1118.441406 174.660156 1119.988281 174.640625 1134.289062 155.171875 C 1154.980469 126.871094 1169.558594 152.128906 1151.738281 185.421875 C 1144.210938 199.5 1140.738281 217.640625 1144.039062 225.738281 C 1147.488281 234.230469 1150.429688 231.890625 1151 220.210938 C 1152.089844 198.070312 1188.949219 177.480469 1188.949219 199.03125 C 1188.949219 206.320312 1196.75 209.300781 1206.28125 205.628906 C 1215.808594 201.96875 1232.96875 209.320312 1244.421875 221.96875 C 1255.851562 234.609375 1273.019531 241.96875 1282.558594 238.320312 C 1303.660156 230.210938 1305.679688 260.558594 1285.390625 280.859375 C 1274.28125 291.960938 1276.160156 301.179688 1293.460938 320.300781 C 1315.53125 344.679688 1315.371094 345.25 1286.390625 345.640625 C 1259.121094 346 1258.46875 347.269531 1278.320312 362.398438 C 1290.339844 371.53125 1299.71875 394.570312 1299.519531 414.398438 C 1299.148438 444.558594 1297.210938 446.710938 1286.570312 428.449219 C 1279.660156 416.578125 1268.058594 406.878906 1260.78125 406.878906 C 1252.46875 406.878906 1253.421875 413.949219 1263.328125 425.890625 C 1275.960938 441.121094 1276.039062 447.859375 1263.691406 459.789062 C 1251.550781 471.5 1244.238281 468.769531 1229.429688 446.941406 C 1210.28125 418.710938 1139.660156 406.589844 1139.660156 431.53125 C 1139.660156 438.320312 1143.820312 443.210938 1148.890625 442.410156 C 1174.25 438.410156 1186.699219 446.25 1192.949219 470.121094 C 1197.679688 488.179688 1206.070312 493.980469 1219.839844 488.691406 C 1235.460938 482.691406 1238.160156 486.421875 1232.078125 505.578125 C 1225.480469 526.398438 1229.929688 530.160156 1261.191406 530.160156 C 1285.679688 530.160156 1306.109375 540.320312 1321.839844 560.328125 C 1338.75 581.828125 1349.378906 586.691406 1358.820312 577.25 C 1376.730469 559.339844 1435.5 575.398438 1435.5 598.191406 C 1435.5 608.230469 1429.949219 616.441406 1423.171875 616.441406 C 1416.390625 616.441406 1410.839844 622.230469 1410.839844 629.320312 C 1410.839844 636.390625 1419.96875 640.558594 1431.140625 638.550781 C 1442.300781 636.570312 1454.050781 642.441406 1457.25 651.640625 C 1461.460938 663.75 1455.980469 666.058594 1436.949219 660.058594 C 1406.390625 650.351562 1398.980469 683.230469 1429.121094 694.789062 C 1439.609375 698.808594 1444.261719 709.960938 1440.058594 720.921875 C 1436.03125 731.429688 1438.96875 747.488281 1446.480469 756.601562 C 1454.371094 766.109375 1456.898438 789.800781 1452.429688 812.238281 C 1446.570312 841.480469 1439.429688 849.660156 1424 844.761719 C 1412.660156 841.160156 1392.660156 846.03125 1379.558594 855.648438 C 1361.628906 868.761719 1349.570312 869.800781 1330.890625 859.851562 C 1308.710938 848.03125 1307.859375 848.800781 1322.859375 867 C 1337.179688 884.359375 1336.800781 888.449219 1320.371094 894.761719 C 1309.75 898.839844 1295.269531 898.558594 1288.160156 894.210938 C 1268.898438 882.308594 1272.558594 895.488281 1294.621094 917.621094 C 1305.269531 928.28125 1327.460938 937 1343.929688 937 C 1360.390625 937 1373.859375 942.539062 1373.859375 949.320312 C 1373.859375 956.109375 1387.261719 961.648438 1403.648438 961.648438 C 1420.03125 961.648438 1436.679688 968.570312 1440.628906 977.050781 C 1446.378906 989.371094 1449.269531 989.371094 1455.011719 977.050781 C 1466.589844 952.21875 1494.761719 959.320312 1503.921875 989.371094 C 1517.050781 1032.460938 1545.300781 1058.238281 1571.789062 1051.320312 C 1588.210938 1047.019531 1595.738281 1051.320312 1595.738281 1064.988281 C 1595.738281 1092.089844 1620.289062 1090.480469 1620.789062 1063.351562 C 1621.148438 1043.859375 1622.929688 1044.089844 1639.320312 1065.769531 C 1652.761719 1083.53125 1661.070312 1086.160156 1671.328125 1075.890625 C 1685.328125 1061.890625 1726.910156 1076.441406 1745.371094 1101.910156 C 1749.691406 1107.851562 1759.398438 1108.929688 1766.941406 1104.269531 C 1791.640625 1089 1781.648438 1141.839844 1755.320312 1165.660156 C 1738.25 1181.109375 1731.089844 1200.808594 1733.359375 1226.121094 C 1735.679688 1252.050781 1731.71875 1262.578125 1720.390625 1260.148438 C 1711.410156 1258.230469 1696.988281 1262.519531 1688.320312 1269.710938 C 1676.761719 1279.320312 1670.488281 1277.339844 1664.71875 1262.300781 C 1657.480469 1243.421875 1654.96875 1243.519531 1632.710938 1263.570312 C 1610.679688 1283.519531 1607.898438 1283.660156 1600.839844 1265.210938 C 1585.230469 1224.570312 1567.890625 1244.769531 1575.808594 1294.351562 C 1581.269531 1328.441406 1579.210938 1343.648438 1569.179688 1343.648438 C 1561.191406 1343.648438 1558.738281 1347.75 1563.738281 1352.75 C 1568.738281 1357.75 1582.058594 1361.910156 1593.328125 1362 C 1604.601562 1362.089844 1615.839844 1372.53125 1618.300781 1385.191406 C 1620.910156 1398.640625 1617.570312 1404.960938 1610.101562 1400.390625 C 1603.128906 1396.078125 1594.320312 1397.621094 1590.488281 1403.808594 C 1586.679688 1409.980469 1592.128906 1418.351562 1602.75 1422.410156 C 1613.308594 1426.460938 1618.890625 1434.710938 1615.140625 1440.769531 C 1604.839844 1457.441406 1535.359375 1464.429688 1529.910156 1449.351562 C 1527.28125 1442.078125 1520.710938 1440.238281 1515.320312 1445.300781 C 1509.921875 1450.328125 1515.5 1465.628906 1527.929688 1479.269531 C 1540.28125 1492.910156 1545.949219 1508.199219 1540.550781 1513.25 C 1535.148438 1518.28125 1528.238281 1515.480469 1525.230469 1507.011719 C 1516.128906 1481.578125 1497.191406 1489.609375 1496.148438 1519.339844 C 1495.609375 1534.589844 1492.390625 1540.140625 1488.96875 1531.660156 C 1480.191406 1509.921875 1459.53125 1512.539062 1440.328125 1537.820312 C 1420.789062 1563.570312 1418.328125 1590.210938 1435.488281 1590.210938 C 1442.269531 1590.210938 1447.820312 1581.890625 1447.820312 1571.71875 C 1447.820312 1561.558594 1453.371094 1553.230469 1460.148438 1553.230469 C 1466.929688 1553.230469 1472.46875 1567.109375 1472.46875 1584.050781 C 1472.46875 1628.871094 1529.761719 1627.898438 1546.910156 1582.78125 C 1555.070312 1561.320312 1565.320312 1553.089844 1577.910156 1557.929688 C 1588.25 1561.890625 1606.949219 1558.828125 1619.46875 1550.929688 C 1646.769531 1533.871094 1719.011719 1558.449219 1719.011719 1584.789062 C 1719.011719 1608.640625 1742.28125 1619.011719 1760.980469 1603.488281 C 1777.519531 1589.761719 1848.109375 1591.910156 1862.800781 1606.601562 C 1867.25 1611.058594 1862.25 1624.429688 1851.890625 1636.339844 C 1839.179688 1650.828125 1836.191406 1666.140625 1842.890625 1682.640625 C 1860.761719 1726.738281 1855.339844 1735.820312 1806.269531 1744.109375 C 1756.949219 1752.441406 1738.859375 1772.871094 1751.539062 1805.910156 C 1760.921875 1830.351562 1738.679688 1829.609375 1718.089844 1804.820312 C 1704.648438 1788.640625 1699.558594 1788.089844 1688.839844 1801.730469 C 1681.699219 1810.820312 1667.550781 1818.839844 1657.378906 1819.558594 C 1647.21875 1820.289062 1620.859375 1824.890625 1598.828125 1829.78125 C 1566.78125 1836.910156 1558.769531 1834.800781 1558.769531 1819.21875 C 1558.769531 1808.511719 1552.890625 1799.75 1545.710938 1799.75 C 1538.53125 1799.75 1536.070312 1805.289062 1540.28125 1812.070312 C 1551.179688 1829.730469 1538.820312 1827.289062 1519.460938 1807.980469 C 1510.441406 1798.941406 1487.398438 1787.640625 1468.28125 1782.839844 C 1439.070312 1775.519531 1434.191406 1777.640625 1437.808594 1796.171875 C 1440.878906 1811.898438 1451.339844 1817.148438 1474.21875 1814.46875 C 1500.839844 1811.359375 1507.449219 1816.601562 1512.910156 1845.160156 C 1521.648438 1890.929688 1501.578125 1929.710938 1478.878906 1910.871094 C 1466.710938 1900.78125 1460.070312 1900.839844 1453.738281 1911.058594 C 1444.308594 1926.328125 1390.230469 1917.019531 1364.550781 1895.710938 C 1352.210938 1885.460938 1353.480469 1879.421875 1370.640625 1866.808594 C 1390.640625 1852.121094 1389.609375 1849.808594 1357.640625 1837.609375 C 1338.558594 1830.320312 1317.761719 1824.359375 1311.421875 1824.359375 C 1296.019531 1824.359375 1296.648438 1857.878906 1312.140625 1867.5 C 1318.929688 1871.691406 1324.46875 1884.160156 1324.46875 1895.210938 C 1324.46875 1911.519531 1319.738281 1910.230469 1299.339844 1888.320312 C 1268.101562 1854.789062 1258.058594 1854.078125 1266.410156 1885.988281 C 1273.75 1914.089844 1262.929688 1917.78125 1239.261719 1895.230469 C 1226.039062 1882.628906 1224.699219 1885.449219 1231.921875 1910.628906 C 1243.730469 1951.878906 1272.890625 1996.921875 1287.769531 1996.921875 C 1294.390625 1996.921875 1299.808594 2002.789062 1299.808594 2009.96875 C 1299.808594 2017.152344 1293.410156 2019.0625 1285.570312 2014.226562 C 1263.171875 2000.371094 1213.519531 1997.878906 1213.519531 2010.589844 C 1213.519531 2016.914062 1199.820312 2028.332031 1183.089844 2035.957031 C 1166.339844 2043.578125 1155.808594 2054.921875 1159.660156 2061.152344 C 1163.511719 2067.386719 1177.289062 2062.785156 1190.28125 2051.097656 C 1212.75 2030.761719 1214.789062 2030.875 1231.808594 2053.367188 C 1252.339844 2080.496094 1256.519531 2132.5 1238.171875 2132.5 C 1231.390625 2132.5 1225.851562 2120.355469 1225.851562 2105.488281 C 1225.851562 2079.226562 1225.300781 2079.140625 1208.460938 2102.253906 C 1191.921875 2124.867188 1189.941406 2124.980469 1167.429688 2104.617188 C 1136.871094 2076.960938 1114.898438 2077.332031 1114.898438 2105.527344 C 1114.898438 2135.386719 1082.550781 2178.253906 1069.699219 2165.40625 C 1064.070312 2159.769531 1069.160156 2148.082031 1081.03125 2139.414062 C 1092.878906 2130.742188 1102.578125 2115.082031 1102.578125 2104.605469 C 1102.578125 2094.136719 1122 2062.324219 1145.730469 2033.921875 C 1193.300781 1976.980469 1196.550781 1965.871094 1172.609375 1941.941406 C 1161.148438 1930.480469 1149.929688 1929.269531 1134.699219 1937.789062 C 1104.191406 1954.859375 1100.671875 1945.828125 1121.898438 1904.910156 C 1133.410156 1882.738281 1135.941406 1865.121094 1128.679688 1857.859375 C 1112.089844 1841.261719 1090.269531 1858.398438 1090.269531 1888.058594 C 1090.269531 1905.441406 1084.5 1911.089844 1071.78125 1906.199219 C 1047.730469 1896.960938 1048.078125 1922.378906 1072.5 1957.21875 C 1095.410156 1989.929688 1111.511719 1991.550781 1141.710938 1964.21875 C 1159.5 1948.128906 1164.109375 1947.480469 1163.570312 1961.128906 C 1163.210938 1970.660156 1147.140625 1990.871094 1127.871094 2006.066406 C 1096 2031.195312 1092.109375 2031.78125 1084.75 2012.574219 C 1077.800781 1994.46875 1075 1994.058594 1065.171875 2009.613281 C 1047.589844 2037.402344 1051.171875 2079.765625 1071.75 2087.664062 C 1087.808594 2093.828125 1087.421875 2100.136719 1068.691406 2136.476562 C 1050.289062 2172.242188 1045.191406 2175.457031 1033.128906 2158.957031 C 994.839844 2106.59375 1001.960938 2582.804688 1041.148438 2694.851562 C 1057.910156 2742.761719 1132.410156 2797.179688 1268.660156 2861.03125 C 1325.929688 2887.871094 1375.980469 2914.980469 1379.871094 2921.273438 C 1390.519531 2938.511719 1327.160156 2966.714844 1244.21875 2981.664062 C 1163.410156 2996.230469 1009.25 3003.269531 874.574219 2998.539062 Z M 1028.789062 2039.476562 C 1028.789062 2008.570312 1024.359375 1986.019531 1018.921875 1989.378906 C 1003.878906 1998.671875 1001.191406 2095.675781 1015.960938 2095.675781 C 1023.011719 2095.675781 1028.769531 2070.382812 1028.769531 2039.476562 Z M 1435.570312 1886.121094 C 1435.570312 1879.339844 1430.359375 1873.789062 1423.96875 1873.789062 C 1417.589844 1873.789062 1408.941406 1879.339844 1404.761719 1886.121094 C 1400.570312 1892.898438 1405.851562 1898.441406 1416.359375 1898.441406 C 1426.921875 1898.441406 1435.570312 1892.898438 1435.570312 1886.121094 Z M 1497.210938 1876.269531 C 1497.210938 1863.308594 1470.429688 1836.820312 1457.328125 1836.820312 C 1451.679688 1836.820312 1452.960938 1847.910156 1460.21875 1861.46875 C 1473.25 1885.820312 1497.199219 1895.398438 1497.199219 1876.269531 Z M 1102.75 1830.660156 C 1102.75 1820.488281 1097.210938 1812.171875 1090.429688 1812.171875 C 1083.640625 1812.171875 1078.101562 1820.488281 1078.101562 1830.660156 C 1078.101562 1840.820312 1083.640625 1849.148438 1090.429688 1849.148438 C 1097.210938 1849.148438 1102.75 1840.820312 1102.75 1830.660156 Z M 461.761719 1806 C 470.324219 1795.691406 471.652344 1787.511719 464.777344 1787.511719 C 457.996094 1787.511719 445.546875 1795.839844 437.105469 1806 C 428.542969 1816.308594 427.214844 1824.488281 434.085938 1824.488281 C 440.867188 1824.488281 453.320312 1816.171875 461.757812 1806 Z M 419.203125 1753.179688 C 409.3125 1743.28125 388.246094 1774.550781 387.988281 1799.5 C 387.867188 1811.191406 394.824219 1807.628906 407.546875 1789.460938 C 418.402344 1773.960938 423.65625 1757.628906 419.203125 1753.179688 Z M 1299.980469 1793.679688 C 1299.980469 1783.511719 1290.980469 1775.191406 1279.980469 1775.191406 C 1263.601562 1775.191406 1262.761719 1778.53125 1275.328125 1793.679688 C 1283.761719 1803.839844 1292.761719 1812.171875 1295.320312 1812.171875 C 1297.890625 1812.171875 1299.980469 1803.839844 1299.980469 1793.679688 Z M 1326.890625 1784.839844 C 1318.039062 1776 1312.308594 1775.28125 1312.308594 1782.980469 C 1312.308594 1799.441406 1326.890625 1814.019531 1335.121094 1805.789062 C 1338.628906 1802.28125 1334.929688 1792.859375 1326.898438 1784.839844 Z M 762.449219 1771.96875 C 781.082031 1742.429688 758.742188 1727.769531 738.105469 1755.988281 C 728.488281 1769.128906 720.613281 1784.839844 720.613281 1790.890625 C 720.613281 1807.378906 747.882812 1795.039062 762.441406 1771.960938 Z M 1065.769531 1787.511719 C 1065.769531 1780.730469 1060.230469 1775.191406 1053.441406 1775.191406 C 1046.660156 1775.191406 1041.121094 1780.730469 1041.121094 1787.511719 C 1041.121094 1794.289062 1046.660156 1799.839844 1053.441406 1799.839844 C 1060.230469 1799.839844 1065.769531 1794.289062 1065.769531 1787.511719 Z M 535.722656 1738.210938 C 535.722656 1731.429688 530.175781 1725.878906 523.394531 1725.878906 C 516.613281 1725.878906 511.066406 1731.429688 511.066406 1738.210938 C 511.066406 1744.988281 516.613281 1750.53125 523.394531 1750.53125 C 530.175781 1750.53125 535.722656 1744.988281 535.722656 1738.210938 Z M 750.953125 1714.339844 C 754.828125 1708.070312 753.71875 1700.28125 748.5 1697.050781 C 736.28125 1689.480469 682.320312 1732.769531 691.953125 1742.398438 C 700.207031 1750.648438 740.304688 1731.558594 750.957031 1714.328125 Z M 880.871094 1725.878906 C 880.871094 1712.320312 875.925781 1701.230469 869.871094 1701.230469 C 856.015625 1701.230469 843.089844 1733.289062 852.960938 1743.171875 C 867.796875 1758.011719 880.875 1749.910156 880.875 1725.878906 Z M 837.199219 1726.789062 C 846.308594 1712.050781 823.128906 1697.429688 806.707031 1707.570312 C 792.925781 1716.101562 801.980469 1738.269531 819.234375 1738.269531 C 825.214844 1738.269531 833.289062 1733.109375 837.199219 1726.800781 Z M 1070.019531 1719.25 C 1066.011719 1708.789062 1060.078125 1702.871094 1056.839844 1706.101562 C 1053.609375 1709.339844 1054.628906 1717.898438 1059.101562 1725.121094 C 1071.261719 1744.789062 1078.359375 1740.980469 1070.019531 1719.25 Z M 1127.410156 1700.558594 C 1127.410156 1694.179688 1121.859375 1688.960938 1115.078125 1688.960938 C 1108.300781 1688.960938 1102.75 1697.621094 1102.75 1708.179688 C 1102.75 1718.738281 1108.300781 1723.960938 1115.078125 1719.78125 C 1121.859375 1715.578125 1127.410156 1706.941406 1127.410156 1700.558594 Z M 227.65625 1692.050781 C 237.78125 1676.03125 243.019531 1674.578125 247.957031 1686.398438 C 253.066406 1698.621094 258.609375 1698.980469 271.894531 1688.03125 C 297.894531 1666.460938 292.679688 1649.28125 262.988281 1658.699219 C 245.351562 1664.308594 239.550781 1662.558594 245.222656 1653.371094 C 254.640625 1638.160156 228.242188 1635.070312 209.058594 1649.160156 C 192.167969 1661.570312 186.066406 1713.679688 201.515625 1713.679688 C 208.386719 1713.679688 220.148438 1703.980469 227.660156 1692.109375 Z M 1213.691406 1701.289062 C 1213.691406 1694.511719 1208.148438 1688.960938 1201.359375 1688.960938 C 1194.578125 1688.960938 1189.039062 1694.511719 1189.039062 1701.289062 C 1189.039062 1708.070312 1194.578125 1713.621094 1201.359375 1713.621094 C 1208.148438 1713.621094 1213.691406 1708.070312 1213.691406 1701.289062 Z M 771.457031 1673.351562 C 759.277344 1661.261719 757.878906 1662.679688 764.566406 1680.238281 C 769.203125 1692.398438 776.09375 1699.230469 779.875 1695.441406 C 783.675781 1691.640625 779.882812 1681.691406 771.457031 1673.339844 Z M 843.890625 1676.640625 C 843.890625 1669.859375 838.019531 1664.308594 830.835938 1664.308594 C 823.65625 1664.308594 821.199219 1669.859375 825.398438 1676.640625 C 829.582031 1683.421875 835.472656 1688.960938 838.453125 1688.960938 C 841.4375 1688.960938 843.890625 1683.421875 843.890625 1676.640625 Z M 1198.03125 1619.878906 C 1193.941406 1615.789062 1183.300781 1615.359375 1174.398438 1618.980469 C 1164.570312 1622.898438 1167.488281 1625.828125 1181.859375 1626.429688 C 1194.859375 1626.96875 1202.128906 1624.050781 1198.039062 1619.960938 Z M 1682.109375 1578.019531 C 1682.109375 1571.238281 1676.558594 1565.691406 1669.78125 1565.691406 C 1663 1565.691406 1657.449219 1571.238281 1657.449219 1578.019531 C 1657.449219 1584.808594 1663 1590.351562 1669.78125 1590.351562 C 1676.558594 1590.351562 1682.109375 1584.808594 1682.109375 1578.019531 Z M 1386.269531 1406.179688 C 1386.269531 1399.800781 1380.71875 1391.140625 1373.941406 1386.960938 C 1367.160156 1382.78125 1361.609375 1388.050781 1361.609375 1398.558594 C 1361.609375 1409.121094 1367.160156 1417.78125 1373.941406 1417.78125 C 1380.71875 1417.78125 1386.269531 1412.558594 1386.269531 1406.179688 Z M 1430.640625 1385.730469 C 1426.261719 1374.289062 1419.898438 1367.710938 1416.5 1371.109375 C 1413.121094 1374.488281 1413.910156 1386.621094 1418.320312 1398.058594 C 1422.699219 1409.5 1429.058594 1416.078125 1432.460938 1412.679688 C 1435.839844 1409.300781 1435.039062 1397.171875 1430.640625 1385.730469 Z M 1484.878906 1399.671875 C 1484.878906 1388.640625 1477.660156 1384.339844 1466.390625 1388.648438 C 1456.230469 1392.558594 1447.898438 1400.710938 1447.898438 1406.761719 C 1447.898438 1412.820312 1456.230469 1417.78125 1466.390625 1417.78125 C 1476.558594 1417.78125 1484.878906 1409.640625 1484.878906 1399.671875 Z M 603.519531 1269.851562 C 607.699219 1263.070312 605.589844 1257.53125 598.808594 1257.53125 C 592.027344 1257.53125 583.066406 1263.070312 578.863281 1269.851562 C 574.683594 1276.628906 576.792969 1282.179688 583.574219 1282.179688 C 590.355469 1282.179688 599.320312 1276.628906 603.519531 1269.851562 Z M 178.246094 1232.871094 C 178.246094 1226.089844 175.792969 1220.550781 172.808594 1220.550781 C 169.808594 1220.550781 163.9375 1226.089844 159.757812 1232.871094 C 155.554688 1239.660156 157.9375 1245.199219 165.191406 1245.199219 C 172.375 1245.199219 178.246094 1239.660156 178.246094 1232.871094 Z M 991.8125 1221.269531 C 991.8125 1214.890625 986.265625 1206.238281 979.484375 1202.058594 C 972.703125 1197.871094 967.15625 1183.671875 967.15625 1170.511719 C 967.15625 1144.121094 948.914062 1138.570312 935.183594 1160.789062 C 930.347656 1168.601562 935.550781 1181.691406 946.785156 1189.878906 C 957.984375 1198.078125 967.15625 1211.101562 967.15625 1218.828125 C 967.15625 1226.558594 972.703125 1232.878906 979.484375 1232.878906 C 986.265625 1232.878906 991.8125 1227.660156 991.8125 1221.28125 Z M 769.929688 1201.328125 C 769.929688 1190.769531 775.09375 1185.289062 781.402344 1189.199219 C 787.710938 1193.109375 796.363281 1190.660156 800.617188 1183.769531 C 811.472656 1166.199219 778.023438 1168.070312 760.0625 1186.039062 C 742.066406 1204.039062 740.886719 1220.558594 757.589844 1220.558594 C 764.375 1220.558594 769.917969 1211.898438 769.917969 1201.339844 Z M 1320.730469 1057.988281 C 1316.800781 1048.148438 1313.871094 1051.078125 1313.269531 1065.441406 C 1312.730469 1078.441406 1315.648438 1085.71875 1319.75 1081.621094 C 1323.839844 1077.53125 1324.269531 1066.890625 1320.648438 1058 Z M 967.15625 1060.300781 C 967.15625 1053.519531 973.175781 1049.351562 980.519531 1051.039062 C 987.902344 1052.679688 995.335938 1033.429688 997.101562 1007.96875 C 999.664062 971.128906 997.066406 964.519531 984.191406 975.199219 C 972.410156 984.980469 957.976562 983.558594 930.625 969.910156 C 889.945312 949.621094 878.519531 964.621094 916.554688 988.378906 C 936.625 1000.929688 937.476562 1005.421875 922.609375 1020.300781 C 913.082031 1029.828125 908.953125 1043.558594 913.445312 1050.820312 C 918.625 1059.21875 928.207031 1055.488281 939.753906 1040.589844 C 957.171875 1018.089844 957.644531 1018.25 951.351562 1044.871094 C 947.753906 1060.128906 949.898438 1072.609375 955.96875 1072.609375 C 962.117188 1072.609375 967.152344 1067.070312 967.152344 1060.289062 Z M 504.902344 1047.96875 C 509.085938 1041.191406 506.722656 1035.640625 499.46875 1035.640625 C 492.285156 1035.640625 486.414062 1041.191406 486.414062 1047.96875 C 486.414062 1054.75 488.867188 1060.300781 491.851562 1060.300781 C 494.851562 1060.300781 500.722656 1054.75 504.902344 1047.96875 Z M 762.058594 1041.808594 C 758.152344 1031.640625 749.332031 1023.320312 742.449219 1023.320312 C 735.230469 1023.320312 736.429688 1031.148438 745.265625 1041.808594 C 753.703125 1051.96875 762.539062 1060.300781 764.878906 1060.300781 C 767.222656 1060.300781 765.96875 1051.96875 762.042969 1041.808594 Z M 803.519531 1035.640625 C 801.464844 1008.5 782.257812 1001.078125 782.257812 1027.429688 C 782.257812 1042.128906 793.183594 1060.300781 802.035156 1060.300781 C 803.871094 1060.300781 804.542969 1049.210938 803.488281 1035.640625 Z M 560.375 1035.640625 C 560.375 1028.859375 554.503906 1023.320312 547.320312 1023.320312 C 540.140625 1023.320312 537.683594 1028.859375 541.882812 1035.640625 C 546.085938 1042.429688 551.957031 1047.96875 554.9375 1047.96875 C 557.921875 1047.96875 560.375 1042.429688 560.375 1035.640625 Z M 1226.449219 1016.628906 C 1237.671875 1003.121094 1238.421875 993.800781 1229.039062 984.421875 C 1212.289062 967.679688 1193.878906 978.839844 1185.519531 1010.800781 C 1177.691406 1040.671875 1203.460938 1044.339844 1226.449219 1016.628906 Z M 1287.648438 1011 C 1280.398438 997.429688 1269.109375 986.339844 1262.570312 986.339844 C 1243.03125 986.339844 1249.070312 1008.839844 1272.238281 1022.328125 C 1301.878906 1039.589844 1302.648438 1039.019531 1287.640625 1010.988281 Z M 1490.519531 1010.089844 C 1478.929688 991.328125 1460.410156 997.050781 1468.070312 1017.03125 C 1471.960938 1027.160156 1480.191406 1032.320312 1486.378906 1028.5 C 1492.558594 1024.679688 1494.410156 1016.390625 1490.519531 1010.078125 Z M 720.621094 998.609375 C 720.621094 991.828125 715.078125 986.28125 708.296875 986.28125 C 701.511719 986.28125 695.96875 991.828125 695.96875 998.609375 C 695.96875 1005.390625 701.511719 1010.941406 708.296875 1010.941406 C 715.078125 1010.941406 720.621094 1005.390625 720.621094 998.609375 Z M 880.871094 998.609375 C 880.871094 991.828125 875.324219 986.28125 868.542969 986.28125 C 861.761719 986.28125 856.21875 991.828125 856.21875 998.609375 C 856.21875 1005.390625 861.761719 1010.941406 868.542969 1010.941406 C 875.324219 1010.941406 880.871094 1005.390625 880.871094 998.609375 Z M 1171.828125 952.640625 C 1159.308594 940.121094 1148.960938 958.96875 1159.25 975.609375 C 1167.019531 988.179688 1169.929688 988.191406 1174.089844 975.660156 C 1176.941406 967.089844 1175.929688 956.730469 1171.828125 952.640625 Z M 874.707031 936.96875 C 878.890625 930.191406 876.527344 924.640625 869.269531 924.640625 C 862.089844 924.640625 856.21875 930.191406 856.21875 936.96875 C 856.21875 943.75 858.652344 949.300781 861.652344 949.300781 C 864.636719 949.300781 870.507812 943.75 874.707031 936.96875 Z M 954.832031 936.96875 C 954.832031 930.191406 948.957031 924.640625 941.777344 924.640625 C 934.59375 924.640625 932.15625 930.191406 936.339844 936.96875 C 940.539062 943.75 946.414062 949.300781 949.394531 949.300781 C 952.375 949.300781 954.832031 943.75 954.832031 936.96875 Z M 1250.671875 924.640625 C 1250.671875 917.859375 1248.21875 912.320312 1245.238281 912.320312 C 1242.25 912.320312 1236.359375 917.859375 1232.179688 924.640625 C 1227.980469 931.429688 1230.359375 936.96875 1237.621094 936.96875 C 1244.800781 936.96875 1250.671875 931.429688 1250.671875 924.640625 Z M 1201.359375 899.988281 C 1201.359375 893.210938 1195.820312 887.660156 1189.039062 887.660156 C 1182.261719 887.660156 1176.710938 893.210938 1176.710938 899.988281 C 1176.710938 906.769531 1182.261719 912.320312 1189.039062 912.320312 C 1195.820312 912.320312 1201.359375 906.769531 1201.359375 899.988281 Z M 371.566406 836.050781 C 367.640625 826.210938 364.710938 829.140625 364.113281 843.5 C 363.566406 856.5 366.496094 863.769531 370.585938 859.679688 C 374.675781 855.589844 375.113281 844.949219 371.496094 836.058594 Z M 1054.730469 686.78125 C 1038.910156 670.96875 1022.859375 683.191406 1034.570312 702.148438 C 1039.101562 709.488281 1048.460938 712 1055.371094 707.75 C 1063.789062 702.550781 1063.570312 695.660156 1054.640625 686.800781 Z M 1025.710938 658.589844 C 1013.960938 646.839844 990.410156 665.859375 999.164062 680.03125 C 1004.359375 688.449219 1011.25 688.230469 1020.109375 679.308594 C 1027.371094 672.058594 1029.898438 662.691406 1025.710938 658.511719 Z M 1373.941406 653.460938 C 1373.941406 646.679688 1371.488281 641.140625 1368.5 641.140625 C 1365.519531 641.140625 1359.628906 646.679688 1355.449219 653.460938 C 1351.25 660.25 1353.628906 665.789062 1360.890625 665.789062 C 1368.070312 665.789062 1373.941406 660.25 1373.941406 653.460938 Z M 634.335938 549.410156 C 634.335938 546.429688 628.789062 540.539062 622.007812 536.359375 C 615.226562 532.179688 609.683594 534.539062 609.683594 541.800781 C 609.683594 548.980469 615.226562 554.851562 622.007812 554.851562 C 628.789062 554.851562 634.335938 552.390625 634.335938 549.410156 Z M 612.519531 397.679688 C 620.972656 387.269531 620.972656 382.28125 612.507812 382.28125 C 597.765625 382.28125 584.433594 412.738281 586.457031 441.839844 C 587.546875 457.019531 589.476562 455.949219 593.949219 437.75 C 597.273438 424.191406 605.636719 406.160156 612.519531 397.691406 Z M 667.410156 404.609375 C 663.480469 394.769531 660.554688 397.699219 659.953125 412.058594 C 659.410156 425.058594 662.335938 432.339844 666.425781 428.25 C 670.519531 424.160156 670.953125 413.519531 667.335938 404.621094 Z M 1015.019531 212.769531 C 1025.980469 200.898438 1042.808594 191.199219 1052.421875 191.199219 C 1062.019531 191.199219 1072.480469 183.390625 1075.671875 173.820312 C 1079.800781 161.441406 1075.128906 158.859375 1059.558594 164.859375 C 1044.890625 170.5 1031.910156 165.039062 1020.199219 148.328125 C 999.625 118.949219 979.484375 115.769531 979.484375 141.890625 C 979.484375 152.058594 972.828125 160.390625 964.683594 160.390625 C 953.175781 160.390625 953.175781 163.679688 964.683594 175.179688 C 972.8125 183.328125 979.484375 199.960938 979.484375 212.160156 C 979.484375 240.089844 989.609375 240.269531 1015.019531 212.710938 Z M 883.554688 158.140625 C 875.828125 150.410156 874.121094 158.511719 878.703125 181.019531 C 883.957031 206.820312 887.066406 209.921875 890.648438 192.96875 C 893.320312 180.390625 890.101562 164.710938 883.539062 158.140625 Z M 954.832031 98.75 C 954.832031 91.96875 949.285156 86.429688 942.503906 86.429688 C 935.722656 86.429688 930.175781 91.96875 930.175781 98.75 C 930.175781 105.53125 935.722656 111.078125 942.503906 111.078125 C 949.285156 111.078125 954.832031 105.53125 954.832031 98.75 Z M 1287.648438 2071.03125 C 1287.648438 2064.25 1293.199219 2058.707031 1299.980469 2058.707031 C 1306.761719 2058.707031 1312.308594 2064.25 1312.308594 2071.03125 C 1312.308594 2077.8125 1306.761719 2083.359375 1299.980469 2083.359375 C 1293.199219 2083.359375 1287.648438 2077.8125 1287.648438 2071.03125 Z M 1242.039062 2047.707031 C 1234.019531 2034.871094 1230.769531 2021.097656 1234.769531 2017.082031 C 1242.25 2009.59375 1274.21875 2045.179688 1274.929688 2061.785156 C 1275.648438 2079.203125 1256.601562 2071.042969 1242.03125 2047.714844 Z M 1549.101562 1969 C 1531.460938 1950.230469 1525.101562 1931.871094 1529.898438 1913.53125 C 1533.839844 1898.460938 1539.460938 1886.128906 1542.410156 1886.128906 C 1560.609375 1886.128906 1618.761719 1925.5 1625.148438 1942.148438 C 1638.410156 1976.710938 1633.75 1976.730469 1599.261719 1942.230469 C 1563.289062 1906.261719 1542.179688 1921.238281 1576.070312 1958.679688 C 1616.109375 2002.929688 1590.269531 2012.8125 1549.109375 1968.988281 Z M 1549.101562 1969 "
    />
  </svg>
);
