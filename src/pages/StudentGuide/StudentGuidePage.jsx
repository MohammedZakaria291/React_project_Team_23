import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';
import EmptyState from '../../components/ui/states/EmptyState';

function StudentGuidePage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gray-50 py-10 mb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-900">{t('home')}</Link>
            {' / '}
            <span>{t('navStudentGuide')}</span>
          </div>
          <SectionTitle className="text-4xl">{t('navStudentGuide')}</SectionTitle>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <EmptyState message={t('notYetPublished')} />
      </div>
    </div>
  );
}

export default StudentGuidePage;
