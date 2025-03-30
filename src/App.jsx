import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/hero/HeroMain";
import HeroGradient from "./components/hero/HeroGradient";
import SubHero from "./components/subHero/SubHero";
import AboutMeMain from "./components/about/AboutMeMain";
import SkillsMain from "./components/skills/SkillsMain";
import ProjectsMain from "./components/projects/ProjectMain";
import ContactMeMain from "./components/contact/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import SubSkills from "./components/skills/SubSkills";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHero />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      {/* <ExperienceMain /> */}
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
