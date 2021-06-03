import ProductCard from '../ProductCard/Card';
import {
  Link,
} from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <Link to={'/product/' + product.id}>
        <ProductCard
          name={product.name.substr(0, 50)}
          description={product.description}
          picture={product.picture}
          price={product.price}
          currency={product.currency}
          stock={product.stock}
          userId={product.user_id}
        ></ProductCard>
      </Link>
    </>
  );
};

export default Product;
