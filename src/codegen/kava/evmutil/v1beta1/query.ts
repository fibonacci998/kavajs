import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponse {
  params: Params;
}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryDeployedCosmosCoinContractsRequest defines the request type for Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsRequest {
  /**
   * optional query param to only return specific denoms in the list
   * denoms that do not have deployed contracts will be omitted from the result
   * must request fewer than 100 denoms at a time.
   */
  cosmosDenoms: string[];
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/** QueryDeployedCosmosCoinContractsRequest defines the request type for Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsRequestSDKType {
  cosmos_denoms: string[];
  pagination: PageRequestSDKType;
}
/** QueryDeployedCosmosCoinContractsResponse defines the response type for the Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsResponse {
  /** deployed_cosmos_coin_contracts is a list of cosmos-sdk coin denom and its deployed contract address */
  deployedCosmosCoinContracts: DeployedCosmosCoinContract[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryDeployedCosmosCoinContractsResponse defines the response type for the Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsResponseSDKType {
  deployed_cosmos_coin_contracts: DeployedCosmosCoinContractSDKType[];
  pagination: PageResponseSDKType;
}
/** DeployedCosmosCoinContract defines a deployed token contract to the evm representing a native cosmos-sdk coin */
export interface DeployedCosmosCoinContract {
  cosmosDenom: string;
  address: string;
}
/** DeployedCosmosCoinContract defines a deployed token contract to the evm representing a native cosmos-sdk coin */
export interface DeployedCosmosCoinContractSDKType {
  cosmos_denom: string;
  address: string;
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
function createBaseQueryDeployedCosmosCoinContractsRequest(): QueryDeployedCosmosCoinContractsRequest {
  return {
    cosmosDenoms: [],
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDeployedCosmosCoinContractsRequest = {
  encode(message: QueryDeployedCosmosCoinContractsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cosmosDenoms) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployedCosmosCoinContractsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeployedCosmosCoinContractsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmosDenoms.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDeployedCosmosCoinContractsRequest>): QueryDeployedCosmosCoinContractsRequest {
    const message = createBaseQueryDeployedCosmosCoinContractsRequest();
    message.cosmosDenoms = object.cosmosDenoms?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDeployedCosmosCoinContractsResponse(): QueryDeployedCosmosCoinContractsResponse {
  return {
    deployedCosmosCoinContracts: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDeployedCosmosCoinContractsResponse = {
  encode(message: QueryDeployedCosmosCoinContractsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deployedCosmosCoinContracts) {
      DeployedCosmosCoinContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployedCosmosCoinContractsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeployedCosmosCoinContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployedCosmosCoinContracts.push(DeployedCosmosCoinContract.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryDeployedCosmosCoinContractsResponse>): QueryDeployedCosmosCoinContractsResponse {
    const message = createBaseQueryDeployedCosmosCoinContractsResponse();
    message.deployedCosmosCoinContracts = object.deployedCosmosCoinContracts?.map(e => DeployedCosmosCoinContract.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseDeployedCosmosCoinContract(): DeployedCosmosCoinContract {
  return {
    cosmosDenom: "",
    address: ""
  };
}
export const DeployedCosmosCoinContract = {
  encode(message: DeployedCosmosCoinContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosDenom !== "") {
      writer.uint32(10).string(message.cosmosDenom);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DeployedCosmosCoinContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeployedCosmosCoinContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmosDenom = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeployedCosmosCoinContract>): DeployedCosmosCoinContract {
    const message = createBaseDeployedCosmosCoinContract();
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.address = object.address ?? "";
    return message;
  }
};