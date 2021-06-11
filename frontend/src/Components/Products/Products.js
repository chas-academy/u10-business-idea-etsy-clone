import Product from './Product';
import Grid from '@material-ui/core/Grid';

const Products = ({ products, addToCart }) => {
  return (
    <Grid container spacing={3} direction="row" justify="center" alignItems="center">
      {products.map((product, index) => (
        <Grid container item lg={4} md={6} sm={12} key={index}>
          <Product addToCart={addToCart} key={index} product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
