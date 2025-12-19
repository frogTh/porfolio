import { useMemo } from 'react';

interface SummerGlowProps {
  sparkleCount?: number;
}

const SummerGlow = ({ sparkleCount = 20 }: SummerGlowProps) => {
  const sparkles = useMemo(() => {
    return Array.from({ length: sparkleCount }, (_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 4,
      // Larger sparkles: 4-8px for dots, emojis larger
      size: 4 + Math.random() * 4,
      isEmoji: Math.random() > 0.5, // 50% get emoji ✨
    }));
  }, [sparkleCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large sun glow in corner */}
      <div 
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
        style={{
          background: `
            radial-gradient(circle, rgba(255,220,100,0.5) 0%, rgba(255,180,80,0.3) 30%, transparent 60%)
          `,
          animation: 'sun-pulse 4s ease-in-out infinite',
          filter: 'blur(10px)',
        }}
      />
      
      {/* Sun emoji in corner */}
      <div 
        className="absolute top-4 right-4"
        style={{
          fontSize: '48px',
          animation: 'sun-pulse 5s ease-in-out infinite',
          filter: 'drop-shadow(0 0 20px rgba(255,200,100,0.9))',
        }}
      >
        ☀️
      </div>
      
      {/* Secondary warm overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top center, rgba(255,200,100,0.12) 0%, transparent 50%),
            linear-gradient(180deg, rgba(255,236,210,0.08) 0%, transparent 100%)
          `,
        }}
      />
      
      {/* Rising sparkles */}
      {sparkles.map((sparkle) => (
        sparkle.isEmoji ? (
          // Emoji sparkle ✨
          <div
            key={sparkle.id}
            className="sparkle absolute"
            style={{
              left: `${sparkle.left}%`,
              bottom: '5%',
              fontSize: `${sparkle.size * 4}px`,
              animation: `sparkle-float ${sparkle.duration}s ease-out infinite`,
              animationDelay: `${sparkle.delay}s`,
              filter: 'drop-shadow(0 0 8px rgba(255,200,100,0.9))',
            }}
          >
            ✨
          </div>
        ) : (
          // Regular glowing dot
          <div
            key={sparkle.id}
            className="sparkle absolute rounded-full bg-amber-300"
            style={{
              left: `${sparkle.left}%`,
              bottom: '5%',
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              animation: `sparkle-float ${sparkle.duration}s ease-out infinite`,
              animationDelay: `${sparkle.delay}s`,
              boxShadow: '0 0 10px rgba(255,180,100,0.9), 0 0 20px rgba(255,150,50,0.6)',
            }}
          />
        )
      ))}
    </div>
  );
};

export default SummerGlow;

