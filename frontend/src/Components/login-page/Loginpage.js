import { useEffect, useState } from "react";
import axios from "axios";
import loading_svg from "./assets/images/loader.svg";
import axios from "axios";
import "./App.css";
//import Frontpage from "./Components/Frontpage";

export default function Loginpage(props) {
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
      <h1>Loginpage</h1>
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

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [token, setToken] = useState(
    localStorage.getItem("token") === "false" ? false : true
  );

  const Register = (callback) => {
    const data = {
      name: username,
      password: password,
      email: email,
    };
    axios
      .post(process.env.REACT_APP_URL + "/register", data)
      .then((response) => {
        if (response.data) {
          alert("User created");
        } else {
          alert("Registration failed, email taken.");
        }
        callback();
      });
  };

  const Login = (callback) => {
    const data = {
      email: email,
      password: password,
    };
    axios.post(process.env.REACT_APP_URL + "/login", data).then((response) => {
      if (response.data) {
        setToken(response.data);
        console.log("token", token);
        localStorage.token = response.data;
      } else {
        alert("Login failed, Invalid username or password.");
      }
      callback();
    });
  };

  return token ? (
    <Frontpage
      logout={() => {
        setToken(false);
        localStorage.removeItem("token");
      }}
    />
  ) : (
    <div className="loginForm">
      <h1>{isLogin ? "Login" : "Register"}</h1>
      <p>E-post</p>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {isLogin ? (
        ""
      ) : (
        <>
          <p>Användarnamn</p>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </>
      )}
      <p>password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          if (email !== "" && password !== "") {
            if (!isLogin && username !== "") {
              e.target.classList.add("loading");
              e.target.disabled = true;
              setLoading(true);
              Register(() => {
                setLoading(false);
                e.target.classList.remove("loading");
                e.target.disabled = false;
              });
            } else {
              e.target.classList.add("loading");
              e.target.disabled = true;
              setLoading(true);
              Login(() => {
                setLoading(false);
                e.target.classList.remove("loading");
                e.target.disabled = false;
              });
            }
          } else {
            alert("Some of the fields are missing.");
          }
        }}
      >
        {loading ? (
          <img src={loading_svg} />
        ) : isLogin ? (
          "Logga in"
        ) : (
          "Skapa konto"
        )}
      </button>
      <p
        onClick={() => {
          setIsLogin(!isLogin);
        }}
        style={{ margin: "0.5em", textAlign: "center" }}
      >
        {isLogin ? "Registrera" : "Logga in"}
      </p>
    </div>
  );
}

export default App;
