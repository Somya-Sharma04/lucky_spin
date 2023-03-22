import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = width <= 512;

  return (
    <>
      <nav className="navbar ">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          {isSmallScreen ? (
            <button className="btn btn-outline-light">
              <ion-icon name="search-outline" className="search-icon"></ion-icon>
            </button>
          ) : (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
