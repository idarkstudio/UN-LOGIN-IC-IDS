import React, { useEffect, useState } from "react";

import About from "./components/About.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import ROMUniverse from "./components/ROMUniverse.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Token from "./components/Token.jsx";

// import { useActor } from "./hooks/useActor";

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.games": "Games",
    "nav.token": "Token",
    "nav.roadmap": "Roadmap",
    "nav.contact": "Contact",
    "nav.darkpitch": "The Dark Pitch",

    // Hero
    "hero.title": "The Dark Side of Imagination",
    "hero.subtitle":
      "Latin America's premier Web3 game studio creating fully on-chain gaming experiences",
    "hero.cta": "Explore the Universe",

    // About
    "about.title": "About Inside Dark Studio",
    "about.description":
      "We are a Latin American game studio pioneering the future of Web3 gaming with fully on-chain games and decentralized infrastructure.",
    "about.highlight1": "Cross-chain Technology",
    "about.highlight2": "KernNetz SDK",
    "about.highlight3": "NFT Asset Streaming",
    "about.highlight4": "100% On-chain Games",
    "about.cta": "About Us",

    // About Us Page
    "aboutus.title": "About Inside Dark Studio",
    "aboutus.subtitle": "Where Academic Excellence Meets Industry Innovation",
    "aboutus.team.title": "Our Team",
    "aboutus.team.description":
      "A powerhouse collective of 30 visionary minds, combining the rigorous analytical depth of academic professors with the battle-tested expertise of industry veterans from Warner, Blizzard, Bandai Namco, Nway, and Roblox. This unique fusion creates an unparalleled force in Web3 gaming development.",
    "aboutus.leadership.title": "Leadership Team",
    "aboutus.vision.title": "Our Vision",
    "aboutus.vision.description":
      "We don't just build games—we architect digital universes. Our approach merges scholarly precision with creative audacity, establishing new paradigms in decentralized gaming that will define the industry's future.",
    "aboutus.expertise.title": "Expertise & Innovation",
    "aboutus.expertise.description":
      "Our multidisciplinary approach combines cutting-edge research methodologies with proven industry practices, creating solutions that are both theoretically sound and commercially viable.",

    // ROM Universe
    "rom.title": "ROM Universe",
    "rom.subtitle": "8 Connected Games in One Ecosystem",

    // Token
    "token.title": "Ancient Gold (AGLD)",
    "token.subtitle": "The native token powering the ROM Universe ecosystem",
    "token.uses": "Token Uses",
    "token.earning": "Earning Methods",
    "token.genesis": "Genesis Collection",

    // Roadmap
    "roadmap.title": "Development Roadmap",
    "roadmap.subtitle": "Our journey to revolutionize Web3 gaming",

    // Contact
    "contact.title": "Join the Dark Side",
    "contact.subtitle": "Contact the Inside Dark",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",

    // Footer
    "footer.built": "Copyright - Inside Dark Studio",
  },
  es: {
    // Navigation
    "nav.about": "Acerca",
    "nav.games": "Juegos",
    "nav.token": "Token",
    "nav.roadmap": "Hoja de Ruta",
    "nav.contact": "Contacto",
    "nav.darkpitch": "The Dark Pitch",

    // Hero
    "hero.title": "El Lado Oscuro de la Imaginación",
    "hero.subtitle":
      "El estudio de juegos Web3 líder de América Latina creando experiencias de juego completamente on-chain",
    "hero.cta": "Explorar el Universo",

    // About
    "about.title": "Acerca de Inside Dark Studio",
    "about.description":
      "Somos un estudio de juegos latinoamericano pionero en el futuro de los juegos Web3 con juegos completamente on-chain e infraestructura descentralizada.",
    "about.highlight1": "Tecnología Cross-chain",
    "about.highlight2": "KernNetz SDK",
    "about.highlight3": "Streaming de Assets NFT",
    "about.highlight4": "Juegos 100% On-chain",
    "about.cta": "Acerca de Nosotros",

    // About Us Page
    "aboutus.title": "Acerca de Inside Dark Studio",
    "aboutus.subtitle": "Donde la Excelencia Académica se Encuentra con la Innovación Industrial",
    "aboutus.team.title": "Nuestro Equipo",
    "aboutus.team.description":
      "Un colectivo poderoso de 30 mentes visionarias, combinando la profundidad analítica rigurosa de profesores académicos con la experiencia probada en batalla de veteranos de la industria de Warner, Blizzard, Bandai Namco, Nway y Roblox. Esta fusión única crea una fuerza sin paralelo en el desarrollo de juegos Web3.",
    "aboutus.leadership.title": "Equipo de Liderazgo",
    "aboutus.vision.title": "Nuestra Visión",
    "aboutus.vision.description":
      "No solo construimos juegos—arquitectamos universos digitales. Nuestro enfoque fusiona la precisión académica con la audacia creativa, estableciendo nuevos paradigmas en juegos descentralizados que definirán el futuro de la industria.",
    "aboutus.expertise.title": "Experiencia e Innovación",
    "aboutus.expertise.description":
      "Nuestro enfoque multidisciplinario combina metodologías de investigación de vanguardia con prácticas industriales probadas, creando soluciones que son tanto teóricamente sólidas como comercialmente viables.",

    // ROM Universe
    "rom.title": "Universo ROM",
    "rom.subtitle": "8 Juegos Conectados en Un Ecosistema",

    // Token
    "token.title": "Oro Ancestral (AGLD)",
    "token.subtitle": "El token nativo que impulsa el ecosistema del Universo ROM",
    "token.uses": "Usos del Token",
    "token.earning": "Métodos de Ganancia",
    "token.genesis": "Colección Génesis",

    // Roadmap
    "roadmap.title": "Hoja de Ruta de Desarrollo",
    "roadmap.subtitle": "Nuestro viaje para revolucionar los juegos Web3",

    // Contact
    "contact.title": "Únete al Lado Oscuro",
    "contact.subtitle": "¿Listo para explorar el universo?",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",

    // Footer
    "footer.built": "Copyright - Inside Dark Studio",
  },
};

export const LanguageContext = React.createContext({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export const NavigationContext = React.createContext({
  currentPage: "home",
  setCurrentPage: () => {},
});

function App() {
  const [language, setLanguage] = useState("en");
  const [currentPage, setCurrentPage] = useState("home");
  // const { actor } = useActor();

  const t = (key) => {
    return translations[language][key] || key;
  };

  // Load user language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem("ids-language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference
  useEffect(() => {
    localStorage.setItem("ids-language", language);
  }, [language]);

  const languageContextValue = {
    language,
    setLanguage,
    t,
  };

  const navigationContextValue = {
    currentPage,
    setCurrentPage,
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <NavigationContext.Provider value={navigationContextValue}>
        <div className="min-h-screen bg-black text-white">
          <Navigation />
          {currentPage === "home" ? (
            <>
              <Hero />
              <About />
              <ROMUniverse />
              <Token />
              {/* <Roadmap /> */}
              <Contact />
              <Footer />
            </>
          ) : currentPage === "about-us" ? (
            <AboutUs />
          ) : null}
        </div>
      </NavigationContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
