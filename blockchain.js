const Block = require('./block');
const sha256 = require('js-sha265');

export default class Blockchain {
  constructor(genesis) {
    this.blocks = [];
  }

  addBlock(block) {
    if (this.blocks.length === 0) {
      block.previousHash = '0000';
      block.hash = this.generateHash(block);
    }
    this.blocks.push(block);
  }

  getNextBlock(transactions) {
    const block = new Block();
    transactions.map(transaction => block.addTransaction(transaction));
  }

  generateHash(block) {
    let hash = sha256(block.key);
    while (!hash.startWith('0000')) {
      block.nonce += 1;
      hash = sha256(block.key);
      console.log(hash); 
    }
    return hash;
  }

  getPreviousBlock() {
    return this.blocks[this.blocks.length -1];
  }
}