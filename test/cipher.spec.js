describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '), 'HIJKLMNOPQRSTUVWXYZABCDEFG ');

    });
  
    it('debería retornar "C" para "A" con offset 28',()=>{
      assert.equal(cipher.encode(28,"A"),"C")
    });

    it('debería retornar "c" para "a" con offset 28',()=>{
      assert.equal(cipher.encode(28,"a"),"c")
    })

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG '), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ');
    });

    it('debería retornar "A" para "C" con offset 28',()=>{
      assert.equal(cipher.decode(28,"C"),"A")
    });

    it('debería retornar "a" para "c" con offset 28',()=>{
      assert.equal(cipher.decode(28,"c"),"a")
    })

  });  
});

describe('cipher.createCipherWithOffset', () => {

  it('debería ser una función', () => {
    assert.equal(typeof cipher.createCipherWithOffset, 'function');
  });

  it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
    assert.isObject(cipher.createCipherWithOffset(33));
    assert.isFunction(cipher.createCipherWithOffset(33).encode);
    assert.isFunction(cipher.createCipherWithOffset(33).decode);
  });

  it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
    assert.equal(cipher.createCipherWithOffset(33).encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ '), 'HIJKLMNOPQRSTUVWXYZABCDEFG ');
  });

  it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
    assert.equal(cipher.createCipherWithOffset(33).decode('HIJKLMNOPQRSTUVWXYZABCDEFG '), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ');
  });
});