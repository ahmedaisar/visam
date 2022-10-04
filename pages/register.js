import { useMutation, gql } from "@apollo/client";
import { fieldNameFromStoreName } from "@apollo/client/cache";
import { Router } from "next/router";
import { useState } from "react";

import UnAuthContent from "../components/UnAuthContent";

const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!
    $firstName: String!
    $lastName: String!
  ) {
    registerUser(
      input: {
        username: $email
        email: $email
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      user {
        databaseId
      }
    }
  }
`;

function RegisterPage() {
  const [register, { data, loading, error }] = useMutation(REGISTER_USER);
  const [username, setUsername] = useState("");
  const wasSignUpSuccessful = Boolean(data?.registerUser?.user?.databaseId);

  const success =
    "Registration successful! Kindly click on the verification link sent to your email. Thank you!";

  const errorMessage = error?.message || "";

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
    try {
      register({
        variables: values,
      }).catch((error) => {
        console.error(error);
      });
    } catch (error) {}
  }

  return (
    <UnAuthContent>
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
          <h1>Register in</h1>
          <h4>Fill the form to register</h4>
        </div>
        <div className="section mb-5 p-2">
          <form method="post" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-body pb-1">
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="firstname">
                      Firstname
                    </label>
                    <input
                      type="log-in-password"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="Your first name"
                      required
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle" />
                    </i>
                  </div>
                  <div className="input-wrapper">
                    <label className="label" htmlFor="lastname">
                      Lastname
                    </label>
                    <input
                      type="log-in-password"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="Your last name"
                      required
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle" />
                    </i>
                  </div>
                </div>
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
              </div>
            </div>
            <div className="form-links mt-2" style={{ color: "green" }}>
              {wasSignUpSuccessful ? success : ""}
            </div>
            <div className="form-links mt-2">
              <div>
                <a href="/login">Already a menber? Login Now</a>
              </div>
            </div>
            <div className="form-button-group  transparent">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-block btn-lg"
              >
                {loading ? "Hold on.." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </UnAuthContent>
  );
}

export default RegisterPage;
