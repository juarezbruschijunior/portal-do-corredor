/* ============================================================
   AD SPACE — Placeholder para Google AdSense
   Sizes: banner (728x90), sidebar (300x250), inline (468x60)
   ============================================================ */

interface AdSpaceProps {
  size?: "banner" | "sidebar" | "inline" | "leaderboard";
  className?: string;
}

const adSizes = {
  banner: { width: "100%", height: "90px", label: "Banner — 728×90 (Google AdSense)" },
  sidebar: { width: "300px", height: "250px", label: "Sidebar — 300×250 (Google AdSense)" },
  inline: { width: "100%", height: "60px", label: "Inline — 468×60 (Google AdSense)" },
  leaderboard: { width: "100%", height: "90px", label: "Leaderboard — 970×90 (Google AdSense)" },
};

export default function AdSpace({ size = "banner", className = "" }: AdSpaceProps) {
  const config = adSizes[size];

  return (
    <div
      className={`ad-space rounded flex-col gap-1 ${className}`}
      style={{ width: config.width, minHeight: config.height }}
    >
      <svg className="w-5 h-5 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
      <span className="text-center px-4">{config.label}</span>
      <span className="text-[10px] opacity-60">Espaço para Publicidade</span>
    </div>
  );
}
