import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface TokenInfo {
  'decimals' : bigint,
  'flat_fee' : boolean,
  'owner' : Principal,
  'logo' : string,
  'name' : string,
  'mint_on' : boolean,
  'platform_token_type' : string,
  'burn_rate' : bigint,
  'fee_rate' : bigint,
  'address' : Principal,
  'flat_burn_fee' : boolean,
  'token_type' : string,
  'total_supply' : bigint,
  'symbol' : string,
}

export interface _SERVICE {
    'getTokenInfo' : ActorMethod<[], Array<TokenInfo>>
}
