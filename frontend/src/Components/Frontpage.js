import { useEffect } from "react";
import axios from "axios";

export default function Frontpage(props) {
  useEffect(() => {
    const headers = { headers: { token: localStorage.token } };
    axios
      .get(process.env.REACT_APP_URL + "/frontpageData", headers)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
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
    </div>
  );
}
