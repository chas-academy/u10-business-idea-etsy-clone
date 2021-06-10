import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { useAuthContext } from '../../context/AuthContext';
import api from '../../api/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    height: "auto"
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  title: {
    height: 110
  },
  image: {
    height: 150
  }
}));

export default function ProductCard({
  name,
  picture,
  price,
  currency,
  stock,
  userId,
  productId
}) {
  const classes = useStyles();
  const authContext = useAuthContext();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToCart = (userId, productId) => {
    console.log(userId);
    console.log(productId);
    api.addToCart(userId, productId);
  };

  return (
    <Card className={classes.root}>
      <Link to={'/product/' + productId}>
        <CardHeader className={classes.title} title={name} />
        <CardMedia
          component="img"
          src={picture}
          title={name}
          alt={name}
        />
      </Link>
      <CardContent>
        <Typography color="textSecondary" component="h2">
          {price} {currency}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {authContext.user != null ? (
          <IconButton aria-label="add to cart" onClick={() => addToCart(productId)}>
            <AddShoppingCartIcon />
          </IconButton>
        ) : (
          <Link to={'/login'}>
            <AddShoppingCartIcon />
          </Link>
        )}

        {authContext.user != null && authContext.user.id === userId ? (
          <Button className={classes.button} startIcon={<DeleteIcon color="secondary" />}></Button>
        ) : null}

        <Typography color="textSecondary" component="p">
          Stock: {stock}
        </Typography>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        ></IconButton>
      </CardActions>
    </Card>
  );
}
