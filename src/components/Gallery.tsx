import { galleryImages } from "../data/gallery"

function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-white px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#71804f]">
              Galería
            </p>

            <h2 className="mt-5 text-5xl font-medium tracking-[-0.04em] md:text-7xl">
              Un lugar para disfrutar
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-black/50">
            Cocina, producto y momentos alrededor de una mesa.
            Así vivimos Brasa & Olivo.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[180px]">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`group overflow-hidden rounded-[1.5rem] ${image.className ?? ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery