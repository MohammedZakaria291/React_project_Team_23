import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import DeanSpeechPage from '../pages/DeanSpeech/DeanSpeechPage';
import StaffMembersPage from '../pages/StaffMembers/StaffMembersPage';
import ProgramsPage from '../pages/Programs/ProgramsPage';
import ProgramDetailsPage from '../pages/Programs/ProgramDetailsPage';
import NewsPage from '../pages/News/NewsPage';
import NewsDetailsPage from '../pages/News/NewsDetailsPage';
import ContactPage from '../pages/Contact/ContactPage';
import BachelorRegulationsPage from '../pages/BachelorRegulations/BachelorRegulationsPage';
import StudySchedulesPage from '../pages/StudySchedules/StudySchedulesPage';
import ExamSchedulesPage from '../pages/ExamSchedules/ExamSchedulesPage';
import StudentGuidePage from '../pages/StudentGuide/StudentGuidePage';
import StudentUnionPage from '../pages/StudentUnion/StudentUnionPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dean-speech" element={<DeanSpeechPage />} />
        <Route path="/staff-members" element={<StaffMembersPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:id" element={<ProgramDetailsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bachelor-student-regulations" element={<BachelorRegulationsPage />} />
        <Route path="/study-schedules" element={<StudySchedulesPage />} />
        <Route path="/exam-schedules" element={<ExamSchedulesPage />} />
        <Route path="/student-guide" element={<StudentGuidePage />} />
        <Route path="/student-union" element={<StudentUnionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
