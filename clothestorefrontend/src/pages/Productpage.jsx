import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  mensSunglasses,
  mensTshirts,
  mensJeans,
  mensShirts,
  mensShoes,
} from "../clothesdata";

const Productpage = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const allproducts = [
    ...mensJeans,
    ...mensShirts,
    ...mensShoes,
    ...mensSunglasses,
    ...mensTshirts,
  ];

  const product = allproducts.find(
    (item) => item.id === Number(id)
  );

  const handlebook = () => {
    nav(`/bookpage/${product.id}`);
  };

  const handlecart = () => {
    nav(`/cartpage/${product.id}`);
  };

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          padding: "30px",
          display: "flex",
          gap: "40px",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Image */}
        <img
          src={product.src}
          alt={product.brand}
          style={{
            width: "360px",
            height: "360px",
            objectFit: "contain",
            borderRadius: "12px",
          }}
        />

        {/* Details */}
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: "10px" }}>{product.brand}</h2>

          <h3 style={{ color: "#2e7d32", marginBottom: "20px" }}>
            ₹{product.price}
          </h3>

          <p style={{ marginBottom: "25px", color: "#555" }}>
            Premium quality product with excellent comfort and durability.
            Perfect for everyday use.
          </p>

          <div style={{ display: "flex", gap: "15px" }}>
            <button
              onClick={handlecart}
              style={{
                padding: "12px 25px",
                borderRadius: "8px",
                border: "1px solid #1976d2",
                backgroundColor: "#fff",
                color: "#1976d2",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={handlebook}
              style={{
                padding: "12px 25px",
                borderRadius: "8px",
                backgroundColor: "#ff9800",
                border: "none",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
