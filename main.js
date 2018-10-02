const Block = require('./models/block');
const Transaction = require('./models/transaction');
const Blockchain = require('./models/blockchain');

// Initial genesis.

const genesisBlock = new Block();
const blockchain = new Blockchain(genesisBlock);

// Create transaction.

const transaction = new Transaction('Yerlin', 'Jhanny', 100);
const block = blockchain.getNextBlock([transaction]);
blockchain.addBlock(block);

const transaction1 = new Transaction('Tomas', 'Pedro', 100);
const block1 = blockchain.getNextBlock([transaction1, transaction]);
blockchain.addBlock(block1);

console.log(blockchain);
