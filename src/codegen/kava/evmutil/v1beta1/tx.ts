import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets. */
export interface MsgConvertCoinToERC20 {
  /** Kava bech32 address initiating the conversion. */
  initiator: string;
  /** EVM 0x hex address that will receive the converted Kava ERC20 tokens. */
  receiver: string;
  /** Amount is the sdk.Coin amount to convert. */
  amount: Coin;
}
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets. */
export interface MsgConvertCoinToERC20SDKType {
  initiator: string;
  receiver: string;
  amount: CoinSDKType;
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20Response {}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20ResponseSDKType {}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin for EVM-native assets. */
export interface MsgConvertERC20ToCoin {
  /** EVM 0x hex address initiating the conversion. */
  initiator: string;
  /** Kava bech32 address that will receive the converted sdk.Coin. */
  receiver: string;
  /** EVM 0x hex address of the ERC20 contract. */
  kavaErc20Address: string;
  /** ERC20 token amount to convert. */
  amount: string;
}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin for EVM-native assets. */
export interface MsgConvertERC20ToCoinSDKType {
  initiator: string;
  receiver: string;
  kava_erc20_address: string;
  amount: string;
}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */
export interface MsgConvertERC20ToCoinResponse {}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */
export interface MsgConvertERC20ToCoinResponseSDKType {}
/** MsgConvertCosmosCoinToERC20 defines a conversion from cosmos sdk.Coin to ERC20 for cosmos-native assets. */
export interface MsgConvertCosmosCoinToERC20 {
  /** Kava bech32 address initiating the conversion. */
  initiator: string;
  /** EVM hex address that will receive the ERC20 tokens. */
  receiver: string;
  /** Amount is the sdk.Coin amount to convert. */
  amount: Coin;
}
/** MsgConvertCosmosCoinToERC20 defines a conversion from cosmos sdk.Coin to ERC20 for cosmos-native assets. */
export interface MsgConvertCosmosCoinToERC20SDKType {
  initiator: string;
  receiver: string;
  amount: CoinSDKType;
}
/** MsgConvertCosmosCoinToERC20Response defines the response value from Msg/MsgConvertCosmosCoinToERC20. */
export interface MsgConvertCosmosCoinToERC20Response {}
/** MsgConvertCosmosCoinToERC20Response defines the response value from Msg/MsgConvertCosmosCoinToERC20. */
export interface MsgConvertCosmosCoinToERC20ResponseSDKType {}
/** MsgConvertCosmosCoinFromERC20 defines a conversion from ERC20 to cosmos coins for cosmos-native assets. */
export interface MsgConvertCosmosCoinFromERC20 {
  /** EVM hex address initiating the conversion. */
  initiator: string;
  /** Kava bech32 address that will receive the cosmos coins. */
  receiver: string;
  /** Amount is the amount to convert, expressed as a Cosmos coin. */
  amount: Coin;
}
/** MsgConvertCosmosCoinFromERC20 defines a conversion from ERC20 to cosmos coins for cosmos-native assets. */
export interface MsgConvertCosmosCoinFromERC20SDKType {
  initiator: string;
  receiver: string;
  amount: CoinSDKType;
}
/** MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20. */
export interface MsgConvertCosmosCoinFromERC20Response {}
/** MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20. */
export interface MsgConvertCosmosCoinFromERC20ResponseSDKType {}
function createBaseMsgConvertCoinToERC20(): MsgConvertCoinToERC20 {
  return {
    initiator: "",
    receiver: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgConvertCoinToERC20 = {
  encode(message: MsgConvertCoinToERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinToERC20 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinToERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConvertCoinToERC20>): MsgConvertCoinToERC20 {
    const message = createBaseMsgConvertCoinToERC20();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgConvertCoinToERC20Response(): MsgConvertCoinToERC20Response {
  return {};
}
export const MsgConvertCoinToERC20Response = {
  encode(_: MsgConvertCoinToERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinToERC20Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinToERC20Response();
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
  fromPartial(_: DeepPartial<MsgConvertCoinToERC20Response>): MsgConvertCoinToERC20Response {
    const message = createBaseMsgConvertCoinToERC20Response();
    return message;
  }
};
function createBaseMsgConvertERC20ToCoin(): MsgConvertERC20ToCoin {
  return {
    initiator: "",
    receiver: "",
    kavaErc20Address: "",
    amount: ""
  };
}
export const MsgConvertERC20ToCoin = {
  encode(message: MsgConvertERC20ToCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.kavaErc20Address !== "") {
      writer.uint32(26).string(message.kavaErc20Address);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20ToCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20ToCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.kavaErc20Address = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConvertERC20ToCoin>): MsgConvertERC20ToCoin {
    const message = createBaseMsgConvertERC20ToCoin();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    message.kavaErc20Address = object.kavaErc20Address ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseMsgConvertERC20ToCoinResponse(): MsgConvertERC20ToCoinResponse {
  return {};
}
export const MsgConvertERC20ToCoinResponse = {
  encode(_: MsgConvertERC20ToCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20ToCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20ToCoinResponse();
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
  fromPartial(_: DeepPartial<MsgConvertERC20ToCoinResponse>): MsgConvertERC20ToCoinResponse {
    const message = createBaseMsgConvertERC20ToCoinResponse();
    return message;
  }
};
function createBaseMsgConvertCosmosCoinToERC20(): MsgConvertCosmosCoinToERC20 {
  return {
    initiator: "",
    receiver: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgConvertCosmosCoinToERC20 = {
  encode(message: MsgConvertCosmosCoinToERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCosmosCoinToERC20 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCosmosCoinToERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConvertCosmosCoinToERC20>): MsgConvertCosmosCoinToERC20 {
    const message = createBaseMsgConvertCosmosCoinToERC20();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgConvertCosmosCoinToERC20Response(): MsgConvertCosmosCoinToERC20Response {
  return {};
}
export const MsgConvertCosmosCoinToERC20Response = {
  encode(_: MsgConvertCosmosCoinToERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCosmosCoinToERC20Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCosmosCoinToERC20Response();
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
  fromPartial(_: DeepPartial<MsgConvertCosmosCoinToERC20Response>): MsgConvertCosmosCoinToERC20Response {
    const message = createBaseMsgConvertCosmosCoinToERC20Response();
    return message;
  }
};
function createBaseMsgConvertCosmosCoinFromERC20(): MsgConvertCosmosCoinFromERC20 {
  return {
    initiator: "",
    receiver: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgConvertCosmosCoinFromERC20 = {
  encode(message: MsgConvertCosmosCoinFromERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCosmosCoinFromERC20 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCosmosCoinFromERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConvertCosmosCoinFromERC20>): MsgConvertCosmosCoinFromERC20 {
    const message = createBaseMsgConvertCosmosCoinFromERC20();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgConvertCosmosCoinFromERC20Response(): MsgConvertCosmosCoinFromERC20Response {
  return {};
}
export const MsgConvertCosmosCoinFromERC20Response = {
  encode(_: MsgConvertCosmosCoinFromERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCosmosCoinFromERC20Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCosmosCoinFromERC20Response();
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
  fromPartial(_: DeepPartial<MsgConvertCosmosCoinFromERC20Response>): MsgConvertCosmosCoinFromERC20Response {
    const message = createBaseMsgConvertCosmosCoinFromERC20Response();
    return message;
  }
};