import React from 'react'
import { mensShirts } from '../clothesdata'
import { Link } from 'react-router-dom'

const Shirtspage = () => {
  return (
    <div
      style={{
        backgroundColor: "#e3f2fd", // skyblue background
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
        {mensShirts.map((items) => (
          <Link to={`/product/${items.id}`} style={{ textDecoration: "none" }}>
            <div
              key={items.id}
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
                style={{
                  height: "290px",
                  width: "200px",
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto",
                  padding:"15px"
                }}
                alt="shirt"
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
  )
}

export default Shirtspage
