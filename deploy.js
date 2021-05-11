const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
    'produce avocado spread hover clever execute lounge arctic dial carbon aisle upgrade',
    'https://rinkeby.infura.io/v3/f75854973db54b9bb4136e58e68146a7'
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    console.log('Attemping to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data: bytecode,
        arguments: ['Hi there!']
    }).send({ gas: '1000000', from: accounts[0] })
    console.log('Contract deployed to', result.options.address)
}

deploy()
