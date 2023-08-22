import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StrategyType } from "./strategy";
import { VaultShare, VaultShareSDKType } from "./vault";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponse {
  /** params represents the earn module parameters */
  params: Params;
}
/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryVaultsRequest is the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequest {}
/** QueryVaultsRequest is the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequestSDKType {}
/** QueryVaultsResponse is the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponse {
  /** vaults represents the earn module vaults */
  vaults: VaultResponse[];
}
/** QueryVaultsResponse is the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponseSDKType {
  vaults: VaultResponseSDKType[];
}
/** QueryVaultRequest is the request type for the Query/Vault RPC method. */
export interface QueryVaultRequest {
  /** vault filters vault by denom */
  denom: string;
}
/** QueryVaultRequest is the request type for the Query/Vault RPC method. */
export interface QueryVaultRequestSDKType {
  denom: string;
}
/** QueryVaultResponse is the response type for the Query/Vault RPC method. */
export interface QueryVaultResponse {
  /** vault represents the queried earn module vault */
  vault: VaultResponse;
}
/** QueryVaultResponse is the response type for the Query/Vault RPC method. */
export interface QueryVaultResponseSDKType {
  vault: VaultResponseSDKType;
}
/** VaultResponse is the response type for a vault. */
export interface VaultResponse {
  /** denom represents the denom of the vault */
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
  allowedDepositors: string[];
  /** TotalShares is the total amount of shares issued to depositors. */
  totalShares: string;
  /**
   * TotalValue is the total value of denom coins supplied to the vault if the
   * vault were to be liquidated.
   */
  totalValue: string;
}
/** VaultResponse is the response type for a vault. */
export interface VaultResponseSDKType {
  denom: string;
  strategies: StrategyType[];
  is_private_vault: boolean;
  allowed_depositors: string[];
  total_shares: string;
  total_value: string;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  /** depositor optionally filters deposits by depositor */
  depositor: string;
  /** denom optionally filters deposits by vault denom */
  denom: string;
  /** respond with vault value in ukava for bkava vaults */
  valueInStakedTokens: boolean;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
  depositor: string;
  denom: string;
  value_in_staked_tokens: boolean;
  pagination: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  /** deposits returns the deposits matching the requested parameters */
  deposits: DepositResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
  deposits: DepositResponseSDKType[];
  pagination: PageResponseSDKType;
}
/** DepositResponse defines a deposit query response type. */
export interface DepositResponse {
  /** depositor represents the owner of the deposit. */
  depositor: string;
  /** Shares represent the issued shares from their corresponding vaults. */
  shares: VaultShare[];
  /**
   * Value represents the total accumulated value of denom coins supplied to
   * vaults. This may be greater than or equal to amount_supplied depending on
   * the strategy.
   */
  value: Coin[];
}
/** DepositResponse defines a deposit query response type. */
export interface DepositResponseSDKType {
  depositor: string;
  shares: VaultShareSDKType[];
  value: CoinSDKType[];
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequest {}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestSDKType {}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponse {
  /** Height is the block height at which these totals apply */
  height: Long;
  /** Result is a list of coins supplied to earn */
  result: Coin[];
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseSDKType {
  height: Long;
  result: CoinSDKType[];
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
function createBaseQueryVaultsRequest(): QueryVaultsRequest {
  return {};
}
export const QueryVaultsRequest = {
  encode(_: QueryVaultsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsRequest();
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
  fromPartial(_: DeepPartial<QueryVaultsRequest>): QueryVaultsRequest {
    const message = createBaseQueryVaultsRequest();
    return message;
  }
};
function createBaseQueryVaultsResponse(): QueryVaultsResponse {
  return {
    vaults: []
  };
}
export const QueryVaultsResponse = {
  encode(message: QueryVaultsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vaults) {
      VaultResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaults.push(VaultResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVaultsResponse>): QueryVaultsResponse {
    const message = createBaseQueryVaultsResponse();
    message.vaults = object.vaults?.map(e => VaultResponse.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryVaultRequest(): QueryVaultRequest {
  return {
    denom: ""
  };
}
export const QueryVaultRequest = {
  encode(message: QueryVaultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVaultRequest>): QueryVaultRequest {
    const message = createBaseQueryVaultRequest();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryVaultResponse(): QueryVaultResponse {
  return {
    vault: VaultResponse.fromPartial({})
  };
}
export const QueryVaultResponse = {
  encode(message: QueryVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vault !== undefined) {
      VaultResponse.encode(message.vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault = VaultResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVaultResponse>): QueryVaultResponse {
    const message = createBaseQueryVaultResponse();
    message.vault = object.vault !== undefined && object.vault !== null ? VaultResponse.fromPartial(object.vault) : undefined;
    return message;
  }
};
function createBaseVaultResponse(): VaultResponse {
  return {
    denom: "",
    strategies: [],
    isPrivateVault: false,
    allowedDepositors: [],
    totalShares: "",
    totalValue: ""
  };
}
export const VaultResponse = {
  encode(message: VaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(34).string(v!);
    }
    if (message.totalShares !== "") {
      writer.uint32(42).string(message.totalShares);
    }
    if (message.totalValue !== "") {
      writer.uint32(50).string(message.totalValue);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultResponse();
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
          message.allowedDepositors.push(reader.string());
          break;
        case 5:
          message.totalShares = reader.string();
          break;
        case 6:
          message.totalValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VaultResponse>): VaultResponse {
    const message = createBaseVaultResponse();
    message.denom = object.denom ?? "";
    message.strategies = object.strategies?.map(e => e) || [];
    message.isPrivateVault = object.isPrivateVault ?? false;
    message.allowedDepositors = object.allowedDepositors?.map(e => e) || [];
    message.totalShares = object.totalShares ?? "";
    message.totalValue = object.totalValue ?? "";
    return message;
  }
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    depositor: "",
    denom: "",
    valueInStakedTokens: false,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDepositsRequest = {
  encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.valueInStakedTokens === true) {
      writer.uint32(24).bool(message.valueInStakedTokens);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.valueInStakedTokens = reader.bool();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.depositor = object.depositor ?? "";
    message.denom = object.denom ?? "";
    message.valueInStakedTokens = object.valueInStakedTokens ?? false;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDepositsResponse = {
  encode(message: QueryDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      DepositResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(DepositResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => DepositResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseDepositResponse(): DepositResponse {
  return {
    depositor: "",
    shares: [],
    value: []
  };
}
export const DepositResponse = {
  encode(message: DepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.shares) {
      VaultShare.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.value) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.shares.push(VaultShare.decode(reader, reader.uint32()));
          break;
        case 3:
          message.value.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DepositResponse>): DepositResponse {
    const message = createBaseDepositResponse();
    message.depositor = object.depositor ?? "";
    message.shares = object.shares?.map(e => VaultShare.fromPartial(e)) || [];
    message.value = object.value?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {};
}
export const QueryTotalSupplyRequest = {
  encode(_: QueryTotalSupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
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
  fromPartial(_: DeepPartial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  }
};
function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    height: Long.ZERO,
    result: []
  };
}
export const QueryTotalSupplyResponse = {
  encode(message: QueryTotalSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    for (const v of message.result) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        case 2:
          message.result.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.result = object.result?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};