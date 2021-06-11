import Product from '../Products/Product';
import Grid from '@material-ui/core/Grid';
import AuthenticatedApp from '../../AuthenticatedApp';

const Orders = ({ products }) => {
  AuthenticatedApp();

  return (
    <>
      <h1>This is the products in your order</h1>
      <Grid container spacing={1} direction="row" justify="center" alignItems="center">
        {products?.length > 0
          ? products.map((product, index) => (
              <Grid key={index} container item lg={3} md={6} sm={12}>
                <Product product={product} />
              </Grid>
            ))
          : ''}
      </Grid>
    </>
  );
};

export default Orders;
