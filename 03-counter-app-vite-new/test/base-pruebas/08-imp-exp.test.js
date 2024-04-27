import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas 08-imp-exp', () => {
  
  test.skip('getHereoById debe retornar un heroe por id ', () => {
    const id = 2;
    const hero = getHeroeById( id );

    console.log( hero );

    expect( hero ).toEqual( {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
    } )
  })

  test.skip('getHeroeById debe retornar un undefined si el heroe no existe ', () => {
    const id = 10;
    const hero = getHeroeById( id ); 

    expect( hero ).toBeFalsy();
  })
  

  test('getHeroesByOwner debe retornar un arreglo de heroes de DC ', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner( owner );

    console.log( heroes );
    
    expect( heroes ).toEqual( expect.arrayContaining( [
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
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
      }
    ] ) )

    expect( heroes.length ).toBeGreaterThanOrEqual( 3 );
  })

  test('getHeroesByOwner debe retornar un arreglo de heroes de Marvel ', () => {
    const owner = 'Marvel';

    const heroes = getHeroesByOwner( owner );

    console.log( heroes );

    expect( heroes.length ).toBeGreaterThanOrEqual( 2 );
  })

})
