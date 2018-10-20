# This repository is a submission for the LBRY UNH Hackathon 10-19-18
## We are proposing a peer-to-peer live betting plugin on top of the LBRY protocol

# The problem 

Live betting today sucks!!! 

UI/UX sucks

You have to deposit crypto into a third party wallet.

High premiums on bets

![alt text](Snip20181020_2.png)

# The solution 

  - Allow users to create bets peer to peer.

  - Using a blockchain as an escrow enables these types of bets and eliminates high premiums on bets. 

  - Users never need to set up an account making it easy to create and accept bets.

# Why LBRY needs this built 

  - People need a reason to switch to a dentralized app! Most people don't care/ignorant to censorship occuring.

  - LBRYBet creates an engaging experience and one that cannot be recreated on YouTube. 

  - Greatly increase the utility and volume of the LBRY Credit

# Betting Protocol 

## Phase 1 
### Bet announcement (bet host)
      - A user will announce a bet proposal to the the network.
      - Submit a blob to the lbry network containing 
        - Game
        - Team
        - Spread
        - Wager

## Phase 2
### Bet acceptance (bet client)
      - A user will accept a wager by indicating the blob hash
## Phase 3 
### LBRYBet create 2 of 3 multisig escrow
      - LBRYBet service will create a 2 of 3 multisig escrow with our pub key, clent1's and client2's.

## Phase 4
### Bet Host funds escrow
      - Client1 will send DOUBLE the wager to escrow with a time limit
## Phase 5
### Bet client funds escrow
      - Client2 sends DOUBLE the wager to escrow within set time limit

## Phase 6 
### Game finishes and the escrow is signed over to winner
      - Loser of the game resigns and signs the multisig wallet to send the wager to the winner.  
      - If loser does not resign both parties need to wait for LBRYBet to sign the tx to the winner. 
