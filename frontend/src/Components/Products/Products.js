import Product from './Product';

const Products = ({ products }) => {
  console.log('Products Component', products);
  return (
    <>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
};

export default Products;
