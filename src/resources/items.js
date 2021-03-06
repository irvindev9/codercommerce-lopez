export const items = () => {
  const items = [
    {
      id: 1,
      name: 'Mario Odyssey',
      category: 'Nintendo',
      price: 100,
      image: 'https://cdn-products.eneba.com/resized-products/eAq39bYJpWk9exwMnmNKcDOiW7LLXgN7DKIBWYxlEps_350x200_3x-0.jpeg',
      description: 'Producto nuevo, con caja y etiquetas',
      quantity: 10
    },
    {
      id: 2,
      name: 'Halo Infinite',
      category: 'Xbox',
      price: 500,
      image: 'https://images-na.ssl-images-amazon.com/images/I/911GAl+yrGL.jpg',
      description: 'Producto nuevo, con caja y etiquetas',
      quantity: 10
    },
    {
      id: 3,
      name: 'Mortal Kombat 11',
      category: 'Playstation',
      price: 300,
      image: 'https://store-images.s-microsoft.com/image/apps.9688.70804610839547354.8da93c46-fd13-4b16-8ebe-e8e02c53d93e.09c2e91e-28bd-4f6f-bfd6-79d6b241667a',
      description: 'Producto nuevo, con caja y etiquetas',
      quantity: 10
    },
    {
      id: 4,
      name: 'Forza Horizon 4',
      category: 'Xbox',
      price: 400,
      image: 'https://s1.gaming-cdn.com/images/products/7743/orig/forza-horizon-4-paquete-de-coches-de-heroes-japoneses-pc-xbox-one-dlc-edition-xbox-one-pc-juego-microsoft-store-europe-cover.jpg',
      description: 'Producto nuevo, con caja y etiquetas',
      quantity: 10
    },
    {
      id: 5,
      name: 'Zelda Breath of the Wild',
      category: 'Nintendo',
      price: 500,
      image: 'https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/tablet-2.jpg',
      description: 'Producto nuevo, con caja y etiquetas',
      quantity: 10
    }
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    },100);
  });

}

export const item = async (id) => {
  await items().then(items => {
    return items.filter(item => item.id === id);
  });
}

export default items;