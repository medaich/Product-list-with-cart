import { useCart } from "../../context/CartContext";
import ProductDetails from "./ProductDetails";

function Product({ product }) {
  const { getItemOccurence, addItem, decrease, increase } = useCart();
  const occurence = getItemOccurence(product.id);

  function handleAddItem() {
    addItem(product);
  }

  function handleDecrease() {
    decrease(product.id);
  }

  function handleIncrease() {
    increase(product.id);
  }

  const className = {
    base: {
      img: "rounded-lg",
    },
    focus: {
      img: " ring-2 ring-custom-red",
    },
  };

  return (
    <li>
      <section>
        <div className="relative mb-10">
          <picture>
            <source media="(min-width:1024px)" srcSet={product.image.desktop} />

            <source media="(min-width:768px)" srcSet={product.image.tablet} />

            <img
              className={
                className.base.img + (occurence ? className.focus.img : "")
              }
              src={product.image.mobile}
              alt={product.name}
            />
          </picture>

          <div className="absolute -bottom-5 left-1/2 w-40 -translate-x-1/2 transform rounded-full font-medium ring-0 *:flex *:gap-2 *:rounded-full *:px-5 *:py-2 *:ring-2 *:ring-rose-300 *:hover:ring-custom-red *:focus:ring-custom-red">
            {!occurence && (
              <button
                className="w-full bg-rose-50 hover:text-custom-red"
                onClick={handleAddItem}
              >
                <img src="assets/images/icon-add-to-cart.svg" alt="cart icon" />
                Add to Cart
              </button>
            )}
            {occurence >= 1 && (
              <div className="w-full items-center justify-between bg-custom-red text-rose-50">
                <button onClick={handleDecrease}>
                  <svg
                    className="h-4 w-4 rounded-full fill-current stroke-current p-1 ring-2 ring-rose-50 hover:bg-rose-50 hover:text-custom-red hover:ring-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 2"
                  >
                    <path d="M0 .375h10v1.25H0V.375Z" />
                  </svg>
                </button>

                {occurence}

                <button onClick={handleIncrease}>
                  <svg
                    className="h-4 w-4 rounded-full fill-current stroke-current p-1 ring-2 ring-rose-50 hover:bg-rose-50 hover:text-custom-red hover:ring-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                  >
                    <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        <ProductDetails product={product} />
      </section>
    </li>
  );
}

export default Product;
