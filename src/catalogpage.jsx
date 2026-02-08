import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, List, Heart, Star } from 'lucide-react';
import Logo50 from './Images/Logo50.png';
import Sentra from './Images/SENTRA.png';
import Yadika from './Images/YADIKA.png';
import gedung from './Images/gedung.jpeg';


function CatalogPage({ products, categories, selectedCategory, setSelectedCategory }) {
  const navigate = useNavigate();
  const [view, setView] = useState('grid');

  // Filter products sesuai kategori aktif
  const filteredProducts = products.filter(product =>
    product.categories.includes(selectedCategory)
  );

  return (
    <div style={{position: 'relative', minHeight: '320vh',backdropFilter: 'blur(20px)',fontFamily: '"Poppins", sans-serif',}}>
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${gedung})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          zIndex: -1,
        }}
      />
  <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Bebas+Neue&display=swap');

  /* PRODUCT */
  .product-card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .product-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0,0,0,0.3);
  }

  .category-badge {
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .category-badge:hover {
    transform: scale(1.1);
  }
  .category-badge.active {
    transform: scale(1.15);
  }

  /* FLOAT TEXT */
  @keyframes floatChar {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }

  /* BLUR BACKGROUND */
  .bg-blur {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #9dc3f1, #a78bfa);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    filter: blur(18px);
    transform: scale(1.1);
    z-index: 1;
  }

  /* SCAN LINE */
  .bg-scan {
    position: absolute;
    inset: -50%;
    background: linear-gradient(
      135deg,
      transparent 45%,
      rgba(255,255,255,0.9) 50%,
      transparent 55%
    );
    animation: scanMove 8s linear infinite;
    z-index: 2;
    pointer-events: none;
  }

  @keyframes scanMove {
    0% { transform: translate(-30%, -30%); }
    100% { transform: translate(30%, 30%); }
  }
`}</style>

{/* Hero */}
<div
  style={{
    position: 'relative',
    overflow: 'hidden',
    padding: '40px 20px',
    borderBottom: '2px solid rgba(255,255,255,0.2)'
  }}
>
  {/* BLUR BASE */}
  <div className="bg-blur" 
  />

  {/* MOVING CLEAR LINE */}
  <div className="bg-scan" />

 <div style={{ position: 'relative', zIndex: 3 }}>

 </div>
  {/* CONTENT */}
  <div
    style={{
      position: 'relative',
      zIndex: 3,
      maxWidth: '720px',
      margin: '0 auto',
      textAlign: 'center'
    }}
  >
{/* Title + Logo */}
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px'
  }}
>


  {/* Logo kiri */}
<img
  src={Logo50}
  alt="Logo 50"
  style={{
    width: 'clamp(48px, 7vw, 90px)',
    height: 'auto',
    objectFit: 'contain'
  }}
/>

  {/* Judul */}
<h1
  style={{
    justifySelf: 'center',
    fontSize: 'clamp(2.2rem, 7vw, 6rem)',
    fontFamily: 'montserrat bold, sans-serif',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: '#ffffff',
    margin: 0,
    letterSpacing: '0.04em',
    textShadow: '0 6px 22px rgba(0,0,0,0.45)',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    display: 'flex'
  }}
>
  {'SMK YADIKA 9'.split('').map((char, i) => (
    <span
      key={i}
      style={{
        display: 'inline-block',
        animation: 'floatChar 4s ease-in-out infinite',
        animationDelay: `${i * 0.12}s`
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))}
</h1>



  {/* Logo kanan */}
 <div style={{ display: 'flex', gap: '6px' }}>
  <img src={Yadika} alt="Yadika" style={{ width: 'clamp(44px, 6vw, 80px)' }} />
  <img src={Sentra} alt="Sentra" style={{ width: 'clamp(44px, 6vw, 80px)' }} />
</div>
</div>

    {/* Subtitle */}
    <p
      style={{
        color: 'rgba(255,255,255,0.95)',
        fontSize: '1.3rem',
        fontWeight: '300',
        margin: 0
      }}
    >
      EXPO HUT 50 YADIKA PAMOR
    </p>

  </div>
</div>

      {/* Filter Bar */}
<div
  style={{
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center'
  }}
>
  <div
    style={{
      display: 'flex',
      gap: '10px',
      background: '#f0f0f0',
      padding: '8px',
      borderRadius: '12px'
    }}
  >
    <button
      style={{
        padding: '12px 20px',
        border: 'none',
        background: '#667eea',
        color: 'white',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: '600',
        cursor: 'default'
      }}
    >
      <Grid size={20} /> Grid
    </button>
  </div>
</div>


      {/* Categories */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '40px', justifyContent: 'center' }}>
        {categories.map((cat) => (
          <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
            className={`category-badge ${selectedCategory===cat.id?'active':''}`}
            style={{
              padding: '16px 32px',
              border: 'none',
              borderRadius: '50px',
              background: selectedCategory===cat.id?cat.color:'rgba(255,255,255,0.9)',
              color: selectedCategory===cat.id?'white':'#333',
              fontSize: '1.1rem',
              fontWeight:'700',
              cursor:'pointer'
            }}>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products */}
      <div style={{
        display:'grid',
        gridTemplateColumns:view==='grid'?'repeat(auto-fit, minmax(280px, 320px))':'1fr',
        gap:'30px',
        justifyContent:'center',
        maxWidth:'1400px',
        margin:'0 auto'
      }}>
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card" style={{ background:'white', borderRadius:'24px', overflow:'hidden', display:view==='list'?'flex':'block' }}>
            <div style={{ position:'relative', width:view==='list'?'250px':'100%', height:view==='list'?'280px':'320px', overflow:'hidden' }}>
              <img src={product.image} alt={product.name} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease' }}
                onMouseEnter={e=>e.target.style.transform='scale(1.1)'} onMouseLeave={e=>e.target.style.transform='scale(1)'} />
              <button style={{ position:'absolute', top:'15px', right:'15px', background:'rgba(255,255,255,0.95)', border:'none', borderRadius:'50%', width:'45px', height:'45px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Heart size={22} fill={product.liked?'#FF6B9D':'none'} color={product.liked?'#FF6B9D':'#666'} />
              </button>
            </div>
            <div style={{ padding:'25px', flex:1 }}>
              <h3 style={{ fontSize:'1.4rem', fontWeight:'700', color:'#333', margin:'0 0 10px 0' }}>{product.name}</h3>
              <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'15px' }}>
                <Star fill="#FFD700" color="#FFD700" size={18} />
                <span style={{ fontWeight:'600', color:'#666' }}>{product.rating}</span>
              </div>
              <p style={{ fontSize:'1.8rem', fontWeight:'800', background:'linear-gradient(45deg, #667eea, #764ba2)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', margin:'0 0 20px 0' }}>{product.price}</p>
              <button onClick={()=>navigate(`/product/${product.id}`)} style={{ width:'100%', padding:'16px', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color:'white', border:'none', borderRadius:'14px', fontSize:'1.1rem', fontWeight:'700', cursor:'pointer' }}>
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
