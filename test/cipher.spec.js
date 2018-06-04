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
  
    it('debería retornar " " para " " con offset 27',()=>{
      assert.equal(cipher.encode(27," ")," ")
    })

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG '), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ');
    });

    it('debería retornar " " para " " con offset 27',()=>{
      assert.equal(cipher.decode(27," ")," ")
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