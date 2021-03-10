import React from "react";
import "./css/login.css";

export default function Login() {
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
        {/*Login Prompt*/}
        <div className="card col-3 justify-content-center">
          {/*Login Title*/}
          <div className="card-title">Login</div>
          {/*Login Form */}
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
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
                  <button type="submit" className="btn btn-lg submitLogin">
                    Login
                  </button>
                </div>
                <div className="col-4 p-0">
                  <a href="#" className="linkSignup">
                    signup
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
