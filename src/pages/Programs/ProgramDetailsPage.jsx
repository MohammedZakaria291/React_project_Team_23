import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { programsData } from '../../data/programs';
import { siteConfig } from '../../data/siteConfig';
import EmptyState from '../../components/ui/states/EmptyState';

function ProgramDetailsPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const program = programsData.find((p) => p.id === id);

  if (!program) {
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
            <Link to="/programs" className="hover:text-gray-900">{t('programs')}</Link>
            {' / '}
            <span>{program.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="rounded-xl overflow-hidden mb-8">
          <img src={program.image} alt={program.title} className="w-full object-cover" loading="lazy" />
        </div>

        <h1 className="text-3xl font-medium mb-4">{program.title}</h1>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">{program.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="text-xs text-gray-400 mb-1">{t('tuitionFees')}</div>
            <div className="text-xl font-medium text-primary">{program.fee}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="text-xs text-gray-400 mb-1">{t('duration')}</div>
            <div className="text-xl font-medium text-primary">{program.duration}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={siteConfig.admissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors"
          >
            {t('joinUs')}
          </a>
          <Link
            to="/programs"
            className="px-6 py-3 bg-white border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            {t('backToPrograms')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetailsPage;
