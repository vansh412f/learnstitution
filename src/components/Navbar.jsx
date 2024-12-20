import React from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

const Navbar = () => {
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // For programmatic navigation

  // Determine the current route and update navbar items accordingly
  const currentPath = location.pathname;

  const handleAboutUsClick = () => {
    if (currentPath !== "/") {
      // Navigate to the home page if not already there
      navigate("/");
    }
    // Scroll to the footer after navigation
    setTimeout(() => {
      scroller.scrollTo("footer", {
        smooth: true,
        duration: 500,
      });
    }, 100); // Delay to ensure the home page is rendered before scrolling
  };

  // Define the navigation links based on the current route
  const renderNavbarLinks = () => {
    switch (currentPath) {
      case "/games":
        return (
          <>
            <Link to="/" className="navbar-link">Home</Link>
            <a href="/external-assistance" className="navbar-link">External Assistance</a>
            <span
              className="navbar-link"
              onClick={handleAboutUsClick}
              style={{ cursor: "pointer" }}
            >
              About Us
            </span>
          </>
        );
      case "/external-assistance":
        return (
          <>
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/games" className="navbar-link">Games</Link>
            <span
              className="navbar-link"
              onClick={handleAboutUsClick}
              style={{ cursor: "pointer" }}
            >
              About Us
            </span>
          </>
        );
      case "/":
      default:
        return (
          <>
            <Link to="/games" className="navbar-link">Games</Link>
            <a href="/external-assistance" className="navbar-link">External Assistance</a>
            <span
              className="navbar-link"
              onClick={handleAboutUsClick}
              style={{ cursor: "pointer" }}
            >
              About Us
            </span>
          </>
        );
    }
  };

  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="navbar-logo">
        <video autoPlay muted loop aria-label="Bot animation">
          <source src="/logo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Centered Title */}
      <h1 className="navbar-title">Learnstitution</h1>

      {/* Dynamic Navigation Options on the right */}
      <div className="navbar-options">
        {renderNavbarLinks()}
      </div>
    </nav>
  );
};

export default Navbar;
