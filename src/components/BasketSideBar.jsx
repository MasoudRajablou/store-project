import { TbChecklist } from "react-icons/tb";
import styles from "./modules/BasketSideBar.module.css";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

function BasketSideBar({ total, itemCounter, checkout, dispatch }) {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>
          Total: <span>$ {total}</span>
        </p>
      </div>
      <div>
        <FaHashtag />
        <p>
          Quantity: <span>{itemCounter}</span>
        </p>
      </div>
      <div>
        <BsPatchCheck />
        <p>
          status: <span>{!checkout && "Pending..."}</span>
        </p>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "CHECKOUT" });
        }}
      >
        Checkout
      </button>
    </div>
  );
}

export default BasketSideBar;
