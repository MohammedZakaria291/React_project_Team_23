import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FileText, Download } from 'lucide-react';
import SectionTitle from '../../components/ui/SectionTitle';

const PDF_URL = 'https://cs.bnu.edu.eg/images/bachelorStudent/1736859300.pdf';
const COVER_IMAGE = 'https://cs.bnu.edu.eg/images/bachelorStudent/1736861058.webp';

function BachelorRegulationsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gray-50 py-10 mb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-900">{t('home')}</Link>
            {' / '}
            <span>{t('navBachelorRegs')}</span>
          </div>
          <SectionTitle className="text-4xl">{t('navBachelorRegs')}</SectionTitle>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <img src={COVER_IMAGE} alt={t('bachelorRegsDocTitle')} className="w-full object-cover" loading="lazy" />
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="text-primary shrink-0 mt-1" size={22} />
              <h3 className="font-medium leading-relaxed">{t('bachelorRegsDocTitle')}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                <FileText size={16} /> {t('viewPdf')}
              </a>
              <a
                href={PDF_URL}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Download size={16} /> {t('downloadPdf')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BachelorRegulationsPage;
