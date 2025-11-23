import { ImSearch } from "react-icons/im";

import { createQueryObject } from "../helpers/helper";

import styles from "./modules/SearchBox.module.css";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery(query => createQueryObject(query, { search }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={e => setSearch(e.target.value.toLowerCase().trim())}
        onKeyUp={e => e.key === "Enter" && searchHandler()}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
