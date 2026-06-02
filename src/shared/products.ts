import type { Product } from "@/shared/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Ceramic Pour-Over Set",
    image_url: "https://picsum.photos/seed/pour-over/800/600",
    price_range: "$48 - $62",
  },
  {
    id: 2,
    name: "Hand-Thrown Mug",
    image_url: "https://picsum.photos/seed/mug/800/600",
    price_range: "$24 - $32",
  },
  {
    id: 3,
    name: "Linen Table Runner",
    image_url: "https://picsum.photos/seed/linen/800/600",
    price_range: "$36 - $45",
  },
  {
    id: 4,
    name: "Brass Candle Holder",
    image_url: "https://picsum.photos/seed/candle/800/600",
    price_range: "$18 - $28",
  },
  {
    id: 5,
    name: "Walnut Serving Board",
    image_url: "https://picsum.photos/seed/board/800/600",
    price_range: "$72 - $95",
  },
  {
    id: 6,
    name: "Stoneware Dinner Plate",
    image_url: "https://picsum.photos/seed/plate/800/600",
    price_range: "$32 - $40",
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}
