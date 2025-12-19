import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { ref, isInView } = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyan-500/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <span className="section-number">05</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-4 mb-12"
          >
            <a 
              href={`mailto:${personalInfo.email}`}
              className="bento-card p-6 flex flex-col items-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                <FaEnvelope className="text-xl text-zinc-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-zinc-500 text-sm mb-1">{t('contact.email')}</p>
              <p className="text-white text-sm font-medium">{personalInfo.email}</p>
            </a>

            <a 
              href={`tel:${personalInfo.phone}`}
              className="bento-card p-6 flex flex-col items-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all">
                <FaPhone className="text-xl text-zinc-400 group-hover:text-green-400 transition-colors" />
              </div>
              <p className="text-zinc-500 text-sm mb-1">{t('contact.phone')}</p>
              <p className="text-white text-sm font-medium">{personalInfo.phone}</p>
            </a>

            <div className="bento-card p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-xl text-zinc-400" />
              </div>
              <p className="text-zinc-500 text-sm mb-1">{t('contact.location')}</p>
              <p className="text-white text-sm font-medium">{personalInfo.location}</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4 mb-12"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bento-card hover:border-zinc-700 transition-all group"
            >
              <FaGithub className="text-xl text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-zinc-400 group-hover:text-white transition-colors">@qthanggg</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bento-card hover:border-blue-500/30 transition-all group"
            >
              <FaLinkedin className="text-xl text-zinc-400 group-hover:text-blue-400 transition-colors" />
              <span className="text-zinc-400 group-hover:text-white transition-colors">thangpham2603</span>
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-glow text-lg"
            >
              <FaPaperPlane />
              <span>{t('contact.sendMessage')}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
