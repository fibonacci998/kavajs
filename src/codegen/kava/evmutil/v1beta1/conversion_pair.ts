import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */
export interface ConversionPair {
  /** ERC20 address of the token on the Kava EVM */
  kavaErc20Address: Uint8Array;
  /** Denom of the corresponding sdk.Coin */
  denom: string;
}
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */
export interface ConversionPairSDKType {
  kava_erc20_address: Uint8Array;
  denom: string;
}
/**
 * AllowedCosmosCoinERC20Token defines allowed cosmos-sdk denom & metadata
 * for evm token representations of sdk assets.
 * NOTE: once evm token contracts are deployed, changes to metadata for a given
 * cosmos_denom will not change metadata of deployed contract.
 */
export interface AllowedCosmosCoinERC20Token {
  /** Denom of the sdk.Coin */
  cosmosDenom: string;
  /** Name of ERC20 contract */
  name: string;
  /** Symbol of ERC20 contract */
  symbol: string;
  /** Number of decimals ERC20 contract is deployed with. */
  decimals: number;
}
/**
 * AllowedCosmosCoinERC20Token defines allowed cosmos-sdk denom & metadata
 * for evm token representations of sdk assets.
 * NOTE: once evm token contracts are deployed, changes to metadata for a given
 * cosmos_denom will not change metadata of deployed contract.
 */
export interface AllowedCosmosCoinERC20TokenSDKType {
  cosmos_denom: string;
  name: string;
  symbol: string;
  decimals: number;
}
function createBaseConversionPair(): ConversionPair {
  return {
    kavaErc20Address: new Uint8Array(),
    denom: ""
  };
}
export const ConversionPair = {
  encode(message: ConversionPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kavaErc20Address.length !== 0) {
      writer.uint32(10).bytes(message.kavaErc20Address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConversionPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kavaErc20Address = reader.bytes();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConversionPair>): ConversionPair {
    const message = createBaseConversionPair();
    message.kavaErc20Address = object.kavaErc20Address ?? new Uint8Array();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseAllowedCosmosCoinERC20Token(): AllowedCosmosCoinERC20Token {
  return {
    cosmosDenom: "",
    name: "",
    symbol: "",
    decimals: 0
  };
}
export const AllowedCosmosCoinERC20Token = {
  encode(message: AllowedCosmosCoinERC20Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosDenom !== "") {
      writer.uint32(10).string(message.cosmosDenom);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.decimals !== 0) {
      writer.uint32(32).uint32(message.decimals);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedCosmosCoinERC20Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedCosmosCoinERC20Token();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmosDenom = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.decimals = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AllowedCosmosCoinERC20Token>): AllowedCosmosCoinERC20Token {
    const message = createBaseAllowedCosmosCoinERC20Token();
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals ?? 0;
    return message;
  }
};