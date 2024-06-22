# CoinGecko Adapter

## Endpoint 1 - Tickers
The /tickers endpoint provides 24-hour pricing and volume information on each market pair available on an exchange.
* URL: https://metrics.icpex.org/cgk/tickers
* Example Response:
```json
[
  {
    "ticker_id": "ryjl3-tyaaa-aaaaa-aaaba-cai_cnoir-kyaaa-aaaam-acijq-cai",
    "base_currency": "ryjl3-tyaaa-aaaaa-aaaba-cai",
    "target_currency": "cnoir-kyaaa-aaaam-acijq-cai",
    "pool_id": "qmyxj-xaaaa-aaaam-aclja-cai",
    "last_price": 0.0000124637,
    "base_volume": 3.91604610307524,
    "target_volume": 314196.297304045,
    "liquidity_in_usd": 987.66355100205,
    "bid": 80231.2838252394,
    "ask": 83506.0301038206,
    "high": 81868.65696453,
    "low": 73851.44935807
  }
]
```

## Endpoint 2 - Trade
The /historical/trade is used to return data on historical completed trades for a given market pair.
* URL:https://metrics.icpex.org/cgk/historical/trade
* Example Request: https://metrics.icpex.org/cgk/historical/trade?ticker_id={ticker_id}&type={type}&limit={limit}&start_time={start_time}&end_time={end_time}

| Name       | Data Type | Category    | Description             |
|------------|-----------|-------------|-------------------------|
| ticker_id  | String    | Mandatory   | A pair such as "BTC_ETH", with delimiter between different cryptoassets |
| type       | String    | Recommended | To indicate nature of trade - buy/sell    |
| limit      | Integer   | Recommended  | Number of historical trades to retrieve from time of query. [ 200, 500...]. default 200  |
| start_time | String    | Recommended  | Start time from which to query historical trades from |
| end_time   | String    | Recommended  | End time for historical trades query |
* Example Response: 

```json
{
  "buy": [
    {
      "trade_id": "15535",
      "price": 119818.34795851,
      "base_volume": 0.19127602,
      "target_volume": 22994.62206167,
      "trade_timestamp": "1718772100557",
      "type": "buy"
    }
  ]
}
```
