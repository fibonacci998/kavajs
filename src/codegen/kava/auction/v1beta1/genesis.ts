import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
  nextAuctionId: Long;
  params: Params;
  /** Genesis auctions */
  auctions: Any[];
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
  next_auction_id: Long;
  params: ParamsSDKType;
  auctions: AnySDKType[];
}
/** Params defines the parameters for the issuance module. */
export interface Params {
  maxAuctionDuration: Duration;
  forwardBidDuration: Duration;
  reverseBidDuration: Duration;
  incrementSurplus: Uint8Array;
  incrementDebt: Uint8Array;
  incrementCollateral: Uint8Array;
}
/** Params defines the parameters for the issuance module. */
export interface ParamsSDKType {
  max_auction_duration: DurationSDKType;
  forward_bid_duration: DurationSDKType;
  reverse_bid_duration: DurationSDKType;
  increment_surplus: Uint8Array;
  increment_debt: Uint8Array;
  increment_collateral: Uint8Array;
}
function createBaseGenesisState(): GenesisState {
  return {
    nextAuctionId: Long.UZERO,
    params: Params.fromPartial({}),
    auctions: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextAuctionId.isZero()) {
      writer.uint32(8).uint64(message.nextAuctionId);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.auctions) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextAuctionId = (reader.uint64() as Long);
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.auctions.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextAuctionId = object.nextAuctionId !== undefined && object.nextAuctionId !== null ? Long.fromValue(object.nextAuctionId) : Long.UZERO;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.auctions = object.auctions?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};
function createBaseParams(): Params {
  return {
    maxAuctionDuration: Duration.fromPartial({}),
    forwardBidDuration: Duration.fromPartial({}),
    reverseBidDuration: Duration.fromPartial({}),
    incrementSurplus: new Uint8Array(),
    incrementDebt: new Uint8Array(),
    incrementCollateral: new Uint8Array()
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxAuctionDuration !== undefined) {
      Duration.encode(message.maxAuctionDuration, writer.uint32(10).fork()).ldelim();
    }
    if (message.forwardBidDuration !== undefined) {
      Duration.encode(message.forwardBidDuration, writer.uint32(50).fork()).ldelim();
    }
    if (message.reverseBidDuration !== undefined) {
      Duration.encode(message.reverseBidDuration, writer.uint32(58).fork()).ldelim();
    }
    if (message.incrementSurplus.length !== 0) {
      writer.uint32(26).bytes(message.incrementSurplus);
    }
    if (message.incrementDebt.length !== 0) {
      writer.uint32(34).bytes(message.incrementDebt);
    }
    if (message.incrementCollateral.length !== 0) {
      writer.uint32(42).bytes(message.incrementCollateral);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAuctionDuration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.forwardBidDuration = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.reverseBidDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.incrementSurplus = reader.bytes();
          break;
        case 4:
          message.incrementDebt = reader.bytes();
          break;
        case 5:
          message.incrementCollateral = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.maxAuctionDuration = object.maxAuctionDuration !== undefined && object.maxAuctionDuration !== null ? Duration.fromPartial(object.maxAuctionDuration) : undefined;
    message.forwardBidDuration = object.forwardBidDuration !== undefined && object.forwardBidDuration !== null ? Duration.fromPartial(object.forwardBidDuration) : undefined;
    message.reverseBidDuration = object.reverseBidDuration !== undefined && object.reverseBidDuration !== null ? Duration.fromPartial(object.reverseBidDuration) : undefined;
    message.incrementSurplus = object.incrementSurplus ?? new Uint8Array();
    message.incrementDebt = object.incrementDebt ?? new Uint8Array();
    message.incrementCollateral = object.incrementCollateral ?? new Uint8Array();
    return message;
  }
};