export const idlFactory = ({ IDL }) => {
  const TransactionStatus = IDL.Variant({
    'Failed' : IDL.Null,
    'Succeeded' : IDL.Null,
    'BaseTrans' : IDL.Null,
    'QuoteTrans' : IDL.Null,
    'Rollback' : IDL.Null,
    'Pending' : IDL.Null,
  });
  const PoolStatus = IDL.Variant({
    'CREATE_BASE_INPUT' : IDL.Null,
    'CREATE_QUOTE_INPUT' : IDL.Null,
    'OFFLINE' : IDL.Null,
    'ROLLBACK_UNDONE' : IDL.Null,
    'CREATED' : IDL.Null,
    'ROLLBACK_DONE' : IDL.Null,
    'ONLINE' : IDL.Null,
  });
  const PoolInfo = IDL.Record({
    'i' : IDL.Nat,
    'k' : IDL.Nat,
    'base_reserve' : IDL.Nat,
    'owner' : IDL.Principal,
    'block_timestamp_last' : IDL.Nat64,
    'pool_addr' : IDL.Principal,
    'lp_amount' : IDL.Nat,
    'pool_type' : IDL.Text,
    'lp_lock' : IDL.Nat,
    'quote_user' : IDL.Nat,
    'lp_fee_rate' : IDL.Nat,
    'base_token_decimals' : IDL.Nat8,
    'quote_token_decimals' : IDL.Nat8,
    'base_user' : IDL.Nat,
    'quote_token' : IDL.Principal,
    'base_price_cumulative_last' : IDL.Nat,
    'quote_reserve' : IDL.Nat,
    'base_token' : IDL.Principal,
    'pool_status' : PoolStatus,
    'mt_fee_rate' : IDL.Nat,
    'is_single_pool' : IDL.Bool,
    'total_supply' : IDL.Nat,
    'is_my_pool' : IDL.Bool,
  });
  
  const Result_2 = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  const Result_3 = IDL.Variant({
    'Ok' : IDL.Tuple(
      IDL.Nat,
      IDL.Vec(IDL.Principal),
      IDL.Nat8,
      IDL.Nat,
      IDL.Nat,
    ),
    'Err' : IDL.Text,
  });
  const Result_4 = IDL.Variant({ 'Ok' : IDL.Nat64, 'Err' : IDL.Text });
  return IDL.Service({
    'swapTokenToToken' : IDL.Func(
        [
          IDL.Principal,
          IDL.Principal,
          IDL.Nat,
          IDL.Nat,
          IDL.Vec(IDL.Principal),
          IDL.Nat64,
          IDL.Nat64,
        ],
        [Result_4],
        [],
      ),
    'withdrawSubAccountToken' : IDL.Func(
        [IDL.Principal, IDL.Nat],
        [Result_2],
        [],
      ),
    'getPoolsInfo' : IDL.Func([IDL.Principal], [IDL.Vec(PoolInfo)], ['query']),
    'quote' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat, IDL.Nat64],
        [Result_3],
        ['query'],
     ),
  });
};
export const init = ({ IDL }) => { return [IDL.Principal, IDL.Principal]; };
