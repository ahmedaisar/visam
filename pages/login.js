import { useMutation, gql } from "@apollo/client";
import { GET_USER } from "../hooks/useAuth";
import useAuth from "../hooks/useAuth";

import { useEffect } from "react";

import { useRouter } from "next/router";

const LOG_IN = gql`
  mutation logIn($login: String = "", $password: String = "") {
    loginWithCookies(input: { login: $login, password: $password }) {
      status
    }
  }
`;

function LoginPage() {
  const { loggedIn } = useAuth();

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
  }, [loggedIn]);

  const [logIn, { loading, error }] = useMutation(LOG_IN, {
    refetchQueries: [{ query: GET_USER }],
  });

  const router = useRouter();

  const errorMessage = error?.message || "";
  const isEmailValid =
    !errorMessage.includes("empty_email") &&
    !errorMessage.includes("empty_username") &&
    !errorMessage.includes("invalid_email") &&
    !errorMessage.includes("invalid_username");
  const isPasswordValid =
    !errorMessage.includes("empty_password") &&
    !errorMessage.includes("incorrect_password");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email, password } = Object.fromEntries(data);
    try {
      logIn({
        variables: {
          login: email,
          password,
        },
      });

      if (!error) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* <div id="loader">
        <img
          src="assets/img/loading-icon.png"
          alt="icon"
          className="loading-icon"
        />
      </div> */}
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
              {!isEmailValid ? (
                <p className="error-message">
                  Invalid email. Please try again.
                </p>
              ) : null}
              {!isPasswordValid ? (
                <p className="error-message">
                  Invalid password. Please try again.
                </p>
              ) : null}

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
