import Product from '../Products/Product'
import Grid from '@material-ui/core/Grid';

const Orders = ({products}) => {
  console.log(products);
  return (
    <>
      <h1>This is the products in your order</h1>
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

// todo:
// add logic in api
// add logic in state in app.js
// display what we get from api in component
// crud?
