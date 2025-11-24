import { Link, useParams } from "react-router";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { BsArrowReturnLeft } from "react-icons/bs";

import { useProductDetails } from "../context/ProductProvider";
import Loader from "../components/Loader";

import styles from "./modules/DetailsPage.module.css";
import { MdStarRate } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

function DetailsPage() {
  const { id } = useParams();

  const product = useProductDetails(+id);

  if (!product) return <Loader />;

  const {
    title,
    image,
    price,
    description,
    category,
    rating: { rate, count },
  } = product;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <SiOpenproject /> {category}
        </p>
        <div className={styles.price}>
          <span>
            <IoMdPricetag /> ${price}
          </span>
          <p>
            <MdStarRate /> <span>{rate}</span>
          </p>
          <p>
            <VscAccount /> <span>{count}</span>
          </p>
        </div>
        <Link to="/">
          <BsArrowReturnLeft />
          <span>Back to Products</span>
        </Link>
      </div>
    </div>
  );
}

export default DetailsPage;
