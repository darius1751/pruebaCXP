import { StaticImageData } from "next/image";

export interface Card {
  image: string | StaticImageData;
  title: string;
  text: string;
  url: string;
  categories: CardCategory[];
}
interface CardCategory {
  icon: string;
  category: string;
}
