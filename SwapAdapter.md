## Endpoint 1 - Token List
* canister id: 24gqi-uyaaa-aaaam-ab5gq-cai
* candid method:
```candid
getTokenInfo : () -> (vec TokenInfo) query;
type TokenInfo = record {
   decimals : nat;
   flat_fee : bool;
   owner : principal;
   logo : text;
   name : text;
   mint_on : bool;
   platform_token_type : text;
   burn_rate : nat;
   fee_rate : nat;
   address : principal;
   flat_burn_fee : bool;
   token_type : text;
   total_supply : nat;
   symbol : text;
};
```
| Name | Description                                                                                                                                                                                                                                                                                                 |
|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  decimals | Token decimals                                                                                                                                                                                                                                                                                              |
|  flat_fee | Fixed fee judgment for transfer fee, if true, it is a fixed fee, false, it is charged according to the rate .                                                                                                                                                                                               |
|  owner | Token creator                                                                                                                                                                                                                                                                                               |
|  logo | Token logo address                                                                                                                                                                                                                                                                                          |
|  name | Token name                                                                                                                                                                                                                                                                                                  |
|  mint_on | true: can mint ; false: cannot mint                                                                                                                                                                                                                                                                         |
|  platform_token_type | CERTIFICATION: token certified by the platform(offical); CREATETOKEN: token created by the platform; IMPORT: token imported by the user                                                                                                                                                                     |
|  burn_rate | Burn fee, the fee will be put into the black hole address; if it is a fixed value(flat_burn_fee = true), the fee is an integer with precision; if it is a rate, It is an integer with 4 digits of precision for ICRC standard token. It is an integer with 18 digits of precision for DIP20 standard token  |
|  fee_rate | Transfer fee, the fee will be deposited into the fee controller; if it is a fixed value(flat_fee = true), the fee is an integer with precision; if it is a rate, It is an integer with 4 digits of precision for ICRC standard token. It is an integer with 18 digits of precision for DIP20 standard token |
|  address | Token canister principal id                                                                                                                                                                                                                                                                                 |
|  flat_burn_fee | Fixed fee judgment for burn fee, if true, it is a fixed fee, false, it is charged according to the rate.                                                                                                                                                                                                    |
|  token_type | Token standards:DIP20, ICRC-1, ICRC-2                                                                                                                                                                                                                                                                       |
|  total_supply | Deprecated                                                                                                                                                                                                                                                                                                  |
|  symbol | Token symbol                                                                                                                                                                                                                                                                                                |


## Endpoint 2 - Pool List
* Canister id: 2ackz-dyaaa-aaaam-ab5eq-cai
```candid
// input anonymous principal parameter  
getPoolsInfo : (principal) -> (vec PoolInfo) query;
type PoolInfo = record {
   i : nat;
   k : nat;
   base_reserve : nat;
   owner : principal;
   block_timestamp_last : nat64;
   pool_addr : principal;
   lp_amount : nat;
   pool_type : text;
   lp_lock : nat;
   quote_user : nat;
   lp_fee_rate : nat;
   base_token_decimals : nat8;
   quote_token_decimals : nat8;
   base_user : nat;
   quote_token : principal;
   base_price_cumulative_last : nat;
   quote_reserve : nat;
   base_token : principal;
   pool_status : PoolStatus;
   mt_fee_rate : nat;
   is_single_pool : bool;
   total_supply : nat;
   is_my_pool : bool;
};
type PoolStatus = variant {
   CREATE_BASE_INPUT;
   CREATE_QUOTE_INPUT;
   OFFLINE;
   ROLLBACK_UNDONE;
   CREATED;
   ROLLBACK_DONE;
   ONLINE;
};
```
Only some of the required fields are listed

| Name | Description                                                     |
|-|-----------------------------------------------------------------|
|  base_reserve |                                                                 |
|  owner | Pool creator  PID                                               |
|  block_timestamp_last | Last trading time                                               |
|  pool_addr | Pool canister address                                           |
|  pool_type | Pool type: LPC:public pool, LPS:anchored pool, LPP:private pool |
| lp_fee_rate | The fee rate delivered to liquidity holders.                    |
| base_token_decimals | base token decimals                                             |
| quote_token_decimals | quote token decimals                                            |
| quote_token | Quote token canister principal id                               |
| base_price_cumulative_last | mid price                                                       |
| quote_reserve | The quote token balance in the pool                             |
| base_token | Base token canister principal id                                |
| mt_fee_rate | Platform fee rate ,18 decimal places precision.                 |
| is_single_pool | Is single pool.                                                 |

## Endpoint 3 - swapTokenToToken method
canister id: 2ackz-dyaaa-aaaam-ab5eq-cai
```candid
swapTokenToToken : (
   principal,
   principal,
   nat,
   nat,
   vec principal,
   nat64,
   nat64,
) -> (Result_4);
type Result_4 = variant { Ok : nat64; Err : text };
```

* Input parameters:

| Order | Name                             |
|-|----------------------------------|
| 1 | From token canister PID          |
| 2 | To token canister PID            |
| 3 | Trom token input amount.         |
| 4 | To token minimum receive amount. |
| 5 | Pool canister PID                |
| 6 | Swap direction, 0 sell; 1 buy    |
| 7 | Swap deadline, Nanoseconds       |

