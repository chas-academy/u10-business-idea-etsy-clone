import ProductCard from '../ProductCard/Card';

const Product = ({ product }) => {
  return (
    <>
      <ProductCard
        name={product.name.substr(0, 50)}
        description={product.description}
        picture={product.picture}
        price={product.price}
        currency={product.currency}
        stock={product.stock}
        userId={product.user_id}
        productId={product.id}
      ></ProductCard>
    </>
  );
};

export default Product;
