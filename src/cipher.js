window.cipher = {
    encode: (offset, string) => {
        let cypher = '';
        let firstASCII = 0;
        let capitalASCII = 0;
        let lowerASCII = 0;
        let spaceASCII = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i].charCodeAt() !== 32) {
                firstASCII = string[i].charCodeAt();
                if (firstASCII >= 65 && firstASCII <= 90) {
                    capitalASCII = (firstASCII - 65 + offset)%26 + 65;
                    let a = String.fromCharCode(capitalASCII);
                    cypher = cypher.concat(a);
                } else {
                    lowerASCII = (firstASCII - 97 + offset)%26 + 97;
                    let a = String.fromCharCode(lowerASCII);
                    cypher = cypher.concat(a);
                }
            } else {
                cypher = cypher + ' ';
            }
        }
        return cypher;  
    },

    decode: (offset, string) => {
        let decypher = '';
        let lastASCII = 0;
        let capitalASCII = 0;
        let lowerASCII = 0;
        let spaceASCII = 0;
        for (let i = 0; i < string.length; i++) {
          if (string[i].charCodeAt() !== 32) {
            lastASCII = string[i].charCodeAt();
            if (lastASCII >= 65 && lastASCII <= 90) {
                capitalASCII = (lastASCII - 90 - offset)%26 + 90;
                let a = String.fromCharCode(capitalASCII);
                decypher = decypher.concat(a);
            } else {
                lowerASCII = (lastASCII - 122 - offset)%26 + 122;
                let a = String.fromCharCode(lowerASCII);
                decypher = decypher.concat(a);
            }
          } else {
            decypher = decypher + ' ';
          }
        }
        return decypher;
    },

    createCipherWithOffset: (offset) => {
        let salida = {
            encode: (string) =>{
                return cipher.encode(offset, string);
            },
            decode: (string) =>{
                return cipher.decode(offset, string);
            },
        }
        return salida;
    }
};