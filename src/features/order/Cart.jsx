import CartItem from "./CartItem";

function Cart({ cart, confirmed = false }) {
  return (
    <ul className="divide-y border-b">
      {cart.map((item) => (
        <CartItem item={item} key={item.product.id} confirmed={confirmed} />
      ))}
    </ul>
  );
}

export default Cart;
