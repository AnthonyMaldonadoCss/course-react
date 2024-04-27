describe('Pruebas en <DemoComponente />', () => {
  test('Esta prueba no debe fallar', () => {

    // 1. Inicialización
    const message1 = 'Hola mundo';
    // 2. Estimulo
    const message2 = message1.trim();
    // 3. Observar el comportamiento
    expect( message1 ).toBe( message2 );
    // 4. Comprobar el comportamiento
    expect( message1 ).toBe( message2 );
  })
})