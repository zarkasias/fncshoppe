export type Product = {
  id: number;
  name: string;
  image_url: string;
  price_range?: string;
};

export enum SelectedPage {
  Home = "home",
}
