import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Product(props) {
  const [product, setProduct] = useState();

  useEffect(() => {
      api.getProduct(props.match.params.id).then((res) => {
        if (res) setProduct(res.data);
      });
  }, [props.match.params.id]);

    return  <Card>
    <CardHeader
      title={product?.name}
    />
    <CardMedia
      component="img"
      src={product?.picture}
      title={product?.name}
      alt={product?.name}
    />
    <CardContent>
      <h2>{product?.price} {product?.currency}</h2>
      <Button variant="contained" color="primary">Add to cart</Button>
      <Typography variant="body2" color="textSecondary" component="p">
        {product?.description}
      </Typography>
    </CardContent>
  </Card>
}

export default Product;