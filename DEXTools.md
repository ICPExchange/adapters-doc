# DEXTools Adapter
Refer to [DEXTools Adapter Specs](https://github.com/dextools-io/api-contracts/tree/main/http-adapter)

## Endpoint 1 - Latest Block
* Request: GET `/dextools/latest-block`
* URL: https://2jbbf-vqaaa-aaaam-ab5fa-cai.raw.icp0.io/dextools/latest-block
* Example Response:
```json
{
  "block": {
    "blockNumber": 16016,
    "blockTimestamp": 1721352834
  }
}
```
## Endpoint 2 - Asset
* Request: GET /dextools/asset?id=:string
* URL: https://2jbbf-vqaaa-aaaam-ab5fa-cai.raw.icp0.io/dextools/asset?id={tokenCanisterId}
* Example Request: https://2jbbf-vqaaa-aaaam-ab5fa-cai.raw.icp0.io/dextools/asset?id=ryjl3-tyaaa-aaaaa-aaaba-cai
* Example Response: 
```json
{
  "asset": {
    "id": "ryjl3-tyaaa-aaaaa-aaaba-cai",
    "name": "Internet Computer",
    "symbol": "ICP",
    "totalSupply": 519998613.815176,
    "circulatingSupply": 519998453.181276,
    "coinGeckoId": null,
    "coinMarketCapId": null,
    "metadata": null
  }
}
```

## Endpoint 3 - Pair
* Request: GET /dextools/pair?id=:string
* URL: https://2jbbf-vqaaa-aaaam-ab5fa-cai.raw.icp0.io/dextools/pair?id={poolCanisterId}
* Example Request: https://2jbbf-vqaaa-aaaam-ab5fa-cai.raw.icp0.io/dextools/pair?id=ivvqh-baaaa-aaaam-acf4a-cai
* Example Response:
```json
{
  "pair": {
    "id": "ivvqh-baaaa-aaaam-acf4a-cai",
    "dexKey": "icpexchange",
    "asset0Id": "ryjl3-tyaaa-aaaaa-aaaba-cai",
    "asset1Id": "o64gq-3qaaa-aaaam-acfla-cai",
    "createdAtBlockNumber": null,
    "createdAtBlockTimestamp": null,
    "createdAtTxnId": null,
    "feeBps": 10,
    "pool": null,
    "metadata": null,
    "factoryAddress":"2ackz-dyaaa-aaaam-ab5eq-cai"
  }
}
```

## Endpoint 4 - Events
* Request: GET /dextools/events?fromBlock=:number&toBlock=:number
* URL: https://2jbbf-vqaaa-aaaam-ab5fa-cai.raw.icp0.io/dextools/events?fromBlock={fromBlockId}&toBlock={toBlockId}
* Example Request: https://2jbbf-vqaaa-aaaam-ab5fa-cai.raw.icp0.io/dextools/events?fromBlock=8382&toBlock=8383
* Example Response:
  ```json
  {
    "events": [
      {
        "block": {
          "blockNumber": 8382,
          "blockTimestamp": 1721352834
        },
        "eventType": "swap",
        "txnId": "8753553651592981317",
        "txnIndex": "1",
        "eventIndex": "2",
        "maker": "6ezna-tzact-ox6ll-bpwwm-nxhsw-s7ugh-gjeer-ajzyn-civw5-5hnod-tae",
        "pairId": "3ok7g-3iaaa-aaaam-ackuq-cai",
        "asset0In": null,
        "asset1In": 8.77026836,
        "asset0Out": 0.99148004,
        "asset1Out": null,
        "amount0": null,
        "amount1": null,
        "priceNative": 8.79346477,
        "reserves": {
          "asset0": 550.69641245,
          "asset1": 4860.02739881
        },
        "metadata": null
      }
    ]
  }
  ```


## Endpoint 5 - Block
* Request: GET /dextools/block?number=:number
* URL: https://2jbbf-vqaaa-aaaam-ab5fa-cai.raw.icp0.io/dextools/block?number={block_number}
* Example Request: https://2jbbf-vqaaa-aaaam-ab5fa-cai.raw.icp0.io/dextools/block?number=10000
* Example Response:
```json
{
    "block": {
        "blockNumber": 7127,
        "blockTimestamp": 1721352834
    }
}
```
