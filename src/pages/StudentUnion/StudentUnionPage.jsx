import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { universityLeadership, unionLeadership, unionCommittees } from '../../data/studentUnion';
import StaffCard from '../../components/cards/StaffCard';
import SectionTitle from '../../components/ui/SectionTitle';

function StudentUnionPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gray-50 py-10 mb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-900">{t('home')}</Link>
            {' / '}
            <span>{t('navStudentUnion')}</span>
          </div>
          <SectionTitle className="text-4xl">{t('navStudentUnion')}</SectionTitle>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {universityLeadership.map((m, i) => (
            <StaffCard key={i} member={m} />
          ))}
        </div>

        <SectionTitle className="mb-6">{t('unionLeadership')}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {unionLeadership.map((m, i) => (
            <StaffCard key={i} member={m} />
          ))}
        </div>

        <SectionTitle className="mb-6">{t('unionCommittees')}</SectionTitle>
        <div className="space-y-10">
          {unionCommittees.map((committee, i) => (
            <div key={i}>
              <h3 className="font-medium text-lg mb-4">{committee.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {committee.members.map((m, j) => (
                  <StaffCard key={j} member={m} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentUnionPage;
