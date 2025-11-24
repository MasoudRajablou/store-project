import { Link } from "react-router";

import styles from "./Layout.module.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../context/CartProvider";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Masoud's Shop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemCounter && <span>{state.itemCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Masoud with 🩵</p>
      </footer>
    </>
  );
}

export default Layout;
