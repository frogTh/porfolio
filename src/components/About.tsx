import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaCube, FaBolt, FaGraduationCap } from 'react-icons/fa';
import { education } from '../data/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { ref, isInView } = useScrollAnimation();
  const { t } = useTranslation();

  const expertiseKeys = ['vr', 'realtime', 'monorepo', 'performance'] as const;
  const iconMap: Record<string, React.ElementType> = {
    'vr': FaCube,
    'realtime': FaBolt,
    'monorepo': FaCode,
    'performance': FaRocket,
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-16"
          >
            <span className="section-number">01</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t('about.title')}</h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            
            {/* Bio Card - Large */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 lg:col-span-2 bento-card p-8"
            >
              <span className="text-zinc-500 text-sm font-mono block mb-4">{t('about.sectionLabel')}</span>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                {t('about.bio')}
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bento-card p-6 flex flex-col justify-between"
            >
              <div>
                <FaGraduationCap className="text-2xl text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold mb-1">{t('about.university')}</h3>
                <p className="text-cyan-400 text-sm">{t('about.degree')}</p>
              </div>
              <p className="text-zinc-500 text-sm font-mono mt-4">{education.period}</p>
            </motion.div>

            {/* Quick Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="bento-card p-6 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"
            >
              <div className="text-5xl font-bold gradient-text mb-2">1+</div>
              <p className="text-zinc-400">{t('about.yearsExp')}</p>
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <div className="text-3xl font-bold text-white mb-1">3</div>
                <p className="text-zinc-500 text-sm">{t('about.companies')}</p>
              </div>
            </motion.div>

            {/* Expertise Cards */}
            {expertiseKeys.map((key, index) => {
              const Icon = iconMap[key] || FaCode;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bento-card p-6 group hover:bg-gradient-to-br hover:from-cyan-500/5 hover:to-transparent"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-cyan-500/30 transition-colors">
                    <Icon className="text-xl text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{t(`about.expertise.${key}.title`)}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{t(`about.expertise.${key}.desc`)}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
