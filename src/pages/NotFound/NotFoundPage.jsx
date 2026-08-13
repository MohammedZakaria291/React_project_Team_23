import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="text-center py-32 px-6">
      <div className="text-8xl font-medium text-primary mb-4">404</div>
      <h1 className="text-3xl font-medium mb-4">{t('notFoundTitle')}</h1>
      <p className="text-gray-500 mb-8">{t('notFoundDesc')}</p>
      <Link to="/" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
        {t('backHome')}
      </Link>
    </div>
  );
}

export default NotFoundPage;
