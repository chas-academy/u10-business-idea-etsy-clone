import ProductCard from '../ProductCard/Card';

const Product = ({ product }) => {
  return (
    <>
      <ProductCard
        name={product.name}
        description={product.description}
        categorie={product.categorie}
      ></ProductCard>
    </>
  );
};

export default Product;
