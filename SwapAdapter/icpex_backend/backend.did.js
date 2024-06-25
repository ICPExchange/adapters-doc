export const idlFactory = ({ IDL }) => {
  const TokenInfo = IDL.Record({
    'decimals' : IDL.Nat,
    'flat_fee' : IDL.Bool,
    'owner' : IDL.Principal,
    'logo' : IDL.Text,
    'name' : IDL.Text,
    'mint_on' : IDL.Bool,
    'platform_token_type' : IDL.Text,
    'burn_rate' : IDL.Nat,
    'fee_rate' : IDL.Nat,
    'address' : IDL.Principal,
    'flat_burn_fee' : IDL.Bool,
    'token_type' : IDL.Text,
    'total_supply' : IDL.Nat,
    'symbol' : IDL.Text,
  });
  
  return IDL.Service({
    'getTokenInfo' : IDL.Func([], [IDL.Vec(TokenInfo)], ['query']),
  });
};
