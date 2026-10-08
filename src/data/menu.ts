export type MenuItem = {
    name: string
    description: string
    price: string
  }
  
  export type MenuSection = {
    title: string
    subtitle: string
    items: MenuItem[]
  }
  
  export const menuSections: MenuSection[] = [
    {
      title: "Para empezar",
      subtitle: "Pequeños platos para compartir",
      items: [
        {
          name: "Pan de masa madre",
          description: "Aceite de oliva virgen extra y sal marina",
          price: "4 €",
        },
        {
          name: "Burrata cremosa",
          description: "Tomate de temporada, albahaca y pesto de pistacho",
          price: "14 €",
        },
        {
          name: "Carpaccio de presa ibérica",
          description: "Parmesano, rúcula y aceite de oliva virgen extra",
          price: "16 €",
        },
        {
          name: "Calamares a la andaluza",
          description: "Limón, hierbas frescas y mayonesa de ajo asado",
          price: "15 €",
        },
      ],
    },
    {
      title: "Del mar",
      subtitle: "Producto fresco y cocina mediterránea",
      items: [
        {
          name: "Lubina a la brasa",
          description: "Verduras de temporada y aceite de hierbas",
          price: "24 €",
        },
        {
          name: "Pulpo a la brasa",
          description: "Patata confitada, pimentón y aceite de oliva",
          price: "22 €",
        },
        {
          name: "Arroz marinero",
          description: "Calamar, gambas, mejillones y fondo de pescado",
          price: "23 €",
        },
      ],
    },
    {
      title: "De la brasa",
      subtitle: "Fuego, producto y tiempo",
      items: [
        {
          name: "Entrecot de Girona",
          description: "Patatas asadas, romero y jugo de carne",
          price: "28 €",
        },
        {
          name: "Costilla de cerdo ibérico",
          description: "Glaseado de miel, mostaza y verduras asadas",
          price: "22 €",
        },
        {
          name: "Pollo de corral",
          description: "Limón, hierbas mediterráneas y patata rústica",
          price: "19 €",
        },
      ],
    },
    {
      title: "Postres",
      subtitle: "El último recuerdo de la mesa",
      items: [
        {
          name: "Tarta de queso",
          description: "Cremosa, horneada y ligeramente tostada",
          price: "8 €",
        },
        {
          name: "Chocolate y aceite de oliva",
          description: "Chocolate negro, sal marina y aceite arbequina",
          price: "9 €",
        },
        {
          name: "Crema catalana",
          description: "Receta tradicional con cítricos y canela",
          price: "7 €",
        },
      ],
    },
  ]