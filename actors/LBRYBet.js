
export async listBets(){


 return(['PATS_FALCONS2_5_2017', 'ANOTHER_GAME_DATE'])

}

export async getState(gameID){

  gameState = {
    
    HomeScore:28

    AwayScore:3

    Quarter:3
  
    Time:"2:06"

  }

  return gameState

}

const LBRYBetWallet = LBRYAPI_get_wallet;

export async createEscrow(Host,Client,TXID){

  //Write pending bet to memory 
  
  escrow = await LBRYAPI_create_multisig(Host,Client,TXID)

  writeEscrow(escrow)

  return escrow;

}

export async resolveBet(gameID, result){

  ## provide signature to winner of the bet 

  ##Emit event- Bet Result 

}
