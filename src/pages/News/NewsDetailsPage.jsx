import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { newsData } from '../../data/news';
import EmptyState from '../../components/ui/states/EmptyState';

function NewsDetailsPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const news = newsData.find((n) => n.id === id);

  if (!news) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <EmptyState />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gray-50 py-10 mb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-900">{t('home')}</Link>
            {' / '}
            <Link to="/news" className="hover:text-gray-900">{t('news')}</Link>
            {' / '}
            <span className="truncate">{news.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="rounded-xl overflow-hidden mb-6">
          <img src={news.image} alt={news.title} className="w-full object-cover" loading="lazy" />
        </div>
        <span className="text-sm text-gray-400">{news.date}</span>
        <h1 className="text-3xl font-medium mt-2 mb-6">{news.title}</h1>
        <p className="text-gray-600 leading-relaxed text-lg">{news.summary}</p>

        <div className="mt-8">
          <Link to="/news" className="text-primary font-medium hover:underline">
            &larr; {t('backToNews')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsDetailsPage;
