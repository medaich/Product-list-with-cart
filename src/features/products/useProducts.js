import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products";

export function useProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products, isLoading };
}
