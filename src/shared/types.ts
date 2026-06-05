export type InteriorImage = {
  src: string;
  alt?: string;
};

export type Product = {
  id: number;
  name: string;
  image_url: string;
  price_range?: string;
  type?: "journal" | "pottery" | "t-shirt" | "tote";
  description?: string;
  story?: string;
  link?: string;
  etsy_url?: string;
  available?: boolean;
  /** Interior / inside pages — add one entry per image path */
  interiorImages?: InteriorImage[];
};

export enum SelectedPage {
  Home = "home",
  Shop = "shoppe",
}
