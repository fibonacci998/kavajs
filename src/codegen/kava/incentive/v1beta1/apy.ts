import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * Apy contains the calculated APY for a given collateral type at a specific
 * instant in time.
 */
export interface Apy {
  collateralType: string;
  apy: string;
}
/**
 * Apy contains the calculated APY for a given collateral type at a specific
 * instant in time.
 */
export interface ApySDKType {
  collateral_type: string;
  apy: string;
}
function createBaseApy(): Apy {
  return {
    collateralType: "",
    apy: ""
  };
}
export const Apy = {
  encode(message: Apy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.apy !== "") {
      writer.uint32(18).string(message.apy);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Apy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralType = reader.string();
          break;
        case 2:
          message.apy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Apy>): Apy {
    const message = createBaseApy();
    message.collateralType = object.collateralType ?? "";
    message.apy = object.apy ?? "";
    return message;
  }
};