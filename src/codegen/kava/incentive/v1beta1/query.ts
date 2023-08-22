import { Params, ParamsSDKType } from "./params";
import { USDXMintingClaim, USDXMintingClaimSDKType, HardLiquidityProviderClaim, HardLiquidityProviderClaimSDKType, DelegatorClaim, DelegatorClaimSDKType, SwapClaim, SwapClaimSDKType, SavingsClaim, SavingsClaimSDKType, EarnClaim, EarnClaimSDKType, RewardIndex, RewardIndexSDKType, MultiRewardIndex, MultiRewardIndexSDKType } from "./claims";
import { Apy, ApySDKType } from "./apy";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryRewardsRequest is the request type for the Query/Rewards RPC method. */
export interface QueryRewardsRequest {
  /** owner is the address of the user to query rewards for. */
  owner: string;
  /**
   * reward_type is the type of reward to query rewards for, e.g. hard, earn,
   * swap.
   */
  rewardType: string;
  /**
   * unsynchronized is a flag to query rewards that are not simulated for reward
   * synchronized for the current block.
   */
  unsynchronized: boolean;
}
/** QueryRewardsRequest is the request type for the Query/Rewards RPC method. */
export interface QueryRewardsRequestSDKType {
  owner: string;
  reward_type: string;
  unsynchronized: boolean;
}
/** QueryRewardsResponse is the response type for the Query/Rewards RPC method. */
export interface QueryRewardsResponse {
  usdxMintingClaims: USDXMintingClaim[];
  hardLiquidityProviderClaims: HardLiquidityProviderClaim[];
  delegatorClaims: DelegatorClaim[];
  swapClaims: SwapClaim[];
  savingsClaims: SavingsClaim[];
  earnClaims: EarnClaim[];
}
/** QueryRewardsResponse is the response type for the Query/Rewards RPC method. */
export interface QueryRewardsResponseSDKType {
  usdx_minting_claims: USDXMintingClaimSDKType[];
  hard_liquidity_provider_claims: HardLiquidityProviderClaimSDKType[];
  delegator_claims: DelegatorClaimSDKType[];
  swap_claims: SwapClaimSDKType[];
  savings_claims: SavingsClaimSDKType[];
  earn_claims: EarnClaimSDKType[];
}
/** QueryRewardFactorsRequest is the request type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsRequest {}
/** QueryRewardFactorsRequest is the request type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsRequestSDKType {}
/** QueryRewardFactorsResponse is the response type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsResponse {
  usdxMintingRewardFactors: RewardIndex[];
  hardSupplyRewardFactors: MultiRewardIndex[];
  hardBorrowRewardFactors: MultiRewardIndex[];
  delegatorRewardFactors: MultiRewardIndex[];
  swapRewardFactors: MultiRewardIndex[];
  savingsRewardFactors: MultiRewardIndex[];
  earnRewardFactors: MultiRewardIndex[];
}
/** QueryRewardFactorsResponse is the response type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsResponseSDKType {
  usdx_minting_reward_factors: RewardIndexSDKType[];
  hard_supply_reward_factors: MultiRewardIndexSDKType[];
  hard_borrow_reward_factors: MultiRewardIndexSDKType[];
  delegator_reward_factors: MultiRewardIndexSDKType[];
  swap_reward_factors: MultiRewardIndexSDKType[];
  savings_reward_factors: MultiRewardIndexSDKType[];
  earn_reward_factors: MultiRewardIndexSDKType[];
}
/** QueryApysRequest is the request type for the Query/Apys RPC method. */
export interface QueryApyRequest {}
/** QueryApysRequest is the request type for the Query/Apys RPC method. */
export interface QueryApyRequestSDKType {}
/** QueryApysResponse is the response type for the Query/Apys RPC method. */
export interface QueryApyResponse {
  earn: Apy[];
}
/** QueryApysResponse is the response type for the Query/Apys RPC method. */
export interface QueryApyResponseSDKType {
  earn: ApySDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryRewardsRequest(): QueryRewardsRequest {
  return {
    owner: "",
    rewardType: "",
    unsynchronized: false
  };
}
export const QueryRewardsRequest = {
  encode(message: QueryRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.rewardType !== "") {
      writer.uint32(18).string(message.rewardType);
    }
    if (message.unsynchronized === true) {
      writer.uint32(24).bool(message.unsynchronized);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.rewardType = reader.string();
          break;
        case 3:
          message.unsynchronized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRewardsRequest>): QueryRewardsRequest {
    const message = createBaseQueryRewardsRequest();
    message.owner = object.owner ?? "";
    message.rewardType = object.rewardType ?? "";
    message.unsynchronized = object.unsynchronized ?? false;
    return message;
  }
};
function createBaseQueryRewardsResponse(): QueryRewardsResponse {
  return {
    usdxMintingClaims: [],
    hardLiquidityProviderClaims: [],
    delegatorClaims: [],
    swapClaims: [],
    savingsClaims: [],
    earnClaims: []
  };
}
export const QueryRewardsResponse = {
  encode(message: QueryRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.usdxMintingClaims) {
      USDXMintingClaim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.hardLiquidityProviderClaims) {
      HardLiquidityProviderClaim.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatorClaims) {
      DelegatorClaim.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.swapClaims) {
      SwapClaim.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.savingsClaims) {
      SavingsClaim.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.earnClaims) {
      EarnClaim.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usdxMintingClaims.push(USDXMintingClaim.decode(reader, reader.uint32()));
          break;
        case 2:
          message.hardLiquidityProviderClaims.push(HardLiquidityProviderClaim.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegatorClaims.push(DelegatorClaim.decode(reader, reader.uint32()));
          break;
        case 4:
          message.swapClaims.push(SwapClaim.decode(reader, reader.uint32()));
          break;
        case 5:
          message.savingsClaims.push(SavingsClaim.decode(reader, reader.uint32()));
          break;
        case 6:
          message.earnClaims.push(EarnClaim.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRewardsResponse>): QueryRewardsResponse {
    const message = createBaseQueryRewardsResponse();
    message.usdxMintingClaims = object.usdxMintingClaims?.map(e => USDXMintingClaim.fromPartial(e)) || [];
    message.hardLiquidityProviderClaims = object.hardLiquidityProviderClaims?.map(e => HardLiquidityProviderClaim.fromPartial(e)) || [];
    message.delegatorClaims = object.delegatorClaims?.map(e => DelegatorClaim.fromPartial(e)) || [];
    message.swapClaims = object.swapClaims?.map(e => SwapClaim.fromPartial(e)) || [];
    message.savingsClaims = object.savingsClaims?.map(e => SavingsClaim.fromPartial(e)) || [];
    message.earnClaims = object.earnClaims?.map(e => EarnClaim.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryRewardFactorsRequest(): QueryRewardFactorsRequest {
  return {};
}
export const QueryRewardFactorsRequest = {
  encode(_: QueryRewardFactorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardFactorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardFactorsRequest();
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
  fromPartial(_: DeepPartial<QueryRewardFactorsRequest>): QueryRewardFactorsRequest {
    const message = createBaseQueryRewardFactorsRequest();
    return message;
  }
};
function createBaseQueryRewardFactorsResponse(): QueryRewardFactorsResponse {
  return {
    usdxMintingRewardFactors: [],
    hardSupplyRewardFactors: [],
    hardBorrowRewardFactors: [],
    delegatorRewardFactors: [],
    swapRewardFactors: [],
    savingsRewardFactors: [],
    earnRewardFactors: []
  };
}
export const QueryRewardFactorsResponse = {
  encode(message: QueryRewardFactorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.usdxMintingRewardFactors) {
      RewardIndex.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.hardSupplyRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hardBorrowRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatorRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.swapRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.savingsRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.earnRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardFactorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardFactorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usdxMintingRewardFactors.push(RewardIndex.decode(reader, reader.uint32()));
          break;
        case 2:
          message.hardSupplyRewardFactors.push(MultiRewardIndex.decode(reader, reader.uint32()));
          break;
        case 3:
          message.hardBorrowRewardFactors.push(MultiRewardIndex.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegatorRewardFactors.push(MultiRewardIndex.decode(reader, reader.uint32()));
          break;
        case 5:
          message.swapRewardFactors.push(MultiRewardIndex.decode(reader, reader.uint32()));
          break;
        case 6:
          message.savingsRewardFactors.push(MultiRewardIndex.decode(reader, reader.uint32()));
          break;
        case 7:
          message.earnRewardFactors.push(MultiRewardIndex.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRewardFactorsResponse>): QueryRewardFactorsResponse {
    const message = createBaseQueryRewardFactorsResponse();
    message.usdxMintingRewardFactors = object.usdxMintingRewardFactors?.map(e => RewardIndex.fromPartial(e)) || [];
    message.hardSupplyRewardFactors = object.hardSupplyRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    message.hardBorrowRewardFactors = object.hardBorrowRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    message.delegatorRewardFactors = object.delegatorRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    message.swapRewardFactors = object.swapRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    message.savingsRewardFactors = object.savingsRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    message.earnRewardFactors = object.earnRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryApyRequest(): QueryApyRequest {
  return {};
}
export const QueryApyRequest = {
  encode(_: QueryApyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApyRequest();
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
  fromPartial(_: DeepPartial<QueryApyRequest>): QueryApyRequest {
    const message = createBaseQueryApyRequest();
    return message;
  }
};
function createBaseQueryApyResponse(): QueryApyResponse {
  return {
    earn: []
  };
}
export const QueryApyResponse = {
  encode(message: QueryApyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.earn) {
      Apy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.earn.push(Apy.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryApyResponse>): QueryApyResponse {
    const message = createBaseQueryApyResponse();
    message.earn = object.earn?.map(e => Apy.fromPartial(e)) || [];
    return message;
  }
};