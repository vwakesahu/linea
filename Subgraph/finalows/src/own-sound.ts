import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  CreatorPayoutWithdrawn as CreatorPayoutWithdrawnEvent,
  FullRoyaltyBought as FullRoyaltyBoughtEvent,
  NFTMinted as NFTMintedEvent,
  NFTPurchased as NFTPurchasedEvent,
  NFTRented as NFTRentedEvent,
  RentInfoSet as RentInfoSetEvent,
  RoyaltyPaid as RoyaltyPaidEvent,
  Transfer as TransferEvent
} from "../generated/OwnSound/OwnSound"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.OwnSound_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreatorPayoutWithdrawn(
  event: CreatorPayoutWithdrawnEvent
): void {
  let entity = new CreatorPayoutWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFullRoyaltyBought(event: FullRoyaltyBoughtEvent): void {
  let entity = new FullRoyaltyBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.newCreator = event.params.newCreator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTMinted(event: NFTMintedEvent): void {
  let entity = new NFTMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTPurchased(event: NFTPurchasedEvent): void {
  let entity = new NFTPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.buyer = event.params.buyer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTRented(event: NFTRentedEvent): void {
  let entity = new NFTRented(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.renter = event.params.renter
  entity.duration = event.params.duration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRentInfoSet(event: RentInfoSetEvent): void {
  let entity = new RentInfoSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.rentBaseAmount = event.params.rentBaseAmount
  entity.rentDuration = event.params.rentDuration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoyaltyPaid(event: RoyaltyPaidEvent): void {
  let entity = new RoyaltyPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.creator = event.params.creator
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.OwnSound_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
