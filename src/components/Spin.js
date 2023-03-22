import React, { useState } from "react";
import spinWheel from "../image/spin_wheel.png";
import "./Spin.css";
import { Link } from "react-router-dom";

const Spin = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleSpinClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setShowNextButton(true);
    }, 2000);
  };


  return (
    <div>
      <div className="parent-container" style={{ textAlign: "center" }}>
        <div className={`image-container-2 ${isSpinning ? "spin" : ""}`}>
          <img className="image-2" src={spinWheel} alt="Not Found" />
        </div>
      </div>
      <div className="btn-spin" style={{ textAlign: "center" }}>
        {showNextButton ? (
          <Link to="/reward">
          <button
            type="button"
            className="btn btn-success custom-button-width-2"
          >
            Get The Coupen
          </button>
          </Link>
        ) : (
          <button
            type="button"
            className="btn btn-success custom-button-width-2"
            onClick={handleSpinClick}
            disabled={isSpinning}
          >
            {isSpinning ? "Spinning..." : "SPIN"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Spin;
