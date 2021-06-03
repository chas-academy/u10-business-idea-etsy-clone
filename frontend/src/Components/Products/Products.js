import Product from './Product';
import Grid from '@material-ui/core/Grid';

const Products = ({ products }) => {
  return (
    <Grid container spacing={1} direction="row" justify="center" alignItems="center">
      {products.map((product, index) => (
        <Grid key={index} container item lg={3} md={6} sm={12}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
