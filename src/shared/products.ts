import type { Product } from "@/shared/types";

export const products: Product[] = [
  {
    id: 1,
    name: "My Journal",
    image_url: "/products/journals/my_journal/cover-new.png",
    price_range: "$10.50",
    type: "journal",
    available: true,
    link: "https://www.amazon.com/My-Journal-N-Chambers/dp/B0BSJC3K6N?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.i8APTXifyVifJ_cxdsiaPG2w4D9ZIVo83pgQwRajGqzGjHj071QN20LucGBJIEps.AsQYRvKhbOv0Wgc3n69gc0cLQkRIhzakJWEWo6c2goo&dib_tag=AUTHOR",
    interiorImages: [
      { src: "/products/journals/my_journal/page1.jpeg", alt: "My Journal — inside page 1" },
      { src: "/products/journals/my_journal/page2.jpeg", alt: "My Journal — inside page 2" },
      { src: "/products/journals/my_journal/page3.jpeg", alt: "My Journal — inside page 3" },
    ],
  },
  {
    id: 2,
    name: "Floral Journal",
    image_url: "/products/journals/floral_journal/cover-new.png",
    price_range: "$11.00",
    type: "journal",
    available: true,
    link: "https://www.amazon.com/Floral-Journal-N-Chambers/dp/B0CFZ9ZQTH?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.i8APTXifyVifJ_cxdsiaPG2w4D9ZIVo83pgQwRajGqzGjHj071QN20LucGBJIEps.AsQYRvKhbOv0Wgc3n69gc0cLQkRIhzakJWEWo6c2goo&dib_tag=AUTHOR",
    interiorImages: [
      { src: "/products/journals/floral_journal/page1.jpeg", alt: "Floral Journal — inside page 1" },
      { src: "/products/journals/floral_journal/page2.jpeg", alt: "Floral Journal — inside page 2" },
      { src: "/products/journals/floral_journal/page3.jpeg", alt: "Floral Journal — inside page 3" },
    ],
  },
 
  {
    id: 3,
    name: "Woods Journal",
    image_url: "/products/journals/my_journal_woods/cover-new.png",
    price_range: "$10.75",
    type: "journal",
    available: true,
    link: "https://www.amazon.com/My-Journal-Woods-Version-Chambers/dp/B0BSJPYTJB?ref_=ast_author_dp_rw&dib=eyJ2IjoiMSJ9.i8APTXifyVifJ_cxdsiaPG2w4D9ZIVo83pgQwRajGqzGjHj071QN20LucGBJIEps.AsQYRvKhbOv0Wgc3n69gc0cLQkRIhzakJWEWo6c2goo&dib_tag=AUTHOR",
    interiorImages: [
      { src: "/products/journals/my_journal_woods/page1.jpeg", alt: "Woods Journal — inside page 1" },
      { src: "/products/journals/my_journal_woods/page2.jpeg", alt: "Woods Journal — inside page 2" },
      { src: "/products/journals/my_journal_woods/page3.jpeg", alt: "Woods Journal — inside page 3" },
    ],
  },
  {
    id: 4,
    name: "Floral Journal 2",
    image_url: "/products/journals/floral_journal_2/cover-new.png",
    price_range: "",
    type: "journal",
    available: false,
    interiorImages: [
      { src: "/products/journals/floral_journal_2/page1.jpeg", alt: "Floral Journal 2 — inside page 1" },
      { src: "/products/journals/floral_journal_2/page2.jpeg", alt: "Floral Journal 2 — inside page 2" },
      { src: "/products/journals/floral_journal_2/page3.jpeg", alt: "Floral Journal 2 — inside page 3" },
    ],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}
