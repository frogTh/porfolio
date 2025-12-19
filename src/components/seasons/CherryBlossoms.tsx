import { useMemo } from 'react';

interface CherryBlossomsProps {
  count?: number;
}

const CherryBlossoms = ({ count = 25 }: CherryBlossomsProps) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 8,
      // Larger sizes: 16-28px
      size: 16 + Math.random() * 12,
      opacity: 0.6 + Math.random() * 0.4,
      rotation: Math.random() * 360,
      isEmoji: Math.random() > 0.5, // 50% get emoji 🌸
    }));
  }, [count]);

  return (
    <div className="particles-container absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Spring pink glow overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top right, rgba(255,154,158,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at bottom left, rgba(168,230,207,0.1) 0%, transparent 40%)
          `,
        }}
      />

      {petals.map((petal) => (
        petal.isEmoji ? (
          // Emoji blossom 🌸
          <div
            key={petal.id}
            className="cherry-petal absolute"
            style={{
              left: `${petal.left}%`,
              top: '-30px',
              fontSize: `${petal.size * 1.2}px`,
              opacity: petal.opacity,
              animation: `petal-fall ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
              filter: 'drop-shadow(0 0 6px rgba(255,154,158,0.8))',
              transform: `rotate(${petal.rotation}deg)`,
            }}
          >
            🌸
          </div>
        ) : (
          // SVG petal with glow
          <svg
            key={petal.id}
            className="cherry-petal absolute"
            style={{
              left: `${petal.left}%`,
              top: '-30px',
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              opacity: petal.opacity,
              animation: `petal-fall ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
              filter: 'drop-shadow(0 0 6px rgba(255,154,158,0.9))',
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 9 11 12 14C15 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z"
              className="text-pink-300"
            />
          </svg>
        )
      ))}
    </div>
  );
};

export default CherryBlossoms;

