import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';
import { siteConfig } from '../../data/siteConfig';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gray-50 py-10 mb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-900">{t('home')}</Link>
            {' / '}
            <span>{t('navAboutCollege')}</span>
          </div>
          <SectionTitle className="text-4xl">{t('aboutPageTitle')}</SectionTitle>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-xl overflow-hidden mb-8">
          <img src={siteConfig.aboutImage} alt={t('aboutPageTitle')} className="w-full object-cover" loading="lazy" />
        </div>

        <h1 className="text-2xl md:text-3xl font-medium mb-4">{t('aboutWelcome')}</h1>

        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>{t('aboutP1')}</p>
          <p>{t('aboutP2')}</p>
        </div>

        <h3 className="font-medium text-lg mt-8 mb-4">{t('aboutOffersTitle')}</h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span><strong>{t('aboutOffer1Title')}:</strong> {t('aboutOffer1')}</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span><strong>{t('aboutOffer2Title')}:</strong> {t('aboutOffer2')}</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span><strong>{t('aboutOffer3Title')}:</strong> {t('aboutOffer3')}</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span><strong>{t('aboutOffer4Title')}:</strong> {t('aboutOffer4')}</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span><strong>{t('aboutOffer5Title')}:</strong> {t('aboutOffer5')}</span>
          </li>
        </ul>

        <h3 className="font-medium text-lg mt-8 mb-4">{t('aboutStructureTitle')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
            <div className="text-2xl font-medium text-primary mb-1">136</div>
            <div className="text-sm text-gray-500">{t('aboutCreditHours')}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
            <div className="text-2xl font-medium text-primary mb-1">8</div>
            <div className="text-sm text-gray-500">{t('aboutSemesters')}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
            <div className="text-2xl font-medium text-primary mb-1">B.Sc.</div>
            <div className="text-sm text-gray-500">{t('aboutDegree')}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-primary font-medium mb-3 text-lg">{t('vision')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t('visionText')}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-primary font-medium mb-3 text-lg">{t('mission')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t('missionText')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
