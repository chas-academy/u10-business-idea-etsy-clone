import React, { useEffect, useState } from 'react';
import api from '../../api/api';

function Category(props) {
  const [category, setCategory] = useState('');

  useEffect(() => {
      api.getCategory(props.match.params.slug).then((res) => {
        setCategory(res.data);
        console.log(res);
      });
  }, [props.match.params.slug]);

    return <h1>{category}</h1>
}

export default Category;