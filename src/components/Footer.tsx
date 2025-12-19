import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold gradient-text">
              thang.dev
            </a>
            <p className="text-zinc-600 text-sm mt-1 font-mono">
              // building digital experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-cyan-400 transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-zinc-600 text-sm flex items-center gap-1 justify-center md:justify-end">
              {t('footer.madeWith')}{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-pink-500" />
              </motion.span>
              {' '}{t('footer.by')} Thang
            </p>
            <p className="text-zinc-700 text-xs mt-1 font-mono">
              © {currentYear} {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
