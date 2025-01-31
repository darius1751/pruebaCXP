import { Coin } from "@/interfaces/Coin";
import binance from "../../public/coins/binance.svg";
import bitcoin from "../../public/coins/bitcoin.svg";
import dogecoin from "../../public/coins/dogecoin.svg";
import ethereum from "../../public/coins/ethereum.svg";
import solana from "../../public/coins/solana.svg";

export const coins: Coin[] = [
  {
    icon: binance,
    changePercent: 0.6,
    name: "BNB",
    changePrice: 20.52,
  },
  {
    icon: solana,
    changePercent: 0.6,
    name: "SOL",
    changePrice: 20.52,
  },
  {
    icon: ethereum,
    changePercent: 0.6,
    name: "ETH",
    changePrice: 25.52,
  },
  {
    icon: dogecoin,
    changePercent: -0.6,
    name: "DGE",
    changePrice: 55.2,
  },
  {
    icon: bitcoin,
    changePercent: 0.6,
    name: "BTC",
    changePrice: 55.23,
  },
];
