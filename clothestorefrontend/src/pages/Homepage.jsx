import React from 'react'
import { mensShirts,mensTshirts,mensJeans,mensShoes,mensSunglasses } from '../clothesdata'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #e0f6ff, #f5fbff)",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}
    >
        {/* BACKGROUND IMAGES */}
        <div
          style={{
            padding:"20px",
            display:"flex",
            flexDirection:"row",
            gap:"30px",
            justifyContent:"center",
          }}
        >
            <img src='mens1.webp' alt='loading..' style={{height:"600px",width:"350px",borderRadius:"12px"}} />
            <img src='mens2.webp' alt='loading..' style={{height:"600px",width:"350px",borderRadius:"12px"}} />
            <img src='mens3.webp' alt='loading..' style={{height:"600px",width:"350px",borderRadius:"12px"}} />
            <img src='mens4.webp' alt='loading..' style={{height:"600px",width:"350px",borderRadius:"12px"}} />
        </div>

        {/* SHIRTS */}
        <div style={{ background:"#ffffff", margin:"20px", borderRadius:"14px", padding:"10px" }}>
          <Link to="/shirts" style={{textDecoration:"none"}}>
            <h2 style={{display:"flex",justifyContent:"center",color:"#2196f3"}}>SHIRTS</h2>
          </Link>
          <div style={{display:"flex",flexDirection:"row",gap:"10px",padding:"10px" }}>
            {mensShirts.slice(0,5).map((item)=>(
              <Link key={item.id} to={`/product/${item.id}`} style={{textDecoration:"none"}}>
                <div>
                  <img src={item.src} alt='loading..' style={{height:"400px",width:"280px",borderRadius:"10px"}} />
                  <div style={{display:"flex",flexDirection:"column",textAlign:"center",listStyleType:"none",fontFamily:"sans-serif"}}>
                    <li>{item.brand}</li>
                    <li>₹{item.price}</li>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* JEANS */}
        <div style={{ background:"#ffffff", margin:"20px", borderRadius:"14px", padding:"10px" }}>
          <Link to="/jeans" style={{textDecoration:"none"}}>
            <h2 style={{display:"flex",justifyContent:"center",color:"#2196f3"}}>JEANS</h2>
          </Link>
          <div style={{display:"flex",flexDirection:"row",gap:"10px",padding:"10px" }}>
            {mensJeans.slice(0,5).map((item)=>(
              <Link key={item.id} to={`/product/${item.id}`} style={{textDecoration:"none"}}>
                <div>
                  <img src={item.src} alt='loading..' style={{height:"400px",width:"280px",borderRadius:"10px"}} />
                  <div style={{display:"flex",flexDirection:"column",textAlign:"center",listStyleType:"none",fontFamily:"sans-serif"}}>
                    <li>{item.brand}</li>
                    <li>₹{item.price}</li>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* TSHIRTS */}
        <div style={{ background:"#ffffff", margin:"20px", borderRadius:"14px", padding:"10px" }}>
          <Link to="/tshirts" style={{textDecoration:"none"}}>
            <h2 style={{display:"flex",justifyContent:"center",color:"#2196f3"}}>TSHIRTS</h2>
          </Link>
          <div style={{display:"flex",flexDirection:"row",gap:"10px",padding:"10px" }}>
            {mensTshirts.slice(0,5).map((item)=>(
              <Link key={item.id} to={`/product/${item.id}`} style={{textDecoration:"none"}}>
                <div>
                  <img src={item.src} alt='loading..' style={{height:"400px",width:"280px",borderRadius:"10px"}} />
                  <div style={{display:"flex",flexDirection:"column",textAlign:"center",listStyleType:"none",fontFamily:"sans-serif"}}>
                    <li>{item.brand}</li>
                    <li>₹{item.price}</li>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SUNGLASSES */}
        <div style={{ background:"#ffffff", margin:"20px", borderRadius:"14px", padding:"10px" }}>
          <Link to="/sunglasses" style={{textDecoration:"none"}}>
            <h2 style={{display:"flex",justifyContent:"center",color:"#2196f3"}}>SUNGLASSES</h2>
          </Link>
          <div style={{display:"flex",flexDirection:"row",gap:"10px",padding:"10px" }}>
            {mensSunglasses.slice(0,5).map((item)=>(
              <Link key={item.id} to={`/product/${item.id}`} style={{textDecoration:"none"}}>
                <div>
                  <img src={item.src} alt='loading..' style={{height:"400px",width:"280px",borderRadius:"10px"}} />
                  <div style={{display:"flex",flexDirection:"column",textAlign:"center",listStyleType:"none",fontFamily:"sans-serif"}}>
                    <li>{item.brand}</li>
                    <li>₹{item.price}</li>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SHOES */}
        <div style={{ background:"#ffffff", margin:"20px", borderRadius:"14px", padding:"10px" }}>
          <Link to="/shoes" style={{textDecoration:"none"}}>
            <h2 style={{display:"flex",justifyContent:"center",color:"#2196f3"}}>SHOES</h2>
          </Link>
          <div style={{display:"flex",flexDirection:"row",gap:"10px",padding:"10px" }}>
            {mensShoes.slice(0,5).map((item)=>(
              <Link key={item.id} to={`/product/${item.id}`} style={{textDecoration:"none"}}>
                <div>
                  <img src={item.src} alt='loading..' style={{height:"400px",width:"280px",borderRadius:"10px"}} />
                  <div style={{display:"flex",flexDirection:"column",textAlign:"center",listStyleType:"none",fontFamily:"sans-serif"}}>
                    <li>{item.brand}</li>
                    <li>₹{item.price}</li>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

    </div>
  )
}

export default Homepage
