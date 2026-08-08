"use client";

function BackHome() {
  return (
    <a
      href="/"
      onClick={(e) => {
        if (window.location.hash) {
          e.preventDefault();
          window.location.hash = "";
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="btn-gradient mt-10 inline-flex items-center gap-2 rounded-lg px-7 py-3.5 font-semibold transition"
    >
      Volver al inicio
    </a>
  );
}

export default function NotFoundContent() {
  return (
    <main className="hero-gradient relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm tracking-[0.35em] uppercase text-[#00d9ff]">404</p>
      <h1 className="mt-4 text-6xl sm:text-7xl font-extrabold text-gradient">¡Ups!</h1>
      <p className="mt-5 max-w-md text-muted text-lg leading-relaxed">
        La página que buscas no existe o se perdió en el End. Vuelve al inicio y
        sigue explorando el servidor.
      </p>
      <BackHome />    </main>
  );
}
