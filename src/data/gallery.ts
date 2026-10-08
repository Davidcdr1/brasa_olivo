export type GalleryImage = {
    src: string
    alt: string
    className?: string
  }
  
  export const galleryImages: GalleryImage[] = [
    {
      src: "/restaurante-hero.png",
      alt: "Terraza de Brasa & Olivo al atardecer",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      src: "/cocina.png",
      alt: "Plato de cocina mediterránea",
    },
    {
      src: "/nosotros.png",
      alt: "Interior de Brasa & Olivo",
    },
    {
      src: "/galeria.png",
      alt: "Momentos de Brasa & Olivo",
      className: "md:col-span-2",
    },
  ]