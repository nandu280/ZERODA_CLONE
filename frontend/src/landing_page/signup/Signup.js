
import React from "react";

const Signup = () => {
  const goToSignup = () => {
  window.location.href = "https://authentication-client-t4zs.onrender.com/signup";};

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            color: "#424242",
            fontSize: "28px",
            marginBottom: "15px",
          }}
        >
          Create your Zerodha account
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "16px",
            marginBottom: "25px",
            lineHeight: "1.5",
          }}
        >
          New to Zerodha? Create your account to get started.
        </p>

        <button
          onClick={goToSignup}
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#387ed1",
            color: "#ffffff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;

