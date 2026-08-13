import { Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function LoadingState() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
      <Loader2 className="animate-spin mb-3" size={32} />
      <p>{t('loading')}</p>
    </div>
  );
}

export default LoadingState;
