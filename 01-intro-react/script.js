const heroes = [
  {
      id: 1,
      name: 'Batman',
      owner: 'DC'
  },
  {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
  },
  {
      id: 3,
      name: 'Superman',
      owner: 'DC'
  },
  {
      id: 4,
      name: 'Flash',
      owner: 'DC'
  },
  {
      id: 5,
      name: 'Wolverine',
      owner: 'Marvel'
  },
];

const getHeroeById = function(id){
  return heroes.filter(h => h.id == id)
}
// const promesa = new Promise( (resolve, reject) => {

//   setTimeout(() => {
//     //Tarea
//     const heroe = getHeroeById(10)
//     if(heroe.length>0){
//       resolve(heroe);
//     }
//     else {
//       reject('no se pudo encontrar el heroe')
//     }
//   }, 2000);

// } );

// promesa.then( (heroe) => {
//   console.log("then de la promesa " + JSON.stringify(heroe))
// })
// .catch( err => console.warn(err));



// const getHeroeByIdAsync = (id) => {
//   const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//       //Tarea
//       const heroe = getHeroeById(id)
//       if(heroe.length>0){
//         resolve(heroe);
//       }
//       else {
//         reject('no se pudo encontrar el heroe')
//       }
//     }, 2000);
  
//   } );

//   return promesa
// }

// getHeroeByIdAsync(1)
//   .then(console.log)
//   .catch(err => console.error(err))
  //.finally(entonces => {console.log(entonces)})

/**
 * FETCH
*/

// const apiKey = "er4YXNXXX5MsQrKwJne3DNFROh3YMP5O1KljkqLx"

// const urlBase = 'https://api.nasa.gov/planetary/apod?'

// const peticion = fetch(`${urlBase}api_key=${apiKey}`)

// peticion
// .then( resp => resp.json())
// .then(({url}) => {
//   console.log(url)
//   const uri = url
//   const img = document.createElement('img')
//   img.src = uri;
//   document.body.append(img)
// })
// .catch(console.error)

/**
 * Async y Await
 */

const getImagen = async () => {
  const apiKey = "er4YXNXXX5MsQrKwJne3DNFROh3YMP5O1KljkqLx"
  const urlBase = 'https://api.nasa.gov/planetary/apod?'
  
  try {
    const resp = await fetch(`${urlBase}api_key=${apiKey}`)
    const { url } = await resp.json();
  
    console.log(url)
  
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)
  } 
  catch (error) {
    console.error(error)
  }
}

getImagen()