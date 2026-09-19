// Ikon SVG bertema strawberry (inline, tanpa dependensi tambahan)

export function Strawberry({ size = 48, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 60C18 52 8 38 10 26c1.5-9 9-13 22-13s20.5 4 22 13c2 12-8 26-22 34z"
        fill="#f43f5e"
      />
      <path
        d="M32 60C18 52 8 38 10 26c1-6 5-10 11-12-6 8-5 24 11 46z"
        fill="#fb7185"
        opacity="0.6"
      />
      <g fill="#fff1f2">
        <ellipse cx="22" cy="28" rx="1.6" ry="2.4" />
        <ellipse cx="32" cy="26" rx="1.6" ry="2.4" />
        <ellipse cx="42" cy="28" rx="1.6" ry="2.4" />
        <ellipse cx="27" cy="36" rx="1.6" ry="2.4" />
        <ellipse cx="37" cy="36" rx="1.6" ry="2.4" />
        <ellipse cx="32" cy="45" rx="1.6" ry="2.4" />
        <ellipse cx="20" cy="38" rx="1.6" ry="2.4" />
        <ellipse cx="44" cy="38" rx="1.6" ry="2.4" />
      </g>
      <path
        d="M32 16c-4-5-11-5-15-3 4 1 6 4 7 6-4-1-8 0-10 2 5 1 9 1 12 0 1 2 3 3 6 3s5-1 6-3c3 1 7 1 12 0-2-2-6-3-10-2 1-2 3-5 7-6-4-2-11-2-15 3z"
        fill="#4ade80"
      />
      <path d="M32 16c0-4 1-8 3-10" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function StrawberryCake({ size = 96, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" className={className} aria-hidden="true">
      {/* piring */}
      <ellipse cx="48" cy="82" rx="38" ry="7" fill="#fbcfe8" />
      <ellipse cx="48" cy="80" rx="38" ry="7" fill="#fce7f3" />
      {/* badan kue */}
      <path d="M18 46h60v30c0 3-3 5-6 5H24c-3 0-6-2-6-5z" fill="#ffe4e6" />
      <rect x="18" y="58" width="60" height="7" fill="#fda4af" />
      <rect x="18" y="70" width="60" height="6" fill="#fda4af" opacity="0.7" />
      {/* krim atas */}
      <path
        d="M14 46c0-9 8-14 34-14s34 5 34 14c0 4-4 6-8 4-3 6-8 6-11 1-3 6-9 6-12 0-3 6-9 6-12 0-3 5-8 5-11-1-4 2-8 0-8-4z"
        fill="#ffffff"
      />
      <path
        d="M14 46c0-9 8-14 34-14s34 5 34 14c0 1-1 2-2 3-3-8-14-11-32-11S19 41 16 49c-1-1-2-2-2-3z"
        fill="#fce7f3"
      />
      {/* strawberry di atas */}
      <g transform="translate(30 6) scale(0.6)">
        <path d="M32 60C18 52 8 38 10 26c1.5-9 9-13 22-13s20.5 4 22 13c2 12-8 26-22 34z" fill="#f43f5e" />
        <g fill="#fff1f2">
          <ellipse cx="24" cy="30" rx="1.8" ry="2.6" />
          <ellipse cx="40" cy="30" rx="1.8" ry="2.6" />
          <ellipse cx="32" cy="38" rx="1.8" ry="2.6" />
          <ellipse cx="32" cy="27" rx="1.8" ry="2.6" />
        </g>
        <path d="M32 16c-4-5-11-5-15-3 4 1 6 4 7 6 3 1 6 1 8 0 2 1 4 1 7 0 1-2 3-5 7-6-4-2-11-2-15 3z" fill="#4ade80" />
      </g>
      {/* strawberry kecil kiri & kanan */}
      <g transform="translate(9 26) scale(0.32)">
        <path d="M32 60C18 52 8 38 10 26c1.5-9 9-13 22-13s20.5 4 22 13c2 12-8 26-22 34z" fill="#fb7185" />
        <path d="M32 16c-4-5-11-5-15-3 4 1 6 4 7 6 3 1 6 1 8 0 2 1 4 1 7 0 1-2 3-5 7-6-4-2-11-2-15 3z" fill="#4ade80" />
      </g>
      <g transform="translate(64 26) scale(0.32)">
        <path d="M32 60C18 52 8 38 10 26c1.5-9 9-13 22-13s20.5 4 22 13c2 12-8 26-22 34z" fill="#fb7185" />
        <path d="M32 16c-4-5-11-5-15-3 4 1 6 4 7 6 3 1 6 1 8 0 2 1 4 1 7 0 1-2 3-5 7-6-4-2-11-2-15 3z" fill="#4ade80" />
      </g>
    </svg>
  );
}

export function StrawberryMilk({ size = 96, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" className={className} aria-hidden="true">
      {/* sedotan */}
      <path d="M58 6l-6 30" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" />
      <path d="M58 6l-6 30" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeDasharray="4 6" />
      {/* gelas */}
      <path d="M24 26h48l-5 58c-.3 3-2.5 5-5.5 5H34.5c-3 0-5.2-2-5.5-5z" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2" />
      {/* susu strawberry */}
      <path d="M26.2 40h43.600l-3.9 44c-.3 3-2.5 5-5.5 5H35.5c-3 0-5.2-2-5.5-5z" fill="#fda4af" />
      <path d="M26.2 40c6-4 12-4 18 0s12 4 18 0l7.6 0-.6 6H26.800z" fill="#fecdd3" />
      <path d="M33 46l3 36" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* strawberry di gelas */}
      <g transform="translate(34 50) scale(0.45)">
        <path d="M32 60C18 52 8 38 10 26c1.5-9 9-13 22-13s20.5 4 22 13c2 12-8 26-22 34z" fill="#f43f5e" />
        <g fill="#fff1f2">
          <ellipse cx="24" cy="30" rx="2" ry="3" />
          <ellipse cx="40" cy="30" rx="2" ry="3" />
          <ellipse cx="32" cy="40" rx="2" ry="3" />
        </g>
        <path d="M32 16c-4-5-11-5-15-3 4 1 6 4 7 6 3 1 6 1 8 0 2 1 4 1 7 0 1-2 3-5 7-6-4-2-11-2-15 3z" fill="#4ade80" />
      </g>
      {/* gelembung */}
      <circle cx="30" cy="20" r="3" fill="#fbcfe8" />
      <circle cx="22" cy="12" r="2" fill="#fce7f3" />
      <circle cx="76" cy="20" r="2.5" fill="#fbcfe8" />
    </svg>
  );
}

export function Heart({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 21s-8-5.3-8-11a4.5 4.5 0 018-2.800A4.5 4.5 0 0120 10c0 5.7-8 11-8 11z"
        fill="currentColor"
      />
    </svg>
  );
}
