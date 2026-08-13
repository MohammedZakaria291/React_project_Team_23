import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ProgramCard({ program }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <div className="relative h-44 bg-gray-100">
        <img src={program.image} alt={program.title} className="w-full h-full object-cover" loading="lazy" />
        <span className="absolute top-3 end-3 px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
          {program.fee}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-medium text-lg mb-2">{program.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
          {program.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{program.duration}</span>
          <Link
            to={`/programs/${program.id}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            {t('readMore')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
