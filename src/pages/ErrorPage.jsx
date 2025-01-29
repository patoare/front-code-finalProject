
import React from "react";
import errorImage from "../assets/errorimg.png"; 

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! Page not found</h1>
      <img src={errorImage} alt="Error" style={{ width: "300px", marginTop: "20px" }} />
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default ErrorPage;
