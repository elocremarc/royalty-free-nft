/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { IpNftFactory, IpNftFactoryInterface } from "../IpNftFactory";

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
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "IpNftContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "licensee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "licenseCost",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "IpBrandName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "IpBrandSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "IpURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "sold",
        type: "bool",
      },
    ],
    name: "IpNftItemCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "IpNftContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "IpURI",
        type: "string",
      },
    ],
    name: "_pushIP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchIpNftItems",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "IpNftContractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "licensee",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "licenseCost",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "IpBrandName",
            type: "string",
          },
          {
            internalType: "string",
            name: "IpBrandSymbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "IpURI",
            type: "string",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct IpNftFactory.IpNftItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchItemsCreated",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "IpNftContractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "licensee",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "licenseCost",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "IpBrandName",
            type: "string",
          },
          {
            internalType: "string",
            name: "IpBrandSymbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "IpURI",
            type: "string",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct IpNftFactory.IpNftItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchMyNFTs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "IpNftContractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "licensee",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "licenseCost",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "IpBrandName",
            type: "string",
          },
          {
            internalType: "string",
            name: "IpBrandSymbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "IpURI",
            type: "string",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct IpNftFactory.IpNftItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChildren",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "IpNftContractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "licenseCost",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "IpBrandName",
        type: "string",
      },
      {
        internalType: "string",
        name: "IpBrandSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "IpURI",
        type: "string",
      },
    ],
    name: "newIpNftItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "IpNftContractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "newIpNftLicense",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600055600380546001600160a01b0319163317905561180e806100376000396000f3fe60806040526004361061007b5760003560e01c8063a8bb251c1161004e578063a8bb251c1461010f578063b4635a681461012f578063cd6bf41314610144578063f064c32e146101575761007b565b80631174b41314610080578063202e3740146100b65780634892e8e8146100d85780639644a3df146100fa575b600080fd5b34801561008c57600080fd5b506100a061009b366004611293565b61016c565b6040516100ad9190611611565b60405180910390f35b3480156100c257600080fd5b506100cb610181565b6040516100ad91906114fe565b3480156100e457600080fd5b506100ed610531565b6040516100ad91906114b1565b61010d6101083660046112b4565b610593565b005b34801561011b57600080fd5b5061010d61012a366004611384565b61073e565b34801561013b57600080fd5b506100cb610785565b61010d6101523660046112dd565b610aed565b34801561016357600080fd5b506100cb610d3a565b60066020526000908152604090205460ff1681565b6060600061018f60016110e1565b905060008060005b838110156101f25733600560006101af846001611707565b81526020810191909152604001600020600401546001600160a01b031614156101e0576101dd600184611707565b92505b806101ea81611791565b915050610197565b5060008267ffffffffffffffff81111561021c57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561025557816020015b6102426110f2565b81526020019060019003908161023a5790505b50905060005b84811015610528573360056000610273846001611707565b81526020810191909152604001600020600401546001600160a01b031614156105165760006102a3826001611707565b6000818152600560208181526040928390208351610140810185528154815260018201546001600160a01b0390811693820193909352600282015494810194909452600381015482166060850152600481015490911660808401529081015460a08301526006810180549394509092839160c084019161032290611756565b80601f016020809104026020016040519081016040528092919081815260200182805461034e90611756565b801561039b5780601f106103705761010080835404028352916020019161039b565b820191906000526020600020905b81548152906001019060200180831161037e57829003601f168201915b505050505081526020016007820180546103b490611756565b80601f01602080910402602001604051908101604052809291908181526020018280546103e090611756565b801561042d5780601f106104025761010080835404028352916020019161042d565b820191906000526020600020905b81548152906001019060200180831161041057829003601f168201915b5050505050815260200160088201805461044690611756565b80601f016020809104026020016040519081016040528092919081815260200182805461047290611756565b80156104bf5780601f10610494576101008083540402835291602001916104bf565b820191906000526020600020905b8154815290600101906020018083116104a257829003601f168201915b50505091835250506009919091015460ff16151560209091015284518590879081106104fb57634e487b7160e01b600052603260045260246000fd5b6020908102919091010152610511600186611707565b945050505b8061052081611791565b91505061025b565b50935050505090565b6060600780548060200260200160405190810160405280929190818152602001828054801561058957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161056b575b5050505050905090565b600260005414156105bf5760405162461bcd60e51b81526004016105b6906116d0565b60405180910390fd5b60026000818155828152600560208190526040822090810154920154906105e86127108461171f565b90506105f48184611707565b34146106125760405162461bcd60e51b81526004016105b69061165f565b6000848152600560205260408082206003015490516001600160a01b03909116913480156108fc02929091818181858888f1935050505015801561065a573d6000803e3d6000fd5b506040516323b872dd60e01b81526001600160a01b038616906323b872dd9061068b9030903390879060040161141d565b600060405180830381600087803b1580156106a557600080fd5b505af11580156106b9573d6000803e3d6000fd5b50505060008581526005602052604090206004810180546001600160a01b03191633179055600901805460ff19166001179055506106f760026110e9565b6003546040516001600160a01b039091169082156108fc029083906000818181858888f19350505050158015610731573d6000803e3d6000fd5b5050600160005550505050565b600480546001810182556000919091528151610781917f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b01906020840190611162565b5050565b6060600061079360016110e1565b905060006107a160026110e1565b6107ab60016110e1565b6107b5919061173f565b90506000808267ffffffffffffffff8111156107e157634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561081a57816020015b6108076110f2565b8152602001906001900390816107ff5790505b50905060005b84811015610528576000600581610838846001611707565b81526020810191909152604001600020600401546001600160a01b03161415610adb576000610868826001611707565b6000818152600560208181526040928390208351610140810185528154815260018201546001600160a01b0390811693820193909352600282015494810194909452600381015482166060850152600481015490911660808401529081015460a08301526006810180549394509092839160c08401916108e790611756565b80601f016020809104026020016040519081016040528092919081815260200182805461091390611756565b80156109605780601f1061093557610100808354040283529160200191610960565b820191906000526020600020905b81548152906001019060200180831161094357829003601f168201915b5050505050815260200160078201805461097990611756565b80601f01602080910402602001604051908101604052809291908181526020018280546109a590611756565b80156109f25780601f106109c7576101008083540402835291602001916109f2565b820191906000526020600020905b8154815290600101906020018083116109d557829003601f168201915b50505050508152602001600882018054610a0b90611756565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3790611756565b8015610a845780601f10610a5957610100808354040283529160200191610a84565b820191906000526020600020905b815481529060010190602001808311610a6757829003601f168201915b50505091835250506009919091015460ff1615156020909101528451859087908110610ac057634e487b7160e01b600052603260045260246000fd5b6020908102919091010152610ad6600186611707565b945050505b80610ae581611791565b915050610820565b60026000541415610b105760405162461bcd60e51b81526004016105b6906116d0565b600260005583610b325760405162461bcd60e51b81526004016105b69061161c565b610b3c60016110e9565b6000610b4860016110e1565b60408051610140810182528281526001600160a01b03808b1660208084019182528385018c8152336060860190815260006080870181815260a088018f815260c089018f815260e08a018f90526101008a018e90526101208a018490528b845260058088529a909320895181559651600188018054918a166001600160a01b031992831617905594516002880155925160038701805491891691861691909117905551600486018054919097169316929092179094559251948201949094559051805194955091939092610c23926006850192910190611162565b5060e08201518051610c3f916007840191602090910190611162565b506101008201518051610c5c916008840191602090910190611162565b5061012091909101516009909101805460ff19169115159190911790556040516323b872dd60e01b81526001600160a01b038816906323b872dd90610ca990339030908b9060040161141d565b600060405180830381600087803b158015610cc357600080fd5b505af1158015610cd7573d6000803e3d6000fd5b5050505085876001600160a01b0316827f6a72c0c7b204a2a18590c8f898d25e1a67c48ed4c3c67eb0a315adfedbe359e03360008a8a8a8a6000604051610d249796959493929190611441565b60405180910390a4505060016000555050505050565b60606000610d4860016110e1565b905060008060005b83811015610dab573360056000610d68846001611707565b81526020810191909152604001600020600301546001600160a01b03161415610d9957610d96600184611707565b92505b80610da381611791565b915050610d50565b5060008267ffffffffffffffff811115610dd557634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610e0e57816020015b610dfb6110f2565b815260200190600190039081610df35790505b50905060005b84811015610528573360056000610e2c846001611707565b81526020810191909152604001600020600301546001600160a01b031614156110cf576000610e5c826001611707565b6000818152600560208181526040928390208351610140810185528154815260018201546001600160a01b0390811693820193909352600282015494810194909452600381015482166060850152600481015490911660808401529081015460a08301526006810180549394509092839160c0840191610edb90611756565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0790611756565b8015610f545780601f10610f2957610100808354040283529160200191610f54565b820191906000526020600020905b815481529060010190602001808311610f3757829003601f168201915b50505050508152602001600782018054610f6d90611756565b80601f0160208091040260200160405190810160405280929190818152602001828054610f9990611756565b8015610fe65780601f10610fbb57610100808354040283529160200191610fe6565b820191906000526020600020905b815481529060010190602001808311610fc957829003601f168201915b50505050508152602001600882018054610fff90611756565b80601f016020809104026020016040519081016040528092919081815260200182805461102b90611756565b80156110785780601f1061104d57610100808354040283529160200191611078565b820191906000526020600020905b81548152906001019060200180831161105b57829003601f168201915b50505091835250506009919091015460ff16151560209091015284518590879081106110b457634e487b7160e01b600052603260045260246000fd5b60209081029190910101526110ca600186611707565b945050505b806110d981611791565b915050610e14565b80545b919050565b80546001019055565b6040518061014001604052806000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016060815260200160608152602001606081526020016000151581525090565b82805461116e90611756565b90600052602060002090601f01602090048101928261119057600085556111d6565b82601f106111a957805160ff19168380011785556111d6565b828001600101855582156111d6579182015b828111156111d65782518255916020019190600101906111bb565b506111e29291506111e6565b5090565b5b808211156111e257600081556001016111e7565b80356001600160a01b03811681146110e457600080fd5b600082601f830112611222578081fd5b813567ffffffffffffffff8082111561123d5761123d6117c2565b604051601f8301601f191681016020018281118282101715611261576112616117c2565b604052828152848301602001861015611278578384fd5b82602086016020830137918201602001929092529392505050565b6000602082840312156112a4578081fd5b6112ad826111fb565b9392505050565b600080604083850312156112c6578081fd5b6112cf836111fb565b946020939093013593505050565b60008060008060008060c087890312156112f5578182fd5b6112fe876111fb565b95506020870135945060408701359350606087013567ffffffffffffffff80821115611328578384fd5b6113348a838b01611212565b94506080890135915080821115611349578384fd5b6113558a838b01611212565b935060a089013591508082111561136a578283fd5b5061137789828a01611212565b9150509295509295509295565b600060208284031215611395578081fd5b813567ffffffffffffffff8111156113ab578182fd5b6113b784828501611212565b949350505050565b6001600160a01b03169052565b15159052565b60008151808452815b818110156113f7576020818501810151868301820152016113db565b818111156114085782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038881168252871660208201526040810186905260e060608201819052600090611474908301876113d2565b828103608084015261148681876113d2565b905082810360a084015261149a81866113d2565b91505082151560c083015298975050505050505050565b6020808252825182820181905260009190848201906040850190845b818110156114f25783516001600160a01b0316835292840192918401916001016114cd565b50909695505050505050565b60208082528251828201819052600091906040908185019080840286018301878501865b8381101561160357603f198984030185528151610140815185528882015161154c8a8701826113bf565b508782015188860152606080830151611567828801826113bf565b505060808083015161157b828801826113bf565b505060a080830151818701525060c080830151828288015261159f838801826113d2565b9250505060e080830151868303828801526115ba83826113d2565b9250505061010080830151868303828801526115d683826113d2565b925050506101208083015192506115ef818701846113cc565b509588019593505090860190600101611522565b509098975050505050505050565b901515815260200190565b60208082526023908201527f4c6963656e736520436f7374206d757374206265206174206c6561737420312060408201526277656960e81b606082015260800190565b6020808252604b908201527f506c65617365207375626d6974207468652061736b696e67207072696365206960408201527f6e206f7264657220746f20636f6d706c65746520746865206c6963656e73652060608201526a3a3930b739b0b1ba34b7b760a91b608082015260a00190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b6000821982111561171a5761171a6117ac565b500190565b60008261173a57634e487b7160e01b81526012600452602481fd5b500490565b600082821015611751576117516117ac565b500390565b60028104600182168061176a57607f821691505b6020821081141561178b57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156117a5576117a56117ac565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122098c210f2a5abca0527e4a2bb2f86640ecc24bdfd453e29748f1f29580b3b2b2564736f6c63430008000033";

export class IpNftFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IpNftFactory> {
    return super.deploy(overrides || {}) as Promise<IpNftFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IpNftFactory {
    return super.attach(address) as IpNftFactory;
  }
  connect(signer: Signer): IpNftFactory__factory {
    return super.connect(signer) as IpNftFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IpNftFactoryInterface {
    return new utils.Interface(_abi) as IpNftFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IpNftFactory {
    return new Contract(address, _abi, signerOrProvider) as IpNftFactory;
  }
}
