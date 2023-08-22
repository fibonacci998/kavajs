import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwap {
  from: string;
  to: string;
  recipientOtherChain: string;
  senderOtherChain: string;
  randomNumberHash: string;
  timestamp: Long;
  amount: Coin[];
  heightSpan: Long;
}
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwapSDKType {
  from: string;
  to: string;
  recipient_other_chain: string;
  sender_other_chain: string;
  random_number_hash: string;
  timestamp: Long;
  amount: CoinSDKType[];
  height_span: Long;
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponse {}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponseSDKType {}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwap {
  from: string;
  swapId: string;
  randomNumber: string;
}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwapSDKType {
  from: string;
  swap_id: string;
  random_number: string;
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponse {}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponseSDKType {}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwap {
  from: string;
  swapId: string;
}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwapSDKType {
  from: string;
  swap_id: string;
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponse {}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponseSDKType {}
function createBaseMsgCreateAtomicSwap(): MsgCreateAtomicSwap {
  return {
    from: "",
    to: "",
    recipientOtherChain: "",
    senderOtherChain: "",
    randomNumberHash: "",
    timestamp: Long.ZERO,
    amount: [],
    heightSpan: Long.UZERO
  };
}
export const MsgCreateAtomicSwap = {
  encode(message: MsgCreateAtomicSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.recipientOtherChain !== "") {
      writer.uint32(26).string(message.recipientOtherChain);
    }
    if (message.senderOtherChain !== "") {
      writer.uint32(34).string(message.senderOtherChain);
    }
    if (message.randomNumberHash !== "") {
      writer.uint32(42).string(message.randomNumberHash);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(48).int64(message.timestamp);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (!message.heightSpan.isZero()) {
      writer.uint32(64).uint64(message.heightSpan);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAtomicSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAtomicSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.recipientOtherChain = reader.string();
          break;
        case 4:
          message.senderOtherChain = reader.string();
          break;
        case 5:
          message.randomNumberHash = reader.string();
          break;
        case 6:
          message.timestamp = (reader.int64() as Long);
          break;
        case 7:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.heightSpan = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateAtomicSwap>): MsgCreateAtomicSwap {
    const message = createBaseMsgCreateAtomicSwap();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.recipientOtherChain = object.recipientOtherChain ?? "";
    message.senderOtherChain = object.senderOtherChain ?? "";
    message.randomNumberHash = object.randomNumberHash ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.heightSpan = object.heightSpan !== undefined && object.heightSpan !== null ? Long.fromValue(object.heightSpan) : Long.UZERO;
    return message;
  }
};
function createBaseMsgCreateAtomicSwapResponse(): MsgCreateAtomicSwapResponse {
  return {};
}
export const MsgCreateAtomicSwapResponse = {
  encode(_: MsgCreateAtomicSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAtomicSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAtomicSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateAtomicSwapResponse>): MsgCreateAtomicSwapResponse {
    const message = createBaseMsgCreateAtomicSwapResponse();
    return message;
  }
};
function createBaseMsgClaimAtomicSwap(): MsgClaimAtomicSwap {
  return {
    from: "",
    swapId: "",
    randomNumber: ""
  };
}
export const MsgClaimAtomicSwap = {
  encode(message: MsgClaimAtomicSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.swapId !== "") {
      writer.uint32(18).string(message.swapId);
    }
    if (message.randomNumber !== "") {
      writer.uint32(26).string(message.randomNumber);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAtomicSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAtomicSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.swapId = reader.string();
          break;
        case 3:
          message.randomNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimAtomicSwap>): MsgClaimAtomicSwap {
    const message = createBaseMsgClaimAtomicSwap();
    message.from = object.from ?? "";
    message.swapId = object.swapId ?? "";
    message.randomNumber = object.randomNumber ?? "";
    return message;
  }
};
function createBaseMsgClaimAtomicSwapResponse(): MsgClaimAtomicSwapResponse {
  return {};
}
export const MsgClaimAtomicSwapResponse = {
  encode(_: MsgClaimAtomicSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAtomicSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAtomicSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgClaimAtomicSwapResponse>): MsgClaimAtomicSwapResponse {
    const message = createBaseMsgClaimAtomicSwapResponse();
    return message;
  }
};
function createBaseMsgRefundAtomicSwap(): MsgRefundAtomicSwap {
  return {
    from: "",
    swapId: ""
  };
}
export const MsgRefundAtomicSwap = {
  encode(message: MsgRefundAtomicSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.swapId !== "") {
      writer.uint32(18).string(message.swapId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundAtomicSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefundAtomicSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.swapId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRefundAtomicSwap>): MsgRefundAtomicSwap {
    const message = createBaseMsgRefundAtomicSwap();
    message.from = object.from ?? "";
    message.swapId = object.swapId ?? "";
    return message;
  }
};
function createBaseMsgRefundAtomicSwapResponse(): MsgRefundAtomicSwapResponse {
  return {};
}
export const MsgRefundAtomicSwapResponse = {
  encode(_: MsgRefundAtomicSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundAtomicSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefundAtomicSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRefundAtomicSwapResponse>): MsgRefundAtomicSwapResponse {
    const message = createBaseMsgRefundAtomicSwapResponse();
    return message;
  }
};