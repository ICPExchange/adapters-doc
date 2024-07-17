# ICPEx Liquidity Adapator
## 1. Add public pool liquidity
### 1.1 Description
1. First, get the canisterId of the Pool. 
2. Get the input amount required to add liquidity by calling the queryAddShareBase/queryAddShareQuote method on the router canister.
3. If the ICRC-1 standard is used, the amount of liquidity to be added needs to be transferred to the sub-account under the router(PID:2ackz-dyaaa-aaaam-ab5eq-cai). The sub-account is generated by the caller's PID.
4. Call the addLiquidity method on the router canister.
## 1.2 Endpoint - queryAddShareBase/queryAddShareQuote
* Canister PID: 2ackz-dyaaa-aaaam-ab5eq-cai
* Candid:
```candid
  //input base amount
  queryAddShareBase : (nat, principal) -> (nat, nat, nat, nat) query;
  //input quote amount
  queryAddShareQuote : (nat, principal) -> (nat, nat, nat, nat) query;
```

* Request parameters:

| Order | Name              | 	Description                                                                                                                                                                                                          |
|-------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | base/quote_amount | 	the input base/quote amount                                                                                                                                                                                                     |
| 2     | pool_id           | 	pool canister id                                                                                                                                                                                            |


* Response parameters:

| Order | Name         | 	Description                                         |
|-------|--------------|------------------------------------------------------|
  | 1     | base_input   | 	The amount of base token required to add liquidity  |
  | 2     | quote_input  | 		The amount of base token required to add liquidity |
| 3     | shares       | 		The amount of LP used for adding liquidity.        |
| 4     | total_shares | 		Total LP amount after adding liquidity             |



## 1.3 Endpoint - addLiquidity
* Canister PID: 2ackz-dyaaa-aaaam-ab5eq-cai
* Candid:
```candid
    addLiquidity : (principal, nat, nat, nat, nat64) -> (nat, nat, nat);
```

* Request parameters:

| Order | Name            | 	Description                                                                                                                    |
|-------|-----------------|---------------------------------------------------------------------------------------------------------------------------------|
| 1     | pool_addr       | 	The canisterId of the pool to which liquidity is to be added                                                                   |
| 2     | base_in_amount  | 	The amount of base token required to add liquidity                                                                             |
| 3     | quote_in_amount | 	The amount of quote token required to add liquidity                                                                            |
| 4     | slippage | 	Trading slippage, with 18-digit precision. If the slippage exceeds the limit when adding liquidity, the transaction will fail. |
| 5     | deadline | 	Add liquidity deadline. Unit: nanoseconds                                                                                      |

* Response parameters:

| Order | Name            | 	Description                                                  |
|-------|-----------------|---------------------------------------------------------------|
| 1     | shares| 	The canisterId of the pool to which liquidity is to be added |
| 2     | base_adjusted_in_amount  | 	The actual amount of base token required to add liquidity    |
| 3     | quote_adjusted_in_amount | 	The actual amount of quote token required to add liquidity   |
