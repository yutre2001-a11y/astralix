export const siteConfig = {
  name: "AstralixMC",
  tagline: "Semi-anarquía con temática del End. Reglas mínimas, lore vivo y una temporada nueva por cada capítulo.",
  description:
    "Servidor de Minecraft semi-anárquico inspirado en el End: reglas mínimas, lore vivo y un universo que despierta cada temporada.",
  ip: "astralis.mcsh.io",
  ipHint: "Java · Bedrock — 1.20 a 1.21",
  versions: "1.20 — 1.21",
  discordInvite: "https://discord.gg/QKbQR3tRjF",
  contact: "contacto@astralixmc.net",
  fallbackPlayers: 64,
};

export const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Lore", href: "/#lore" },
  { label: "Modalidades", href: "/#modalidades" },
  { label: "Rangos", href: "/#rangos" },
  { label: "Guías", href: "/#guias" },
  { label: "Staff", href: "/#staff" },
  { label: "Reglas", href: "/#reglas" },
  { label: "Términos", href: "/terminos" },
];

export const loreChapters = [
  {
    chapter: "Capítulo I",
    title: "El Vacío de Obsidiana",
    text: "Antes del primer bloque solo existía el Vacío del End: una extensión sin fin de obsidiana y silencio. Nadie sabe quién plantó la primera plataforma de piedra. Solo queda una leyenda: el End no fue construido, fue soñado.",
  },
  {
    chapter: "Capítulo II",
    title: "El Ojo del Núcleo",
    text: "De las profundidades del vacío emergió el Ojo del Ender primordial, el corazón de Astralix. Su mirada encendió el cielo púrpura, sembró las islas flotantes y trazó portales entre dimensiones. Quien lo mira, deja de ser el mismo.",
  },
  {
    chapter: "Capítulo III",
    title: "La Era de los Fragmentos",
    text: "El Núcleo se fragmentó cuando los primeros exploradores intentaron controlarlo. Cada fragmento se convirtió en una isla: ciudades del End, naves estelares, bastiones. Los que cruzaron los portales fundaron los primeros asentamientos de Astralix.",
  },
  {
    chapter: "Capítulo IV",
    title: "El Despertar del Dragón",
    text: "Cada temporada, el Dragón del End despierta. Derrotarlo no termina el juego: en Astralix es el inicio de una nueva era, el reinicio del lore y la oportunidad de escribir el siguiente capítulo. Tu capítulo.",
  },
];

export const modalities = [
  {
    name: "AstralMix",
    tag: "Survival Custom",
    image: "/survival.png",
    description:
      "Survival custom con contenido personalizado: explora el mundo Oasis, adéntrate en dungeons y descubre todas las sorpresas de AstralixMC.",
    features: ["Mundo Oasis", "Dungeons y mazmorras", "Crafteos y mejoras personalizadas", "Eventos y recompensas de temporada"],
    icon: "pickaxe",
    size: "large",
    comingSoon: false,
  },
  {
    name: "Semi-Anárquico",
    tag: "Anarquía",
    image: "/semianarquico.png",
    description:
      "Reglas mínimas, libertades máximas. El mundo no te protege: sobrevive, aliánzate y construye tu imperio entre las ruinas del End.",
    features: ["PvP y raiding libres", "Sin claims ni protecciones", "Economía dura y comercio libre", "Estructuras del End repartidas por el mundo"],
    icon: "sword",
    size: "tall",
    comingSoon: false,
  },
];

