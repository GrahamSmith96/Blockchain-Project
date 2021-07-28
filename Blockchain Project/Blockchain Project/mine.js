const db = require('./db');
const Blockchain = require('./Blockchain');
const Block = require('./Block');
const TARGET_DIFFICULTY = BigInt(("0x" + "F".repeat(63)));
const SHA256 = require('crypto-js/sha256'); 

let mining = false;

function startMining() {
    mining = true;
}

function stopMining() {
    mining = false;
}

function mine() {
    if(!mining) return;
    const block = new Block();
    while (BigInt('0x' + block.hash()) >= TARGET_DIFFICULTY) {
        block.nonce++;
    }

    db.blockchain.addBlock(block);

    console.log(db.blockchain.blockHeight());
    console.log(block.hash);
    console.log(block.nonce);

}

module.exports = {startMining, stopMining, mine};