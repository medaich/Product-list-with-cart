import Cart from "./Cart";
import { useCart } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import OrderDetails from "./OrderDetails";

function CartLayout() {
  const { cart, isEmpty, totalPrice, totalQuantity } = useCart();

  return (
    <div className="mt-4 overflow-y-scroll rounded-lg bg-rose-50 p-5 max-xl:max-h-[80vh] md:right-8 md:max-xl:fixed md:max-lg:min-w-[40%] lg:max-xl:min-w-[30%] xl:h-fit">
      <h2 className="text-lg font-bold text-custom-red">
        Your Cart ({totalQuantity})
      </h2>
      {isEmpty ? <EmptyCart /> : <Cart cart={cart} />}

      {!isEmpty && <OrderDetails totalPrice={totalPrice} />}
    </div>
  );
}

export default CartLayout;
