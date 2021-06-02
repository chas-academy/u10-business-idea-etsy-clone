import Product from './Product';

const Products = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((products, index) => (
        <Product key={index} data={products} />
      ))}
    </>
  );
};

export default Products;
