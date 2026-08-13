import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HeroSection from './sections/HeroSection';
import { newsData } from '../../data/news';
import { programsData } from '../../data/programs';
import ProgramCard from '../../components/cards/ProgramCard';
import SectionTitle from '../../components/ui/SectionTitle';
import NewsCarousel from '../../components/ui/NewsCarousel';
import { siteConfig } from '../../data/siteConfig';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6">
        {}
        <section className="py-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-bold tracking-widest uppercase">{t('newsEyebrow')}</span>
              <span className="h-px w-8 bg-primary" />
            </div>
            <SectionTitle className="text-3xl md:text-4xl font-extrabold">{t('newsTitle')}</SectionTitle>
          </div>

          <NewsCarousel items={newsData} />

          <div className="text-center mt-8">
            <Link to="/news" className="inline-block px-6 py-3 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors">
              {t('viewAllNews')}
            </Link>
          </div>
        </section>

        {}
        <section className="py-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-bold tracking-widest uppercase">{t('programsEyebrow')}</span>
              <span className="h-px w-8 bg-primary" />
            </div>
            <SectionTitle className="text-3xl md:text-4xl font-extrabold">{t('programsTitle')}</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programsData.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        </section>

        {}
        <section className="py-16">
          <SectionTitle className="mb-6 text-center">{t('aboutSectionTitle')}</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden">
              <img src={siteConfig.aboutImage} alt={t('aboutSectionTitle')} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">{t('aboutWelcome')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t('aboutHomeP1')}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{t('aboutHomeP2')}</p>
              <Link to="/about" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors">
                {t('readMore')}
              </Link>
            </div>
          </div>
        </section>

        {}
        <section className="py-16">
          <SectionTitle className="mb-6 text-center">{t('visionMissionTitle')}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-primary font-medium mb-3 text-lg">{t('vision')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('visionText')}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-primary font-medium mb-3 text-lg">{t('mission')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('missionText')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
