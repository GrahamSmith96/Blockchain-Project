//get the proof of work as the 'heartbeat' of the blockchain

class Blockchain {
    constructor() {
        this.blocks = [];
    }
    addBlock(block) {
        this.blocks.push(block);
    }

    blockHeight() {
        return this.blocks.length;
    }
}

module.exports = Blockchain;
