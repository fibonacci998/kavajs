import * as _113 from "./auction/v1beta1/auction";
import * as _114 from "./auction/v1beta1/genesis";
import * as _115 from "./auction/v1beta1/query";
import * as _116 from "./auction/v1beta1/tx";
import * as _117 from "./bep3/v1beta1/bep3";
import * as _118 from "./bep3/v1beta1/genesis";
import * as _119 from "./bep3/v1beta1/query";
import * as _120 from "./bep3/v1beta1/tx";
import * as _121 from "./cdp/v1beta1/cdp";
import * as _122 from "./cdp/v1beta1/genesis";
import * as _123 from "./cdp/v1beta1/query";
import * as _124 from "./cdp/v1beta1/tx";
import * as _125 from "./committee/v1beta1/committee";
import * as _126 from "./committee/v1beta1/genesis";
import * as _127 from "./committee/v1beta1/permissions";
import * as _128 from "./committee/v1beta1/proposal";
import * as _129 from "./committee/v1beta1/query";
import * as _130 from "./committee/v1beta1/tx";
import * as _131 from "./community/v1beta1/proposal";
import * as _132 from "./community/v1beta1/query";
import * as _133 from "./community/v1beta1/tx";
import * as _134 from "./earn/v1beta1/genesis";
import * as _135 from "./earn/v1beta1/params";
import * as _136 from "./earn/v1beta1/proposal";
import * as _137 from "./earn/v1beta1/query";
import * as _138 from "./earn/v1beta1/strategy";
import * as _139 from "./earn/v1beta1/tx";
import * as _140 from "./earn/v1beta1/vault";
import * as _141 from "./evmutil/v1beta1/conversion_pair";
import * as _142 from "./evmutil/v1beta1/genesis";
import * as _143 from "./evmutil/v1beta1/query";
import * as _144 from "./evmutil/v1beta1/tx";
import * as _145 from "./hard/v1beta1/genesis";
import * as _146 from "./hard/v1beta1/hard";
import * as _147 from "./hard/v1beta1/query";
import * as _148 from "./hard/v1beta1/tx";
import * as _149 from "./incentive/v1beta1/apy";
import * as _150 from "./incentive/v1beta1/claims";
import * as _151 from "./incentive/v1beta1/genesis";
import * as _152 from "./incentive/v1beta1/params";
import * as _153 from "./incentive/v1beta1/query";
import * as _154 from "./incentive/v1beta1/tx";
import * as _155 from "./issuance/v1beta1/genesis";
import * as _156 from "./issuance/v1beta1/query";
import * as _157 from "./issuance/v1beta1/tx";
import * as _158 from "./kavadist/v1beta1/genesis";
import * as _159 from "./kavadist/v1beta1/params";
import * as _160 from "./kavadist/v1beta1/proposal";
import * as _161 from "./kavadist/v1beta1/query";
import * as _162 from "./liquid/v1beta1/query";
import * as _163 from "./liquid/v1beta1/tx";
import * as _164 from "./pricefeed/v1beta1/genesis";
import * as _165 from "./pricefeed/v1beta1/query";
import * as _166 from "./pricefeed/v1beta1/store";
import * as _167 from "./pricefeed/v1beta1/tx";
import * as _168 from "./router/v1beta1/tx";
import * as _169 from "./savings/v1beta1/genesis";
import * as _170 from "./savings/v1beta1/query";
import * as _171 from "./savings/v1beta1/store";
import * as _172 from "./savings/v1beta1/tx";
import * as _173 from "./swap/v1beta1/genesis";
import * as _174 from "./swap/v1beta1/query";
import * as _175 from "./swap/v1beta1/swap";
import * as _176 from "./swap/v1beta1/tx";
import * as _254 from "./auction/v1beta1/tx.amino";
import * as _255 from "./bep3/v1beta1/tx.amino";
import * as _256 from "./cdp/v1beta1/tx.amino";
import * as _257 from "./committee/v1beta1/tx.amino";
import * as _258 from "./community/v1beta1/tx.amino";
import * as _259 from "./earn/v1beta1/tx.amino";
import * as _260 from "./evmutil/v1beta1/tx.amino";
import * as _261 from "./hard/v1beta1/tx.amino";
import * as _262 from "./incentive/v1beta1/tx.amino";
import * as _263 from "./issuance/v1beta1/tx.amino";
import * as _264 from "./liquid/v1beta1/tx.amino";
import * as _265 from "./pricefeed/v1beta1/tx.amino";
import * as _266 from "./router/v1beta1/tx.amino";
import * as _267 from "./savings/v1beta1/tx.amino";
import * as _268 from "./swap/v1beta1/tx.amino";
import * as _269 from "./auction/v1beta1/tx.registry";
import * as _270 from "./bep3/v1beta1/tx.registry";
import * as _271 from "./cdp/v1beta1/tx.registry";
import * as _272 from "./committee/v1beta1/tx.registry";
import * as _273 from "./community/v1beta1/tx.registry";
import * as _274 from "./earn/v1beta1/tx.registry";
import * as _275 from "./evmutil/v1beta1/tx.registry";
import * as _276 from "./hard/v1beta1/tx.registry";
import * as _277 from "./incentive/v1beta1/tx.registry";
import * as _278 from "./issuance/v1beta1/tx.registry";
import * as _279 from "./liquid/v1beta1/tx.registry";
import * as _280 from "./pricefeed/v1beta1/tx.registry";
import * as _281 from "./router/v1beta1/tx.registry";
import * as _282 from "./savings/v1beta1/tx.registry";
import * as _283 from "./swap/v1beta1/tx.registry";
import * as _284 from "./auction/v1beta1/query.lcd";
import * as _285 from "./bep3/v1beta1/query.lcd";
import * as _286 from "./cdp/v1beta1/query.lcd";
import * as _287 from "./committee/v1beta1/query.lcd";
import * as _288 from "./community/v1beta1/query.lcd";
import * as _289 from "./earn/v1beta1/query.lcd";
import * as _290 from "./evmutil/v1beta1/query.lcd";
import * as _291 from "./hard/v1beta1/query.lcd";
import * as _292 from "./incentive/v1beta1/query.lcd";
import * as _293 from "./issuance/v1beta1/query.lcd";
import * as _294 from "./kavadist/v1beta1/query.lcd";
import * as _295 from "./liquid/v1beta1/query.lcd";
import * as _296 from "./pricefeed/v1beta1/query.lcd";
import * as _297 from "./savings/v1beta1/query.lcd";
import * as _298 from "./swap/v1beta1/query.lcd";
import * as _299 from "./auction/v1beta1/query.rpc.Query";
import * as _300 from "./bep3/v1beta1/query.rpc.Query";
import * as _301 from "./cdp/v1beta1/query.rpc.Query";
import * as _302 from "./committee/v1beta1/query.rpc.Query";
import * as _303 from "./community/v1beta1/query.rpc.Query";
import * as _304 from "./earn/v1beta1/query.rpc.Query";
import * as _305 from "./evmutil/v1beta1/query.rpc.Query";
import * as _306 from "./hard/v1beta1/query.rpc.Query";
import * as _307 from "./incentive/v1beta1/query.rpc.Query";
import * as _308 from "./issuance/v1beta1/query.rpc.Query";
import * as _309 from "./kavadist/v1beta1/query.rpc.Query";
import * as _310 from "./liquid/v1beta1/query.rpc.Query";
import * as _311 from "./pricefeed/v1beta1/query.rpc.Query";
import * as _312 from "./savings/v1beta1/query.rpc.Query";
import * as _313 from "./swap/v1beta1/query.rpc.Query";
import * as _314 from "./auction/v1beta1/tx.rpc.msg";
import * as _315 from "./bep3/v1beta1/tx.rpc.msg";
import * as _316 from "./cdp/v1beta1/tx.rpc.msg";
import * as _317 from "./committee/v1beta1/tx.rpc.msg";
import * as _318 from "./community/v1beta1/tx.rpc.msg";
import * as _319 from "./earn/v1beta1/tx.rpc.msg";
import * as _320 from "./evmutil/v1beta1/tx.rpc.msg";
import * as _321 from "./hard/v1beta1/tx.rpc.msg";
import * as _322 from "./incentive/v1beta1/tx.rpc.msg";
import * as _323 from "./issuance/v1beta1/tx.rpc.msg";
import * as _324 from "./liquid/v1beta1/tx.rpc.msg";
import * as _325 from "./pricefeed/v1beta1/tx.rpc.msg";
import * as _326 from "./router/v1beta1/tx.rpc.msg";
import * as _327 from "./savings/v1beta1/tx.rpc.msg";
import * as _328 from "./swap/v1beta1/tx.rpc.msg";
import * as _332 from "./lcd";
import * as _333 from "./rpc.query";
import * as _334 from "./rpc.tx";
export namespace kava {
  export namespace auction {
    export const v1beta1 = {
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._254,
      ..._269,
      ..._284,
      ..._299,
      ..._314
    };
  }
  export namespace bep3 {
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._255,
      ..._270,
      ..._285,
      ..._300,
      ..._315
    };
  }
  export namespace cdp {
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._256,
      ..._271,
      ..._286,
      ..._301,
      ..._316
    };
  }
  export namespace committee {
    export const v1beta1 = {
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._257,
      ..._272,
      ..._287,
      ..._302,
      ..._317
    };
  }
  export namespace community {
    export const v1beta1 = {
      ..._131,
      ..._132,
      ..._133,
      ..._258,
      ..._273,
      ..._288,
      ..._303,
      ..._318
    };
  }
  export namespace earn {
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._259,
      ..._274,
      ..._289,
      ..._304,
      ..._319
    };
  }
  export namespace evmutil {
    export const v1beta1 = {
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._260,
      ..._275,
      ..._290,
      ..._305,
      ..._320
    };
  }
  export namespace hard {
    export const v1beta1 = {
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._261,
      ..._276,
      ..._291,
      ..._306,
      ..._321
    };
  }
  export namespace incentive {
    export const v1beta1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._262,
      ..._277,
      ..._292,
      ..._307,
      ..._322
    };
  }
  export namespace issuance {
    export const v1beta1 = {
      ..._155,
      ..._156,
      ..._157,
      ..._263,
      ..._278,
      ..._293,
      ..._308,
      ..._323
    };
  }
  export namespace kavadist {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._294,
      ..._309
    };
  }
  export namespace liquid {
    export const v1beta1 = {
      ..._162,
      ..._163,
      ..._264,
      ..._279,
      ..._295,
      ..._310,
      ..._324
    };
  }
  export namespace pricefeed {
    export const v1beta1 = {
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._265,
      ..._280,
      ..._296,
      ..._311,
      ..._325
    };
  }
  export namespace router {
    export const v1beta1 = {
      ..._168,
      ..._266,
      ..._281,
      ..._326
    };
  }
  export namespace savings {
    export const v1beta1 = {
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._267,
      ..._282,
      ..._297,
      ..._312,
      ..._327
    };
  }
  export namespace swap {
    export const v1beta1 = {
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._268,
      ..._283,
      ..._298,
      ..._313,
      ..._328
    };
  }
  export const ClientFactory = {
    ..._332,
    ..._333,
    ..._334
  };
}