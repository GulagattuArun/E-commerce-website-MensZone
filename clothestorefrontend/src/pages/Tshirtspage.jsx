import React from "react";
import { mensTshirts } from "../clothesdata";
import { Link } from "react-router-dom";

const Tshirtspage = () => {
  return (
    <div
      style={{
        backgroundColor: "#e3f2fd",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "25px",
          justifyItems: "center",
        }}
      >
        {mensTshirts.map((items) => (
          <Link
            key={items.id}
            to={`/product/${items.id}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "15px",
                width: "220px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
                cursor: "pointer",
              }}
            >
              <img
                src={items.src}
                alt="tshirt"
                style={{
                  height: "260px",
                  width: "200px",
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto",
                  padding: "15px",
                }}
              />

              <div
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  marginTop: "10px",
                  fontFamily: "sans-serif",
                  color: "#000",
                }}
              >
                <li style={{ fontWeight: "bold" }}>₹{items.price}</li>
                <li>{items.brand}</li>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tshirtspage;
