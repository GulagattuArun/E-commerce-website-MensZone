import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  mensJeans,
  mensShirts,
  mensShoes,
  mensSunglasses,
  mensTshirts,
} from "../clothesdata";

const Bookpage = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const products = [
    ...mensJeans,
    ...mensShirts,
    ...mensShoes,
    ...mensSunglasses,
    ...mensTshirts,
  ];

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <h2>Product not found</h2>;

  const handlePayment = async () => {
    if (!window.Razorpay) {
      alert("Razorpay still loading, wait 2 seconds and try again");
      return;
    }

    if (!name || !mobile) {
      alert("Enter name and mobile");
      return;
    }

    const res = await fetch(
      "http://127.0.0.1:8000/payment/create-payment/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          mobile: mobile,
          amount: product.price,
        }),
      }
    );

    const data = await res.json();

    const options = {
      key: data.key,
      amount: data.amount,
      currency: "INR",
      name: product.brand,
      order_id: data.order_id,
      handler: function (response) {
        alert("Payment successful!");
        console.log(response);
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        display: "flex",
        gap: "40px",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Product Container */}
      <div>
        <img
          src={product.src}
          style={{
            height: "500px",
            width: "400px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* Details Container */}
      <div style={{ flex: 1 }}>
        <h2>{product.brand}</h2>
        <h3 style={{ color: "green" }}>₹{product.price}</h3>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="tel"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handlePayment}
          style={{
            padding: "12px 25px",
            backgroundColor: "#3399cc",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Bookpage;
