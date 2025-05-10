type bestSellerProductType = {
  id: number;
  image: string;
  title: string;
  price: number;
  afterDiscountPrice?: number;
  tag?: string;
  tagColor?: string;
};

export const bestSellerProductData: bestSellerProductType[] = [
  {
    id: 1,
    image: "/assests/images/coffee-product.webp",
    title: "Medium Roast Coffee",
    price: 3500,
    tag: "Best Seller",
    tagColor: "bg-yellow-500",
  },
  {
    id: 2,
    image: "/assests/images/arabic_coffee.webp",
    title: "Arabica Coffee",
    price: 3500,
    afterDiscountPrice: 3150,
    tag: "10% Discount",
    tagColor: "bg-red-500 text-white",
  },
  {
    id: 3,
    image: "/assests/images/robusta_coffee.webp",
    title: "Robusta Coffee",
    price: 5500,
  },
  {
    id: 4,
    image: "/assests/images/liberica_coffee.webp",
    title: "Liberica Coffee",
    price: 4000,
    tag: "Best Seller",
    tagColor: "bg-yellow-500",
  },
];
