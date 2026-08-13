import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher({ variant = 'nav' }) {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const setLang = (lang) => i18n.changeLanguage(lang);

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1.5 rounded-md text-sm font-bold border ${
            currentLang === 'en' ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-600'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLang('ar')}
          className={`px-3 py-1.5 rounded-md text-sm font-bold border ${
            currentLang === 'ar' ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-600'
          }`}
        >
          عربي
        </button>
      </div>
    );
  }

  return (
    <div className="relative group ms-1">
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase tracking-wide text-ink hover:text-primary transition-colors"
        aria-label="Switch language"
      >
        {currentLang === 'en' ? t('englishLabel') : t('arabicLabel')}
        <ChevronDown size={15} />
      </button>
      <div className="absolute end-0 top-full pt-2 hidden group-hover:block min-w-[120px] z-50">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
          <button
            onClick={() => setLang('en')}
            className="w-full text-start block px-4 py-2 text-sm normal-case text-gray-600 hover:bg-gray-50 hover:text-primary"
          >
            English
          </button>
          <button
            onClick={() => setLang('ar')}
            className="w-full text-start block px-4 py-2 text-sm normal-case text-gray-600 hover:bg-gray-50 hover:text-primary"
          >
            عربي
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
