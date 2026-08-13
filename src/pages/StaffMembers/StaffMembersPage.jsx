import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { programsDirector, facultyMembersData, teachingAssistantsData } from '../../data/staff';
import StaffCard from '../../components/cards/StaffCard';
import SectionTitle from '../../components/ui/SectionTitle';

function StaffMembersPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gray-50 py-10 mb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-900">{t('home')}</Link>
            {' / '}
            <span>{t('navStaffMembers')}</span>
          </div>
          <SectionTitle className="text-4xl">{t('navStaffMembers')}</SectionTitle>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-12 max-w-xs mx-auto">
          <StaffCard member={programsDirector} />
        </div>

        <SectionTitle className="mb-6">{t('facultyMembers')}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {facultyMembersData.map((m) => (
            <StaffCard key={m.id} member={m} />
          ))}
        </div>

        <SectionTitle className="mb-6">{t('teachingAssistants')}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teachingAssistantsData.map((m) => (
            <StaffCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StaffMembersPage;
