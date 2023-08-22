import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */
export interface CommitteeChangeProposal {
  title: string;
  description: string;
  newCommittee: Any;
}
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */
export interface CommitteeChangeProposalSDKType {
  title: string;
  description: string;
  new_committee: AnySDKType;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */
export interface CommitteeDeleteProposal {
  title: string;
  description: string;
  committeeId: Long;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */
export interface CommitteeDeleteProposalSDKType {
  title: string;
  description: string;
  committee_id: Long;
}
function createBaseCommitteeChangeProposal(): CommitteeChangeProposal {
  return {
    title: "",
    description: "",
    newCommittee: Any.fromPartial({})
  };
}
export const CommitteeChangeProposal = {
  encode(message: CommitteeChangeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.newCommittee !== undefined) {
      Any.encode(message.newCommittee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommitteeChangeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitteeChangeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.newCommittee = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CommitteeChangeProposal>): CommitteeChangeProposal {
    const message = createBaseCommitteeChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.newCommittee = object.newCommittee !== undefined && object.newCommittee !== null ? Any.fromPartial(object.newCommittee) : undefined;
    return message;
  }
};
function createBaseCommitteeDeleteProposal(): CommitteeDeleteProposal {
  return {
    title: "",
    description: "",
    committeeId: Long.UZERO
  };
}
export const CommitteeDeleteProposal = {
  encode(message: CommitteeDeleteProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (!message.committeeId.isZero()) {
      writer.uint32(24).uint64(message.committeeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommitteeDeleteProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitteeDeleteProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.committeeId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CommitteeDeleteProposal>): CommitteeDeleteProposal {
    const message = createBaseCommitteeDeleteProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? Long.fromValue(object.committeeId) : Long.UZERO;
    return message;
  }
};