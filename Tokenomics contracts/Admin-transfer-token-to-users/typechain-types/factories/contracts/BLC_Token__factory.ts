/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { BLC_Token, BLC_TokenInterface } from "../../contracts/BLC_Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "TransferOwnerShip",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "contracts",
    outputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "max_supply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnerShip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f424c554520746f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f424c55450000000000000000000000000000000000000000000000000000000081525081600390816200008f91906200058f565b508060049081620000a191906200058f565b505050620000c06752a70901bbf6b6df60c01b6200019b60201b60201c565b620000dc6737e24c8ad168b4db60c01b6200019b60201b60201c565b33600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000139671e8b6fbd7b76f16360c01b6200019b60201b60201c565b6200015567b27b832de0e87e9660c01b6200019b60201b60201c565b62000195600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166b033b2e3c9fd0803ce80000006200019e60201b60201c565b62000791565b50565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000210576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200020790620006d7565b60405180910390fd5b62000224600083836200030b60201b60201c565b806002600082825462000238919062000728565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002eb919062000774565b60405180910390a362000307600083836200031060201b60201c565b5050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200039757607f821691505b602082108103620003ad57620003ac6200034f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004177fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620003d8565b620004238683620003d8565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004706200046a62000464846200043b565b62000445565b6200043b565b9050919050565b6000819050919050565b6200048c836200044f565b620004a46200049b8262000477565b848454620003e5565b825550505050565b600090565b620004bb620004ac565b620004c881848462000481565b505050565b5b81811015620004f057620004e4600082620004b1565b600181019050620004ce565b5050565b601f8211156200053f576200050981620003b3565b6200051484620003c8565b8101602085101562000524578190505b6200053c6200053385620003c8565b830182620004cd565b50505b505050565b600082821c905092915050565b6000620005646000198460080262000544565b1980831691505092915050565b60006200057f838362000551565b9150826002028217905092915050565b6200059a8262000315565b67ffffffffffffffff811115620005b657620005b562000320565b5b620005c282546200037e565b620005cf828285620004f4565b600060209050601f831160018114620006075760008415620005f2578287015190505b620005fe858262000571565b8655506200066e565b601f1984166200061786620003b3565b60005b8281101562000641578489015182556001820191506020850194506020810190506200061a565b868310156200066157848901516200065d601f89168262000551565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620006bf601f8362000676565b9150620006cc8262000687565b602082019050919050565b60006020820190508181036000830152620006f281620006b0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000735826200043b565b915062000742836200043b565b92508282019050808211156200075d576200075c620006f9565b5b92915050565b6200076e816200043b565b82525050565b60006020820190506200078b600083018462000763565b92915050565b61182880620007a16000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638863dd1a1161009757806395d89b411161006657806395d89b41146102c4578063a457c2d7146102e2578063a9059cbb14610312578063dd62ed3e1461034257610100565b80638863dd1a146102505780638a333b501461026c5780638da5cb5b1461028a5780638ee99ba1146102a857610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf578063474da79a146101ef57806370a082311461022057610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d610372565b60405161011a919061103d565b60405180910390f35b61013d600480360381019061013891906110f8565b610404565b60405161014a9190611153565b60405180910390f35b61015b610427565b604051610168919061117d565b60405180910390f35b61018b60048036038101906101869190611198565b610431565b6040516101989190611153565b60405180910390f35b6101a9610460565b6040516101b69190611207565b60405180910390f35b6101d960048036038101906101d491906110f8565b610469565b6040516101e69190611153565b60405180910390f35b61020960048036038101906102049190611222565b6104a0565b60405161021792919061125e565b60405180910390f35b61023a60048036038101906102359190611287565b6104e4565b604051610247919061117d565b60405180910390f35b61026a60048036038101906102659190611287565b61052c565b005b6102746106cc565b604051610281919061117d565b60405180910390f35b6102926106dc565b60405161029f91906112b4565b60405180910390f35b6102c260048036038101906102bd91906110f8565b610702565b005b6102cc61091a565b6040516102d9919061103d565b60405180910390f35b6102fc60048036038101906102f791906110f8565b6109ac565b6040516103099190611153565b60405180910390f35b61032c600480360381019061032791906110f8565b610a23565b6040516103399190611153565b60405180910390f35b61035c600480360381019061035791906112cf565b610a46565b604051610369919061117d565b60405180910390f35b6060600380546103819061133e565b80601f01602080910402602001604051908101604052809291908181526020018280546103ad9061133e565b80156103fa5780601f106103cf576101008083540402835291602001916103fa565b820191906000526020600020905b8154815290600101906020018083116103dd57829003601f168201915b5050505050905090565b60008061040f610acd565b905061041c818585610ad5565b600191505092915050565b6000600254905090565b60008061043c610acd565b9050610449858285610c9e565b610454858585610d2a565b60019150509392505050565b60006012905090565b600080610474610acd565b90506104958185856104868589610a46565b610490919061139e565b610ad5565b600191505092915050565b60056020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6105406733717cd1da31f68060c01b610fa0565b61055467e9f6f8b75e5ec16a60c01b610fa0565b61056867ae54162670ca43ed60c01b610fa0565b61057c678efd6e6b1712eeab60c01b610fa0565b61058f66385f4249a599d960c01b610fa0565b3373ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105e957600080fd5b6105fd67810c686c482ea22d60c01b610fa0565b61061167b700475b15927a8960c01b610fa0565b61062567b1f105c316c7eb3f60c01b610fa0565b61063967aac9cbffd2060bd660c01b610fa0565b61064d6758dd19f982e22c6d60c01b610fa0565b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106a166af741701b899f960c01b610fa0565b6106b567dfeb1c1fd16472b260c01b610fa0565b6106c833826106c3336104e4565b610431565b5050565b6b033b2e3c9fd0803ce800000081565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61071667a8eb0dd66076aa1d60c01b610fa0565b61072a67e9f6f8b75e5ec16a60c01b610fa0565b61073e67ae54162670ca43ed60c01b610fa0565b610752678efd6e6b1712eeab60c01b610fa0565b61076566385f4249a599d960c01b610fa0565b3373ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107bf57600080fd5b6107d367810c686c482ea22d60c01b610fa0565b6107e767b700475b15927a8960c01b610fa0565b6107fb679364dbdb41b8dc7d60c01b610fa0565b61080f679ccf365b0ba0200b60c01b610fa0565b61082367cce3ddb9f54db79160c01b610fa0565b60066000815480929190610836906113d2565b919050555061084f67103539a2d17f3ca560c01b610fa0565b60405180604001604052808373ffffffffffffffffffffffffffffffffffffffff1681526020018281525060056000600654815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050506108f7670a485a6a4b8cd4e560c01b610fa0565b61090b67d6aa7d2f821ce03d60c01b610fa0565b6109158282610a23565b505050565b6060600480546109299061133e565b80601f01602080910402602001604051908101604052809291908181526020018280546109559061133e565b80156109a25780601f10610977576101008083540402835291602001916109a2565b820191906000526020600020905b81548152906001019060200180831161098557829003601f168201915b5050505050905090565b6000806109b7610acd565b905060006109c58286610a46565b905083811015610a0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a019061148c565b60405180910390fd5b610a178286868403610ad5565b60019250505092915050565b600080610a2e610acd565b9050610a3b818585610d2a565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3b9061151e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610bb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610baa906115b0565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c91919061117d565b60405180910390a3505050565b6000610caa8484610a46565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d245781811015610d16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0d9061161c565b60405180910390fd5b610d238484848403610ad5565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d90906116ae565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dff90611740565b60405180910390fd5b610e13838383610fa3565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e90906117d2565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f87919061117d565b60405180910390a3610f9a848484610fa8565b50505050565b50565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610fe7578082015181840152602081019050610fcc565b60008484015250505050565b6000601f19601f8301169050919050565b600061100f82610fad565b6110198185610fb8565b9350611029818560208601610fc9565b61103281610ff3565b840191505092915050565b600060208201905081810360008301526110578184611004565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061108f82611064565b9050919050565b61109f81611084565b81146110aa57600080fd5b50565b6000813590506110bc81611096565b92915050565b6000819050919050565b6110d5816110c2565b81146110e057600080fd5b50565b6000813590506110f2816110cc565b92915050565b6000806040838503121561110f5761110e61105f565b5b600061111d858286016110ad565b925050602061112e858286016110e3565b9150509250929050565b60008115159050919050565b61114d81611138565b82525050565b60006020820190506111686000830184611144565b92915050565b611177816110c2565b82525050565b6000602082019050611192600083018461116e565b92915050565b6000806000606084860312156111b1576111b061105f565b5b60006111bf868287016110ad565b93505060206111d0868287016110ad565b92505060406111e1868287016110e3565b9150509250925092565b600060ff82169050919050565b611201816111eb565b82525050565b600060208201905061121c60008301846111f8565b92915050565b6000602082840312156112385761123761105f565b5b6000611246848285016110e3565b91505092915050565b61125881611084565b82525050565b6000604082019050611273600083018561124f565b611280602083018461116e565b9392505050565b60006020828403121561129d5761129c61105f565b5b60006112ab848285016110ad565b91505092915050565b60006020820190506112c9600083018461124f565b92915050565b600080604083850312156112e6576112e561105f565b5b60006112f4858286016110ad565b9250506020611305858286016110ad565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061135657607f821691505b6020821081036113695761136861130f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113a9826110c2565b91506113b4836110c2565b92508282019050808211156113cc576113cb61136f565b5b92915050565b60006113dd826110c2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361140f5761140e61136f565b5b600182019050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611476602583610fb8565b91506114818261141a565b604082019050919050565b600060208201905081810360008301526114a581611469565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611508602483610fb8565b9150611513826114ac565b604082019050919050565b60006020820190508181036000830152611537816114fb565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061159a602283610fb8565b91506115a58261153e565b604082019050919050565b600060208201905081810360008301526115c98161158d565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611606601d83610fb8565b9150611611826115d0565b602082019050919050565b60006020820190508181036000830152611635816115f9565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611698602583610fb8565b91506116a38261163c565b604082019050919050565b600060208201905081810360008301526116c78161168b565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061172a602383610fb8565b9150611735826116ce565b604082019050919050565b600060208201905081810360008301526117598161171d565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006117bc602683610fb8565b91506117c782611760565b604082019050919050565b600060208201905081810360008301526117eb816117af565b905091905056fea26469706673582212209c1d5ad19629c90cd35003c9e3fe3935670727163a478d9add6d8f7261010ad564736f6c63430008110033";

type BLC_TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BLC_TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BLC_Token__factory extends ContractFactory {
  constructor(...args: BLC_TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BLC_Token> {
    return super.deploy(overrides || {}) as Promise<BLC_Token>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BLC_Token {
    return super.attach(address) as BLC_Token;
  }
  override connect(signer: Signer): BLC_Token__factory {
    return super.connect(signer) as BLC_Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BLC_TokenInterface {
    return new utils.Interface(_abi) as BLC_TokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BLC_Token {
    return new Contract(address, _abi, signerOrProvider) as BLC_Token;
  }
}