import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface SwapTxRecord {
  'to_token' : [] | [Principal],
  'status' : TransactionStatus,
  'input_amount' : [] | [number],
  'from_token' : [] | [Principal],
  'directions' : [] | [bigint],
  'lp_fee_volumn' : [] | [number],
  'swap_hash_str' : string,
  'volumn' : [] | [number],
  'receive_amount' : [] | [number],
  'quote_token_decimals' : [] | [bigint],
  'mt_fee_volumn' : [] | [number],
  'base_min_return_amount' : [] | [number],
  'timestamp' : bigint,
  'lp_fee_amount' : [] | [number],
  'caller' : [] | [Principal],
  'pairs' : [] | [Array<Principal>],
  'price' : [] | [number],
  'swap_hash' : bigint,
  'fail_msg' : [] | [string],
  'mt_fee_amount' : [] | [number],
}
export type TransactionStatus = { 'Failed' : null } |
  { 'Succeeded' : null } |
  { 'BaseTrans' : null } |
  { 'QuoteTrans' : null } |
  { 'Rollback' : null } |
  { 'Pending' : null };
export interface _SERVICE {
  'querySwapStatus' : ActorMethod<[bigint], Array<SwapTxRecord>>,
}
