/* global React */

const RocketIcon = ({ size = 40, strokeWidth = 1.8 }) =>
  <svg width={size} height={size * 64 / 48} viewBox="0 0 48 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4 C30 11 32 19 32 26 V44 H16 V26 C16 19 18 11 24 4 Z" />
    <circle cx="24" cy="22" r="3.4" />
    <path d="M16 34 H32" />
    <path d="M16 36 L8 48 V53 L16 50" />
    <path d="M32 36 L40 48 V53 L32 50" />
    <path d="M19 44 V50 H29 V44" />
    <path d="M22 54 L21 60" /><path d="M24 54 V62" /><path d="M26 54 L27 60" />
  </svg>;

const StarIcon = ({ size = 22 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
    <path d="M12 3l2.7 5.7 6.3.9-4.6 4.4 1.1 6.2L12 17.3 6.5 20.2l1.1-6.2L3 9.6l6.3-.9L12 3z" />
  </svg>;

const TrophyIcon = ({ size = 40, strokeWidth = 1.8 }) =>
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 8 H34 V20 C34 26 29.5 31 24 31 C18.5 31 14 26 14 20 V8 Z" />
    <path d="M14 12 H10 C7 12 6 14 6 16.5 C6 20 9 22 14 22" />
    <path d="M34 12 H38 C41 12 42 14 42 16.5 C42 20 39 22 34 22" />
    <path d="M24 31 V37" /><path d="M18 37 H30 V43 H18 Z" /><path d="M14 43 H34" />
  </svg>;

const PawIcon = ({ size = 18, color = "currentColor" }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <ellipse cx="6" cy="10" rx="2" ry="2.6" />
    <ellipse cx="18" cy="10" rx="2" ry="2.6" />
    <ellipse cx="9.5" cy="5.5" rx="1.8" ry="2.3" />
    <ellipse cx="14.5" cy="5.5" rx="1.8" ry="2.3" />
    <path d="M12 11.5c3.2 0 5.6 2.6 5.6 5.4 0 1.7-1.4 2.6-3 2.6-1.1 0-1.7-.5-2.6-.5s-1.5.5-2.6.5c-1.6 0-3-.9-3-2.6 0-2.8 2.4-5.4 5.6-5.4Z" />
  </svg>;

const PhoneIcon = ({ size = 18 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="3" width="12" height="18" rx="2.5" /><path d="M11 18h2" />
  </svg>;

const MenuIcon = ({ size = 22 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>;

const CloseIcon = ({ size = 22 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>;

const ArrowIcon = ({ size = 18 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>;

const ChevronIcon = ({ size = 20, dir = "right" }) => {
  const rotate = { right: 0, left: 180, down: 90, up: -90 }[dir] || 0;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
};

const StoreIcon = ({ size = 56, strokeWidth = 1.8 }) =>
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h22l-2 3a4 4 0 0 1-7 0 4 4 0 0 1-7 0 4 4 0 0 1-6 0L5 12Z" />
    <path d="M5 12l2-5h18l2 5" /><path d="M7 16v10h18V16" /><path d="M14 26v-6h4v6" />
  </svg>;

const HospitalIcon = ({ size = 56, strokeWidth = 1.8 }) =>
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 28V10h20v18" /><path d="M3 28h26" />
    <path d="M16 14v8M12 18h8" />
    <path d="M11 28v-4h4v4M17 28v-4h4v4" />
  </svg>;

const ClinicIcon = ({ size = 56, strokeWidth = 1.8 }) =>
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="20" height="20" rx="2" />
    <path d="M16 11v10M11 16h10" />
  </svg>;

const HouseCallIcon = ({ size = 56, strokeWidth = 1.8 }) =>
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 15 16 6l11 9" /><path d="M8 13v13h16V13" />
    <circle cx="16" cy="19" r="3" /><path d="M14 17.5l1.3 1.5 3-3" />
  </svg>;

const SpecialtyIcon = ({ size = 56, strokeWidth = 1.8 }) =>
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="13" r="7" />
    <path d="M12 24l-2 4M20 24l2 4M16 20v8" /><path d="M13 12l2 2 4-4" />
  </svg>;

/* Platform logos (simplified SVG representations) */

const InstagramIcon = ({ size = 44 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>;

const WhatsAppIcon = ({ size = 44 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.8L2.05 22l5.37-1.41c1.37.74 2.93 1.16 4.62 1.16 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m0 1.67c4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24c-1.56 0-3.01-.43-4.26-1.19l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.19-4.34c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07s.89 2.39 1.01 2.56c.12.17 1.75 2.67 4.23 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.1-.23-.16-.48-.27-.25-.12-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23a7.47 7.47 0 0 1-1.38-1.71c-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.48-.01z"/>
  </svg>;

const FacebookIcon = ({ size = 44 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.098 10.125 24v-8.438H7.077v-3.49h3.048V9.41c0-3.026 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.098 24 18.1 24 12.073z" />
  </svg>;

const GoogleMapsIcon = ({ size = 44 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>;

const WebIcon = ({ size = 44 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>;

const UserIcon = ({ size = 56 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>;
