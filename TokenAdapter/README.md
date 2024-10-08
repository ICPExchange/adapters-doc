# ICPEx Token Adapter
## 1. Create Token 
### Process Description
1. First, call the approve method of ICP ledger(PID:ryjl3-tyaaa-aaaaa-aaaba-cai). The spender parameter is set to ICPEx backend canister PID(PID:24gqi-uyaaa-aaaam-ab5gq-cai), the amount is the number of ICP tokens corresponding to 1 USD. To reduce the impact of price fluctuations on deductions, it is recommended to multiply the ICP amount by about 1.1
2. Then call the ICPEx Backend Canister(PID:24gqi-uyaaa-aaaam-ab5gq-cai) createToken method, The payment will be deducted after the token canister is created successfully.
### Endpoint - Create Token
* Canister PID: 24gqi-uyaaa-aaaam-ab5gq-cai
* Candid:
```candid
createToken: IDL.Func(
  [
    IDL.Text,
    IDL.Text,
    IDL.Text,
    IDL.Nat8,
    IDL.Nat,
    IDL.Nat,
    IDL.Bool,
    IDL.Nat,
    IDL.Bool,
    IDL.Bool,
    IDL.Text,
    IDL.Opt(IDL.Principal),
  ],
  [Result],
  [],
)
const Result = IDL.Variant({ Ok: IDL.Principal, Err: IDL.Text });
```
* Request parameters:

| Order | Name | 	Description                                                                                                                                                                                                          |
|-------|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     |   name   | 	Token full name                                                                                                                                                                                                      |
| 2     |   logo   | 	Token logo, base64 format                                                                                                                                                                                            |
| 3     |  symbol    | 	Token Symbol, 1-16 charactors                                                                                                                                                                                        |
| 4     |  decimals    | 	Token decimals, numbers between 1-18                                                                                                                                                                                 |
| 5     |   total_supply   | 	total supply                                                                                                                                                                                                         |
| 6     |   fee   | Transfer fee: this fee will be deposited into the fee controller. If it's a fixed value (flat_fee = true), the fee is an integer with precision; if it's a rate, it is an integer with 18 decimal places of precision. |
| 7     |  mint_on    | 	true: mintable; false: non mintable                                                                                                                                                                                  |
| 8     |  burn_rate    | 	Burn fee: this fee will be put into the black hole address. If it's a fixed value (flat_burn_fee = true), the fee is an integer with precision; if it's a rate, it is an integer with 18 decimal places of precision. |
| 9     |   flat_fee   | If true, the transfer fee is a fixed fee; if false, the transfer fee will vary according to the rate user sets.                                                                                                       |
| 10    |   flat_burn_fee   | If true, the burn fee is a fixed fee; if false, the burn fee will vary according to the rate user sets.                                                                                                               |
| 11    |  token_type    | 	Token standards: ICRC-2                                                                                                                                                                                              |
| 12    |  fee_account_pid    | 	Optional. If this field is not filled, the default transfer fee will be given to the creator.                                                                                                                        |


* Response parameters: 
When Ok is returned, the token canister PID is also returned.


## 2. Relinquish Ownership
### Process Description
ICPEx provides two ways to relinquish ownership:
  1. Transferring ownership to the black hole address (aaaaa-aa)
  2. Transferring ownership to Sneed DAO (fp274-iaaaa-aaaaq-aacha-cai)
The caller can evaluate the token's development path and characteristics to choose the method for renouncing ownership.

### Endpoint - Relinquish Ownership
* Canister PID: 24gqi-uyaaa-aaaam-ab5gq-cai
* Candid:
```candid
  removeTokensControllers : (principal, opt principal) -> ();
```

* Request parameters:

| Order | Name | 	Description                                                                                                                                                                                                          |
|-------|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     |   Token PID   | 	Token full name                                                                                                                                                                                                      |
| 2     |   Target controller PID   | 	If transferring to the black hole address, leave it None. If transferring to Sneed DAO, enter the PID of Sneed DAO(fp274-iaaaa-aaaaq-aacha-cai).                                                   |

