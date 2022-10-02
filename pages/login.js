import React, { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn, user, loading } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = {
      username: username,
      password: password,
    };

    axios
      .post("https://visam.bubbleholidays.co/wp-json/moserver/token", {
        auth: {
          login,
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.jwt_token);
        axios
          .get("https://visam.bubbleholidays.co/wp-json/moserver/resource", {
            Bearer: localStorage.getItem(token),
          })
          .then((res) => {
            user = res.data.user;
            loggedIn = true;
            console.log(user);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="appHeader no-border transparent position-absolute">
        <div className="left">
          <a href="#" className="headerButton goBack">
            <ion-icon name="chevron-back-outline" />
          </a>
        </div>
        <div className="pageTitle" />
        <div className="right"></div>
      </div>
      <div id="appCapsule">
        <div className="section mt-2 text-center">
          <h1>Log in</h1>
          <h4>Fill the form to log in</h4>
        </div>
        <div className="section mb-5 p-2">
          <form method="post" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-body pb-1">
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="email1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="log-in-email"
                      placeholder="Your e-mail"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle" />
                    </i>
                  </div>
                </div>
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="password1">
                      Password
                    </label>
                    <input
                      type="log-in-password"
                      className="form-control"
                      id="password1"
                      name="password"
                      autoComplete="off"
                      placeholder="Your password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle" />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-links mt-2">
              <div>
                <a href="/register">Not a member? Register Now</a>
              </div>
              <div>
                <a href="app-forgot-password.html" className="text-muted">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="form-button-group  transparent">
              {/* {!isEmailValid ? (
                <p className="error-message">
                  Invalid email. Please try again.
                </p>
              ) : null}
              {!isPasswordValid ? (
                <p className="error-message">
                  Invalid password. Please try again.
                </p>
              ) : null} */}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-block btn-lg"
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
