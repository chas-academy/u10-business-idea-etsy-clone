import Product from '../Products/Product';
import Grid from '@material-ui/core/Grid';

const Orders = ({ products }) => {
  return (
    <>
      <h1>These are the products in your order</h1>
      <Grid container spacing={1} direction="row" justify="center" alignItems="center">
        {products.map((product, index) => (
          <Grid key={index} container item lg={3} md={6} sm={12}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Orders;