export const rankGroups = [
  {
    id: "anarquico",
    label: "Semi-Anárquico",
    note: "PvP libre, raiding y economía dura: los rangos premian la supervivencia en el End.",
    ranks: [
      {
        name: "Ender",
        color: "#00C1FF",
        to: null,
        light: true,
        description: "El primer paso hacia el vacío. Los Ender empiezan a escuchar la llamada del Núcleo.",
        price: "400 gemas",
        benefits: ["/ec (Enderchest)", "2 /pv (mochilas)", "/rewards ender"],
      },
      {
        name: "Shadow",
        color: "#FFC200",
        to: null,
        light: true,
        description: "Los que cazan en la oscuridad. Se ganan el respeto del vacío con horas de juego.",
        price: "900 gemas",
        benefits: ["/back", "/hat", "3 /pv (mochilas)", "Kit shadow", "/rewards shadow"],
      },
      {
        name: "Noctis",
        color: "#FC9411",
        to: "#FFA651",
        light: false,
        description: "Los que atraviesan la noche. El calor del núcleo empieza a correr por sus venas.",
        price: "1500 gemas",
        benefits: ["/fly", "/feed", "4 /pv (mochilas)", "Kit noctis", "/rewards noctis"],
      },
      {
        name: "Nexus",
        color: "#F8356F",
        to: "#FF5D8E",
        light: false,
        description: "El centro de todo. Los Nexus conectan dimensiones, alianzas y destinos.",
        price: "2250 gemas",
        benefits: ["/condense", "/repair", "/tpall", "5 /pv (mochilas)", "Kit nexus", "/rewards nexus"],
      },
      {
        name: "Abyss",
        color: "#F93636",
        to: null,
        light: false,
        description: "Los que han mirado el fondo del vacío y han vuelto. Rango reservado a leyendas de la temporada.",
        price: "3250 gemas",
        benefits: ["/compass", "6 /pv (mochilas)", "Kit abyss", "/rewards abyss"],
      },
      {
        name: "Vyper",
        color: "#1A50FC",
        to: "#519CFF",
        light: false,
        description: "Rapidez y precisión. Los Vyper son la élite competitiva de AstralixMC.",
        price: "4500 gemas",
        benefits: ["/afk", "7 /pv (mochilas)", "Kit vyper", "/rewards vyper"],
      },
      {
        name: "Vyper+",
        color: "#9A1DFC",
        to: "#DA51FF",
        light: false,
        description: "La cima de la progresión: reservado a los que dominan todas las facetas del servidor.",
        price: "5500 gemas",
        benefits: ["8 /pv (mochilas)", "Kit vyper+", "/rewards vyper+"],
      },
    ],
  },
  {
    id: "survival",
    label: "AstralMix",
    note: "Survival custom con mundo Oasis, dungeons y eventos: recompensas propias del modo.",
    ranks: [
      {
        name: "Guardian",
        color: "#22C55E",
        to: null,
        light: true,
        description: "El centinela del Oasis. Los Guardian protegen a los colonos y defienden los oasis de la isla.",
        price: "1 boost",
        benefits: [
          "5 homes",
          "Colores en /msg",
          "10 items de subasta y 4 playerwarps",
          "Kit Guardian",
          "Afk automático",
          "Comandos: /back, /hat, /ignore, /nick, /craft, /rtoggle, /paytoggle, /payconfirmtoggle, /tptoggle, /msgtoggle",
        ],
      },
      {
        name: "Champion",
        color: "#3B82F6",
        to: null,
        light: true,
        description: "Campeones de la arena: el combate honorable y los eventos comunitarios son su lenguaje.",
        price: "2 boosts",
        benefits: [
          "10 homes",
          "15 items de subasta y 8 playerwarps",
          "Kit Champion",
          "Comandos: /trash, /enderchest, /near, /recipe",
        ],
      },
      {
        name: "Warlord",
        color: "#EF4444",
        to: null,
        light: false,
        description: "Señores de la guerra: marcan el ritmo de las batallas y el destino de cada temporada.",
        price: "3 boosts",
        benefits: [
          "20 homes",
          "20 items de subasta y 12 playerwarps",
          "Sin espera al teletransportarte a playerwarps",
          "Kit Warlord",
          "Comandos: /feed, /fly, /ptime, /pweather",
        ],
      },
      {
        name: "Titan",
        color: "#A855F7",
        to: null,
        light: false,
        description: "Colosos del Oasis: su fuerza sostiene las estructuras y la economía más ambiciosas.",
        price: "4 boosts",
        benefits: [
          "Homes ilimitados",
          "30 items de subasta y 15 playerwarps",
          "Kit Titan",
          "Comandos: /renamehome, /heal, /suicide",
        ],
      },
      {
        name: "King",
        color: "#FBBF24",
        to: null,
        light: true,
        description: "La corona de AstralixMC. El King es la cima de la progresión en el survival.",
        price: "5 boosts",
        benefits: [
          "50 items de subasta y playerwarps ilimitados",
          "Colores en /nick",
          "Kit King",
          "Sin cooldown de subasta",
          "/repair",
        ],
      },
    ],
  },
];

export const ranks = rankGroups[0].ranks;

export const staff = [
  { name: "TheMarker", role: "Owner", group: "Dirección", initials: "TM", skin: "TheMarker" },
  { name: "xSustance", role: "Owner", group: "Dirección", initials: "XS", skin: "xSustance" },
  { name: "Itz_Juanvill", role: "Dev", group: "Desarrollo", initials: "IJ", skin: "Itz_Juanvill" },
  { name: "Fara", role: "Admin", group: "Administración", initials: "FA", skin: "_zOnlyPriv" },
];

