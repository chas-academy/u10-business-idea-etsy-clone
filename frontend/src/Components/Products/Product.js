import ProductCard from '../Product-card/Card';

const Product = ({ data }) => {
  return (
    <>
      <ProductCard
        name={data.name}
        description={data.description}
        categorie={data.categorie}
      ></ProductCard>
    </>
  );
};

export default Product;
