import React from "react";
import { Link } from "react-router-dom";
import wheelImage from "../image/wheel.png";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="image-container">
          <img className="image" src={wheelImage} alt="Not Found" />
        </div>
        <div className="form-container">
          <form>
            <h2>Welcome To EngageBud</h2>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="typePhone">
                Phone number
              </label>
              <input type="tel" id="typePhone" className="form-control" />
            </div>
            <div className="remember-forgot">
                <input type="checkbox" id="agree"  className="checkbox-custom"/>
                <label htmlFor="agree">Agree to Terms & Conditions</label>
            <div/>
              <div className="tryit" style={{ textAlign: "center" }}>
              <Link to="/spin">
                <button type="button" className="btn btn-success custom-button-width">Try It</button>
              </Link>
              </div>
              <p>*You can spin the wheel only once</p>
              <p>*If you win, you can claim your coupen for 10 minutes only</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
