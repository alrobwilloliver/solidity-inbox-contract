const path = require('path')
const fs = require('fs')
const solc = require('solc')

const input = { 
    'Inbox.sol': fs.readFileSync(path.resolve(__dirname, 'contracts', 'Inbox.sol'), 'utf8') 
}

module.exports = solc.compile({ sources: input}, 1).contracts['Inbox.sol:Inbox']
// const output = solc.compile({sources: input}, 1);

// if(output.errors) {
//     output.errors.forEach(err => {
//         console.log(err);
//     });
// } else {
//     const bytecode = output.contracts['Inbox.sol:Inbox'].bytecode;
//     const abi = output.contracts['Inbox.sol:Inbox'].interface;
//     console.log(`bytecode: ${bytecode}`);
//     console.log(`abi: ${JSON.stringify(JSON.parse(abi), null, 2)}`);
// }
