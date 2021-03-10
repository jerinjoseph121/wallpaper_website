import React, { useRef, useState } from "react";
import "./css/signup.css";
import { useAuth } from "./contexts/AuthContext";

export default function Signup() {
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { currentUser, signup } = useAuth();
  const [error, setError] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value)
      .then((err) => setError(undefined))
      .catch((err) => setError(err.message));
  }

  return (
    <div className="MAIN">
      {/*Title Section*/}
      <div className="container-fluid" id="titleSection">
        <div id="mainTitle">Wallpapers</div>
      </div>
      {/*Main Section*/}
      <div
        className="container-fluid h-100 row align-items-center"
        id="mainSection"
      >
        <div className="col-4"></div>
        {/*Sign Up Prompt*/}
        <div className="card col-3 justify-content-center">
          {/*Sign Up Title*/}
          <div className="card-title">Sign Up</div>
          {/*Sign Up Form */}
          <div className="card-body">
            <form className="form" onSubmit={handleSubmit}>
              <div
                style={{ display: error == undefined ? "none" : "block" }}
                className="errorPrint alert alert-danger"
              >
                {error}
              </div>
              {/* <div>{JSON.stringify(currentUser)}</div> */}
              <div className="mb-3">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  ref={userRef}
                  id="username"
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  ref={emailRef}
                  id="email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  ref={passwordRef}
                  id="password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check1"
                />
                <label className="form-check-label" for="check1">
                  Remember Me
                </label>
              </div>
              <div className="row">
                <div className="col-8 p-0">
                  <button type="submit" className="btn btn-lg submitSignup">
                    SignUp
                  </button>
                </div>
                <div className="col-4 p-0">
                  <a href="#" className="linkLogin">
                    login
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
