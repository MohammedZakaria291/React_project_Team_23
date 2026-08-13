import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const DEAN_IMAGE = 'https://cs.bnu.edu.eg/images/deanspeech/1741556189.jpg';

function DeanSpeechPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gray-50 py-10 mb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-900">{t('home')}</Link>
            {' / '}
            <span>{t('navDeanSpeech')}</span>
          </div>
          <SectionTitle className="text-4xl">{t('navDeanSpeech')}</SectionTitle>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="rounded-xl overflow-hidden mb-8 max-w-sm">
          <img src={DEAN_IMAGE} alt={t('navDeanSpeech')} className="w-full object-cover" loading="lazy" />
        </div>

        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>{t('deanSpeechP1')}</p>
          <p>{t('deanSpeechP2')}</p>
          <p>{t('deanSpeechP3')}</p>
          <p>{t('deanSpeechP4')}</p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="font-medium text-gray-800">Prof. Shady Yehia El-Mashad</p>
          <p className="text-sm text-gray-500">{t('deanSpeechSignature')}</p>
        </div>
      </div>
    </div>
  );
}

export default DeanSpeechPage;
