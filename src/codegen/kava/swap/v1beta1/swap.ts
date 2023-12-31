import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the parameters for the swap module. */
export interface Params {
  /** allowed_pools defines that pools that are allowed to be created */
  allowedPools: AllowedPool[];
  /** swap_fee defines the swap fee for all pools */
  swapFee: string;
}
/** Params defines the parameters for the swap module. */
export interface ParamsSDKType {
  allowed_pools: AllowedPoolSDKType[];
  swap_fee: string;
}
/** AllowedPool defines a pool that is allowed to be created */
export interface AllowedPool {
  /** token_a represents the a token allowed */
  tokenA: string;
  /** token_b represents the b token allowed */
  tokenB: string;
}
/** AllowedPool defines a pool that is allowed to be created */
export interface AllowedPoolSDKType {
  token_a: string;
  token_b: string;
}
/**
 * PoolRecord represents the state of a liquidity pool
 * and is used to store the state of a denominated pool
 */
export interface PoolRecord {
  /** pool_id represents the unique id of the pool */
  poolId: string;
  /** reserves_a is the a token coin reserves */
  reservesA: Coin;
  /** reserves_b is the a token coin reserves */
  reservesB: Coin;
  /** total_shares is the total distrubuted shares of the pool */
  totalShares: string;
}
/**
 * PoolRecord represents the state of a liquidity pool
 * and is used to store the state of a denominated pool
 */
export interface PoolRecordSDKType {
  pool_id: string;
  reserves_a: CoinSDKType;
  reserves_b: CoinSDKType;
  total_shares: string;
}
/** ShareRecord stores the shares owned for a depositor and pool */
export interface ShareRecord {
  /** depositor represents the owner of the shares */
  depositor: Uint8Array;
  /** pool_id represents the pool the shares belong to */
  poolId: string;
  /** shares_owned represents the number of shares owned by depsoitor for the pool_id */
  sharesOwned: string;
}
/** ShareRecord stores the shares owned for a depositor and pool */
export interface ShareRecordSDKType {
  depositor: Uint8Array;
  pool_id: string;
  shares_owned: string;
}
function createBaseParams(): Params {
  return {
    allowedPools: [],
    swapFee: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedPools) {
      AllowedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapFee !== "") {
      writer.uint32(18).string(message.swapFee);
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
          message.allowedPools.push(AllowedPool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.swapFee = reader.string();
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
    message.allowedPools = object.allowedPools?.map(e => AllowedPool.fromPartial(e)) || [];
    message.swapFee = object.swapFee ?? "";
    return message;
  }
};
function createBaseAllowedPool(): AllowedPool {
  return {
    tokenA: "",
    tokenB: ""
  };
}
export const AllowedPool = {
  encode(message: AllowedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenA !== "") {
      writer.uint32(10).string(message.tokenA);
    }
    if (message.tokenB !== "") {
      writer.uint32(18).string(message.tokenB);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenA = reader.string();
          break;
        case 2:
          message.tokenB = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AllowedPool>): AllowedPool {
    const message = createBaseAllowedPool();
    message.tokenA = object.tokenA ?? "";
    message.tokenB = object.tokenB ?? "";
    return message;
  }
};
function createBasePoolRecord(): PoolRecord {
  return {
    poolId: "",
    reservesA: Coin.fromPartial({}),
    reservesB: Coin.fromPartial({}),
    totalShares: ""
  };
}
export const PoolRecord = {
  encode(message: PoolRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.reservesA !== undefined) {
      Coin.encode(message.reservesA, writer.uint32(18).fork()).ldelim();
    }
    if (message.reservesB !== undefined) {
      Coin.encode(message.reservesB, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalShares !== "") {
      writer.uint32(34).string(message.totalShares);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.reservesA = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.reservesB = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.totalShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PoolRecord>): PoolRecord {
    const message = createBasePoolRecord();
    message.poolId = object.poolId ?? "";
    message.reservesA = object.reservesA !== undefined && object.reservesA !== null ? Coin.fromPartial(object.reservesA) : undefined;
    message.reservesB = object.reservesB !== undefined && object.reservesB !== null ? Coin.fromPartial(object.reservesB) : undefined;
    message.totalShares = object.totalShares ?? "";
    return message;
  }
};
function createBaseShareRecord(): ShareRecord {
  return {
    depositor: new Uint8Array(),
    poolId: "",
    sharesOwned: ""
  };
}
export const ShareRecord = {
  encode(message: ShareRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor.length !== 0) {
      writer.uint32(10).bytes(message.depositor);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (message.sharesOwned !== "") {
      writer.uint32(26).string(message.sharesOwned);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ShareRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.bytes();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.sharesOwned = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ShareRecord>): ShareRecord {
    const message = createBaseShareRecord();
    message.depositor = object.depositor ?? new Uint8Array();
    message.poolId = object.poolId ?? "";
    message.sharesOwned = object.sharesOwned ?? "";
    return message;
  }
};