export const idlFactory = ({ IDL }) => {
  const TransactionStatus = IDL.Variant({
    'Failed' : IDL.Null,
    'Succeeded' : IDL.Null,
    'BaseTrans' : IDL.Null,
    'QuoteTrans' : IDL.Null,
    'Rollback' : IDL.Null,
    'Pending' : IDL.Null,
  });
  const SwapTxRecord = IDL.Record({
    'to_token' : IDL.Opt(IDL.Principal),
    'status' : TransactionStatus,
    'input_amount' : IDL.Opt(IDL.Float64),
    'from_token' : IDL.Opt(IDL.Principal),
    'directions' : IDL.Opt(IDL.Nat64),
    'lp_fee_volumn' : IDL.Opt(IDL.Float64),
    'swap_hash_str' : IDL.Text,
    'volumn' : IDL.Opt(IDL.Float64),
    'receive_amount' : IDL.Opt(IDL.Float64),
    'quote_token_decimals' : IDL.Opt(IDL.Nat),
    'mt_fee_volumn' : IDL.Opt(IDL.Float64),
    'base_min_return_amount' : IDL.Opt(IDL.Float64),
    'timestamp' : IDL.Nat64,
    'lp_fee_amount' : IDL.Opt(IDL.Float64),
    'caller' : IDL.Opt(IDL.Principal),
    'pairs' : IDL.Opt(IDL.Vec(IDL.Principal)),
    'price' : IDL.Opt(IDL.Float64),
    'swap_hash' : IDL.Nat64,
    'fail_msg' : IDL.Opt(IDL.Text),
    'mt_fee_amount' : IDL.Opt(IDL.Float64),
  });

  return IDL.Service({
    'querySwapStatus' : IDL.Func(
        [IDL.Nat64],
        [IDL.Vec(SwapTxRecord)],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
