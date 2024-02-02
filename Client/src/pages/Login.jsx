import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";

const URL = "http://localhost:5000/api/auth/login";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storetokenInLS} = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("Login form", response);

      if(response.ok) {
        alert("Login Successful");
        const res_data = await response.json();
        storetokenInLS(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      }
      else {
        alert("Invalid Credentials");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-form">
              <h1 className="main-heading mb-3">Login form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="email"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="password"
                    autoComplete="off"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Login Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Login;
