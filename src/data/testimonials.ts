export type Testimonial = {
    name: string
    text: string
    occasion: string
    rating: number
  }
  
  export const testimonials: Testimonial[] = [
    {
      name: "Laura M.",
      text: "Una experiencia fantástica. El producto, el ambiente y el servicio estuvieron a la altura. Volveremos sin duda.",
      occasion: "Cena en pareja",
      rating: 5,
    },
    {
      name: "Marc R.",
      text: "Cocina mediterránea muy cuidada y un espacio precioso. El pulpo a la brasa estaba espectacular.",
      occasion: "Comida familiar",
      rating: 5,
    },
    {
      name: "Anna P.",
      text: "Un sitio especial para disfrutar sin prisas. Todo estaba delicioso y el trato fue cercano y profesional.",
      occasion: "Celebración",
      rating: 5,
    },
  ]