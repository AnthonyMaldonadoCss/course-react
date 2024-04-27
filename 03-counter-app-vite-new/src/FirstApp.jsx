import PropTypes from 'prop-types';


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
/**ES MEJOR DECLARAR LAS FUNCIONES FUERA PORQUE AL MOMENTO DE RENDERIZAR 
 * SE RE EVALURAN LAS FUNCIONES, CONSTANTES, ETC...
*/

export const FirstApp = ({title, subTitle}) => {
  return (
    <> 
      <h1 style={ { color: "red" } } > 
        { nombre }: 
        <span style={ { color: "blue", fontSize:"xx-large" } }> 
          &nbsp; Software Developer 
        </span>
      </h1> 

      <h2>
        { title }
      </h2>

      <h4 id='subtitle'>
        { subTitle } 
      </h4>
      
      <p> { date.getUTCDate() } - { date.getUTCMonth() } - { date.getFullYear() } </p>
      
      <p> El fragment es para devolver lo que se quiere renderizar en un elemento padre </p>
      
      <ul style={ { display: "flex", flexDirection: "row", justifyContent:"space-evenly", alignItems: "flex-start"} }>
        <> { loop() } </>
      </ul>
    
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: 'Hola, soy Anthony',
  subTitle: '123'
}