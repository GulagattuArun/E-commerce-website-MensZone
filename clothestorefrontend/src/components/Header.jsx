import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (value === "shirts" || value === "shirt") navigate("/shirts");
    else if (value === "jeans" || value === "jean") navigate("/jeans");
    else if (value === "shoes" || value === "shoe") navigate("/shoes");
    else if (value === "tshirts" || value === "tshirt") navigate("/tshirts");
    else if (value === "sunglasses" || value === "sunglass")
      navigate("/sunglasses");
  };

  return (
    <div
      style={{
        backgroundColor: "#e3f2fd",
        padding: "15px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <strong style={{ fontSize: "28px", color: "#0d47a1" }}>
          MensZone
        </strong>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search shirts, jeans, shoes..."
        value={search}
        onChange={handleSearch}
        style={{
          width: "260px",
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid #90caf9",
          outline: "none",
          fontSize: "14px",
        }}
      />

      {/* USER ICON + LOGOUT */}
      <button
        onClick={handleLogout}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "8px 14px",
          borderRadius: "20px",
          border: "none",
          backgroundColor: "#ffffff",
          color: "#d32f2f",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        👤 Logout
      </button>
    </div>
  );
};

export default Header;
