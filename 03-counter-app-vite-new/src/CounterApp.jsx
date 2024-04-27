import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ({ value }) => {
  const [ counter, setCounter ] = useState( value );

  const handleClick = (event) => {
    console.log(value);
    const { action } = event.target.dataset;
    console.log( 'Hola mundo' )
    console.log( event );
    console.log( event.target.dataset.action );

    switch ( action ) {
      case 'add':
        setCounter( counter + 1 );
        break;
      case 'substract':
        setCounter( counter - 1 );
        break;
      case 'reset':
        setCounter( value );
        break;
      default:
        setCounter( value );
        break;
    }
  
    // setCounter( counter + 1 );
    // setCounter( (c) => c + 1 );
  
  }

  return (
    <>
      <h1> CounterApp </h1>
      <h2> { counter } </h2>
      <button onClick={ handleClick } data-action='add'> +1 </button> &nbsp;
      <button onClick={ handleClick } data-action='substract'> -1 </button> &nbsp;
      <button onClick={ handleClick } data-action='reset'> Reset </button> 
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}