export default class Block {
  constructor () {
    this.index = 0;
    this.previousHash = '';
    this.hash = '';
    this.nonce = 0;
    this.transactions = [];
  }
  addTransaction(trasaction) {
    this.transactions.push(trasaction);
  }
  get key() {
    return JSON.stringify(this.transactions) + this.index + this.previousHash + this.once;
  }
}