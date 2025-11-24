import { createContext, useContext, useEffect, useReducer } from "react";
import { sumProducts } from "../helpers/helper";

export const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("state")) || {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find(item => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };

    case "REMOVE_ITEM": {
      const updateSelected = state.selectedItems.filter(
        item => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...updateSelected],
        ...sumProducts(updateSelected),
      };
    }

    case "INCREASE": {
      state.selectedItems.find(
        item => item.id === action.payload.id && item.quantity++
      );

      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    }

    case "DECREASE": {
      state.selectedItems.find(
        item => item.id === action.payload.id && item.quantity--
      );

      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    }

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };

    default:
      throw new Error("Invalid Action");
  }
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
