import { Link } from "react-router";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helpers/helper";

import styles from "./modules/Card.module.css";
import { useCart } from "../context/CartProvider";

function Card({ data }) {
  const [state, dispatch] = useCart();

  const { id, title, image, price } = data;

  const shoppingHandler = () => {
    dispatch({ type: "add" });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>${price}</p>
      <div className={styles.actions}>
        <Link to={`${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={shoppingHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
