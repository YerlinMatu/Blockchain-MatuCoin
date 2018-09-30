const Block = require('./block');
const sha256 = require('js-sha256');

class Blockchain {
  constructor(genesis) {
    this.blocks = [];
    this.addBlock(genesis);
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

    const previousBlock = this.getPreviousBlock();
    block.index = this.blocks.length;
    block.previousHash = previousBlock.hash;
    block.hash = this.generateHash(block);
    return block;
  }

  generateHash(block) {
    let hash = sha256(block.key);
    while (!hash.startsWith('0000')) {
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

module.exports = Blockchain;