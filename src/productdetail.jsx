import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

function ProductDetail({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Produk tidak ditemukan!</p>;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      fontFamily: '"Poppins", sans-serif',
      padding: '40px 20px',
      color: 'white'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Bebas+Neue&display=swap');
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      `}</style>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '40px', animation: 'fadeInUp 0.8s ease' }}>
        <h1 style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          background: 'linear-gradient(45deg, #fff, #ffd6ff, #e7c6ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          margin: 0
        }}>
          {product.name}
        </h1>
      </div>

      {/* Product Card */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '24px',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        display: 'flex',
        gap: '40px',
        padding: '30px',
        animation: 'scaleIn 0.6s ease 0.2s both',
        flexWrap: 'wrap'
      }}>
        {/* Foto */}
        <div style={{ flex: '1', minWidth: '400px', maxWidth: '400px', position: 'relative' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '400px',
              borderRadius: '24px',
              objectFit: 'cover',
            }}
          />
          <button style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(255,255,255,0.95)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <Heart size={24} fill={product.liked ? '#FF6B9D' : 'none'} color={product.liked ? '#FF6B9D' : '#fff'} />
          </button>
        </div>

        {/* Deskripsi */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
          <p style={{ fontSize: '1.3rem' }}><strong>Kategori:</strong> {product.category}</p>
          <p style={{ fontSize: '1.3rem' }}><strong>Deskripsi:</strong> {product.description}</p>

          <button onClick={() => navigate(-1)} style={{
            marginTop: '20px',
            padding: '16px',
            borderRadius: '14px',
            border: 'none',
            fontWeight: '700',
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            cursor: 'pointer'
          }}>
            ⬅ Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
