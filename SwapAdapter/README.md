## Endpoint 1 - Token List
* Canister PID: 24gqi-uyaaa-aaaam-ab5gq-cai
* Candid:
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
| Name | Description                                                                                                                                                                                                   |
|------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  decimals | Token decimals                                                                                                                                                                                                |
|  flat_fee | If true, the transfer fee is a fixed fee; if false, the transfer fee will vary according to the rate user sets.                                                                                                                                                                                                 |
|  owner | Token creator                                                                                                                                                                                                 |
|  logo | Token's logo address                                                                                                                                                                                            |
|  name | Token name                                                                                                                                                                                                    |
|  mint_on | true: mintable; false: non mintable                                                                                                                                                                           |
|  platform_token_type | CERTIFICATION: token certified by the platform (offical); CREATETOKEN: token created on the platform; IMPORT: token imported by the user                                                                       |
|  burn_rate | Burn fee: this fee will be put into the black hole address. If it's a fixed value (flat_burn_fee = true), the fee is an integer with precision; if it's a rate, it is an integer with 18 decimal places of precision. |
|  fee_rate | Transfer fee: this fee will be deposited into the fee controller. If it's a fixed value (flat_fee = true), the fee is an integer with precision; if it's a rate, it is an integer with 18 decimal places of precision. |
|  address | Token canister principal id                                                                                                                                                                                   |
|  flat_burn_fee | If true, the burn fee is a fixed fee; if false, the burn fee will vary according to the rate user sets.                                                                                                      |
|  token_type | Token standards: DIP20, ICRC-1, ICRC-2                                                                                                                                                                         |
|  total_supply | Deprecated                                                                                                                                                                                                    |
|  symbol | Token symbol                                                                                                                                                                                                  |


## Endpoint 2 - Pool List
* Canister PID: 2ackz-dyaaa-aaaam-ab5eq-cai
* Candid:
```candid
// request with anonymous principal  
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
|-----|-----------------------------------------------------------------|
|  base_reserve |  The base token balance in the pool                                                               |
|  owner | Pool creator's PID                                               |
|  block_timestamp_last | Last trading time                                               |
|  pool_addr | Pool canister address                                           |
|  pool_type | LPC: public pool; LPS: anchored pool; LPP: private pool |
| lp_fee_rate | The fee rate delivered to liquidity holders.                    |
| base_token_decimals | base token decimals                                             |
| quote_token_decimals | quote token decimals                                            |
| quote_token | Quote token canister principal id                               |
| base_price_cumulative_last | mid price                                                       |
| quote_reserve | The quote token balance in the pool                             |
| base_token | Base token canister principal id                                |
| mt_fee_rate | Platform fee rate, 18 decimal places of precision.                 |
| is_single_pool | Is single pool or not                                                 |

## Endpoint 3 - Swap token to token
* Canister PID: 2ackz-dyaaa-aaaam-ab5eq-cai
* Candid:
```candid
//Note: A wallet account is required to call this method
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

* Request parameters:

| Order   | Name                             |
|---------|----------------------------------|
| 1       | From token canister PID          |
| 2       | To token canister PID            |
| 3       | From token input amount.         |
| 4       | To token minimum receive amount. |
| 5       | Pool canister PID                |
| 6       | Swap direction, 0 sell; 1 buy    |
| 7       | Swap deadline. Unit: nanoseconds       |

* Response parameters: When Ok is returned, the SwapHash(u64) is also returned. The SwapHash is used to call `querySwapStatus` to confirm whether the swap is executed successfully.


## Endpoint 4 - Query swap status.
* Canister PID: 2jbbf-vqaaa-aaaam-ab5fa-cai
* Candid:
```candid
querySwapStatus : (nat64) -> (vec SwapTxRecord) query;
type SwapTxRecord = record {
   to_token : opt principal;
   status : TransactionStatus;
   input_amount : opt float64;
   from_token : opt principal;
   directions : opt nat64;
   base_reserve : opt float64;
   lp_fee_volumn : opt float64;
   swap_hash_str : text;
   volumn : opt float64;
   receive_amount : opt float64;
   quote_token_decimals : opt nat;
   mt_fee_volumn : opt float64;
   base_min_return_amount : opt float64;
   timestamp : nat64;
   base_price_cumulative_last : opt float64;
   quote_reserve : opt float64;
   lp_fee_amount : opt float64;
   caller : opt principal;
   pairs : opt vec principal;
   price : opt float64;
   swap_hash : nat64;
   fail_msg : opt text;
   mt_fee_amount : opt float64;
};
type TransactionStatus = variant {
   Failed;
   Succeeded;
   BaseTrans;
   QuoteTrans;
   Rollback;
   Pending;
};
```
* Request parameter: SwapHash(u64)
* Response parameter: Only some of the required fields are listed

| Name                                    | 	Description                                         |
|-----------------------------------------|------------------------------------------------------|
| to_token | 	To token canister PID                               |
| status | 	Swap result status, refer to type TransactionStatus |
| input_amount | 	From token input amount                             |
| from_token | 	From token canister PID                             |
| directions | 	0: sell, 1: buy                                        |
| base_reserve | 	The balance of base token in the pool               |
| swap_hash_str | 	swap hash                                           |
| volumn | 	swap volumn                                         |
| receive_amount | 	The amount received by the swap trader              |
| quote_token_decimals | 	Quote token decimals                                |
| quote_reserve | 	The balance of quote token in the pool              |
| lp_fee_amount | 	LP fees charged by the liquidity provider           |
| caller | 	The swap trader                                     |
| pairs | 	The pool canister PID                               |
| price | 	The price (USD) of ToToken                           |
| swap_hash | 	Swap hash id                                        |
| fail_msg | 	Swap failure reasons                                |
| mt_fee_amount | 	MT fees charged by the platform                     |

## Endpoint 5 - Smart route.
* Canister PID: 2ackz-dyaaa-aaaam-ab5eq-cai
* Candid:
```candid
quote : (principal, principal, nat, nat64) -> (Result_3) query;
type Result_3 = variant {
   Ok : record { nat; vec principal; nat8; nat; nat };
   Err : text;
};
```
* Request parameters:

| Order | 	Description                           |
|-------|----------------------------------------|
  | 1| 	From token canister PID               |
  | 2| 	To token canister PID                 |
  | 3| 	From token: amount expected to be paid |
  | 4| 	Deadline. Unit: nanoseconds                  |

* Response parameters:

| Order | 	Description                                       |
|-------|----------------------------------------------------|
| 1	    | ToToken: the maximum amount expected to be received |
| 2	    | Recommended pool canister PID                      |
| 3	    | Swap direction. 0: sell, 1: buy                        |
| 4	    | Expected mt fee received                           |
| 5	    | Expected lp fee received                           |

## Endpoint 6 - Sub-wallet withdrawal
* Canister PID: 2ackz-dyaaa-aaaam-ab5eq-cai
* Candid:
```candid
  //Note: A wallet account is required to call this method
  withdrawSubAccountToken : (principal, nat) -> (Result_2);
  type Result_2 = variant { Ok; Err : text };
```
* Request parameters:

| Order | 	Description                 |
|-------|------------------------------|
| 1     | 	Withdraw token canister PID |
| 2     | 	Withdraw amount             |
