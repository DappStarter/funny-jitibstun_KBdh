require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stove cruise spider clump inflict photo fortune genuine'; 
let testAccounts = [
"0xe431eecf43f6b0757a81e7712736d057183ab6d1f066b9b8231c167fd8b63c0d",
"0x221ea59136eb7cc043f99628d99e68b9079430f7b8504f08a608a58ef245557f",
"0x71a6420a53c8da2c5120caa594aa5ecb4656dc8beaf2c36236761365a0434c37",
"0xddee828cbdff76213a6abb9dd408dcc409e538712e6c9bdebfb8893bc4eb22c6",
"0x45edca027a555e4713da8a2225d5f491e12240102c578b67454cc4f1830026b3",
"0x29727168ddd3c3800176894ce88d3d4dc2819b6d14c82760589b405ef67be3ff",
"0x23f3fe193b78dcbb7117989be021bb541c0cdc90c74a8a46d254ccf903ba91af",
"0x8e7fc733a094d303b771b2d1bef9074c7f6d7e5027b4e57c00b8496d802fba42",
"0x3ee0ecc1fbda20c2e79366695fb11f07c61680290f7859f9f1182ab6523ed605",
"0x7ac9a4308ae10b9935f9c86c0bf23e42ac6d437dcba81a9b9c078641d3a58c2e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

