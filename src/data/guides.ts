export type GuideStep =
  | { type: "text"; text: string }
  | { type: "command"; text: string }
  | { type: "warning"; text: string };

export type GuideSection = {
  title: string;
  steps: GuideStep[];
};

export type Guide = {
  slug: string;
  title: string;
  icon: "server" | "key" | "shield";
  summary: string;
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: "como-entrar-al-servidor",
    title: "¿Cómo entro al servidor?",
    icon: "server",
    summary: "Conecta tu cliente de Minecraft a AstralixMC en dos pasos.",
    sections: [
      {
        title: "Paso 1",
        steps: [
          {
            type: "text",
            text: "Pon la IP astralis.mcsh.io, y si eres de Bedrock, el puerto es 19132.",
          },
          { type: "command", text: "astralis.mcsh.io" },
          { type: "command", text: "Puerto Bedrock: 19132" },
        ],
      },
      {
        title: "Paso 2",
        steps: [
          {
            type: "text",
            text: "Dale a jugar/ingresar, y tendrás que registrarte/logearte.",
          },
        ],
      },
    ],
  },
  {
    slug: "como-registrarme-y-loguearme",
    title: "¿Cómo me registro/logeo al servidor?",
    icon: "key",
    summary: "Crea tu cuenta con /register y entra con /login.",
    sections: [
      {
        title: "Registrarse",
        steps: [
          {
            type: "text",
            text: "Si es tu primera vez en el servidor, usa el comando /register contra repite-contra y lo envías",
          },
          { type: "command", text: "/register contra repite-contra" },
          { type: "warning", text: "(tienes que recordar la contraseña)" },
        ],
      },
      {
        title: "Logearse",
        steps: [
          {
            type: "text",
            text: "Si ya te has registrado, tienes que poner el comando /login tu-contra, debes poner la contraseña que pusiste al registrarte.",
          },
          { type: "command", text: "/login tu-contra" },
        ],
      },
    ],
  },
  {
    slug: "seguridad",
    title: "Seguridad",
    icon: "shield",
    summary: "Protege tu cuenta según tu tipo de cliente: premium o no premium.",
    sections: [
      {
        title: "No Premium",
        steps: [
          {
            type: "text",
            text: "Para mantener tu cuenta segura, usa una contraseña que no uses en otros servidores y te sea fácil de recordar",
          },
          { type: "warning", text: "(no la compartas)" },
        ],
      },
      {
        title: "Premium",
        steps: [
          {
            type: "text",
            text: "Usa /premium, esto activará tu cuenta premium y estará 100% protegida,",
          },
          { type: "command", text: "/premium" },
          {
            type: "warning",
            text: "pero al ejecutar el comando perderás todo tu progreso — asegúrate de ponerlo antes de iniciar.",
          },
        ],
      },
    ],
  },
];
