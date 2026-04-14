import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import styles from './App.module.css';
import PageLayout from './shared/ui/PageLayout/PageLayout';
import TopNav from './shared/ui/TopNav/TopNav';
import HeroSection from './features/hero/presentation/HeroSection';
import CaseStudiesSection from './features/case-studies/presentation/CaseStudiesSection';
import CaseStudyPage from './features/case-studies/presentation/CaseStudyPage';

function HomePage() {
  return (
    <PageLayout variant="hero">
      <HeroSection />
      <CaseStudiesSection />
    </PageLayout>
  );
}

function AppShell() {
  const location = useLocation();
  const isLightPage = location.pathname.startsWith('/case-studies/');

  return (
    <div className={styles.root} data-theme={isLightPage ? 'light' : undefined}>
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/shadow-it" element={<CaseStudyPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
