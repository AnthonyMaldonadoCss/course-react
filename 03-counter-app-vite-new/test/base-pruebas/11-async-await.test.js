import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
  
  test('getImagen debe retornar una imagen', async() => {
    const resp = await getImagen();
    console.log(resp);

    expect(resp.includes('https://')).toBe(true);
  })

})
