import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { projects } from '../data/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

// Import real project screenshots
import tradexpoImg from '../assets/projects/tradexpo.png';
import arobidImg from '../assets/projects/arobid.png';

// Map project IDs to their screenshots
const projectImages: Record<string, string> = {
  'tradexpo': tradexpoImg,
  'arobid': arobidImg,
};

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/[0.02] via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative">
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
            <span className="section-number">03</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t('projects.title')}</h2>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="relative"
              >
                {/* Large Project Card */}
                <div className="bento-card p-0 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Visual Side - Real Screenshot */}
                    <div className={`relative aspect-video lg:aspect-auto min-h-[300px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      {/* Real Project Screenshot */}
                      <img 
                        src={projectImages[project.id]} 
                        alt={`${project.title} - ${project.subtitle}`}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                      
                      {/* Overlay gradient for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                      
                      {/* Metrics overlay */}
                      {project.metrics && (
                        <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                          {project.metrics.map((metric, i) => (
                            <div 
                              key={i} 
                              className="bg-[#050505]/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-800"
                            >
                              <div className="text-lg font-bold text-white">{metric.value}</div>
                              <div className="text-xs text-zinc-400">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Hover overlay with View Live button */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-[#050505]/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-glow"
                        >
                          <FaEye />
                          <span>{t('projects.viewLive')}</span>
                        </a>
                      </motion.div>
                    </div>

                    {/* Info Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <span className="text-cyan-400 font-mono text-sm mb-4">{t('projects.sectionLabel')}</span>
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-xl text-zinc-400 mb-6">{project.subtitle}</p>
                      
                      <p className="text-zinc-400 mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <p className="text-zinc-500 text-sm mb-3">{t('projects.features')}:</p>
                      <ul className="space-y-3 mb-8">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-300">
                            <span className="text-cyan-400 mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>

                      {/* Link */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors link-underline w-fit"
                      >
                        <span>{t('projects.viewLive')}</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
