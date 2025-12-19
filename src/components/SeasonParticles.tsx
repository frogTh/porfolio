import { useSeason } from '../context/SeasonProvider';
import CherryBlossoms from './seasons/CherryBlossoms';
import SummerGlow from './seasons/SummerGlow';
import FallingLeaves from './seasons/FallingLeaves';
import Snowfall from './seasons/Snowfall';

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

// Global particles component that renders based on current season
const SeasonParticles = ({ forceSeason }: { forceSeason?: Season }  ) => {
  const { season } = useSeason();

  const seasonToRender = forceSeason || season;

  switch (seasonToRender) {
    case 'spring':
      return <CherryBlossoms count={20} />;
    case 'summer':
      return <SummerGlow sparkleCount={5} />;
    case 'autumn':
      return <FallingLeaves count={15} />;
    case 'winter':
      return <Snowfall count={35} />;
    default:
      return null;
  }
};

export default SeasonParticles;
