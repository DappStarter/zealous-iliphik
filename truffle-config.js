require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note pizza minor idea drive food giant'; 
let testAccounts = [
"0xbeee478363a374f1d5520d8f8ac59ceaad604c6843828555e6d8fac47ba38f1e",
"0x0fc6447dbd248e53ab04129d59fb03d7c26625262d7c4b409021f69775c2289a",
"0x413e14e1aab9cb346381bbe5e092b4cb5bffd71609cbf725ab4e9e9ef44be794",
"0x7c9bef21e54caa04756f997972a5a8cf9eb14c396568bd47002defcae3dc3224",
"0x0293f27f4a6becb400a902a327e0da9266691b290fe91c19400ba97d9d7246c7",
"0x37e3d3026af904047be3c97cee4cb875bac4ad0070de7ba60dfbcbefbc95b7d4",
"0x4c5bfb5481e640990faeaf300ee8d9fc9157d8a189a87061f4f9d709951dc15d",
"0xe75f3245818046bf2642d17968fbf31d76967a1d6eedea917b62c230b1a5e792",
"0x2767eba36253f1c94685487090402f440dca1f58a9991fa13721e4e66ad722cc",
"0x428850e7b0fda1f50dfd7057357af4a734ebc8da0924f9bac489a0a3b226e655"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
