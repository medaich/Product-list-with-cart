import { useContext, useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/addItem":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            // receive a product item
            product: action.payload,
            occurence: 1,
            totalPrice: action.payload.price,
          },
        ],
      };

    case "cart/increase":
      return {
        ...state,
        // payload would be an id
        cart: state.cart.map((item) => {
          if (item.product.id === action.payload)
            return {
              product: item.product,
              totalPrice: item.product.price * (item.occurence + 1),
              occurence: item.occurence + 1,
            };
          else return item;
        }),
      };

    case "cart/decrease":
      // payload would be an id
      const curItem = state.cart.find(
        (item) => item.product.id === action.payload,
      );

      if (curItem.occurence === 1)
        return {
          ...state,

          cart: state.cart.filter(
            (item) => item.product.id !== curItem.product.id,
          ),
        };

      return {
        ...state,

        cart: state.cart.map((item) => {
          if (item.product.id === curItem.product.id)
            return {
              product: item.product,
              totalPrice: item.product.price * (item.occurence - 1),
              occurence: item.occurence - 1,
            };
          else return item;
        }),
      };

    case "cart/removeItem":
      return {
        ...state,
        // payload would be an id
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case "cart/reset":
      return {
        ...state,
        cart: [],
      };
    default:
      throw new Error("uknown action");
  }
}

// action creators

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cart } = state;

  // action creaters

  function addItem(productItem) {
    dispatch({ type: "cart/addItem", payload: productItem });
  }

  function increase(cartItemId) {
    dispatch({ type: "cart/increase", payload: cartItemId });
  }

  function decrease(cartItemId) {
    dispatch({ type: "cart/decrease", payload: cartItemId });
  }

  function removeItem(cartItemId) {
    dispatch({ type: "cart/removeItem", payload: cartItemId });
  }

  function reset() {
    dispatch({ type: "cart/reset" });
  }

  // other functions

  function getItemOccurence(cartItemId) {
    const item = cart.find((item) => item.product.id === cartItemId);

    if (!item) return 0;

    return item.occurence;
  }

  const isEmpty = cart.length === 0;

  const totalPrice = isEmpty
    ? 0
    : cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const totalQuantity = isEmpty
    ? 0
    : cart.reduce((acc, cur) => acc + cur.occurence, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        increase,
        decrease,
        removeItem,
        reset,
        getItemOccurence,
        isEmpty,
        totalPrice,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("Cannot use CartContext outside CartContextProvider");
  return context;
}

export default CartContextProvider;
