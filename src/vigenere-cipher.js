const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (node = true) {
    this.node = node;
  }
  
  encrypt(text, key, decrypt = false) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    const result = [];
    let i = 0;
    [text, key] = [text, key].map(elem => elem.toUpperCase());
    
    for (let item of text) {
      const number = item.charCodeAt(0);
      
      if (number >= 65 && number <= 90) {
        const numCode = (key[i++ % key.length].charCodeAt(0) - 65) % 32;
        const charCode = decrypt ? number + 65 - numCode : number - 65 + numCode;
        item = String.fromCharCode(charCode % 26 + 65);
      }
      result.push(item);
    }
    return (this.node ? result : result.reverse()).join("");
  }
  
  decrypt(text, key) {
    return this.encrypt(text, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine
};
