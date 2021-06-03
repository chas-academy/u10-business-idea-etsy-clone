import Product from './Product';
import Grid from '@material-ui/core/Grid';

const Products = ({ products }) => {
  return (
     <Grid 
     container 
     spacing={1}
>
      {products.map((product, index) => (
        <Grid container item lg={3} md={6} sm={12} key={index}>
          <Product key={index} product={product} />
        </Grid>
      ))}
      </Grid>
  );
};

export default Products;
