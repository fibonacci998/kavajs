import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDP {
  sender: string;
  collateral: Coin;
  principal: Coin;
  collateralType: string;
}
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDPSDKType {
  sender: string;
  collateral: CoinSDKType;
  principal: CoinSDKType;
  collateral_type: string;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponse {
  cdpId: Long;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponseSDKType {
  cdp_id: Long;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDeposit {
  depositor: string;
  owner: string;
  collateral: Coin;
  collateralType: string;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDepositSDKType {
  depositor: string;
  owner: string;
  collateral: CoinSDKType;
  collateral_type: string;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdraw {
  depositor: string;
  owner: string;
  collateral: Coin;
  collateralType: string;
}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdrawSDKType {
  depositor: string;
  owner: string;
  collateral: CoinSDKType;
  collateral_type: string;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebt {
  sender: string;
  collateralType: string;
  principal: Coin;
}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebtSDKType {
  sender: string;
  collateral_type: string;
  principal: CoinSDKType;
}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponse {}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponseSDKType {}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebt {
  sender: string;
  collateralType: string;
  payment: Coin;
}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebtSDKType {
  sender: string;
  collateral_type: string;
  payment: CoinSDKType;
}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponse {}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponseSDKType {}
/**
 * MsgLiquidate defines a message to attempt to liquidate a CDP whos
 * collateralization ratio is under its liquidation ratio.
 */
export interface MsgLiquidate {
  keeper: string;
  borrower: string;
  collateralType: string;
}
/**
 * MsgLiquidate defines a message to attempt to liquidate a CDP whos
 * collateralization ratio is under its liquidation ratio.
 */
export interface MsgLiquidateSDKType {
  keeper: string;
  borrower: string;
  collateral_type: string;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {}
function createBaseMsgCreateCDP(): MsgCreateCDP {
  return {
    sender: "",
    collateral: Coin.fromPartial({}),
    principal: Coin.fromPartial({}),
    collateralType: ""
  };
}
export const MsgCreateCDP = {
  encode(message: MsgCreateCDP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.principal !== undefined) {
      Coin.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    if (message.collateralType !== "") {
      writer.uint32(34).string(message.collateralType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCDP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCDP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.principal = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.collateralType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateCDP>): MsgCreateCDP {
    const message = createBaseMsgCreateCDP();
    message.sender = object.sender ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.principal = object.principal !== undefined && object.principal !== null ? Coin.fromPartial(object.principal) : undefined;
    message.collateralType = object.collateralType ?? "";
    return message;
  }
};
function createBaseMsgCreateCDPResponse(): MsgCreateCDPResponse {
  return {
    cdpId: Long.UZERO
  };
}
export const MsgCreateCDPResponse = {
  encode(message: MsgCreateCDPResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.cdpId.isZero()) {
      writer.uint32(8).uint64(message.cdpId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCDPResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCDPResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cdpId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateCDPResponse>): MsgCreateCDPResponse {
    const message = createBaseMsgCreateCDPResponse();
    message.cdpId = object.cdpId !== undefined && object.cdpId !== null ? Long.fromValue(object.cdpId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositor: "",
    owner: "",
    collateral: Coin.fromPartial({}),
    collateralType: ""
  };
}
export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    if (message.collateralType !== "") {
      writer.uint32(34).string(message.collateralType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.collateralType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.depositor = object.depositor ?? "";
    message.owner = object.owner ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.collateralType = object.collateralType ?? "";
    return message;
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
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
  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    depositor: "",
    owner: "",
    collateral: Coin.fromPartial({}),
    collateralType: ""
  };
}
export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    if (message.collateralType !== "") {
      writer.uint32(34).string(message.collateralType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.collateralType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.depositor = object.depositor ?? "";
    message.owner = object.owner ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.collateralType = object.collateralType ?? "";
    return message;
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  }
};
function createBaseMsgDrawDebt(): MsgDrawDebt {
  return {
    sender: "",
    collateralType: "",
    principal: Coin.fromPartial({})
  };
}
export const MsgDrawDebt = {
  encode(message: MsgDrawDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.principal !== undefined) {
      Coin.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrawDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.principal = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDrawDebt>): MsgDrawDebt {
    const message = createBaseMsgDrawDebt();
    message.sender = object.sender ?? "";
    message.collateralType = object.collateralType ?? "";
    message.principal = object.principal !== undefined && object.principal !== null ? Coin.fromPartial(object.principal) : undefined;
    return message;
  }
};
function createBaseMsgDrawDebtResponse(): MsgDrawDebtResponse {
  return {};
}
export const MsgDrawDebtResponse = {
  encode(_: MsgDrawDebtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawDebtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrawDebtResponse();
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
  fromPartial(_: DeepPartial<MsgDrawDebtResponse>): MsgDrawDebtResponse {
    const message = createBaseMsgDrawDebtResponse();
    return message;
  }
};
function createBaseMsgRepayDebt(): MsgRepayDebt {
  return {
    sender: "",
    collateralType: "",
    payment: Coin.fromPartial({})
  };
}
export const MsgRepayDebt = {
  encode(message: MsgRepayDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.payment !== undefined) {
      Coin.encode(message.payment, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.payment = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRepayDebt>): MsgRepayDebt {
    const message = createBaseMsgRepayDebt();
    message.sender = object.sender ?? "";
    message.collateralType = object.collateralType ?? "";
    message.payment = object.payment !== undefined && object.payment !== null ? Coin.fromPartial(object.payment) : undefined;
    return message;
  }
};
function createBaseMsgRepayDebtResponse(): MsgRepayDebtResponse {
  return {};
}
export const MsgRepayDebtResponse = {
  encode(_: MsgRepayDebtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayDebtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayDebtResponse();
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
  fromPartial(_: DeepPartial<MsgRepayDebtResponse>): MsgRepayDebtResponse {
    const message = createBaseMsgRepayDebtResponse();
    return message;
  }
};
function createBaseMsgLiquidate(): MsgLiquidate {
  return {
    keeper: "",
    borrower: "",
    collateralType: ""
  };
}
export const MsgLiquidate = {
  encode(message: MsgLiquidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keeper !== "") {
      writer.uint32(10).string(message.keeper);
    }
    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }
    if (message.collateralType !== "") {
      writer.uint32(26).string(message.collateralType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keeper = reader.string();
          break;
        case 2:
          message.borrower = reader.string();
          break;
        case 3:
          message.collateralType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgLiquidate>): MsgLiquidate {
    const message = createBaseMsgLiquidate();
    message.keeper = object.keeper ?? "";
    message.borrower = object.borrower ?? "";
    message.collateralType = object.collateralType ?? "";
    return message;
  }
};
function createBaseMsgLiquidateResponse(): MsgLiquidateResponse {
  return {};
}
export const MsgLiquidateResponse = {
  encode(_: MsgLiquidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateResponse();
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
  fromPartial(_: DeepPartial<MsgLiquidateResponse>): MsgLiquidateResponse {
    const message = createBaseMsgLiquidateResponse();
    return message;
  }
};