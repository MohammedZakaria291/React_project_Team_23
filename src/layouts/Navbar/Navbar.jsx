import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from '../../components/ui/Logo';
import { siteConfig } from '../../data/siteConfig';

function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);

  const homeDropdown = [
    { path: '/dean-speech', key: 'navDeanSpeech' },
    { path: '/contact', key: 'navComplaints' },
    { path: '/about', key: 'navAboutCollege' },
    { path: '/staff-members', key: 'navStaffMembers' },
  ];

  const studentsDropdown = [
    { href: siteConfig.studentPortalUrl, key: 'navStudentPortal', external: true },
    { path: '/bachelor-student-regulations', key: 'navBachelorRegs' },
    { path: '/study-schedules', key: 'navStudySchedules' },
    { path: '/exam-schedules', key: 'navExamSchedules' },
    { path: '/student-guide', key: 'navStudentGuide' },
    { path: '/student-union', key: 'navStudentUnion' },
  ];

  const isActiveGroup = (items) => items.some((i) => i.path && location.pathname === i.path);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-ink">
      <div className="flex items-stretch justify-between">
        <div className="flex-1 max-w-7xl mx-auto w-full px-6 h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setMobileOpen(false)}>
            <Logo className="h-14 w-14" />
            <span className="hidden sm:block text-lg md:text-xl font-extrabold text-primary leading-tight">
              {t('siteName')}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            <NavGroup
              label={t('home')}
              to="/"
              items={homeDropdown}
              active={location.pathname === '/' || isActiveGroup(homeDropdown)}
              t={t}
            />
            <NavGroup label={t('students')} items={studentsDropdown} active={isActiveGroup(studentsDropdown)} t={t} />
            <Link
              to="/programs"
              className={`px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                location.pathname.startsWith('/programs') ? 'text-primary' : 'text-ink hover:text-primary'
              }`}
            >
              {t('programs')}
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                location.pathname === '/contact' ? 'text-primary' : 'text-ink hover:text-primary'
              }`}
            >
              {t('contact')}
            </Link>
            <LanguageSwitcher variant="nav" />
          </div>

          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Edge-to-edge Join Us panel, desktop only */}
        <a
          href={siteConfig.admissionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-8 bg-primary text-white text-sm font-bold hover:bg-primary-hover transition-colors shrink-0"
        >
          {t('joinUs')}
          <ArrowRight size={16} />
        </a>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 p-4 overflow-y-auto">
          <div className="flex flex-col gap-1">
            <MobileGroup
              label={t('home')}
              to="/"
              items={homeDropdown}
              open={openMobileGroup === 'home'}
              onToggle={() => setOpenMobileGroup(openMobileGroup === 'home' ? null : 'home')}
              onNavigate={() => setMobileOpen(false)}
              t={t}
            />
            <MobileGroup
              label={t('students')}
              items={studentsDropdown}
              open={openMobileGroup === 'students'}
              onToggle={() => setOpenMobileGroup(openMobileGroup === 'students' ? null : 'students')}
              onNavigate={() => setMobileOpen(false)}
              t={t}
            />
            <Link
              to="/programs"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-base font-bold uppercase text-ink hover:bg-gray-50"
            >
              {t('programs')}
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-base font-bold uppercase text-ink hover:bg-gray-50"
            >
              {t('contact')}
            </Link>
            <div className="px-4 py-3">
              <LanguageSwitcher variant="mobile" />
            </div>
            <a
              href={siteConfig.admissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-bold bg-primary text-white text-center"
            >
              {t('joinUs')} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavGroup({ label, to, items, active, t }) {
  return (
    <div className="relative group">
      {to ? (
        <Link
          to={to}
          className={`flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
            active ? 'text-primary' : 'text-ink hover:text-primary'
          }`}
        >
          {label}
          <ChevronDown size={15} />
        </Link>
      ) : (
        <button
          type="button"
          className={`flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
            active ? 'text-primary' : 'text-ink hover:text-primary'
          }`}
        >
          {label}
          <ChevronDown size={15} />
        </button>
      )}
      <div className="absolute start-0 top-full pt-2 hidden group-hover:block min-w-[240px] z-50">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
          {items.map((item) =>
            item.external ? (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm font-normal normal-case text-gray-600 hover:bg-gray-50 hover:text-primary"
              >
                {t(item.key)}
              </a>
            ) : (
              <Link
                key={item.key}
                to={item.path}
                className="block px-4 py-2 text-sm font-normal normal-case text-gray-600 hover:bg-gray-50 hover:text-primary"
              >
                {t(item.key)}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({ label, to, items, open, onToggle, onNavigate, t }) {
  return (
    <div className="border-b border-gray-100">
      <div className="flex items-center">
        {to ? (
          <Link to={to} onClick={onNavigate} className="flex-1 px-4 py-3 text-base font-bold uppercase text-ink">
            {label}
          </Link>
        ) : (
          <span className="flex-1 px-4 py-3 text-base font-bold uppercase text-ink">{label}</span>
        )}
        <button onClick={onToggle} className="p-3 text-gray-500" aria-label="Toggle submenu">
          <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="pb-2 ps-4">
          {items.map((item) =>
            item.external ? (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-500 hover:text-primary"
              >
                {t(item.key)}
              </a>
            ) : (
              <Link
                key={item.key}
                to={item.path}
                onClick={onNavigate}
                className="block px-4 py-2 text-sm text-gray-500 hover:text-primary"
              >
                {t(item.key)}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
