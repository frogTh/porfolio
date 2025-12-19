import { useMemo } from 'react';

interface SnowfallProps {
  count?: number;
}

const Snowfall = ({ count = 40 }: SnowfallProps) => {
  const snowflakes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 8,
      // Larger sizes: 4-12px for dots, some get special snowflake symbol
      size: 4 + Math.random() * 8,
      opacity: 0.7 + Math.random() * 0.3,
      isSymbol: Math.random() > 0.6, // 40% get snowflake symbol ❄
    }));
  }, [count]);

  return (
    <div className="particles-container absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Enhanced winter frost overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top center, rgba(165,180,252,0.2) 0%, transparent 50%),
            radial-gradient(ellipse at bottom left, rgba(96,165,250,0.1) 0%, transparent 40%)
          `,
        }}
      />
      
      {snowflakes.map((flake) => (
        flake.isSymbol ? (
          // Snowflake symbol ❄ for 40% of particles
          <div
            key={flake.id}
            className="snowflake absolute text-white"
            style={{
              left: `${flake.left}%`,
              top: '-20px',
              fontSize: `${flake.size * 2}px`,
              opacity: flake.opacity,
              animation: `snow-fall ${flake.duration}s linear infinite, snow-drift 4s ease-in-out infinite`,
              animationDelay: `${flake.delay}s`,
              textShadow: '0 0 8px rgba(255,255,255,0.9), 0 0 16px rgba(165,180,252,0.7)',
              filter: 'drop-shadow(0 0 4px white)',
            }}
          >
            ❄
          </div>
        ) : (
          // Regular circular snowflake
          <div
            key={flake.id}
            className="snowflake absolute rounded-full bg-white"
            style={{
              left: `${flake.left}%`,
              top: '-10px',
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              animation: `snow-fall ${flake.duration}s linear infinite, snow-drift 3s ease-in-out infinite`,
              animationDelay: `${flake.delay}s`,
              boxShadow: '0 0 8px rgba(255,255,255,0.9), 0 0 16px rgba(165,180,252,0.5)',
            }}
          />
        )
      ))}
    </div>
  );
};

export default Snowfall;

