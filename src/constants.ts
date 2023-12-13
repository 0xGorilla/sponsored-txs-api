export const SIGNATURE_PROXY_FACTORY_ADDRESS = '0xeeb1498dA3C99376d2E47cc2d8520884FcedB99D';
export const SIGNATURE_PROXY_FACTORY_ABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_owner","type":"address"},{"indexed":false,"internalType":"contract ISignatureProxy","name":"_signatureProxy","type":"address"}],"name":"DeploySignatureProxy","type":"event"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"deploy","outputs":[{"internalType":"contract ISignatureProxy","name":"_signatureProxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"uint8","name":"_v","type":"uint8"},{"internalType":"bytes32","name":"_r","type":"bytes32"},{"internalType":"bytes32","name":"_s","type":"bytes32"}],"name":"deployAndExec","outputs":[{"internalType":"contract ISignatureProxy","name":"_signatureProxy","type":"address"},{"internalType":"bytes","name":"_returnData","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getSignatureProxy","outputs":[{"internalType":"contract ISignatureProxy","name":"_signatureProxy","type":"address"}],"stateMutability":"view","type":"function"}];
export const SIGNATURE_PROXY_ABI = [{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ECDSAInvalidSignature","type":"error"},{"inputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"name":"ECDSAInvalidSignatureLength","type":"error"},{"inputs":[{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"ECDSAInvalidSignatureS","type":"error"},{"inputs":[{"internalType":"bytes","name":"_returnData","type":"bytes"}],"name":"SignatureProxy_FailedCall","type":"error"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_signer","type":"address"}],"name":"SignatureProxy_NotOwner","type":"error"},{"inputs":[],"name":"OWNER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"uint8","name":"_v","type":"uint8"},{"internalType":"bytes32","name":"_r","type":"bytes32"},{"internalType":"bytes32","name":"_s","type":"bytes32"}],"name":"exec","outputs":[{"internalType":"bytes","name":"_returnData","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"nextNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
// In order to get the data look for a sample deployment tx in tenderly and see the init code used. It appears in the debugger as the input to CREATE2.
export const SIGNATURE_PROXY_CHILD_INIT_CODE = '0x60a060405234801561001057600080fd5b506040516108da3803806108da83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161084961009160003960008181605601526101b801526108496000f3fe6080604052600436106100385760003560e01c8063117803e314610044578063a03ce6ab146100a2578063d69c3d30146100c257600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b506100787f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100b56100b03660046105cd565b6100e6565b6040516100999190610762565b3480156100ce57600080fd5b506100d860005481565b604051908152602001610099565b606060008787874660005460405160200161010595949392919061077c565b6040516020818303038152906040528051906020012090506000610156827f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c91909152603c902090565b604080516020810188905280820187905260f889901b7fff0000000000000000000000000000000000000000000000000000000000000016606082015281516041818303018152606190910190915290915060006101b4838361030f565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8082169083161461024e576040517f6819f52a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8083166004830152831660248201526044015b60405180910390fd5b60008c73ffffffffffffffffffffffffffffffffffffffff168b8d60405161027691906107c8565b60006040518083038185875af1925050503d80600081146102b3576040519150601f19603f3d011682016040523d82523d6000602084013e6102b8565b606091505b5097509050806102f657866040517f53a5bf440000000000000000000000000000000000000000000000000000000081526004016102459190610762565b5050600080546001019055505050509695505050505050565b60008060008061031f8686610339565b92509250925061032f8282610386565b5090949350505050565b600080600083516041036103735760208401516040850151606086015160001a6103658882858561048e565b95509550955050505061037f565b50508151600091506002905b9250925092565b600082600381111561039a5761039a6107e4565b036103a3575050565b60018260038111156103b7576103b76107e4565b036103ee576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002826003811115610402576104026107e4565b0361043c576040517ffce698f700000000000000000000000000000000000000000000000000000000815260048101829052602401610245565b6003826003811115610450576104506107e4565b0361048a576040517fd78bce0c00000000000000000000000000000000000000000000000000000000815260048101829052602401610245565b5050565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156104c9575060009150600390508261057e565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa15801561051d573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166105745750600092506001915082905061057e565b9250600091508190505b9450945094915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b803560ff811681146105c857600080fd5b919050565b60008060008060008060c087890312156105e657600080fd5b863573ffffffffffffffffffffffffffffffffffffffff8116811461060a57600080fd5b9550602087013567ffffffffffffffff8082111561062757600080fd5b818901915089601f83011261063b57600080fd5b81358181111561064d5761064d610588565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561069357610693610588565b816040528281528c60208487010111156106ac57600080fd5b826020860160208301376000602084830101528099505050505050604087013593506106da606088016105b7565b92506080870135915060a087013590509295509295509295565b60005b8381101561070f5781810151838201526020016106f7565b50506000910152565b600081518084526107308160208601602086016106f4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006107756020830184610718565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8616815260a0602082015260006107ab60a0830187610718565b604083019590955250606081019290925260809091015292915050565b600082516107da8184602087016106f4565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea2646970667358221220b320f4298e1e313e4626e2a9410f38ffcaf13b74667f5308fe3750309830fc2764736f6c634300081400330000000000000000000000006fa32937e61f488e7bd87511d5a1fa859189aacd';