import { menuSections } from "../data/menu"

function Menu() {
  return (
    <section
      id="carta"
      className="bg-[#f4efe6] px-6 py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#71804f]">
            La carta
          </p>

          <h2 className="mt-5 text-5xl font-medium tracking-[-0.04em] md:text-7xl">
            Cocina para compartir
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
            Una selección de platos mediterráneos elaborados con producto
            de temporada, fuego y mucho respeto por el ingrediente.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {menuSections.map((section) => (
            <div key={section.title}>
              <div className="mb-8 flex flex-col gap-2 border-b border-black/15 pb-5 md:flex-row md:items-end md:justify-between">
                <h3 className="text-3xl font-medium tracking-tight">
                  {section.title}
                </h3>

                <p className="text-sm italic text-black/45">
                  {section.subtitle}
                </p>
              </div>

              <div>
                {section.items.map((item) => (
                  <article
                    key={item.name}
                    className="group border-b border-black/10 py-6 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <h4 className="text-lg font-medium transition-colors group-hover:text-[#71804f] md:text-xl">
                          {item.name}
                        </h4>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-black/50">
                          {item.description}
                        </p>
                      </div>

                      <span className="shrink-0 text-base font-medium text-[#71804f]">
                        {item.price}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-black/10 pt-8 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-black/40">
            Pan y servicio incluidos · Consulta los alérgenos con nuestro equipo
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition-all hover:border-[#71804f] hover:text-[#71804f]"
          >
            Descargar carta
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu