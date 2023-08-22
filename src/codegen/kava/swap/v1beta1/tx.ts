import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgDeposit represents a message for depositing liquidity into a pool */
export interface MsgDeposit {
  /** depositor represents the address to deposit funds from */
  depositor: string;
  /** token_a represents one token of deposit pair */
  tokenA: Coin;
  /** token_b represents one token of deposit pair */
  tokenB: Coin;
  /** slippage represents the max decimal percentage price change */
  slippage: string;
  /** deadline represents the unix timestamp to complete the deposit by */
  deadline: Long;
}
/** MsgDeposit represents a message for depositing liquidity into a pool */
export interface MsgDepositSDKType {
  depositor: string;
  token_a: CoinSDKType;
  token_b: CoinSDKType;
  slippage: string;
  deadline: Long;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {}
/** MsgWithdraw represents a message for withdrawing liquidity from a pool */
export interface MsgWithdraw {
  /** from represents the address we are withdrawing for */
  from: string;
  /** shares represents the amount of shares to withdraw */
  shares: string;
  /** min_token_a represents the minimum a token to withdraw */
  minTokenA: Coin;
  /** min_token_a represents the minimum a token to withdraw */
  minTokenB: Coin;
  /** deadline represents the unix timestamp to complete the withdraw by */
  deadline: Long;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a pool */
export interface MsgWithdrawSDKType {
  from: string;
  shares: string;
  min_token_a: CoinSDKType;
  min_token_b: CoinSDKType;
  deadline: Long;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {}
/** MsgSwapExactForTokens represents a message for trading exact coinA for coinB */
export interface MsgSwapExactForTokens {
  /** represents the address swaping the tokens */
  requester: string;
  /** exact_token_a represents the exact amount to swap for token_b */
  exactTokenA: Coin;
  /** token_b represents the desired token_b to swap for */
  tokenB: Coin;
  /** slippage represents the maximum change in token_b allowed */
  slippage: string;
  /** deadline represents the unix timestamp to complete the swap by */
  deadline: Long;
}
/** MsgSwapExactForTokens represents a message for trading exact coinA for coinB */
export interface MsgSwapExactForTokensSDKType {
  requester: string;
  exact_token_a: CoinSDKType;
  token_b: CoinSDKType;
  slippage: string;
  deadline: Long;
}
/**
 * MsgSwapExactForTokensResponse defines the Msg/SwapExactForTokens response
 * type.
 */
export interface MsgSwapExactForTokensResponse {}
/**
 * MsgSwapExactForTokensResponse defines the Msg/SwapExactForTokens response
 * type.
 */
export interface MsgSwapExactForTokensResponseSDKType {}
/**
 * MsgSwapForExactTokens represents a message for trading coinA for an exact
 * coinB
 */
export interface MsgSwapForExactTokens {
  /** represents the address swaping the tokens */
  requester: string;
  /** token_a represents the desired token_a to swap for */
  tokenA: Coin;
  /** exact_token_b represents the exact token b amount to swap for token a */
  exactTokenB: Coin;
  /** slippage represents the maximum change in token_a allowed */
  slippage: string;
  /** deadline represents the unix timestamp to complete the swap by */
  deadline: Long;
}
/**
 * MsgSwapForExactTokens represents a message for trading coinA for an exact
 * coinB
 */
export interface MsgSwapForExactTokensSDKType {
  requester: string;
  token_a: CoinSDKType;
  exact_token_b: CoinSDKType;
  slippage: string;
  deadline: Long;
}
/**
 * MsgSwapForExactTokensResponse defines the Msg/SwapForExactTokensResponse
 * response type.
 */
export interface MsgSwapForExactTokensResponse {}
/**
 * MsgSwapForExactTokensResponse defines the Msg/SwapForExactTokensResponse
 * response type.
 */
export interface MsgSwapForExactTokensResponseSDKType {}
function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositor: "",
    tokenA: Coin.fromPartial({}),
    tokenB: Coin.fromPartial({}),
    slippage: "",
    deadline: Long.ZERO
  };
}
export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.tokenA !== undefined) {
      Coin.encode(message.tokenA, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenB !== undefined) {
      Coin.encode(message.tokenB, writer.uint32(26).fork()).ldelim();
    }
    if (message.slippage !== "") {
      writer.uint32(34).string(message.slippage);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(40).int64(message.deadline);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.tokenA = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.tokenB = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.slippage = reader.string();
          break;
        case 5:
          message.deadline = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.depositor = object.depositor ?? "";
    message.tokenA = object.tokenA !== undefined && object.tokenA !== null ? Coin.fromPartial(object.tokenA) : undefined;
    message.tokenB = object.tokenB !== undefined && object.tokenB !== null ? Coin.fromPartial(object.tokenB) : undefined;
    message.slippage = object.slippage ?? "";
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Long.fromValue(object.deadline) : Long.ZERO;
    return message;
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
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
  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    from: "",
    shares: "",
    minTokenA: Coin.fromPartial({}),
    minTokenB: Coin.fromPartial({}),
    deadline: Long.ZERO
  };
}
export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.shares !== "") {
      writer.uint32(18).string(message.shares);
    }
    if (message.minTokenA !== undefined) {
      Coin.encode(message.minTokenA, writer.uint32(26).fork()).ldelim();
    }
    if (message.minTokenB !== undefined) {
      Coin.encode(message.minTokenB, writer.uint32(34).fork()).ldelim();
    }
    if (!message.deadline.isZero()) {
      writer.uint32(40).int64(message.deadline);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.shares = reader.string();
          break;
        case 3:
          message.minTokenA = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.minTokenB = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.deadline = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.from = object.from ?? "";
    message.shares = object.shares ?? "";
    message.minTokenA = object.minTokenA !== undefined && object.minTokenA !== null ? Coin.fromPartial(object.minTokenA) : undefined;
    message.minTokenB = object.minTokenB !== undefined && object.minTokenB !== null ? Coin.fromPartial(object.minTokenB) : undefined;
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Long.fromValue(object.deadline) : Long.ZERO;
    return message;
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  }
};
function createBaseMsgSwapExactForTokens(): MsgSwapExactForTokens {
  return {
    requester: "",
    exactTokenA: Coin.fromPartial({}),
    tokenB: Coin.fromPartial({}),
    slippage: "",
    deadline: Long.ZERO
  };
}
export const MsgSwapExactForTokens = {
  encode(message: MsgSwapExactForTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    if (message.exactTokenA !== undefined) {
      Coin.encode(message.exactTokenA, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenB !== undefined) {
      Coin.encode(message.tokenB, writer.uint32(26).fork()).ldelim();
    }
    if (message.slippage !== "") {
      writer.uint32(34).string(message.slippage);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(40).int64(message.deadline);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactForTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactForTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string();
          break;
        case 2:
          message.exactTokenA = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.tokenB = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.slippage = reader.string();
          break;
        case 5:
          message.deadline = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSwapExactForTokens>): MsgSwapExactForTokens {
    const message = createBaseMsgSwapExactForTokens();
    message.requester = object.requester ?? "";
    message.exactTokenA = object.exactTokenA !== undefined && object.exactTokenA !== null ? Coin.fromPartial(object.exactTokenA) : undefined;
    message.tokenB = object.tokenB !== undefined && object.tokenB !== null ? Coin.fromPartial(object.tokenB) : undefined;
    message.slippage = object.slippage ?? "";
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Long.fromValue(object.deadline) : Long.ZERO;
    return message;
  }
};
function createBaseMsgSwapExactForTokensResponse(): MsgSwapExactForTokensResponse {
  return {};
}
export const MsgSwapExactForTokensResponse = {
  encode(_: MsgSwapExactForTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactForTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactForTokensResponse();
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
  fromPartial(_: DeepPartial<MsgSwapExactForTokensResponse>): MsgSwapExactForTokensResponse {
    const message = createBaseMsgSwapExactForTokensResponse();
    return message;
  }
};
function createBaseMsgSwapForExactTokens(): MsgSwapForExactTokens {
  return {
    requester: "",
    tokenA: Coin.fromPartial({}),
    exactTokenB: Coin.fromPartial({}),
    slippage: "",
    deadline: Long.ZERO
  };
}
export const MsgSwapForExactTokens = {
  encode(message: MsgSwapForExactTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    if (message.tokenA !== undefined) {
      Coin.encode(message.tokenA, writer.uint32(18).fork()).ldelim();
    }
    if (message.exactTokenB !== undefined) {
      Coin.encode(message.exactTokenB, writer.uint32(26).fork()).ldelim();
    }
    if (message.slippage !== "") {
      writer.uint32(34).string(message.slippage);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(40).int64(message.deadline);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapForExactTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapForExactTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string();
          break;
        case 2:
          message.tokenA = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.exactTokenB = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.slippage = reader.string();
          break;
        case 5:
          message.deadline = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSwapForExactTokens>): MsgSwapForExactTokens {
    const message = createBaseMsgSwapForExactTokens();
    message.requester = object.requester ?? "";
    message.tokenA = object.tokenA !== undefined && object.tokenA !== null ? Coin.fromPartial(object.tokenA) : undefined;
    message.exactTokenB = object.exactTokenB !== undefined && object.exactTokenB !== null ? Coin.fromPartial(object.exactTokenB) : undefined;
    message.slippage = object.slippage ?? "";
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Long.fromValue(object.deadline) : Long.ZERO;
    return message;
  }
};
function createBaseMsgSwapForExactTokensResponse(): MsgSwapForExactTokensResponse {
  return {};
}
export const MsgSwapForExactTokensResponse = {
  encode(_: MsgSwapForExactTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapForExactTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapForExactTokensResponse();
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
  fromPartial(_: DeepPartial<MsgSwapForExactTokensResponse>): MsgSwapForExactTokensResponse {
    const message = createBaseMsgSwapForExactTokensResponse();
    return message;
  }
};