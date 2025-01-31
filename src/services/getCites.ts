import { cites } from "@/constants/cites";
import { Cite } from "@/interfaces/Cite";

export const getCites = () => {
  return new Response(JSON.stringify(cites), {
    headers: { "Content-Type": "Application/json" },
  }).json() as Promise<Cite[]>;
};
