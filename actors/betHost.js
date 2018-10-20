export async proposeBet(team, line, amount, targetAddress){
  
  let betID = team+line+string(amount)+tagetAddress;

  return betID
}

export fundEscrow( escrow, betID ){
 
   LBRYAPI_send_transaction( escrow.Address, betID.amount)
  
}



