import ProductCard from '../ProductCard/Card';

const Product = ({ product }) => {
  return (
    <>
      <ProductCard
        name={product.name}
        description={product.description}
        categorie={product.categorie}
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
