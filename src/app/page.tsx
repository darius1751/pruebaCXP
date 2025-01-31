// import Image from "next/image";

import { Card } from "@/components/Cards/Card";
import { Cards } from "@/components/Cards/Cards";
import { Carrousel } from "@/components/carrousel/Carrousel";
import { Hero } from "@/components/Hero";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { cards } from "@/constants/cards";
import { cards2 } from "@/constants/cards2";
import { getCoins } from "@/services/getCoins";

export default async function Home() {
  const coins = await getCoins();
  return (
    <div className="">
      <Hero />
      <Carrousel items={coins} />
      {/* <Cards /> */}
      <div className="container m-auto mt-3">
        <Section1 />
        <Cards items={cards} />
        ...
        <Cards items={cards2}/>
        <Section2/>
      </div>

    </div>
  );
}
