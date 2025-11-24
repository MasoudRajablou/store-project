import { Link } from "react-router";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { productQuantity, shortenText } from "../helpers/helper";

import styles from "./modules/Card.module.css";
import { useCart } from "../context/CartProvider";
import { MdDeleteOutline } from "react-icons/md";

function Card({ data }) {
  const [state, dispatch] = useCart();

  const { id, title, image, price } = data;

  const quantity = productQuantity(state, id);

  const shoppingHandler = () => dispatch({ type: "ADD_ITEM", payload: data });

  const increaseHandler = () => dispatch({ type: "INCREASE", payload: data });

  const decreaseHandler = () => dispatch({ type: "DECREASE", payload: data });

  const deleteHandler = () => dispatch({ type: "REMOVE_ITEM", payload: data });

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
          {quantity === 0 ? (
            <button onClick={shoppingHandler}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <>
              {quantity > 1 ? (
                <button onClick={decreaseHandler}>-</button>
              ) : (
                <button onClick={deleteHandler}>
                  <MdDeleteOutline />
                </button>
              )}
              <span>{quantity}</span>
              <button onClick={increaseHandler}>+</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
