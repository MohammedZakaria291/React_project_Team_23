import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { newsData } from '../../data/news';
import NewsCard from '../../components/cards/NewsCard';
import SectionTitle from '../../components/ui/SectionTitle';

function NewsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gray-50 py-10 mb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-900">{t('home')}</Link>
            {' / '}
            <span>{t('news')}</span>
          </div>
          <SectionTitle className="text-4xl">{t('newsTitle')}</SectionTitle>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
