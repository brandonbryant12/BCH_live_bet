require('dotenv').config();

var JSONRPC = require('../lib/jsonrpc');

var rpc = new JSONRPC();

var  LBRYBetWallet;

(async function() {
  
  LBRYBetWallet = await rpc.call('account_create',['LBRYBet'])

}


export async function acceptBet(betID:string){

	await fundEscrow(betID)
	##Publish message escrow funded
}

export async function fundEscrow(betID:string){

  await LBRYAPI_send_transaction(betID)

}

export async function proposeBet(team:string, line:number, amount:number, targetAddress:string){

  let betID = team+line+string(amount)+tagetAddress;

  return betID
}
