export const FirstApp = () => {
  const nombre = 'Anthony Maldonado';
  const date = new Date();

  const numeros = [1,2,3,4,5,6,7,8,9,10];

  const loop = () => {
    const li = [];
    for (let [i,numero] of numeros.entries()) {
      li.push( <li key={i} > {numero} </li> )
    }
    return li
  }


  return (
    <> 
      <h1> { nombre }: Software Developer </h1> 
      <p> { date.getUTCDate() } - { date.getUTCMonth() } - { date.getFullYear() } </p>
      <p> El fragment es para devolver lo que se quiere renderizar en un elemento padre </p>
      <ul style={ { display: "flex", flexDirection: "row", justifyContent:"space-evenly", alignItems: "flex-start"} }>
        <> { loop() } </>
      </ul>
    </>
  )
}