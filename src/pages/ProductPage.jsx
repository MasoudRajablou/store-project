import { useProducts } from "../context/ProductProvider";

import styles from "../modules/ProductPage.module.css";

function ProductPage() {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>Loading...</p>}
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <img src={product.image} alt={product.title} />
            </li>
          ))}
        </ul>
      </div>
      <div>SideBar</div>
    </div>
  );
}

export default ProductPage;
