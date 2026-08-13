import { Inbox } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function EmptyState({ message }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
      <Inbox size={48} className="mb-3 opacity-50" />
      <p>{message || t('noResults')}</p>
    </div>
  );
}

export default EmptyState;
