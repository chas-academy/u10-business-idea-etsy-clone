import { useEffect } from 'react';
import axios from 'axios';
import ProductCard from './product-page/Product';

export default function Frontpage(props) {
  useEffect(() => {
    const headers = { headers: { token: localStorage.token } };
    axios
      .get(process.env.REACT_APP_URL + '/frontpageData', headers)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Frontpage</h1>
      <button
        onClick={() => {
          props.logout();
        }}
      >
        Logout
      </button>
      <ProductCard></ProductCard>
    </div>
  );
}
