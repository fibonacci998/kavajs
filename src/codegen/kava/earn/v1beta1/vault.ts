import { StrategyType } from "./strategy";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVault {
  /** Denom is the only supported denomination of the vault for deposits and withdrawals. */
  denom: string;
  /** VaultStrategy is the strategy used for this vault. */
  strategies: StrategyType[];
  /**
   * IsPrivateVault is true if the vault only allows depositors contained in
   * AllowedDepositors.
   */
  isPrivateVault: boolean;
  /**
   * AllowedDepositors is a list of addresses that are allowed to deposit to
   * this vault if IsPrivateVault is true. Addresses not contained in this list
   * are not allowed to deposit into this vault. If IsPrivateVault is false,
   * this should be empty and ignored.
   */
  allowedDepositors: Uint8Array[];
}
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVaultSDKType {
  denom: string;
  strategies: StrategyType[];
  is_private_vault: boolean;
  allowed_depositors: Uint8Array[];
}
/** VaultRecord is the state of a vault. */
export interface VaultRecord {
  /** TotalShares is the total distributed number of shares in the vault. */
  totalShares: VaultShare;
}
/** VaultRecord is the state of a vault. */
export interface VaultRecordSDKType {
  total_shares: VaultShareSDKType;
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecord {
  /** Depositor represents the owner of the shares */
  depositor: Uint8Array;
  /** Shares represent the vault shares owned by the depositor. */
  shares: VaultShare[];
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecordSDKType {
  depositor: Uint8Array;
  shares: VaultShareSDKType[];
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShare {
  denom: string;
  amount: string;
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShareSDKType {
  denom: string;
  amount: string;
}
function createBaseAllowedVault(): AllowedVault {
  return {
    denom: "",
    strategies: [],
    isPrivateVault: false,
    allowedDepositors: []
  };
}
export const AllowedVault = {
  encode(message: AllowedVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    writer.uint32(18).fork();
    for (const v of message.strategies) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.isPrivateVault === true) {
      writer.uint32(24).bool(message.isPrivateVault);
    }
    for (const v of message.allowedDepositors) {
      writer.uint32(34).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.strategies.push((reader.int32() as any));
            }
          } else {
            message.strategies.push((reader.int32() as any));
          }
          break;
        case 3:
          message.isPrivateVault = reader.bool();
          break;
        case 4:
          message.allowedDepositors.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AllowedVault>): AllowedVault {
    const message = createBaseAllowedVault();
    message.denom = object.denom ?? "";
    message.strategies = object.strategies?.map(e => e) || [];
    message.isPrivateVault = object.isPrivateVault ?? false;
    message.allowedDepositors = object.allowedDepositors?.map(e => e) || [];
    return message;
  }
};
function createBaseVaultRecord(): VaultRecord {
  return {
    totalShares: VaultShare.fromPartial({})
  };
}
export const VaultRecord = {
  encode(message: VaultRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalShares !== undefined) {
      VaultShare.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VaultRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares = VaultShare.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VaultRecord>): VaultRecord {
    const message = createBaseVaultRecord();
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? VaultShare.fromPartial(object.totalShares) : undefined;
    return message;
  }
};
function createBaseVaultShareRecord(): VaultShareRecord {
  return {
    depositor: new Uint8Array(),
    shares: []
  };
}
export const VaultShareRecord = {
  encode(message: VaultShareRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor.length !== 0) {
      writer.uint32(10).bytes(message.depositor);
    }
    for (const v of message.shares) {
      VaultShare.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VaultShareRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.bytes();
          break;
        case 2:
          message.shares.push(VaultShare.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VaultShareRecord>): VaultShareRecord {
    const message = createBaseVaultShareRecord();
    message.depositor = object.depositor ?? new Uint8Array();
    message.shares = object.shares?.map(e => VaultShare.fromPartial(e)) || [];
    return message;
  }
};
function createBaseVaultShare(): VaultShare {
  return {
    denom: "",
    amount: ""
  };
}
export const VaultShare = {
  encode(message: VaultShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VaultShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VaultShare>): VaultShare {
    const message = createBaseVaultShare();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};