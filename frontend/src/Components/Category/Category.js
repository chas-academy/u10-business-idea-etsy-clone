import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import api from '../../api/api';

function Category(props) {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState();

  useEffect(() => {
      api.getCategory(props.match.params.slug).then((res) => {
        setCategory(res.data);
      });

      api.getProducts(props.match.params.slug).then((res) => {
        setProducts(res.data);
      });
  }, [props.match.params.slug]);

    return <>
    <h1>{category}</h1>
    {products ? <Products products={products} /> : <p>No products to show</p>}
    </>
}

export default Category;