import { useState } from "react"
import Menu from "./components/menu"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials"
import Reservation from './components/Reservation'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#1c1c1a]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4efe6]/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold tracking-[-0.03em]"
          >
            Brasa <span className="text-[#71804f]">&</span> Olivo
          </a>

          {/* Navegación escritorio */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#cocina"
              className="text-sm transition-colors hover:text-[#71804f]"
            >
              Cocina
            </a>

            <a
              href="#carta"
              className="text-sm transition-colors hover:text-[#71804f]"
            >
              Carta
            </a>

            <a
              href="#nosotros"
              className="text-sm transition-colors hover:text-[#71804f]"
            >
              Nosotros
            </a>

            <a
              href="#galeria"
              className="text-sm transition-colors hover:text-[#71804f]"
            >
              Galería
            </a>

            <a
              href="#contacto"
              className="text-sm transition-colors hover:text-[#71804f]"
            >
              Contacto
            </a>

            <a
              href="#reservas"
              className="rounded-full bg-[#1c1c1a] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#71804f] hover:shadow-lg"
            >
              Reservar mesa
            </a>
          </div>

          {/* Botón móvil */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
          >
            <span className="sr-only">
              {menuOpen ? "Cerrar menú" : "Abrir menú"}
            </span>

            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px w-full bg-[#1c1c1a] transition-transform duration-300 ${menuOpen ? "translate-y-[4px] rotate-45" : ""
                  }`}
              />

              <span
                className={`block h-px w-full bg-[#1c1c1a] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
                  }`}
              />

              <span
                className={`block h-px w-full bg-[#1c1c1a] transition-transform duration-300 ${menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
              />
            </div>
          </button>
        </nav>

        {/* Menú móvil */}
        <div
          className={`overflow-hidden border-t border-black/10 transition-all duration-300 md:hidden ${menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-6 py-6">
            <div className="flex flex-col">
              <a
                href="#cocina"
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-4 text-lg"
              >
                Cocina
              </a>

              <a
                href="#carta"
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-4 text-lg"
              >
                Carta
              </a>

              <a
                href="#nosotros"
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-4 text-lg"
              >
                Nosotros
              </a>

              <a
                href="#galeria"
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-4 text-lg"
              >
                Galería
              </a>

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-4 text-lg"
              >
                Contacto
              </a>

              <a
                href="#reservas"
                onClick={() => setMenuOpen(false)}
                className="mt-5 rounded-full bg-[#1c1c1a] px-6 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#71804f]"
              >
                Reservar mesa
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100vh-89px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#71804f]">
              Cocina mediterránea · Girona
            </p>

            <h1 className="max-w-3xl text-6xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Cocina
              <br />
              mediterránea
              <br />
              <span className="text-[#71804f]">con alma.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Producto local, fuego y tradición. Una cocina pensada para
              disfrutar alrededor de la mesa, sin prisas.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#reservas"
                className="rounded-full bg-[#1c1c1a] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#71804f]"
              >
                Reservar mesa
              </a>

              <a
                href="#carta"
                className="rounded-full border border-black/20 px-7 py-3.5 text-sm font-medium transition hover:border-[#71804f] hover:text-[#71804f]"
              >
                Ver nuestra carta
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src="/restaurante-hero.png"
                alt="Interior de Brasa & Olivo con cocina mediterránea y terraza"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[#71804f] px-6 py-5 text-white shadow-xl sm:block">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Desde 2018
              </p>
              <p className="mt-1 text-lg font-medium">
                Sabor · Producto · Fuego
              </p>
            </div>
          </div>
        </section>

        <section
          id="cocina"
          className="border-t border-black/10 bg-white px-6 py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

              {/* Texto */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#71804f]">
                  Nuestra cocina
                </p>

                <h2 className="mt-6 text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
                  El producto es el
                  <br />
                  verdadero
                  <br />
                  <span className="text-[#71804f]">protagonista.</span>
                </h2>

                <p className="mt-8 max-w-lg text-lg leading-8 text-black/60">
                  Cocinamos con ingredientes de temporada, productores cercanos
                  y mucho respeto por las recetas que forman parte de nuestra
                  cultura mediterránea.
                </p>

                <p className="mt-5 max-w-lg text-base leading-7 text-black/50">
                  Nuestra cocina nace del producto y cambia con él. Cada temporada
                  nos invita a descubrir nuevos sabores, texturas y formas de
                  compartir alrededor de la mesa.
                </p>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-6 text-xs font-medium uppercase tracking-[0.18em] text-black/50">
                  <span>Producto local</span>
                  <span>Temporada</span>
                  <span>Fuego</span>
                </div>
              </div>

              {/* Fotografía */}
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src="/cocina.png"
                    alt="Plato de cocina mediterránea de Brasa & Olivo"
                    className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>

                {/* Tarjeta flotante */}
                <div className="absolute -bottom-7 -left-5 hidden max-w-[230px] rounded-2xl bg-[#f4efe6] p-6 shadow-xl sm:block lg:-left-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#71804f]">
                    Cocina mediterránea
                  </p>

                  <p className="mt-3 text-lg font-medium leading-snug">
                    Sabores sencillos.
                    <br />
                    Ingredientes honestos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Menu />

        <About />

        <Gallery />

        <Testimonials />

        <Reservation />

      </main>

      <footer
        id="contacto"
        className="border-t border-black/10 bg-[#eee8dc] px-6 py-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="text-xl font-semibold">Brasa & Olivo</p>
            <p className="mt-2 text-sm text-black/50">
              Cocina mediterránea · Girona
            </p>
          </div>

          <div className="text-sm text-black/60">
            <p>Girona, Catalunya</p>
            <p className="mt-1">Mar — Sáb · 13:00 — 23:30</p>
          </div>

          <div className="text-sm">
            <a
              href="tel:+34972000000"
              className="hover:text-[#71804f]"
            >
              +34 972 000 000
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-black/10 pt-6 text-xs text-black/40">
          © 2026 Brasa & Olivo. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

export default App
