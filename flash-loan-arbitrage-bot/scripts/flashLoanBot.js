const Web3 = require('web3');
const { abi } = require('./FlashLoanArbitrage.json'); // コンパイルされたコントラクトのABI
const { address } = require('./FlashLoanArbitrage.json'); // デプロイされたコントラクトのアドレス

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'));
const contract = new web3.eth.Contract(abi, address);
const owner = 'YOUR_WALLET_ADDRESS';

async function main() {
    const asset = '0x...'; // フラッシュローンを行うトークンのアドレス
    const amount = web3.utils.toWei('100', 'ether'); // フラッシュローンの金額

    try {
        const tx = await contract.methods.flashLoan(asset, amount).send({ from: owner });
        console.log('Transaction successful:', tx);
    } catch (error) {
        console.error('Error executing flash loan:', error);
    }
}

main();
