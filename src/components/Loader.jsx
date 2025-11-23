import { RotatingLines } from "react-loader-spinner";

import styles from "./modules/Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <RotatingLines
        height="100px"
        width="100px"
        strokeColor="#fff"
        strokeWidth="2"
      />
    </div>
  );
}

export default Loader;
