import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {

  const title = 'Hola, soy Anthony'
  const subtile = 123;
  
  test('Debe de hacer match con el snapShot', () => {
    const { container } = render(<FirstApp title={ title } subTitle={ subtile } />)
    expect( container ).toMatchSnapshot(); 
  })

  test('Debe de mostrar el mensaje, Hola, soy Anthony', () => {
    render( <FirstApp title={ title } subTitle={ subtile } /> )
    expect( screen.getAllByText(title) ).toBeTruthy();
  })

  test('Debe mostrar el titulo en un H1', () => {
    render( <FirstApp title={ title } subTitle={ subtile } /> );
    
    expect( 
      screen.getByRole('heading', { level: 2 }).innerHTML 
    ).toContain( title );
  })

  test('Debe mostrar el subtitulo en un H4', () => {
    render( <FirstApp title={ title } subTitle={ subtile } /> );

    expect( 
      screen.getByRole('heading', { level: 4 }).innerHTML 
    ).toContain( String(subtile) );
  })
  
})
