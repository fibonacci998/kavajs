import { Params, ParamsSDKType, AtomicSwap, AtomicSwapSDKType, AssetSupply, AssetSupplySDKType } from "./bep3";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** atomic_swaps represents the state of stored atomic swaps */
  atomicSwaps: AtomicSwap[];
  /** supplies represents the supply information of each atomic swap */
  supplies: AssetSupply[];
  /** previous_block_time represents the time of the previous block */
  previousBlockTime: Date;
}
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  atomic_swaps: AtomicSwapSDKType[];
  supplies: AssetSupplySDKType[];
  previous_block_time: Date;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    atomicSwaps: [],
    supplies: [],
    previousBlockTime: new Date()
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.atomicSwaps) {
      AtomicSwap.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.supplies) {
      AssetSupply.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.previousBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.previousBlockTime), writer.uint32(34).fork()).ldelim();
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
          message.atomicSwaps.push(AtomicSwap.decode(reader, reader.uint32()));
          break;
        case 3:
          message.supplies.push(AssetSupply.decode(reader, reader.uint32()));
          break;
        case 4:
          message.previousBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    message.atomicSwaps = object.atomicSwaps?.map(e => AtomicSwap.fromPartial(e)) || [];
    message.supplies = object.supplies?.map(e => AssetSupply.fromPartial(e)) || [];
    message.previousBlockTime = object.previousBlockTime ?? undefined;
    return message;
  }
};