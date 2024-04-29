import { CounterApp } from "../src/CounterApp";
import { render, screen, fireEvent } from "@testing-library/react"

describe('Haciendo pruebas en el <CounterApp />', () => {
  
  test('Tarea 1: Debe de hacer match con el SnapShot ', () => {
    const { container } = render( <CounterApp /> );
    expect( container ).toMatchSnapshot();
  })

  test('Tarea 2: Debe mostrar el valor inicial de 100 ', () => {
    const initialValue = 100
    render( <CounterApp value={ initialValue } /> );
    expect( screen.getByText( initialValue ) ).toBeTruthy();
  })


  test('Deben existir los botones de incrementar, decrementar y reset', () => {
    const initialValue = 100
    render( <CounterApp value={ initialValue } /> );
    // expect( screen.getByRole('button', { name: 'Reset' } ) ).toBeTruthy();
    expect( screen.getByRole('button', { name: '+1' } ) ).toBeTruthy();
    expect( screen.getByRole('button', { name: '-1' } ) ).toBeTruthy();
    
    expect( screen.getByRole('button', { name: 'reset' } ) ).toBeTruthy();

    
  })

  test('Debe de incrementar al hacer click en el +1', () => {
    const initialValue = 100
    render( <CounterApp value={ initialValue } /> );
    fireEvent.click( screen.getByRole('button', { name: '+1' } ) );
    expect( screen.getByText( 101 ) ).toBeTruthy();
    expect( screen.getByRole('heading', { level: 2 } ).innerHTML ).toBe( ' 101 ' );
  })

  test('Debe de decrementar al hacer click en el -1', () => {
    const initialValue = 100
    render( <CounterApp value={ initialValue } /> );
    fireEvent.click( screen.getByRole('button', { name: '-1' } ) );
    expect( screen.getByText( 99 ) ).toBeTruthy();
    expect( screen.getByRole('heading', { level: 2 } ).innerHTML ).toBe( ' 99 ' );
  })

  test('Debe de resetear el valor al valor inicial del componente', () => {
    const initialValue = 100
    render( <CounterApp value={ initialValue } /> );
    fireEvent.click( screen.getByRole('button', { name: 'reset' } ) );
    expect( screen.getByText( initialValue ) ).toBeTruthy();
    expect( screen.getByRole('heading', { level: 2 } ).innerHTML ).toBe( ' 100 ' );
  })
  
  

})
