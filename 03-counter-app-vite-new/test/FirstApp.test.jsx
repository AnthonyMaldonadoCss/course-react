import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {

  const title = 'Hola, soy Anthony'
  const subtile = 123;
  
  test('Debe de hacer match con el snapShot', () => {
    const { container } = render( <FirstApp title={ title } subTitle={ subtile } /> );
    expect( container ).toMatchSnapshot();
  })

  test('Debe de mostrar el título en un h2', () => {
    const { container, getByText } = render( <FirstApp title={ title } subTitle={ subtile } /> );
    expect( getByText( title ) ).toBeTruthy();
    expect( getByText( subtile ) ).toBeTruthy();
  })
  
  test('El DOM debe contener el titulo de la app', () => {
    const partTitle = 'Anthony'
    const { container, getByText } = render( <FirstApp title={ title } subTitle={ subtile } /> );
    const h2 = container.querySelector('h2');
    expect( h2.innerHTML ).toBe( 'Hola, soy Anthony' );
    expect( h2.innerHTML ).toContain( partTitle );
  })
  
  
})
