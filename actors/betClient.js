export async acceptBet( betID ){

	await fundEscrow(betID)
	##Publish message escrow funded
}

async fundEscrow( betID ){

  await LBRYAPI_send_transaction(betID)

}
