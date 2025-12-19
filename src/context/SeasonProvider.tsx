import React, { createContext, useContext, useMemo, type ReactNode } from 'react';

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface SeasonContextType {
  season: Season;
  seasonEmoji: string;
  seasonName: {
    en: string;
    vi: string;
  };
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

// Determine season based on current month
function getCurrentSeason(): Season {
  const month = new Date().getMonth() + 1; // 1-12
  
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter'; // 12, 1, 2
}

const seasonData: Record<Season, { emoji: string; en: string; vi: string }> = {
  spring: { emoji: '🌸', en: 'Spring', vi: 'Xuân' },
  summer: { emoji: '☀️', en: 'Summer', vi: 'Hạ' },
  autumn: { emoji: '🍂', en: 'Autumn', vi: 'Thu' },
  winter: { emoji: '❄️', en: 'Winter', vi: 'Đông' },
};

interface SeasonProviderProps {
  children: ReactNode;
  forceSeason?: Season; // For testing/preview different seasons
}

export const SeasonProvider: React.FC<SeasonProviderProps> = ({ children, forceSeason }) => {
  const season = forceSeason ?? getCurrentSeason();
  
  const value = useMemo(() => ({
    season,
    seasonEmoji: seasonData[season].emoji,
    seasonName: {
      en: seasonData[season].en,
      vi: seasonData[season].vi,
    },
  }), [season]);

  return (
    <SeasonContext.Provider value={value}>
      <div className={`season-${season}`}>
        {children}
      </div>
    </SeasonContext.Provider>
  );
};

export const useSeason = () => {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error('useSeason must be used within a SeasonProvider');
  }
  return context;
};

export default SeasonProvider;
