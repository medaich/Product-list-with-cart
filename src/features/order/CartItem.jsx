import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/helpers";

const className = {
  base: {
    price: "font-medium text-rose-500",
  },
  confirmed: {
    price: " font-semibold text-lg",
  },
};

function CartItem({ item, confirmed = false }) {
  const { removeItem } = useCart();

  function handleRemove() {
    removeItem(item.product.id);
  }

  return (
    <li className="flex w-full items-center justify-between py-4 text-sm">
      {confirmed && (
        <img
          className="mr-4 w-16 rounded-lg"
          src={item.product.image.thumbnail}
          alt={`${item.name} thumbnail`}
        />
      )}
      <div className="space-y-2">
        <p className="w-40 truncate font-semibold">{item.product.name}</p>
        <p className="space-x-4">
          <span className="font-medium text-custom-red">{item.occurence}x</span>
          <span className="text-sm text-rose-500">
            @ {formatCurrency(item.product.price)}
          </span>
          {!confirmed && (
            <span className={className.base}>
              {formatCurrency(item.totalPrice)}
            </span>
          )}
        </p>
      </div>

      {confirmed && (
        <span className={className.confirmed.price}>
          {formatCurrency(item.totalPrice)}
        </span>
      )}

      {!confirmed && (
        <button onClick={handleRemove}>
          <svg
            className="h-4 w-4 rounded-full fill-current stroke-current p-0.5 text-rose-300 ring-2 ring-rose-300 hover:text-custom-red hover:text-inherit hover:ring-rose-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
          >
            <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
          </svg>
        </button>
      )}
    </li>
  );
}

export default CartItem;
