import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type Result_2 = { 'Ok' : null } |
  { 'Err' : string };
export type Result_3 = {
    'Ok' : [bigint, Array<Principal>, number, bigint, bigint]
  } |
  { 'Err' : string };
export type Result_4 = { 'Ok' : bigint } |
  { 'Err' : string };

export interface PoolInfo {
  'i' : bigint,
  'k' : bigint,
  'base_reserve' : bigint,
  'owner' : Principal,
  'block_timestamp_last' : bigint,
  'pool_addr' : Principal,
  'lp_amount' : bigint,
  'pool_type' : string,
  'lp_lock' : bigint,
  'quote_user' : bigint,
  'lp_fee_rate' : bigint,
  'base_token_decimals' : number,
  'quote_token_decimals' : number,
  'base_user' : bigint,
  'quote_token' : Principal,
  'base_price_cumulative_last' : bigint,
  'quote_reserve' : bigint,
  'base_token' : Principal,
  'pool_status' : PoolStatus,
  'mt_fee_rate' : bigint,
  'is_single_pool' : boolean,
  'total_supply' : bigint,
  'is_my_pool' : boolean,
}

export type PoolStatus = { 'CREATE_BASE_INPUT' : null } |
  { 'CREATE_QUOTE_INPUT' : null } |
  { 'OFFLINE' : null } |
  { 'ROLLBACK_UNDONE' : null } |
  { 'CREATED' : null } |
  { 'ROLLBACK_DONE' : null } |
  { 'ONLINE' : null };

export interface _SERVICE {
  'swapTokenToToken' : ActorMethod<
    [Principal, Principal, bigint, bigint, Array<Principal>, bigint, bigint],
    Result_4
  >,
  'quote' : ActorMethod<[Principal, Principal, bigint, bigint], Result_3>,
  'withdrawSubAccountToken' : ActorMethod<[Principal, bigint], Result_2>,
  'getPoolsInfo' : ActorMethod<[Principal], Array<PoolInfo>>,
}
