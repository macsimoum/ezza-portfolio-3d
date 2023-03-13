import { BrowserRouter } from "react-router-dom";
import { NavbarComponent } from "./components/navbar.component.jsx";
import { HeroComponent } from "./components/hero.component.jsx";
import AboutComponent from "./components/about.component.jsx";
import ExperienceComponent from "./components/experience.component.jsx";
import TechComponent from "./components/tech.component.jsx";
import WorksComponent from "./components/works.component.jsx";
import ContactComponent from "./components/contact.component.jsx";
import { StarsCanvasComponent } from "./components/start-canvas.component.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavbarComponent />
          <HeroComponent />
        </div>
        <AboutComponent />
        <ExperienceComponent />
        <TechComponent />
        <WorksComponent />
        <div className="relative z-0">
          <ContactComponent />
          <StarsCanvasComponent />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
