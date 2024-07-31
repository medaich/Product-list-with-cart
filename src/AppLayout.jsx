import CartLayout from "./features/order/CartLayout";
import Main from "./ui/Main";
import SpinnerPage from "./ui/SpinnerPage";
import { useProducts } from "./features/products/useProducts";
import Products from "./features/products/Products";

function AppLayout() {
  const { products, isLoading } = useProducts();

  if (isLoading) return <SpinnerPage />;

  return (
    <Main>
      <Products products={products} />
      <CartLayout />
    </Main>
  );
}

export default AppLayout;
