import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '../data/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { ref, isInView } = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-16"
          >
            <span className="section-number">02</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t('experience.title')}</h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-20" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-[#050505] z-10">
                  <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="bento-card p-8">
                    {/* Header */}
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      {index === 0 && (
                        <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium mb-4">
                          {t('experience.present')}
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-cyan-400 font-semibold">{exp.company}</span>
                        {exp.companyUrl && (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-cyan-400 transition-colors"
                          >
                            <FaExternalLinkAlt className="text-xs" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Meta */}
                    <div className={`flex flex-wrap gap-4 text-sm text-zinc-500 mt-4 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <span className="flex items-center gap-1">
                        <FaCalendar className="text-zinc-600" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-zinc-600" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Project highlight */}
                    {exp.project && (
                      <div className={`mt-6 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 ${
                        index % 2 === 0 ? 'md:text-right' : ''
                      }`}>
                        <p className="text-zinc-400 text-sm mb-1">{t('experience.viewProject')}</p>
                        <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className="text-white font-medium">{exp.project}</span>
                          {exp.projectUrl && (
                            <a
                              href={exp.projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-400 hover:underline text-sm flex items-center gap-1"
                            >
                              Live <FaExternalLinkAlt className="text-xs" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <p className={`text-zinc-400 mt-6 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description}
                    </p>

                    {/* Key highlights */}
                    <div className="mt-6">
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.highlights.slice(0, 3).map((highlight, i) => (
                          <li key={i} className={`flex items-start gap-2 text-sm text-zinc-400 ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                          }`}>
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className={`flex flex-wrap gap-2 mt-6 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.tech.slice(0, 5).map((tech) => (
                        <span key={tech} className="tech-tag text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
