import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  CreatorPayoutWithdrawn,
  FullRoyaltyBought,
  NFTMinted,
  NFTPurchased,
  NFTRented,
  RentInfoSet,
  RoyaltyPaid,
  Transfer
} from "../generated/OwnSound/OwnSound"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  id: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createCreatorPayoutWithdrawnEvent(
  creator: Address,
  amount: BigInt
): CreatorPayoutWithdrawn {
  let creatorPayoutWithdrawnEvent = changetype<CreatorPayoutWithdrawn>(
    newMockEvent()
  )

  creatorPayoutWithdrawnEvent.parameters = new Array()

  creatorPayoutWithdrawnEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  creatorPayoutWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return creatorPayoutWithdrawnEvent
}

export function createFullRoyaltyBoughtEvent(
  tokenId: BigInt,
  newCreator: Address
): FullRoyaltyBought {
  let fullRoyaltyBoughtEvent = changetype<FullRoyaltyBought>(newMockEvent())

  fullRoyaltyBoughtEvent.parameters = new Array()

  fullRoyaltyBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  fullRoyaltyBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "newCreator",
      ethereum.Value.fromAddress(newCreator)
    )
  )

  return fullRoyaltyBoughtEvent
}

export function createNFTMintedEvent(
  tokenId: BigInt,
  creator: Address
): NFTMinted {
  let nftMintedEvent = changetype<NFTMinted>(newMockEvent())

  nftMintedEvent.parameters = new Array()

  nftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return nftMintedEvent
}

export function createNFTPurchasedEvent(
  tokenId: BigInt,
  buyer: Address
): NFTPurchased {
  let nftPurchasedEvent = changetype<NFTPurchased>(newMockEvent())

  nftPurchasedEvent.parameters = new Array()

  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return nftPurchasedEvent
}

export function createNFTRentedEvent(
  tokenId: BigInt,
  renter: Address,
  duration: BigInt
): NFTRented {
  let nftRentedEvent = changetype<NFTRented>(newMockEvent())

  nftRentedEvent.parameters = new Array()

  nftRentedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftRentedEvent.parameters.push(
    new ethereum.EventParam("renter", ethereum.Value.fromAddress(renter))
  )
  nftRentedEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )

  return nftRentedEvent
}

export function createRentInfoSetEvent(
  tokenId: BigInt,
  rentBaseAmount: BigInt,
  rentDuration: BigInt
): RentInfoSet {
  let rentInfoSetEvent = changetype<RentInfoSet>(newMockEvent())

  rentInfoSetEvent.parameters = new Array()

  rentInfoSetEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  rentInfoSetEvent.parameters.push(
    new ethereum.EventParam(
      "rentBaseAmount",
      ethereum.Value.fromUnsignedBigInt(rentBaseAmount)
    )
  )
  rentInfoSetEvent.parameters.push(
    new ethereum.EventParam(
      "rentDuration",
      ethereum.Value.fromUnsignedBigInt(rentDuration)
    )
  )

  return rentInfoSetEvent
}

export function createRoyaltyPaidEvent(
  tokenId: BigInt,
  creator: Address,
  amount: BigInt
): RoyaltyPaid {
  let royaltyPaidEvent = changetype<RoyaltyPaid>(newMockEvent())

  royaltyPaidEvent.parameters = new Array()

  royaltyPaidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  royaltyPaidEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  royaltyPaidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return royaltyPaidEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  id: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return transferEvent
}
