import FuturisticNavbar from './components/FuturisticNavbar';
import FuturisticHero from './sections/FuturisticHero';
import FuturisticAbout from './sections/FuturisticAbout';
import FuturisticProjects from './sections/FuturisticProjects';
import FuturisticSkills from './sections/FuturisticSkills';
import FuturisticContact from './sections/FuturisticContact';
import FuturisticFooter from './components/FuturisticFooter';

function App() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white overflow-hidden">
      <FuturisticNavbar />
      <main className="relative">
        <FuturisticHero />
        <FuturisticAbout />
        <FuturisticSkills />
        <FuturisticProjects />
        <FuturisticContact />
      </main>
      <FuturisticFooter />
    </div>
  );
}

export default App;