export const ruleGroups = [
  {
    id: "anarquico",
    label: "Semi-Anárquico",
    note: "PvP libre, raiding y economía dura: solo lo imprescindible para mantener el orden.",
    categories: [
      {
        category: "Generales",
        rules: [
          "Está prohibido el uso de clientes modificados con ventajas (hacks, x-ray, macros que automatizan acciones del juego).",
          "Cada jugador es responsable de su cuenta. Los baneos se aplican a la cuenta y, en casos graves, a la IP.",
          "Duplicar items (dupe) está permitido: es parte del estilo de juego anárquico.",
          "Está prohibido usar exploits para darse rangos, op o cualquier ventaja administrativa; eso se sanciona con ban permanente.",
        ],
      },
      {
        category: "Chat",
        rules: [
          "En el chat no se vale spamear.",
          "Está prohibido mencionar o promocionar otros servidores.",
        ],
      },
      {
        category: "Construcción",
        rules: ["Todo se vale."],
      },
      {
        category: "PvP",
        rules: ["Todo se vale."],
      },
      {
        category: "Comunidad",
        rules: [
          "El respeto es la base: las decisiones del staff son finales, pero siempre se pueden apelar por Discord.",
          "Los sorteos, subastas y promesas entre jugadores son responsabilidad de los implicados.",
          "Está prohibido hacerse pasar por staff, moderador o administrador del servidor.",
          "Recomendamos usar Discord para reportes, dudas y propuestas de temporada: la comunidad decide el futuro del lore.",
        ],
      },
    ],
  },
  {
    id: "survival",
    label: "AstralMix",
    note: "Reglas de juego limpio, comercio justo y respeto entre vecinos del Oasis.",
    categories: [
      {
        category: "Juego limpio",
        rules: [
          "Prohibido el uso de hacks, mods de ventaja o macros que automaticen el juego (X-ray, killaura, autoclicker, etc.).",
          "Prohibido aprovechar bugs, duplicaciones o exploits: repórtalos al staff y recibirás recompensa; usarlos conlleva sanción y se retira lo obtenido.",
          "Prohibido usar cuentas alternativas para evadir sanciones o reclamar recompensas más de una vez.",
          "Prohibido prestar, vender o compartir tu cuenta de Minecraft.",
        ],
      },
      {
        category: "Economía y comercio",
        rules: [
          "Prohibido estafar en tiendas, puestos o trueques entre jugadores: la estafa se sanciona y el staff no compensa las pérdidas.",
          "Los préstamos y acuerdos entre jugadores son responsabilidad de las partes implicadas; el staff no media en deudas personales.",
          "Prohibido vender o comprar objetos, cuentas o ventajas del servidor con dinero real.",
        ],
      },
      {
        category: "Convivencia y mundo",
        rules: [
          "Respeta a todos los jugadores: prohibido el acoso, la discriminación, las amenazas y el spam en el chat.",
          "Prohibido destruir, saquear o modificar construcciones protegidas de otros jugadores.",
          "No tapes el spawn ni crees granjas o máquinas que provoquen lag excesivo para el resto del servidor.",
          "Las construcciones en zonas sin proteger se modifican bajo tu responsabilidad: el staff no devuelve lo perdido.",
        ],
      },
      {
        category: "Reportes y staff",
        rules: [
          "Los reportes se envían por los canales oficiales de Discord con pruebas claras (vídeo o capturas).",
          "Las apelaciones de sanciones se gestionan únicamente a través de Discord.",
          "Está prohibido hacerse pasar por staff, moderador o administrador.",
          "Las decisiones del staff son finales, pero siempre se pueden apelar de forma respetuosa.",
        ],
      },
    ],
  },
  {
    id: "discord",
    label: "Discord",
    note: "Nuestra comunidad vive en Discord: mismas normas de respeto y canales para reportar y apelar.",
    categories: [
      {
        category: "Canales y chat",
        rules: [
          "Usa cada canal para su propósito: no mezcles temas ni publiques mensajes en el canal equivocado.",
          "Prohibido el spam, flood y las menciones masivas (@everyone / @here) sin permiso del staff.",
          "Los anuncios y enlaces externos solo pueden publicarse con autorización del staff.",
        ],
      },
      {
        category: "Convivencia",
        rules: [
          "Respeta a todos los miembros: no se tolera acoso, discriminación, amenazas ni contenido NSFW o ilegal.",
          "Está prohibido compartir información personal de otros miembros (doxxing).",
          "En los canales de voz no se permite gritar ni reproducir audio molesto o música alta sin permiso.",
        ],
      },
      {
        category: "Reportes y staff",
        rules: [
          "Los reportes de jugadores se envían por los canales oficiales con pruebas claras; no se persiguen disputas privadas.",
          "Las apelaciones de sanciones se gestionan únicamente a través de Discord.",
          "Está prohibido hacerse pasar por staff, moderador o administrador.",
          "Las decisiones del staff son finales, pero siempre se pueden apelar de forma respetuosa.",
        ],
      },
    ],
  },
];

