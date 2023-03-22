import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import wheelImage from "../image/wheel.png";


const Reward = () => {

    function generateCoupon(length) {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let coupon = "";
        for (let i = 0; i < length; i++) {
          coupon += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return coupon;
      }
    
      const [coupon, setCoupon] = useState("");

      useEffect(() => {
        const newCoupon = generateCoupon(8);
        setCoupon(newCoupon);
      }, []);

      const handleSaveAndClose = () => {
        navigator.clipboard.writeText(coupon);
      };

  return (
    <div>
      <div className="login-container">
        <div className="image-container">
          <img className="image" src={wheelImage} alt="Not Found" />
        </div>
        <div className="form-container">
            <h2>Congrats! You Won:</h2>
            <h3>20% Off Coupen</h3>
            <h3>on Best Seller</h3>
            <p>Your Coupen Code :  {coupon}</p>
            <div className="tryit" style={{ textAlign: "center" }}>
              <Link to="/">
                <button type="button" className="btn btn-success custom-button-width" onClick={handleSaveAndClose}style={{textAlign:"center"}}>Save and Close</button>
              </Link>
            </div>
            <p>* After clicking save and close your coupen will be coppied to clipboard</p>
            <p>* You can claim your coupen for 10 mins only</p>
        </div>
      </div>
    </div>
  );
};

export default Reward;

