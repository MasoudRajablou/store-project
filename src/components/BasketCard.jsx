import { MdDeleteOutline } from "react-icons/md";

import { shortenText } from "../helpers/helper";

import styles from "./modules/BasketCard.module.css";

function BasketCard({ item, clickHandler }) {
  const { image, title, price, quantity } = item;

  return (
    <li className={styles.card}>
      <img src={image} alt={title} />
      <h4>{shortenText(title)}</h4>
      <p>{price}</p>
      <div className={styles.action}>
        {quantity > 1 ? (
          <button onClick={() => clickHandler("DECREASE", item)}>-</button>
        ) : (
          <button onClick={() => clickHandler("REMOVE_ITEM", item)}>
            <MdDeleteOutline />
          </button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", item)}>+</button>
      </div>
    </li>
  );
}

export default BasketCard;
