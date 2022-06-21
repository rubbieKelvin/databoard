import { DataBook } from "~/packages/types";

export default <DataBook>{
  name: "Bitcoin tickers",
  datasource: {
    get: async () => {
        const res = await fetch('https://api.blockchain.com/v3/exchange/tickers')
        return await res.json()
    },
  },
};
