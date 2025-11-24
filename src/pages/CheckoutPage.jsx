import { useCart } from "../context/CartProvider";
import BasketSideBar from "../components/BasketSideBar";
import BasketCard from "../components/BasketCard";

import styles from "./modules/CheckoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const { selectedItems, total, itemCounter, checkout } = state;

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  if (!itemCounter) {
    return (
      <div className={styles.container}>
        <h1>The basket is empty.</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSideBar
        total={total}
        itemCounter={itemCounter}
        checkout={checkout}
        dispatch={dispatch}
      />
      <div className={styles.products}>
        <ul>
          {selectedItems.map(item => (
            <BasketCard key={item.id} item={item} clickHandler={clickHandler} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CheckoutPage;
