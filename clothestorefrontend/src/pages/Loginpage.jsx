import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [csrfToken, setCsrfToken] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/users/csrf/", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCsrfToken(data.csrfToken));
  }, []);

  const handleLogin = async () => {
    const res = await fetch("http://127.0.0.1:8000/users/login/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
    });

    if (res.ok) {
      alert("Login successful");
      navigate("/home");
    } else {
      alert("Login failed");
    }
  };

  const handleRegister = async () => {
    const res = await fetch("http://127.0.0.1:8000/users/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: regUsername,
        email: regEmail,
        password: regPassword,
      }),
    });

    if (res.ok) {
      alert("Registered successfully");
      setShowRegister(false);
    } else {
      alert("Registration failed");
    }
  };

  return (
    <>
      {/* BACKGROUND ANIMATION */}
      <style>
        {`
          @keyframes skyBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* MAIN CONTAINER */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(-45deg, #87CEEB, #B0E0E6, #ADD8E6, #E0F6FF)",
          backgroundSize: "400% 400%",
          animation: "skyBG 12s ease infinite",
        }}
      >
        {/* CARD */}
        <div
          style={{
            width: "360px",
            padding: "28px",
            borderRadius: "14px",
            backgroundColor: "rgba(255, 255, 255, 0.96)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            textAlign: "center",
            backdropFilter: "blur(8px)",
          }}
        >
          <h2 style={{ marginBottom: "20px", color: "#2196f3" }}>
            {showRegister ? "Register" : "Login"}
          </h2>

          {!showRegister ? (
            <>
              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
                placeholder="Username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />

              <input
                type="password"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />

              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#2196f3",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={handleLogin}
              >
                Login
              </button>

              <p
                style={{
                  marginTop: "14px",
                  color: "#2196f3",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                onClick={() => setShowRegister(true)}
              >
                New user? Register
              </p>
            </>
          ) : (
            <>
              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
                placeholder="Username"
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
              />

              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
                placeholder="Email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
              />

              <input
                type="password"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
                placeholder="Password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
              />

              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#2196f3",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={handleRegister}
              >
                Register
              </button>

              <p
                style={{
                  marginTop: "14px",
                  color: "#2196f3",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                onClick={() => setShowRegister(false)}
              >
                Already have an account? Login
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
