export type Product = {
  id: number;
  title: string,
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export type Products = {
  [tag: string]: {
    map(arg0: (item: Product) => JSX.Element): import("react").ReactNode;
    id: number;
    title: string,
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    }
  }
}

