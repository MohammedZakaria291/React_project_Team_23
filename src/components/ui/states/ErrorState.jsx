import { AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function ErrorState({ onRetry }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
      <AlertCircle size={48} className="mb-3 text-red-400" />
      <p className="mb-4">{t('errorLoading')}</p>
      {onRetry && (
        <button onClick={onRetry} className="px-4 py-2 bg-primary text-white rounded-lg text-sm">
          {t('retry')}
        </button>
      )}
    </div>
  );
}

export default ErrorState;
