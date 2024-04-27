
import { getUser } from "../../src/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en Funciones', () => {
  
  test.skip('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();
    
    console.log(user);
    
    expect( user ).toEqual( testUser );
  });

  test('GetUsuarioActivo debe retornar un objeto', () => {
    const name = 'Anthony Maldonado';
    
    const testUser = getUsuarioActivo(name);
    
    console.log(testUser);
    
    expect( testUser ).toEqual( {
      uid: 'ABC567',
      username: name
    } );
  })

}) 
