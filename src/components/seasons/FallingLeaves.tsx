import { useMemo } from 'react';

interface FallingLeavesProps {
  count?: number;
}

const leafColors = ['#e07b39', '#d4a574', '#aa5c3d', '#c45c26', '#8b4513'];
const leafEmojis = ['🍁', '🍂', '🍃'];

const FallingLeaves = ({ count = 20 }: FallingLeavesProps) => {
  const leaves = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 12 + Math.random() * 10,
      // Larger sizes: 20-35px
      size: 20 + Math.random() * 15,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      rotate: Math.random() * 360,
      isEmoji: Math.random() > 0.4, // 60% get emoji
      emoji: leafEmojis[Math.floor(Math.random() * leafEmojis.length)],
    }));
  }, [count]);

  return (
    <div className="particles-container absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Autumn warm overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(224,123,57,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(170,92,61,0.08) 0%, transparent 40%)
          `,
        }}
      />
      
      {leaves.map((leaf) => (
        leaf.isEmoji ? (
          // Emoji leaf 🍁🍂🍃
          <div
            key={leaf.id}
            className="autumn-leaf absolute"
            style={{
              left: `${leaf.left}%`,
              top: '-40px',
              fontSize: `${leaf.size}px`,
              animation: `leaf-fall ${leaf.duration}s ease-in-out infinite`,
              animationDelay: `${leaf.delay}s`,
              filter: 'drop-shadow(0 0 6px rgba(224,123,57,0.7))',
              transform: `rotate(${leaf.rotate}deg)`,
            }}
          >
            {leaf.emoji}
          </div>
        ) : (
          // SVG maple leaf with glow
          <svg
            key={leaf.id}
            className="autumn-leaf absolute"
            style={{
              left: `${leaf.left}%`,
              top: '-40px',
              width: `${leaf.size}px`,
              height: `${leaf.size}px`,
              animation: `leaf-fall ${leaf.duration}s ease-in-out infinite`,
              animationDelay: `${leaf.delay}s`,
              transform: `rotate(${leaf.rotate}deg)`,
              filter: 'drop-shadow(0 0 6px rgba(224,123,57,0.8))',
            }}
            viewBox="0 0 24 24"
            fill={leaf.color}
          >
            <path d="M12 2L9 7L4 6L6 11L2 14L7 15L6 20L12 17L18 20L17 15L22 14L18 11L20 6L15 7L12 2Z" />
          </svg>
        )
      ))}
    </div>
  );
};

export default FallingLeaves;

