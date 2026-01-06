import lekiIcon from "@/assets/leki-icon.png";

interface LekiIconProps {
  size?: number;
  className?: string;
}

export function LekiIcon({ size = 16, className = "" }: LekiIconProps) {
  return (
    <img 
      src={lekiIcon} 
      alt="" 
      className={`inline-block invert brightness-200 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
