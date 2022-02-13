import Topbar from "./komponente/topbar/Topbar";
import Intro from "./komponente/intro/Intro";
import Portfolio from "./komponente/portfolio/Portfolio";
import Works from "./komponente/Works/Works";
import Testamonials from "./komponente/testimonials/Testimonials";
import Contact from "./komponente/contact/Contact";
import Menu from "./komponente/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testamonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
