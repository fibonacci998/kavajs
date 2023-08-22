import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
/** Params governance parameters for kavadist module */
export interface Params {
  active: boolean;
  periods: Period[];
  infrastructureParams: InfrastructureParams;
}
/** Params governance parameters for kavadist module */
export interface ParamsSDKType {
  active: boolean;
  periods: PeriodSDKType[];
  infrastructure_params: InfrastructureParamsSDKType;
}
/** InfrastructureParams define the parameters for infrastructure rewards. */
export interface InfrastructureParams {
  infrastructurePeriods: Period[];
  coreRewards: CoreReward[];
  partnerRewards: PartnerReward[];
}
/** InfrastructureParams define the parameters for infrastructure rewards. */
export interface InfrastructureParamsSDKType {
  infrastructure_periods: PeriodSDKType[];
  core_rewards: CoreRewardSDKType[];
  partner_rewards: PartnerRewardSDKType[];
}
/** CoreReward defines the reward weights for core infrastructure providers. */
export interface CoreReward {
  address: Uint8Array;
  weight: string;
}
/** CoreReward defines the reward weights for core infrastructure providers. */
export interface CoreRewardSDKType {
  address: Uint8Array;
  weight: string;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerReward {
  address: Uint8Array;
  rewardsPerSecond: Coin;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerRewardSDKType {
  address: Uint8Array;
  rewards_per_second: CoinSDKType;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface Period {
  /** example "2020-03-01T15:20:00Z" */
  start: Date;
  /** example "2020-06-01T15:20:00Z" */
  end: Date;
  /** example "1.000000003022265980"  - 10% inflation */
  inflation: Uint8Array;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface PeriodSDKType {
  start: Date;
  end: Date;
  inflation: Uint8Array;
}
function createBaseParams(): Params {
  return {
    active: false,
    periods: [],
    infrastructureParams: InfrastructureParams.fromPartial({})
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.infrastructureParams !== undefined) {
      InfrastructureParams.encode(message.infrastructureParams, writer.uint32(34).fork()).ldelim();
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
          message.active = reader.bool();
          break;
        case 3:
          message.periods.push(Period.decode(reader, reader.uint32()));
          break;
        case 4:
          message.infrastructureParams = InfrastructureParams.decode(reader, reader.uint32());
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
    message.active = object.active ?? false;
    message.periods = object.periods?.map(e => Period.fromPartial(e)) || [];
    message.infrastructureParams = object.infrastructureParams !== undefined && object.infrastructureParams !== null ? InfrastructureParams.fromPartial(object.infrastructureParams) : undefined;
    return message;
  }
};
function createBaseInfrastructureParams(): InfrastructureParams {
  return {
    infrastructurePeriods: [],
    coreRewards: [],
    partnerRewards: []
  };
}
export const InfrastructureParams = {
  encode(message: InfrastructureParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infrastructurePeriods) {
      Period.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.coreRewards) {
      CoreReward.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.partnerRewards) {
      PartnerReward.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InfrastructureParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfrastructureParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.infrastructurePeriods.push(Period.decode(reader, reader.uint32()));
          break;
        case 2:
          message.coreRewards.push(CoreReward.decode(reader, reader.uint32()));
          break;
        case 3:
          message.partnerRewards.push(PartnerReward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InfrastructureParams>): InfrastructureParams {
    const message = createBaseInfrastructureParams();
    message.infrastructurePeriods = object.infrastructurePeriods?.map(e => Period.fromPartial(e)) || [];
    message.coreRewards = object.coreRewards?.map(e => CoreReward.fromPartial(e)) || [];
    message.partnerRewards = object.partnerRewards?.map(e => PartnerReward.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCoreReward(): CoreReward {
  return {
    address: new Uint8Array(),
    weight: ""
  };
}
export const CoreReward = {
  encode(message: CoreReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CoreReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoreReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CoreReward>): CoreReward {
    const message = createBaseCoreReward();
    message.address = object.address ?? new Uint8Array();
    message.weight = object.weight ?? "";
    return message;
  }
};
function createBasePartnerReward(): PartnerReward {
  return {
    address: new Uint8Array(),
    rewardsPerSecond: Coin.fromPartial({})
  };
}
export const PartnerReward = {
  encode(message: PartnerReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.rewardsPerSecond !== undefined) {
      Coin.encode(message.rewardsPerSecond, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PartnerReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartnerReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.rewardsPerSecond = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PartnerReward>): PartnerReward {
    const message = createBasePartnerReward();
    message.address = object.address ?? new Uint8Array();
    message.rewardsPerSecond = object.rewardsPerSecond !== undefined && object.rewardsPerSecond !== null ? Coin.fromPartial(object.rewardsPerSecond) : undefined;
    return message;
  }
};
function createBasePeriod(): Period {
  return {
    start: new Date(),
    end: new Date(),
    inflation: new Uint8Array()
  };
}
export const Period = {
  encode(message: Period, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      Timestamp.encode(toTimestamp(message.start), writer.uint32(10).fork()).ldelim();
    }
    if (message.end !== undefined) {
      Timestamp.encode(toTimestamp(message.end), writer.uint32(18).fork()).ldelim();
    }
    if (message.inflation.length !== 0) {
      writer.uint32(26).bytes(message.inflation);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Period {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.end = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.inflation = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Period>): Period {
    const message = createBasePeriod();
    message.start = object.start ?? undefined;
    message.end = object.end ?? undefined;
    message.inflation = object.inflation ?? new Uint8Array();
    return message;
  }
};