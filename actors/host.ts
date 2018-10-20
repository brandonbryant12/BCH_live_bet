require('dotenv').config();

var JSONRPC = require('../lib/jsonrpc');

var rpc = new JSONRPC();

var  LBRYBetWallet;

(async function() {
  
  LBRYBetWallet = await rpc.call('account_create',['LBRYBet'])


}

export async function listGames(){

 return(['PATS_FALCONS2_5_2017', 'ANOTHER_GAME_DATE'])

}

export async function getState(gameID){

  let gameState = {
    
    HomeScore:28

    AwayScore:3

    Quarter:3
  
    Time:"2:06"

  }

  return gameState

}


export async function createEscrow(Host,Client,TXID){

  //Write pending bet to memory 
  
  escrow = await LBRYAPI_create_multisig(Host,Client,TXID)

  writeEscrow(escrow)

  return escrow;

}

export async function resolveBet(gameID, result){

  ## provide signature to winner of the bet 

  ##Emit event- Bet Result 

}
