import { Cards } from "@/components/Cards/Cards";
import { Carrousel } from "@/components/carrousel/Carrousel";
import { Hero } from "@/components/Hero";
import { Section1 } from "@/components/Sections/Section1";
import { Section2 } from "@/components/Sections/Section2";
import { cards } from "@/constants/cards";
import { cards2 } from "@/constants/cards2";
import { getCoins } from "@/services/getCoins";
import profit from '../../public/profit.svg';
import logoTrading from '../../public/Logo trading.svg';
import { Separator } from "@/components/Separator";
import { Footer } from "@/components/Footer/Footer";
import { Hero2 } from "@/components/Hero2";
import { Section3 } from "@/components/Sections/Section3/Section3";

export default async function Home() {
  const coins = await getCoins();
  return (
    <div>
      <Hero />
      <Carrousel items={coins} />
      <div className="container m-auto mt-3">
        <Section1 />

        <Separator icon={profit} >
          <h2>Aprender a <span className="text-[--primary]">operar cryptos</span> nunca había sido tan fácil </h2>
        </Separator>

        <Cards items={cards} />
        <Hero2 />
        <Separator icon={logoTrading} >
          <h2>
            <span className="text-[--primary]">Aprender y operar</span> con nuestros expertos
          </h2>
        </Separator>
        <Cards items={cards2} />
        <Section2 />
        <Section3 />
      </div>
      <Footer />
    </div>
  );
}
