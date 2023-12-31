import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { VoteType } from "./genesis";
import { Long, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */
export interface QueryCommitteesRequest {}
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */
export interface QueryCommitteesRequestSDKType {}
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */
export interface QueryCommitteesResponse {
  committees: Any[];
}
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */
export interface QueryCommitteesResponseSDKType {
  committees: AnySDKType[];
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */
export interface QueryCommitteeRequest {
  committeeId: Long;
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */
export interface QueryCommitteeRequestSDKType {
  committee_id: Long;
}
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */
export interface QueryCommitteeResponse {
  committee: Any;
}
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */
export interface QueryCommitteeResponseSDKType {
  committee: AnySDKType;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */
export interface QueryProposalsRequest {
  committeeId: Long;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */
export interface QueryProposalsRequestSDKType {
  committee_id: Long;
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */
export interface QueryProposalsResponse {
  proposals: QueryProposalResponse[];
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */
export interface QueryProposalsResponseSDKType {
  proposals: QueryProposalResponseSDKType[];
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */
export interface QueryProposalRequest {
  proposalId: Long;
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */
export interface QueryProposalRequestSDKType {
  proposal_id: Long;
}
/** QueryProposalResponse defines the response type for querying x/committee proposal. */
export interface QueryProposalResponse {
  pubProposal: Any;
  id: Long;
  committeeId: Long;
  deadline: Date;
}
/** QueryProposalResponse defines the response type for querying x/committee proposal. */
export interface QueryProposalResponseSDKType {
  pub_proposal: AnySDKType;
  id: Long;
  committee_id: Long;
  deadline: Date;
}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDRequest {}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDRequestSDKType {}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDResponse {
  nextProposalId: Long;
}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDResponseSDKType {
  next_proposal_id: Long;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */
export interface QueryVotesRequest {
  proposalId: Long;
  pagination: PageRequest;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */
export interface QueryVotesRequestSDKType {
  proposal_id: Long;
  pagination: PageRequestSDKType;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */
export interface QueryVotesResponse {
  /** votes defined the queried votes. */
  votes: QueryVoteResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */
export interface QueryVotesResponseSDKType {
  votes: QueryVoteResponseSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */
export interface QueryVoteRequest {
  proposalId: Long;
  voter: string;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */
export interface QueryVoteRequestSDKType {
  proposal_id: Long;
  voter: string;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */
export interface QueryVoteResponse {
  proposalId: Long;
  voter: string;
  voteType: VoteType;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */
export interface QueryVoteResponseSDKType {
  proposal_id: Long;
  voter: string;
  vote_type: VoteType;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */
export interface QueryTallyRequest {
  proposalId: Long;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */
export interface QueryTallyRequestSDKType {
  proposal_id: Long;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */
export interface QueryTallyResponse {
  proposalId: Long;
  yesVotes: string;
  noVotes: string;
  currentVotes: string;
  possibleVotes: string;
  voteThreshold: string;
  quorum: string;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */
export interface QueryTallyResponseSDKType {
  proposal_id: Long;
  yes_votes: string;
  no_votes: string;
  current_votes: string;
  possible_votes: string;
  vote_threshold: string;
  quorum: string;
}
/** QueryRawParamsRequest defines the request type for querying x/committee raw params. */
export interface QueryRawParamsRequest {
  subspace: string;
  key: string;
}
/** QueryRawParamsRequest defines the request type for querying x/committee raw params. */
export interface QueryRawParamsRequestSDKType {
  subspace: string;
  key: string;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */
export interface QueryRawParamsResponse {
  rawData: string;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */
export interface QueryRawParamsResponseSDKType {
  raw_data: string;
}
function createBaseQueryCommitteesRequest(): QueryCommitteesRequest {
  return {};
}
export const QueryCommitteesRequest = {
  encode(_: QueryCommitteesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitteesRequest();
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
  fromPartial(_: DeepPartial<QueryCommitteesRequest>): QueryCommitteesRequest {
    const message = createBaseQueryCommitteesRequest();
    return message;
  }
};
function createBaseQueryCommitteesResponse(): QueryCommitteesResponse {
  return {
    committees: []
  };
}
export const QueryCommitteesResponse = {
  encode(message: QueryCommitteesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.committees) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitteesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.committees.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCommitteesResponse>): QueryCommitteesResponse {
    const message = createBaseQueryCommitteesResponse();
    message.committees = object.committees?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryCommitteeRequest(): QueryCommitteeRequest {
  return {
    committeeId: Long.UZERO
  };
}
export const QueryCommitteeRequest = {
  encode(message: QueryCommitteeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.committeeId.isZero()) {
      writer.uint32(8).uint64(message.committeeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitteeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.committeeId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCommitteeRequest>): QueryCommitteeRequest {
    const message = createBaseQueryCommitteeRequest();
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? Long.fromValue(object.committeeId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryCommitteeResponse(): QueryCommitteeResponse {
  return {
    committee: Any.fromPartial({})
  };
}
export const QueryCommitteeResponse = {
  encode(message: QueryCommitteeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.committee !== undefined) {
      Any.encode(message.committee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitteeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.committee = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCommitteeResponse>): QueryCommitteeResponse {
    const message = createBaseQueryCommitteeResponse();
    message.committee = object.committee !== undefined && object.committee !== null ? Any.fromPartial(object.committee) : undefined;
    return message;
  }
};
function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    committeeId: Long.UZERO
  };
}
export const QueryProposalsRequest = {
  encode(message: QueryProposalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.committeeId.isZero()) {
      writer.uint32(8).uint64(message.committeeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.committeeId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? Long.fromValue(object.committeeId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: []
  };
}
export const QueryProposalsResponse = {
  encode(message: QueryProposalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposals) {
      QueryProposalResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(QueryProposalResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => QueryProposalResponse.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: Long.UZERO
  };
}
export const QueryProposalRequest = {
  encode(message: QueryProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    pubProposal: Any.fromPartial({}),
    id: Long.UZERO,
    committeeId: Long.UZERO,
    deadline: new Date()
  };
}
export const QueryProposalResponse = {
  encode(message: QueryProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubProposal !== undefined) {
      Any.encode(message.pubProposal, writer.uint32(10).fork()).ldelim();
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.committeeId.isZero()) {
      writer.uint32(24).uint64(message.committeeId);
    }
    if (message.deadline !== undefined) {
      Timestamp.encode(toTimestamp(message.deadline), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubProposal = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.id = (reader.uint64() as Long);
          break;
        case 3:
          message.committeeId = (reader.uint64() as Long);
          break;
        case 4:
          message.deadline = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.pubProposal = object.pubProposal !== undefined && object.pubProposal !== null ? Any.fromPartial(object.pubProposal) : undefined;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? Long.fromValue(object.committeeId) : Long.UZERO;
    message.deadline = object.deadline ?? undefined;
    return message;
  }
};
function createBaseQueryNextProposalIDRequest(): QueryNextProposalIDRequest {
  return {};
}
export const QueryNextProposalIDRequest = {
  encode(_: QueryNextProposalIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextProposalIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextProposalIDRequest();
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
  fromPartial(_: DeepPartial<QueryNextProposalIDRequest>): QueryNextProposalIDRequest {
    const message = createBaseQueryNextProposalIDRequest();
    return message;
  }
};
function createBaseQueryNextProposalIDResponse(): QueryNextProposalIDResponse {
  return {
    nextProposalId: Long.UZERO
  };
}
export const QueryNextProposalIDResponse = {
  encode(message: QueryNextProposalIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextProposalId.isZero()) {
      writer.uint32(8).uint64(message.nextProposalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextProposalIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextProposalIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextProposalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNextProposalIDResponse>): QueryNextProposalIDResponse {
    const message = createBaseQueryNextProposalIDResponse();
    message.nextProposalId = object.nextProposalId !== undefined && object.nextProposalId !== null ? Long.fromValue(object.nextProposalId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposalId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryVotesRequest = {
  encode(message: QueryVotesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryVotesResponse = {
  encode(message: QueryVotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.votes) {
      QueryVoteResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(QueryVoteResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => QueryVoteResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposalId: Long.UZERO,
    voter: ""
  };
}
export const QueryVoteRequest = {
  encode(message: QueryVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    return message;
  }
};
function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    proposalId: Long.UZERO,
    voter: "",
    voteType: 0
  };
}
export const QueryVoteResponse = {
  encode(message: QueryVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.voteType !== 0) {
      writer.uint32(24).int32(message.voteType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.voteType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.voteType = object.voteType ?? 0;
    return message;
  }
};
function createBaseQueryTallyRequest(): QueryTallyRequest {
  return {
    proposalId: Long.UZERO
  };
}
export const QueryTallyRequest = {
  encode(message: QueryTallyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTallyRequest>): QueryTallyRequest {
    const message = createBaseQueryTallyRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryTallyResponse(): QueryTallyResponse {
  return {
    proposalId: Long.UZERO,
    yesVotes: "",
    noVotes: "",
    currentVotes: "",
    possibleVotes: "",
    voteThreshold: "",
    quorum: ""
  };
}
export const QueryTallyResponse = {
  encode(message: QueryTallyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.yesVotes !== "") {
      writer.uint32(18).string(message.yesVotes);
    }
    if (message.noVotes !== "") {
      writer.uint32(26).string(message.noVotes);
    }
    if (message.currentVotes !== "") {
      writer.uint32(34).string(message.currentVotes);
    }
    if (message.possibleVotes !== "") {
      writer.uint32(42).string(message.possibleVotes);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(50).string(message.voteThreshold);
    }
    if (message.quorum !== "") {
      writer.uint32(58).string(message.quorum);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        case 2:
          message.yesVotes = reader.string();
          break;
        case 3:
          message.noVotes = reader.string();
          break;
        case 4:
          message.currentVotes = reader.string();
          break;
        case 5:
          message.possibleVotes = reader.string();
          break;
        case 6:
          message.voteThreshold = reader.string();
          break;
        case 7:
          message.quorum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTallyResponse>): QueryTallyResponse {
    const message = createBaseQueryTallyResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.yesVotes = object.yesVotes ?? "";
    message.noVotes = object.noVotes ?? "";
    message.currentVotes = object.currentVotes ?? "";
    message.possibleVotes = object.possibleVotes ?? "";
    message.voteThreshold = object.voteThreshold ?? "";
    message.quorum = object.quorum ?? "";
    return message;
  }
};
function createBaseQueryRawParamsRequest(): QueryRawParamsRequest {
  return {
    subspace: "",
    key: ""
  };
}
export const QueryRawParamsRequest = {
  encode(message: QueryRawParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRawParamsRequest>): QueryRawParamsRequest {
    const message = createBaseQueryRawParamsRequest();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    return message;
  }
};
function createBaseQueryRawParamsResponse(): QueryRawParamsResponse {
  return {
    rawData: ""
  };
}
export const QueryRawParamsResponse = {
  encode(message: QueryRawParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rawData !== "") {
      writer.uint32(10).string(message.rawData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rawData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRawParamsResponse>): QueryRawParamsResponse {
    const message = createBaseQueryRawParamsResponse();
    message.rawData = object.rawData ?? "";
    return message;
  }
};