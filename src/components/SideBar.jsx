import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helpers/helper";
import { categories } from "../constant/lists";

import styles from "./modules/SideBar.module.css";

function SideBar({ query, setQuery }) {
  const categoryHandler = e => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery(query => createQueryObject(query, { category }));
  };

  return (
    <div className={styles.sideBar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map(item => (
          <li
            key={item.id}
            className={
              query.category === item.type.toLowerCase() ? styles.active : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
