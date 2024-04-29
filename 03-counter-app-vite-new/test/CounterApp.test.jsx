import { CounterApp } from "../src/CounterApp";
import { render, screen } from "@testing-library/react"

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
    expect( screen.getByRole('button', { name: 'Reset' } ) ).toBeTruthy();
    expect( screen.getByRole('button', { name: '+1' } ) ).toBeTruthy();
    expect( screen.getByRole('button', { name: '-1' } ) ).toBeTruthy();
  })
  

})
