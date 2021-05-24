import React, { useEffect, useState } from 'react';
import {
  useParams,
} from "react-router-dom";
import api from '../../api/api';

function Category() {
  //  const classes = useStyles();
    const [category, setCategory] = useState('');
    let { slug } = useParams();

    useEffect(() => {
        api.getCategory(slug).then((res) => {
          setCategory(res);
        });
    }, [slug]);

    return <h1>{category}</h1>
}

export default Category;