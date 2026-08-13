import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import Logo from '../../components/ui/Logo';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black border-t border-gray-200 mt-16 text-zinc-50">
      <div className=" max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-10 w-10" />
              <span className="font-extrabold text-zinc-50">{t('siteName')}</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">{t('footerDesc')}</p>
          </div>

          <div>
            <h4 className="font-bold mb-3 uppercase text-sm tracking-wide">{t('quickLinks')}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/news" className="text-sm text-zinc-50 hover:text-primary">{t('news')}</Link>
              <Link to="/programs" className="text-sm text-zinc-50 hover:text-primary">{t('programs')}</Link>
              <Link to="/contact" className="text-sm text-zinc-50 hover:text-primary">{t('contact')}</Link>
              <Link to="/about" className="text-sm text-zinc-50 hover:text-primary">{t('navAboutCollege')}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3 uppercase text-sm tracking-wide">{t('contactInfo')}</h4>
            <p className="text-sm text-zinc-50 leading-relaxed">{siteConfig.address}</p>
            <p className="text-sm text-zinc-50 mt-2">Email: {siteConfig.email}</p>
          </div>

          <div>
            <h4 className="font-bold mb-3 uppercase text-sm tracking-wide">{t('followUs')}</h4>
            <div className="flex items-center gap-3">
              <a href={siteConfig.socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary transition-colors">
                <Twitter size={16} />
              </a>
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary transition-colors">
                <Youtube size={16} />
              </a>
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
            <a href="https://cs.bnu.edu.eg/albums" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-primary hover:underline font-medium">
              {t('album')}
            </a>
          </div>
        </div>

        <div className="text-center mt-10 pt-6 border-t border-gray-200 text-xs text-gray-400">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
