import { coins } from "@/constants/coins";
import { Coin } from "@/interfaces/Coin";

export const getCoins = () => {
  return new Response(JSON.stringify(coins), {
    headers: { "Content-Type": "application/json" },
  }).json() as Promise<Coin[]>;
};