export const termsSections = [
  {
    title: "1. Uso del servidor",
    paragraphs: [
      "Al conectarte a AstralixMC aceptas cumplir las reglas publicadas y las decisiones del staff. El acceso al servidor es un privilegio que puede suspenderse temporal o permanentemente sin derecho a reembolso, ya que AstralixMC no vende productos ni servicios.",
      "El servidor se ofrece \"tal cual\", sin garantías de disponibilidad continua. Los reinicios, mantenimientos y caídas ocasionales no generan compensación alguna.",
    ],
  },
  {
    title: "2. Cuentas y responsabilidad",
    paragraphs: [
      "Eres responsable de las acciones realizadas con tu cuenta de Minecraft. La cesión, compra o venta de cuentas está prohibida.",
      "AstralixMC no solicita en ningún caso tus contraseñas, tokens o datos de pago. Cualquier mensaje en ese sentido debe reportarse al staff.",
    ],
  },
  {
    title: "3. Privacidad y datos",
    paragraphs: [
      "El servidor recopila únicamente los datos necesarios para su funcionamiento: nombre de usuario, UUID, direcciones IP y estadísticas de juego.",
      "Estos datos no se venden ni se comparten con terceros, salvo requerimiento legal. Puedes solicitar la eliminación de tus datos de juego contactando con el staff.",
    ],
  },
  {
    title: "4. Propiedad intelectual",
    paragraphs: [
      "Las construcciones, skins y creaciones dentro del servidor pertenecen a sus autores. El lore y el universo de AstralixMC pertenecen al equipo del servidor.",
      "Minecraft y sus marcas son propiedad de Mojang Studios / Microsoft. AstralixMC no está afiliado ni respaldado por Mojang.",
    ],
  },
  {
    title: "5. Normas de la comunidad",
    paragraphs: [
      "El staff es la máxima autoridad durante el juego. Sus decisiones pueden apelarse únicamente a través de los canales oficiales de Discord.",
      "AstralixMC se reserva el derecho de modificar estas condiciones. Los cambios se anunciarán en Discord y en esta página antes de su aplicación.",
    ],
  },
];

export const privacySections = [
  {
    title: "1. Qué datos recopilamos",
    paragraphs: [
      "Al conectarte a nuestro servidor de Minecraft, recopilamos automáticamente:",
      "Tu dirección IP de conexión",
      "Tu nombre de usuario de Minecraft",
      "No recopilamos datos personales adicionales (correo electrónico, nombre real, ubicación exacta) a menos que tú mismos los compartas voluntariamente en nuestro Discord u otros canales de comunicación.",
    ],
  },
  {
    title: "2. Para qué usamos estos datos",
    paragraphs: [
      "Verificar tu identidad de jugador y prevenir el uso de cuentas duplicadas o evasión de sanciones",
      "Mantener la seguridad del servidor y prevenir hacks, ataques o comportamiento abusivo",
      "Aplicar las normas del servidor cuando sea necesario investigar una infracción",
    ],
  },
  {
    title: "3. Con quién compartimos estos datos",
    paragraphs: [
      "No vendemos ni compartimos tus datos con terceros con fines comerciales. Tu dirección IP puede ser procesada por nuestro proveedor de hosting como parte del funcionamiento técnico del servidor.",
    ],
  },
  {
    title: "4. Cuánto tiempo conservamos tus datos",
    paragraphs: [
      "Conservamos estos datos mientras tu cuenta esté activa en el servidor, o el tiempo necesario para investigar y aplicar sanciones cuando corresponda.",
    ],
  },
  {
    title: "5. Menores de edad",
    paragraphs: [
      "AstralixMC no verifica la edad de los jugadores. Si eres menor de edad, te recomendamos jugar bajo la supervisión de un adulto responsable y no compartir información personal en el chat público ni con otros jugadores.",
    ],
  },
  {
    title: "6. Tus derechos",
    paragraphs: [
      "Puedes solicitar información sobre los datos que tenemos asociados a tu nombre de usuario, o solicitar su eliminación, contactando a nuestro equipo a través de Discord.",
    ],
  },
  {
    title: "7. Cambios en esta política",
    paragraphs: [
      "Podemos actualizar esta política ocasionalmente. Los cambios importantes se anunciarán en nuestro Discord.",
    ],
  },
  {
    title: "8. Contacto",
    paragraphs: [
      "Para cualquier duda sobre esta política, contáctanos en:",
    ],
  },
];

export const footerLinks = [
  { label: "Lore", href: "#lore" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Rangos", href: "#rangos" },
  { label: "Staff", href: "#staff" },
  { label: "Reglas", href: "#reglas" },
  { label: "Términos y condiciones", href: "/terminos" },
];

export const stats = [
  { value: "+300", label: "Jugadores totales" },
  { value: "4", label: "Eras del lore" },
  { value: "2", label: "Modalidades" },
  { value: "24/7", label: "Disponibilidad" },
];
