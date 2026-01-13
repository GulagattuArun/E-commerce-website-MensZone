import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  mensJeans,
  mensShirts,
  mensShoes,
  mensSunglasses,
  mensTshirts,
} from "../clothesdata";

const Cartpage = () => {
    const {id}=useParams();
    const nav=useNavigate();
    const handlepay=()=>{
        nav(`/bookpage/${product.id}`)

    }
    const handleremove=()=>{
       nav('/home')
    }
    const allproduct =[
        ...mensJeans,
        ...mensShirts,
        ...mensShoes,
        ...mensSunglasses,
        ...mensTshirts,
    ];
    const product=allproduct.find(item=>
        parseInt(id)===item.id
    );
    if (!product){
        return   <h2 style={{ textAlign: "center" }}>Product not found</h2>;
    }
    else return (
            <div
            style={{
                maxWidth: "600px",
                margin: "40px auto",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                fontFamily: "Arial, sans-serif",
            }}
            >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                🛒Cart
            </h2>

            {/* Cart Item */}
            <div
                style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px 0",
                borderBottom: "1px solid #ddd",
                }}
            >
                <img src={product.src} style={{height:"100px", width:"100px"}}/>
            

                <div style={{ flex: 1, marginLeft: "15px" }}>
                <h4 style={{ margin: "0 0 5px 0" }}>{product.brand}</h4>
                <p style={{ margin: 0, color: "#555" }}>₹{product.price}</p>
                </div>

                <button
                style={{
                    backgroundColor: "#ff4d4d",
                    color: "#fff",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                }
            }
            onClick={handleremove}
                >
                Remove
                </button>
            </div>

            {/* Summary */}
            <div style={{ textAlign: "right", marginTop: "20px" }}>
                <h3 style={{ marginBottom: "10px" }}>Total:{product.price}</h3>
                <button
                 style={{
                    backgroundColor: "skyblue",
                    color: "#fff",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                }} onClick={handlepay}>Pay</button>
                
            </div>
            </div>
        );
        };

export default Cartpage;
