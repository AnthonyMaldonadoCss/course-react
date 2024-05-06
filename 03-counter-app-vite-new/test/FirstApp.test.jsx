import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {

  const title = 'Hola, soy Anthony'
  const subtile = 123;
  
  test.skip('Debe de hacer match con el snapShot', () => {
    const { container } = render( <FirstApp title={ title } subTitle={ subtile } /> );
    expect( container ).toMatchSnapshot();
  })

  test.skip('Debe de mostrar el título en un h2', () => {
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
  
  test('Debe existir un atributo data', () => {
    const { getByTestId } = render( <FirstApp title={ title } subTitle={ subtile } /> );
    expect( getByTestId( 'test-title') ).toBeTruthy();
    
  })

  test('El contenido del atributo data debe ser igual a lo que se le pase', () => {
    const { getByTestId } = render( <FirstApp title={ title } subTitle={ subtile } /> );
    expect( getByTestId( 'test-title').innerHTML ).toBe( 'Hola, soy Anthony' );
  })

  test('Debe mostrar el subtitulo enviado por props', () => {
    const subtitle = 123;
    
    const { getByText, getAllByText } = render( 
      <FirstApp title={ title } subTitle={ subtitle } /> 
    );
    
    expect( getByText( subtitle ) ).toBeTruthy();
  })

  test('El length del nodo que contiene el subtitulo debe ser uno', () => {
    const { getByText, getAllByText } = render( 
      <FirstApp title={ title } subTitle={ subtile } /> 
    );
    expect( getAllByText( subtile ).length ).toBe( 1 );
  })
  
  
})
