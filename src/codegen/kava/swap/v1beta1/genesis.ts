import { Params, ParamsSDKType, PoolRecord, PoolRecordSDKType, ShareRecord, ShareRecordSDKType } from "./swap";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the swap module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters related to swap */
  params: Params;
  /** pool_records defines the available pools */
  poolRecords: PoolRecord[];
  /** share_records defines the owned shares of each pool */
  shareRecords: ShareRecord[];
}
/** GenesisState defines the swap module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_records: PoolRecordSDKType[];
  share_records: ShareRecordSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolRecords: [],
    shareRecords: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolRecords) {
      PoolRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.shareRecords) {
      ShareRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolRecords.push(PoolRecord.decode(reader, reader.uint32()));
          break;
        case 3:
          message.shareRecords.push(ShareRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolRecords = object.poolRecords?.map(e => PoolRecord.fromPartial(e)) || [];
    message.shareRecords = object.shareRecords?.map(e => ShareRecord.fromPartial(e)) || [];
    return message;
  }
};