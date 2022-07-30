
const productos =[
  {
    "id": 0,
    "title": "PYRAMIS",
    "description": "Ipsum veniam nisi nostrud consequat non exercitation sint magna. Id adipisicing excepteur aliqua anim qui pariatur magna labore dolor exercitation irure culpa reprehenderit. Laboris dolor ipsum quis ex ipsum aliquip proident nulla qui aute sit pariatur nulla. Do reprehenderit in eu veniam duis anim esse sit veniam occaecat in.\r\n",
    "price": "$1,996.82",
    "pictureURL": "https://source.unsplash.com/random/800x800/?img=1",
    "stock": 3
  },
  {
    "id": 1,
    "title": "EYEWAX",
    "description": "Consectetur Lorem laboris voluptate proident ipsum enim et. Nulla proident sit minim aliquip ex fugiat do. Aliquip do sint cillum eiusmod aliquip reprehenderit est ex minim officia dolore.\r\n",
    "price": "$3,903.78",
    "pictureURL": "https://source.unsplash.com/random/800x800/?img=1",
    "stock": 5
  },
  {
    "id": 2,
    "title": "BLANET",
    "description": "Occaecat id aliquip nisi occaecat pariatur cupidatat labore eiusmod et occaecat minim exercitation nostrud sint. Ex esse qui eu excepteur cupidatat ut. Ullamco veniam dolor esse commodo. In enim enim labore sint fugiat laboris non tempor tempor mollit culpa ad velit occaecat. Ad eu dolore sunt pariatur ipsum fugiat ipsum adipisicing consectetur ad ullamco eiusmod.\r\n",
    "price": "$1,855.52",
    "pictureURL": "https://source.unsplash.com/random/800x800/?img=1",
    "stock": 6
  },
  {
    "id": 3,
    "title": "BIOSPAN",
    "description": "In qui deserunt adipisicing non et deserunt incididunt elit aute eu sint mollit cillum. Et consequat nulla id aliqua irure voluptate ipsum ullamco aliqua. Enim duis pariatur consequat officia ullamco nostrud in eu irure irure. Magna id pariatur amet quis fugiat consectetur. Officia id mollit dolor et eiusmod non cupidatat dolore.\r\n",
    "price": "$2,844.40",
    "pictureURL": "https://source.unsplash.com/random/800x800/?img=1",
    "stock": 3
  },
  {
    "id": 4,
    "title": "EXOSIS",
    "description": "Dolor consectetur veniam nulla nulla qui duis. Labore consectetur sint proident ipsum anim non. Eu sit incididunt pariatur reprehenderit. Pariatur consectetur elit laboris magna sint. Exercitation dolore adipisicing aute qui deserunt. Qui velit mollit amet proident. Commodo velit magna id aute ut cillum reprehenderit commodo mollit.\r\n",
    "price": "$1,936.00",
    "pictureURL": "https://source.unsplash.com/random/800x800/?img=1",
    "stock": 8
  },
  {
    "id": 5,
    "title": "PAPRIKUT",
    "description": "Elit fugiat nostrud proident officia. Nostrud velit sint elit reprehenderit. Officia incididunt eu et ut anim voluptate mollit laboris non sit. Officia fugiat nulla labore magna dolor anim voluptate Lorem deserunt. Commodo nostrud qui magna est commodo sint id aliqua aliqua commodo do quis. Deserunt do pariatur magna aliqua velit.\r\n",
    "price": "$3,230.98",
    "pictureURL": "https://source.unsplash.com/random/800x800/?img=1",
    "stock": 6
  },
  {
    "id": 6,
    "title": "HAWKSTER",
    "description": "Amet cillum consequat cupidatat do. Sint dolore consequat ad anim. In do ad aliqua non tempor consequat. Minim do nulla veniam adipisicing ullamco mollit. Laboris voluptate elit veniam quis deserunt minim in excepteur magna velit pariatur laborum cillum. Incididunt do labore cillum cupidatat veniam cupidatat nisi ex minim cupidatat aute cupidatat mollit.\r\n",
    "price": "$1,544.85",
    "pictureURL": "https://source.unsplash.com/random/800x800/?img=1",
    "stock": 3
  },
  {
    "id": 7,
    "title": "ZINCA",
    "description": "Ullamco sunt aliqua ea nostrud ex culpa nulla dolore incididunt voluptate. Eu in amet velit duis amet amet occaecat pariatur consectetur deserunt Lorem aliqua qui consectetur. Officia consectetur anim non incididunt veniam reprehenderit eiusmod dolore esse. Elit commodo labore veniam id quis et consectetur.\r\n",
    "price": "$2,106.63",
    "pictureURL": "https://source.unsplash.com/random/800x800/?img=1",
    "stock": 2
  },
  {
    "id": 7,
    "title": "ZINCA",
    "description": "Ullamco sunt aliqua ea nostrud ex culpa nulla dolore incididunt voluptate. Eu in amet velit duis amet amet occaecat pariatur consectetur deserunt Lorem aliqua qui consectetur. Officia consectetur anim non incididunt veniam reprehenderit eiusmod dolore esse. Elit commodo labore veniam id quis et consectetur.\r\n",
    "price": "$2,106.63",
    "pictureURL": "https://source.unsplash.com/random/800x800/?img=1",
    "stock": 2
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
