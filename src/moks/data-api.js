
const productos =[
  {
    "id": 0,
    "title": "Cera Barbería",
    "description": "Aporta manejabilidad e incrementa resistencia a agresiones externas,aumenta brillo natural del cabello.Con steres de origen 100 % vegetal.Se puede aplicar tanto en cabellos secos como húmedos.",
    "price": "$1,390.00",
    "pictureURL": "https://http2.mlstatic.com/D_NQ_NP_2X_998855-MLA31023241653_062019-F.webp",
    "stock": 3,
    "category": "Productos"
  },
  {
    "id": 1,
    "title": "Kit Barbería",
    "description": "Producto para peinar, con efecto mate. Aporta acondicionamiento y restauración gracias a los activos naturales bio lipid complex, hidrolizado de quinoa, aceite de soja y aceite de abyssinian. Rico en vitaminas A, B, C, E y F. Logrando un cabello fuerte y sano. .",
    "price": "$3,903.78",
    "pictureURL": "https://http2.mlstatic.com/D_NQ_NP_877592-MLA40198844828_122019-O.webp",
    "stock": 5,
    "category": "kits"
  },
  {
    "id": 2,
    "title": "Pomada Para Cabello",
    "description": "Pomada soluble para el cabello de uso únicamente profesional en barberías.",
    "price": "$2,450.00",
    "pictureURL": "https://http2.mlstatic.com/D_NQ_NP_857022-MLA50937461984_072022-O.webp",
    "stock": 6,
    "category": "Productos"
  },
  {
    "id": 3,
    "title": "Oleo Barberia",
    "description": "Pomada al agua ultra mate de larga duracion y fijación media.",
    "price": "$750.00",
    "pictureURL": "https://http2.mlstatic.com/D_NQ_NP_865417-MLA45214022636_032021-O.webp",
    "stock": 3,
    "category": "Productos"
  },
  {
    "id": 4,
    "title": "Kit Para Barba Premium",
    "description": "Cera extra fuerte para bigotes, mostachos y barbas super rebeldes, 30 gramos, Extra fuerte. Ideal para mantener firme el bigote en la posición que uno desee",
    "price": "$600.00",
    "pictureURL": "https://http2.mlstatic.com/D_NQ_NP_829240-MLA46536117302_062021-O.webp",
    "stock": 8,
    "category": "kits"
  },
  {
    "id": 5,
    "title": "Cera Extra Fuerte Para Bigote",
    "description": "Elit fugiat nostrud proident officia. Nostrud velit sint elit reprehenderit. Officia incididunt eu et ut anim voluptate mollit laboris non sit. Officia fugiat nulla labore magna dolor anim voluptate Lorem deserunt. Commodo nostrud qui magna est commodo sint id aliqua aliqua commodo do quis. Deserunt do pariatur magna aliqua velit.\r\n",
    "price": "$3,230.98",
    "pictureURL": "https://http2.mlstatic.com/D_NQ_NP_2X_974876-MLA44146163404_112020-F.webp",
    "stock": 6,
    "category": "Productos"
  },
  {
    "id": 6,
    "title": "Jabon Para Barba Concentrado",
    "description": "Jabon para barba natural super concentrado, 90 gramos de jabon natural solido y super concentrado. Dura el doble que cualquier jabon y esta preparado con productos 100% naturales. Contiene un ph muy bajo.. casi similar al de nuestra barba. Esto hace que el vello facial no pierda sus priopiedades naturales a la hora del lavado. Da resultados muy superiores al de cualquier shampoo y claramente rinde mas",
    "price": "$489.00",
    "pictureURL": "https://http2.mlstatic.com/D_NQ_NP_697950-MLA42862780731_072020-O.webp",
    "stock": 3,
    "category": "Productos"
  },
  {
    "id": 7,
    "title": "Oleo Para Barba",
    "description": "Rico en Vitamina A y E, Incrementa la suavidad del vello facial, Disminuye el efecto graso de los aceites, Origen 100% natural",
    "price": "$1,090.00",
    "pictureURL": "https://http2.mlstatic.com/D_NQ_NP_686298-MLA49665091233_042022-O.webp",
    "stock": 2,
    "category": "Productos"
  },
  {
    "id": 7,
    "title": "Cera Polvo Texturizador",
    "description": "Polvo Texturizador Legends, Terminación mate, proporciona una fijación duradera y natural para todo tipo de cabello.",
    "price": "$2,106.63",
    "pictureURL": "https://http2.mlstatic.com/D_NQ_NP_2X_648474-MLA50344950388_062022-F.webp",
    "stock": 2,
    "category": "Productos"
  }
]

export const productos_data = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('lo sentimos hubo un error')
      }

    },2000)

  })


export const getItem = (productoId) => {
    const task = new Promise((resolve) => {
      setTimeout(() => resolve(productos.filter((producto) => producto.id === Number(productoId),)[0] || {}), 2000);
    });
    return task;
  };


export const getCategory = (category) => {
    const task = new Promise((resolve) => {
      setTimeout(() => resolve(productos.filter((producto) => producto.category === category,)[0] || {}), 2000);
    });
    return task;
  };