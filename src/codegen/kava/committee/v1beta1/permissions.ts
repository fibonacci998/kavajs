import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermission {}
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermissionSDKType {}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermission {}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermissionSDKType {}
/** TextPermission allows any text governance proposal. */
export interface TextPermission {}
/** TextPermission allows any text governance proposal. */
export interface TextPermissionSDKType {}
/** CommunityCDPRepayDebtPermission allows submission of CommunityCDPRepayDebtProposal */
export interface CommunityCDPRepayDebtPermission {}
/** CommunityCDPRepayDebtPermission allows submission of CommunityCDPRepayDebtProposal */
export interface CommunityCDPRepayDebtPermissionSDKType {}
/** CommunityCDPWithdrawCollateralPermission allows submission of CommunityCDPWithdrawCollateralProposal */
export interface CommunityCDPWithdrawCollateralPermission {}
/** CommunityCDPWithdrawCollateralPermission allows submission of CommunityCDPWithdrawCollateralProposal */
export interface CommunityCDPWithdrawCollateralPermissionSDKType {}
/** CommunityPoolLendWithdrawPermission allows submission of CommunityPoolLendWithdrawProposal */
export interface CommunityPoolLendWithdrawPermission {}
/** CommunityPoolLendWithdrawPermission allows submission of CommunityPoolLendWithdrawProposal */
export interface CommunityPoolLendWithdrawPermissionSDKType {}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermission {
  allowedParamsChanges: AllowedParamsChange[];
}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermissionSDKType {
  allowed_params_changes: AllowedParamsChangeSDKType[];
}
/** AllowedParamsChange contains data on the allowed parameter changes for subspace, key, and sub params requirements. */
export interface AllowedParamsChange {
  subspace: string;
  key: string;
  /**
   * Requirements for when the subparam value is a single record. This contains list of allowed attribute keys that can
   * be changed on the subparam record.
   */
  singleSubparamAllowedAttrs: string[];
  /**
   * Requirements for when the subparam value is a list of records. The requirements contains requirements for each
   * record in the list.
   */
  multiSubparamsRequirements: SubparamRequirement[];
}
/** AllowedParamsChange contains data on the allowed parameter changes for subspace, key, and sub params requirements. */
export interface AllowedParamsChangeSDKType {
  subspace: string;
  key: string;
  single_subparam_allowed_attrs: string[];
  multi_subparams_requirements: SubparamRequirementSDKType[];
}
/** SubparamRequirement contains requirements for a single record in a subparam value list */
export interface SubparamRequirement {
  /** The required attr key of the param record. */
  key: string;
  /** The required param value for the param record key. The key and value is used to match to the target param record. */
  val: string;
  /** The sub param attrs that are allowed to be changed. */
  allowedSubparamAttrChanges: string[];
}
/** SubparamRequirement contains requirements for a single record in a subparam value list */
export interface SubparamRequirementSDKType {
  key: string;
  val: string;
  allowed_subparam_attr_changes: string[];
}
function createBaseGodPermission(): GodPermission {
  return {};
}
export const GodPermission = {
  encode(_: GodPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GodPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGodPermission();
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
  fromPartial(_: DeepPartial<GodPermission>): GodPermission {
    const message = createBaseGodPermission();
    return message;
  }
};
function createBaseSoftwareUpgradePermission(): SoftwareUpgradePermission {
  return {};
}
export const SoftwareUpgradePermission = {
  encode(_: SoftwareUpgradePermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SoftwareUpgradePermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSoftwareUpgradePermission();
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
  fromPartial(_: DeepPartial<SoftwareUpgradePermission>): SoftwareUpgradePermission {
    const message = createBaseSoftwareUpgradePermission();
    return message;
  }
};
function createBaseTextPermission(): TextPermission {
  return {};
}
export const TextPermission = {
  encode(_: TextPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TextPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextPermission();
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
  fromPartial(_: DeepPartial<TextPermission>): TextPermission {
    const message = createBaseTextPermission();
    return message;
  }
};
function createBaseCommunityCDPRepayDebtPermission(): CommunityCDPRepayDebtPermission {
  return {};
}
export const CommunityCDPRepayDebtPermission = {
  encode(_: CommunityCDPRepayDebtPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityCDPRepayDebtPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityCDPRepayDebtPermission();
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
  fromPartial(_: DeepPartial<CommunityCDPRepayDebtPermission>): CommunityCDPRepayDebtPermission {
    const message = createBaseCommunityCDPRepayDebtPermission();
    return message;
  }
};
function createBaseCommunityCDPWithdrawCollateralPermission(): CommunityCDPWithdrawCollateralPermission {
  return {};
}
export const CommunityCDPWithdrawCollateralPermission = {
  encode(_: CommunityCDPWithdrawCollateralPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityCDPWithdrawCollateralPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityCDPWithdrawCollateralPermission();
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
  fromPartial(_: DeepPartial<CommunityCDPWithdrawCollateralPermission>): CommunityCDPWithdrawCollateralPermission {
    const message = createBaseCommunityCDPWithdrawCollateralPermission();
    return message;
  }
};
function createBaseCommunityPoolLendWithdrawPermission(): CommunityPoolLendWithdrawPermission {
  return {};
}
export const CommunityPoolLendWithdrawPermission = {
  encode(_: CommunityPoolLendWithdrawPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolLendWithdrawPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolLendWithdrawPermission();
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
  fromPartial(_: DeepPartial<CommunityPoolLendWithdrawPermission>): CommunityPoolLendWithdrawPermission {
    const message = createBaseCommunityPoolLendWithdrawPermission();
    return message;
  }
};
function createBaseParamsChangePermission(): ParamsChangePermission {
  return {
    allowedParamsChanges: []
  };
}
export const ParamsChangePermission = {
  encode(message: ParamsChangePermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedParamsChanges) {
      AllowedParamsChange.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsChangePermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsChangePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedParamsChanges.push(AllowedParamsChange.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ParamsChangePermission>): ParamsChangePermission {
    const message = createBaseParamsChangePermission();
    message.allowedParamsChanges = object.allowedParamsChanges?.map(e => AllowedParamsChange.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAllowedParamsChange(): AllowedParamsChange {
  return {
    subspace: "",
    key: "",
    singleSubparamAllowedAttrs: [],
    multiSubparamsRequirements: []
  };
}
export const AllowedParamsChange = {
  encode(message: AllowedParamsChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    for (const v of message.singleSubparamAllowedAttrs) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.multiSubparamsRequirements) {
      SubparamRequirement.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedParamsChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedParamsChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.singleSubparamAllowedAttrs.push(reader.string());
          break;
        case 4:
          message.multiSubparamsRequirements.push(SubparamRequirement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AllowedParamsChange>): AllowedParamsChange {
    const message = createBaseAllowedParamsChange();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    message.singleSubparamAllowedAttrs = object.singleSubparamAllowedAttrs?.map(e => e) || [];
    message.multiSubparamsRequirements = object.multiSubparamsRequirements?.map(e => SubparamRequirement.fromPartial(e)) || [];
    return message;
  }
};
function createBaseSubparamRequirement(): SubparamRequirement {
  return {
    key: "",
    val: "",
    allowedSubparamAttrChanges: []
  };
}
export const SubparamRequirement = {
  encode(message: SubparamRequirement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.val !== "") {
      writer.uint32(18).string(message.val);
    }
    for (const v of message.allowedSubparamAttrChanges) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SubparamRequirement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubparamRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.val = reader.string();
          break;
        case 3:
          message.allowedSubparamAttrChanges.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubparamRequirement>): SubparamRequirement {
    const message = createBaseSubparamRequirement();
    message.key = object.key ?? "";
    message.val = object.val ?? "";
    message.allowedSubparamAttrChanges = object.allowedSubparamAttrChanges?.map(e => e) || [];
    return message;
  }
};