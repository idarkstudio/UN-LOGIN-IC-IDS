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
    "about.description2":
      "We combine cutting-edge blockchain technology with immersive gaming experiences, creating a new paradigm for digital entertainment in Latin America and beyond.",
    "about.highlight1": "Cross-chain Technology",
    "about.highlight1.description": "Seamless interoperability across multiple blockchains",
    "about.highlight2": "KernNetz SDK",
    "about.highlight2.description": "Advanced SDK for Web3 game development",
    "about.highlight3": "NFT Asset Streaming",
    "about.highlight3.description": "Real-time NFT asset streaming technology",
    "about.highlight4": "100% On-chain Games",
    "about.highlight4.description": "Complete decentralization with on-chain logic",
    "about.cta": "About Us",
    "about.mission": "Our Mission",
    "about.mission.description":
      "To revolutionize the gaming industry by creating truly decentralized, player-owned gaming experiences that empower communities and foster innovation across Latin America's vibrant gaming ecosystem.",
    "about.ids": "Latin America's Web3 Gaming Pioneer",

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
    "rom.subtitle":
      "Enter a mystical multiverse where eight interconnected realms weave together the fabric of existence itself. Each world tells a fragment of an eternal story, where heroes rise, civilizations fall, and the very nature of reality is questioned and reshaped.",
    "rom.quote":
      "In the ROM Universe, every choice echoes across dimensions, every victory reshapes individual games.",
    "btn.ready": "Discover This Realm",
    "btn.coming": "Coming Soon",
    "vilintrius.description":
      "2D dungeon crawler game where the player, as Rick, navigates a mysterious temple, uncovering its secrets while trying to survive and escape.",
    "vilintrius.text":
      "The gateway to understanding the deeper mysteries of the ROM Universe begins here.",
    "tbfz.description":
      "FPS game join the forces in the battlefield, zhion is still at war and all the factions trying to control their land, battle royale mode, and all the classic modes for this one​.",
    "tbfz.text":
      "The eternal conflict that shapes the very foundations of reality across all realms.",
    "bit.description":
      "Turn-based, tabletop-inspired game where slot mechanics meet tactical decision-making. Players compete in strategic rounds powered by a dynamic slot machine system that determines actions, outcomes and power-ups.",
    "bit.text": "Where the boundaries between digital and physical reality dissolve into chaos.",
    "ths.description":
      "MOBA style game, with a little changes of game style and a few game modes, including anrts, classic deathmatch, team deathmatch, capture the flag and a few others.",
    "ths.text": "The proving ground where mortals transcend their limitations to become legends.",
    "vetirent.description":
      "Card game play with forces of the unknown and discover some new magic styles inside this cards, all the nfts from the universe are cards.",
    "vetirent.text": "The ancient art of Vetirent magic, channeled through mystical card mastery.",
    "fortress.description":
      "Each player will get their own dimension where they can build anything they want and welcome their own fortress in the metaverse where everything is decided by them​.",
    "fortress.text":
      "Sanctuaries of hope built to withstand the storms of an uncertain multiverse.",
    "vetirents.description":
      "Turn base game, explore what happened after the great release, and try to find there manence of vetirent’s scatter around the multiverse​.",
    "vetirents.text":
      "The eternal search for artifacts that bridge the gap between mortal and divine.",
    "rom.description":
      "RPGMMO starting with exploring the cave of vetirent’s in Zhion together with Rick and discover all that happened after the great release, forge alliances and play together with your faction to conquest Zhion land in a massive world​",
    "rom.text":
      "The final revelation where all threads of the ROM Universe converge in terrifying clarity.",
    "multiverse.title": "The Interconnected Multiverse",
    "multiverse.description":
      "Each realm exists as both a standalone epic and an integral part of a greater cosmic narrative. Characters, artifacts, and consequences flow between worlds, creating an ever-evolving tapestry of legend.",
    "bigcard.title": "The Eternal Cycle",
    "bigcard.description":
      "In the ROM Universe, every ending marks a new beginning, every defeat plants the seeds of future triumph, and every journey expands a living mythology. The Vetirents—an ancient race of unimaginable power—act as the silent architects of destiny, weaving together realms and timelines. Their legacy—through relics, knowledge, and forgotten truths—echoes across every dimension, every battle, every quest for meaning.",
    "bigcard.1.title": "Mystical Connections",
    "bigcard.1.description":
      "Your NFTs transcend individual games. Whether characters, relics, or achievements, they carry over across all ROM experiences—your legend lives on, no matter the world you enter.",
    "bigcard.2.title": "Forgotten Relics",
    "bigcard.2.description":
      "The artifacts left behind by the Vetirents are more than ancient treasures. They hold fragments of primal knowledge, keys to unlocking the hidden truths of the ROM Universe.",
    "bigcard.3.title": "Evolving Narrative",
    "bigcard.3.description":
      "Every choice you make ripples through time. Your actions shape not just one story, but the evolving destiny of an entire multiverse built around you.",
    "bigcard.quote":
      "Step into the ROM Universe, where your legend begins not with a single game, but with your first choice in an infinite tapestry of interconnected destinies.",

    // Token
    "token.title": "Ancient Gold (AGLD)",
    "token.subtitle": "The native token powering the ROM Universe ecosystem",
    "token.uses": "Token Uses",
    "token.uses.1.title": "In-Game Purchases",
    "token.uses.1.description": "Buy items, upgrades, and premium content",
    "token.uses.2.title": "Staking Rewards",
    "token.uses.2.description": "Earn passive income by staking AGLD tokens",
    "token.uses.3.title": "Governance Rights",
    "token.uses.3.description": "Vote on game updates and ecosystem decisions",
    "token.uses.4.title": "Cross-Game Currency",
    "token.uses.4.description": "Use AGLD across all ROM Universe games",
    "token.earning": "Earning Methods",
    "token.earning.1": "Complete daily quests and challenges",
    "token.earning.2": "Win competitive tournaments",
    "token.earning.3": "Trade rare NFT items",
    "token.earning.4": "Participate in governance voting",
    "token.earning.5": "Refer new players to the ecosystem",
    "token.earning.6": "Create and sell in-game content",
    "token.genesis": "Genesis Collection",
    "token.genesis.description":
      "666 hand-finished NFTs, each representing a unique part of the ROM Universe. Designed for OG supporters and featuring iconic early concept art from our development journey.",
    "token.rarity": "Rarity System",
    "token.rarity.1": "Legendary",
    "token.rarity.2": "Epic",
    "token.rarity.3": "Rare",
    "token.rarity.4": "Uncommon",
    "token.rarity.5": "Common",
    "token.rarity.perk": "Rarity-Based Perks",
    "token.rarity.perk.1.title": "Stack of Gold",
    "token.rarity.perk.1.subtitle": "Ancient Gold amounts distributed by rarity level",
    "token.rarity.perk.1.description":
      "Higher rarity NFTs receive larger Ancient Gold rewards upon claiming",
    "token.rarity.perk.2.title": "Gold Club",
    "token.rarity.perk.2.subtitle": "Monthly gold delivery with 10% growth",
    "token.rarity.perk.2.description":
      "Monthly Ancient Gold delivery that grows 10% each month, stackable for multiple NFT holders",
    "token.rarity.perk.3.title": "Master of Negotiations",
    "token.rarity.perk.3.subtitle": "Marketplace discounts and fee waivers",
    "token.rarity.perk.3.description":
      "Marketplace discounts by rarity level, auction house fees waived (non-stackable)",
    "token.details.title": "Ancient Gold (AGLD) Details",
    "token.details.1.title": "Currency Features",
    "token.details.1.1": "Primary in-game currency across ROM Universe",
    "token.details.1.2": "Tradeable for ICP on supported exchanges",
    "token.details.1.3": "Used for purchases, upgrades, and premium content",
    "token.details.2.title": "Anti-Abuse Measures",
    "token.details.2.1": "One claim per wallet address",
    "token.details.2.2": "30-day claim window for rewards",
    "token.details.2.3": "Verified ownership requirements",
    "token.holders.title": "Shared Genesis Holder Perks",
    "token.holders.1": "Unique NFT ownership verification",
    "token.holders.2": "Special in-game pets and companions",
    "token.holders.3": "Discord rank privileges and channels",
    "token.holders.4": "Exclusive vanity items and cosmetics",
    "token.holders.5": "Genesis avatar access and customization",
    "token.holders.6": "Early access to new game releases",
    "token.factions.title": "Three Factions",
    "token.factions.1.title": "Emperor's Armada",
    "token.factions.1.description":
      "Elite imperial forces commanding the galaxy with iron discipline",
    "token.factions.2.title": "Civil Defense",
    "token.factions.2.description": "Protectors of civilian populations and peaceful settlements",
    "token.factions.3.title": "Extraneus Mercenarius",
    "token.factions.3.description": "Independent mercenaries operating beyond the law",
    "token.og.title": "For the OG Community",
    "token.og.description":
      "The Genesis Collection is crafted specifically for our original supporters who believed in our vision from the beginning. Launching alongside our Alpha release, these NFTs feature iconic early concept art that captures the raw creative energy of Inside Dark Studio's journey into the ROM Universe.",
    "token.og.badge": "Alpha Launch Exclusive",

    // Roadmap
    "roadmap.title": "Development Roadmap",
    "roadmap.subtitle": "Our journey to revolutionize Web3 gaming",

    // Contact
    "contact.title": "Join the Dark Side",
    "contact.subtitle": "Contact the Inside Dark",
    "contact.form.title": "Send us a message",
    "contact.name": "Name",
    "contact.name.placeholder": "Your full name",
    "contact.email": "Email",
    "contact.email.placeholder": "your.email@example.com",
    "contact.message": "Message",
    "contact.message.placeholder": "Tell us about your project or inquiry...",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": " Message sent successfully! We'll get back to you soon.",
    "contact.error": "Failed to send message. Please try again or contact us directly.",

    "contact.direct.title": "Direct Contact",
    "contact.direct.email": "Email",
    "contact.direct.hours": "Business Hours",
    "contact.direct.hours.description": "Monday - Friday, 9 AM - 6 PM (GMT-3)",
    "contact.direct.response": "Response Time",
    "contact.direct.response.description": "Usually within 24 hours",

    "contact.follow": "Follow Us",
    "contact.join.title": "Join Our Community",
    "contact.join.description":
      "Be part of the revolution in Web3 gaming. Connect with developers, players, and enthusiasts from around Latin America and beyond",
    "contact.join.cta": "Join",

    // Footer
    "footer.built": "Copyright - Inside Dark Studio",
    "footer.description":
      "Latin America's premier Web3 game studio creating fully on-chain gaming experiences.",
    "footer.nav.1.title": "Company",
    "footer.nav.1.1": "About Us",
    "footer.nav.2.title": "Games",
    "footer.nav.2.1": "ROM Universe",
    "footer.nav.3.title": "Community",

    "footer.top": "Back to top",
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
    "about.description2":
      "Combinamos tecnología blockchain de vanguardia con experiencias de juego inmersivas, creando un nuevo paradigma para el entretenimiento digital en América Latina y más allá.",
    "about.highlight1": "Tecnología Cross-chain",
    "about.highlight1.description": "Interoperabilidad sin fisuras entre múltiples blockchains",
    "about.highlight2": "KernNetz SDK",
    "about.highlight2.description": "SDK avanzado para desarrollo de juegos Web3",
    "about.highlight3": "Streaming de Assets NFT",
    "about.highlight3.description": "Tecnología de streaming de activos NFT en tiempo real",
    "about.highlight4": "Juegos 100% On-chain",
    "about.highlight4.description": "Descentralización completa con lógica on-chain",
    "about.cta": "Acerca de Nosotros",
    "about.mission": "Nuestra Misión",
    "about.mission.description":
      "Revolucionar la industria del juego creando experiencias de juego verdaderamente descentralizadas y propiedad de los jugadores que empoderen a las comunidades y fomenten la innovación en el vibrante ecosistema de juegos de América Latina.",
    "about.ids": "Pionero de los Juegos Web3 en América Latina",

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
    "rom.subtitle":
      "Entra en un multiverso místico donde ocho reinos interconectados tejen juntos el tejido de la existencia misma. Cada mundo cuenta un fragmento de una historia eterna, donde héroes se levantan, civilizaciones caen y la propia naturaleza de la realidad es cuestionada y remodelada.",
    "rom.quote":
      "En el Universo ROM, cada elección resuena a través de las dimensiones, cada victoria remodela los juegos individuales.",
    "btn.ready": "Descubrir Este Reino",
    "btn.coming": "Próximamente",
    "vilintrius.description":
      "Juego de exploración de mazmorras en 2D donde el jugador, como Rick, navega por un templo misterioso, descubriendo sus secretos mientras intenta sobrevivir y escapar.",
    "vilintrius.text":
      "La puerta de entrada para entender los misterios más profundos del Universo ROM comienza aquí.",
    "tbfz.description":
      "Juego FPS únete a las fuerzas en el campo de batalla, zhion aún está en guerra y todas las facciones intentan controlar su territorio, modo battle royale, y todos los modos clásicos para este juego.",
    "tbfz.text":
      "El conflicto eterno que da forma a los cimientos mismos de la realidad a través de todos los reinos.",
    "bit.description":
      "Juego por turnos, inspirado en juegos de mesa donde la mecánica de tragamonedas se encuentra con la toma de decisiones táctica. Los jugadores compiten en rondas estratégicas impulsadas por un sistema dinámico de tragamonedas que determina acciones, resultados y potenciadores.",
    "bit.text": "Donde los límites entre la realidad digital y física se disuelven en el caos.",
    "ths.description":
      "Juego estilo MOBA, con algunos cambios en el estilo de juego y algunos modos de juego, incluyendo anrts, deathmatch clásico, team deathmatch, captura la bandera y algunos otros.",
    "ths.text":
      "El campo de pruebas donde los mortales trascienden sus limitaciones para convertirse en leyendas.",
    "vetirent.description":
      "Juego de cartas juega con fuerzas de lo desconocido y descubre algunos nuevos estilos de magia dentro de estas cartas, todos los NFTs del universo son cartas.",
    "vetirent.text":
      "El antiguo arte de la magia Vetirent, canalizado a través del dominio místico de las cartas.",
    "fortress.description":
      "Cada jugador tendrá su propia dimensión donde podrá construir lo que desee y dar la bienvenida a su propia fortaleza en el metaverso donde todo se decide por ellos.",
    "fortress.text":
      "Santuarios de esperanza construidos para resistir las tormentas de un multiverso incierto.",
    "vetirents.description":
      "Juego por turnos, explora lo que sucedió después de la gran liberación, y trata",
    "vetirents.text":
      "La búsqueda eterna de artefactos que cierran la brecha entre lo mortal y lo divino.",
    "rom.description":
      "Juego de rol masivo en línea donde los jugadores exploran un mundo vasto y en constante cambio, enfrentándose a desafíos épicos y forjando su propio destino.",
    "rom.text":
      "La revelación final donde todos los hilos del Universo ROM convergen en una claridad aterradora.",
    "multiverse.title": "El Multiverso Interconectado",
    "multiverse.description":
      "Cada reino existe como una épica independiente y como parte integral de una narrativa cósmica mayor. Personajes, artefactos y consecuencias fluyen entre mundos, creando un tapiz en constante evolución de leyenda.",
    "bigcard.title": "El Ciclo Eterno",
    "bigcard.description":
      "En el Universo ROM, cada final marca un nuevo comienzo, cada derrota siembra las semillas del futuro triunfo, y cada viaje expande una mitología viva. Los Vetirents—una antigua raza de poder inimaginable—actúan como los arquitectos silenciosos del destino, tejiendo juntos reinos y líneas de tiempo. Su legado—a través de reliquias, conocimiento y verdades olvidadas—resuena a través de cada dimensión, cada batalla, cada búsqueda de significado.",
    "bigcard.1.title": "Conexiones Místicas",
    "bigcard.1.description":
      "Tus NFTs trascienden los juegos individuales. Ya sean personajes, reliquias o logros, se llevan a cabo en todas las experiencias ROM: tu leyenda vive, sin importar el mundo que ingreses.",
    "bigcard.2.title": "Reliquias Olvidadas",
    "bigcard.2.description":
      "Los artefactos dejados por los Vetirents son más que tesoros antiguos. Contienen fragmentos de conocimiento primigenio, claves para desbloquear las verdades ocultas del Universo ROM.",
    "bigcard.3.title": "Narrativa Evolutiva",
    "bigcard.3.description":
      "Las historias de los mundos ROM están en constante cambio, influenciadas por las acciones de los jugadores y los eventos del juego. Cada decisión, cada victoria y cada derrota contribuyen a un relato en evolución que trasciende las fronteras de los reinos individuales.",
    "bigcard.quote":
      "Da un paso hacia el Universo ROM, donde tu leyenda comienza no con un solo juego, sino con tu primera elección en un tapiz infinito de destinos interconectados.",

    // Token
    "token.title": "Oro Ancestral (AGLD)",
    "token.subtitle": "El token nativo que impulsa el ecosistema del Universo ROM",
    "token.uses": "Usos del Token",
    "token.uses.1.title": "Compras en el Juego",
    "token.uses.1.description": "Compra artículos, mejoras y contenido premium",
    "token.uses.2.title": "Recompensas de Staking",
    "token.uses.2.description": "Gana ingresos pasivos al hacer staking de tokens AGLD",
    "token.uses.3.title": "Derechos de Gobernanza",
    "token.uses.3.description": "Vota sobre actualizaciones del juego y decisiones del ecosistema",
    "token.uses.4.title": "Moneda Interjuego",
    "token.uses.4.description":
      "Utiliza AGLD para transacciones entre juegos dentro del ecosistema ROM",
    "token.earning": "Métodos de Ganancia",
    "token.earning.1": "Completa misiones diarias y desafíos",
    "token.earning.2": "Gana torneos competitivos",
    "token.earning.3": "Intercambia artículos NFT raros",
    "token.earning.4": "Participa en votaciones de gobernanza",
    "token.earning.5": "Recomienda nuevos jugadores al ecosistema",
    "token.earning.6": "Crea y vende contenido en el juego",
    "token.genesis": "Colección Génesis",
    "token.genesis.description":
      "666 NFTs hechos a mano, cada uno representando una parte única del Universo ROM. Diseñados para los primeros seguidores y presentando arte conceptual icónico de nuestro viaje de desarrollo.",
    "token.rarity": "Sistema de Rareza",
    "token.rarity.1": "Legendario",
    "token.rarity.2": "Épico",
    "token.rarity.3": "Raro",
    "token.rarity.4": "Poco Común",
    "token.rarity.5": "Común",
    "token.rarity.perk": "Beneficios Basados en la Rareza",
    "token.rarity.perk.1.title": "Montón de Oro",
    "token.rarity.perk.1.subtitle": "Montos de Oro Ancestral distribuidos por nivel de rareza",
    "token.rarity.perk.1.description":
      "Los NFTs de mayor rareza reciben mayores recompensas de Oro Ancestral al reclamar",
    "token.rarity.perk.2.title": "Club de Oro",
    "token.rarity.perk.2.subtitle": "Entrega mensual de oro con un crecimiento del 10%",
    "token.rarity.perk.2.description":
      "Entrega mensual de Oro Ancestral que crece un 10% cada mes, acumulable para múltiples poseedores de NFT",
    "token.rarity.perk.3.title": "Maestro de Negociaciones",
    "token.rarity.perk.3.subtitle": "Descuentos en el mercado y exenciones de tarifas",
    "token.rarity.perk.3.description":
      "Descuentos en el mercado por nivel de rareza, tarifas de casa de subastas exentas (no acumulable)",
    "token.details.title": "Detalles de Oro Ancestral (AGLD)",
    "token.details.1.title": "Características de la Moneda",
    "token.details.1.1": "Moneda principal en el juego a través del Universo ROM",
    "token.details.1.2": "Intercambiable por ICP en intercamb",
    "token.details.1.3": "Utilizada para compras, mejoras y contenido premium",
    "token.details.2.title": "Medidas Anti-Abuso",
    "token.details.2.1": "Una reclamación por dirección de billetera",
    "token.details.2.2": "Ventana de reclamación de 30 días para recompensas",
    "token.details.2.3": "Recompensas no reclamadas se pierden después de 30 días",
    "token.holders.title": "Beneficios Compartidos para Poseedores de Génesis",
    "token.holders.1": "Verificación única de propiedad de NFT",
    "token.holders.2": "Mascotas y compañeros especiales en el juego",
    "token.holders.3": "Privilegios y canales de rango en Discord",
    "token.holders.4": "Artículos de vanidad y cosméticos exclusivos",
    "token.holders.5": "Acceso y personalización de avatar Génesis",
    "token.holders.6": "Recompensas exclusivas para poseedores de NFT",
    "token.factions.title": "Tres Facciones",
    "token.factions.1.title": "Armada del Emperador",
    "token.factions.1.description":
      "Fuerzas imperiales de élite que dominan la galaxia con disciplina férrea",
    "token.factions.2.title": "Defensa Civil",
    "token.factions.2.description": "Protectores de poblaciones civiles y asentamientos pacíficos",
    "token.factions.3.title": "Mercenarios Extraneus",
    "token.factions.3.description": "Guerreros contratados que luchan por el mejor postor",
    "token.og.title": "Para la Comunidad OG",
    "token.og.description":
      "La Colección Génesis está diseñada específicamente para nuestros seguidores originales que creyeron en nuestra visión desde el principio. Lanzada junto con nuestro lanzamiento Alpha, estos NFTs presentan arte conceptual icónico que captura la energía creativa cruda del viaje de Inside Dark Studio hacia el Universo ROM.",
    "token.og.badge": "Exclusivo del Lanzamiento Alpha",

    // Roadmap
    "roadmap.title": "Hoja de Ruta de Desarrollo",
    "roadmap.subtitle": "Nuestro viaje para revolucionar los juegos Web3",

    // Contact
    "contact.title": "Únete al Lado Oscuro",
    "contact.subtitle": "¿Listo para explorar el universo?",
    "contact.form.title": "Envíanos un mensaje",
    "contact.name": "Nombre",
    "contact.name.placeholder": "Tu nombre completo",
    "contact.email": "Correo",
    "contact.email.placeholder": "tu.email@ejemplo.com",
    "contact.message": "Mensaje",
    "contact.message.placeholder": "Cuéntanos sobre tu proyecto o consulta...",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.success": "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
    "contact.error":
      "Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente.",

    "contact.direct.title": "Contacto Directo",
    "contact.direct.email": "Correo Electrónico",
    "contact.direct.hours": "Horario Comercial",
    "contact.direct.hours.description": "Lunes - Viernes, 9 AM - 6 PM (GMT-3)",
    "contact.direct.response": "Tiempo de Respuesta",
    "contact.direct.response.description": "Generalmente dentro de 24 horas",

    "contact.follow": "Síguenos",
    "contact.join.title": "Únete a Nuestra Comunidad",
    "contact.join.description":
      "Sé parte de la revolución en los juegos Web3. Conéctate con desarrolladores, jugadores y entusiastas de toda América Latina y más allá",
    "contact.join.cta": "Unirse a",

    // Footer
    "footer.built": "Copyright - Inside Dark Studio",
    "footer.description":
      "El estudio de juegos Web3 líder de América Latina creando experiencias de juego completamente on-chain.",
    "footer.nav.1.title": "Compañía",
    "footer.nav.1.1": "Acerca de Nosotros",
    "footer.nav.2.title": "Juegos",
    "footer.nav.2.1": "Universo ROM",
    "footer.nav.3.title": "Comunidad",

    "footer.top": "Volver arriba",
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
