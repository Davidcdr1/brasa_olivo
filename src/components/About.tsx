function About() {
    return (
      <section
        id="nosotros"
        className="bg-[#1c1c1a] px-6 py-28 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            {/* Imagen */}
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="/nosotros.png"
                  alt="Interior de Brasa & Olivo"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
  
              <div className="absolute -bottom-6 -right-5 rounded-2xl bg-[#71804f] px-6 py-5 shadow-xl sm:-right-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Desde 2018
                </p>
  
                <p className="mt-1 text-lg font-medium">
                  Girona · Catalunya
                </p>
              </div>
            </div>
  
            {/* Texto */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#aab58a]">
                Nosotros
              </p>
  
              <h2 className="mt-6 text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Una mesa,
                <br />
                buenos ingredientes
                <br />
                <span className="text-[#aab58a]">y tiempo para disfrutarlos.</span>
              </h2>
  
              <div className="mt-8 space-y-5 text-base leading-8 text-white/60">
                <p>
                  Brasa & Olivo nace de una idea sencilla: recuperar el placer
                  de sentarse alrededor de una mesa y disfrutar de una cocina
                  honesta, mediterránea y sin artificios.
                </p>
  
                <p>
                  Trabajamos con pequeños productores, producto de temporada y
                  técnicas tradicionales para crear una experiencia que cambia
                  con cada estación.
                </p>
              </div>
  
              <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/15 pt-6">
                <div>
                  <p className="text-2xl font-medium">2018</p>
                  <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.15em] text-white/40">
                     Desde
                  </p>
                </div>
  
                <div>
                  <p className="text-2xl font-medium">100%</p>
                  <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.04em] sm:tracking-[0.15em] text-white/40">
                    Mediterráneo
                  </p>
                </div>
  
                <div>
                  <p className="text-2xl font-medium">Local</p>
                  <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.15em] text-white/40">
                   Producto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About