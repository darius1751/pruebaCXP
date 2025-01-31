import { Card } from "@/interfaces/Card";
import image01 from "../../public/cards/card-5.png";
import image02 from "../../public/cards/card-6.png";
import image03 from "../../public/cards/card-7.png";
import image04 from "../../public/cards/card-8.png";
import categoryIcon from "../../public/cards/categories/category.svg";
export const cards2: Card[] = [
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
