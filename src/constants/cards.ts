import { Card } from "@/interfaces/Card";
import image01 from "../../public/cards/card-1.png";
import image02 from "../../public/cards/card-2.png";
import image03 from "../../public/cards/card-3.png";
import image04 from "../../public/cards/card-4.png";
import categoryIcon from "../../public/cards/categories/category.svg";
export const cards: Card[] = [
  {
    title: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    categories: [
      { icon: categoryIcon, category: "Super trade" },
      { icon: categoryIcon, category: "Super trade" },
    ],
    image: image01,
    url: "/",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    categories: [
      { icon: categoryIcon, category: "Super trade" },
      { icon: categoryIcon, category: "Super trade" },
      // { icon: categoryIcon, category: "Super trade" },
    ],
    image: image02,
    url: "/",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    categories: [
      { icon: categoryIcon, category: "Super trade" },
      { icon: categoryIcon, category: "Super trade" },
    ],
    image: image03,
    url: "/",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    categories: [
      { icon: categoryIcon, category: "Super trade" },
      { icon: categoryIcon, category: "Super trade" },
    ],
    image: image04,
    url: "/",
  },
];
