export const items = () => {
  const items = [
    {
      id: 1,
      name: 'Item 1',
      price: 100,
      image: 'https://picsum.photos/500',
      description: 'Producto nuevo, con caja y etiquetas'
    },
    {
      id: 2,
      name: 'Item 2',
      price: 500,
      image: 'https://picsum.photos/500',
      description: 'Producto nuevo, con caja y etiquetas'
    },
    {
      id: 3,
      name: 'Item 3',
      price: 300,
      image: 'https://picsum.photos/500',
      description: 'Producto nuevo, con caja y etiquetas'
    },
    {
      id: 4,
      name: 'Item 4',
      price: 400,
      image: 'https://picsum.photos/500',
      description: 'Producto nuevo, con caja y etiquetas'
    },
    {
      id: 5,
      name: 'Item 5',
      price: 500,
      image: 'https://picsum.photos/500',
      description: 'Producto nuevo, con caja y etiquetas'
    }
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 5000);
  });

}

export const item = async (id) => {
  await items().then(items => {
    console.log(items);
    return items.filter(item => item.id === id);
  });
}

export default items;