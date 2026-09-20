export const PRODUCT_SELECT = `
  *,
  category:categories(*),
  images:product_images(*),
  listings:product_listings(*),
  variants:product_variants(*)
`;
