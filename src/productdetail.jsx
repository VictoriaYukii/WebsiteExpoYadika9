import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';
import gedung from './Images/gedung.jpeg';

const TAB_ORDER = ['detail', 'bahan', 'target', 'manfaat'];

function ProductDetail({ products }) {
  const { id, tab = 'detail' } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const product = products.find(p => p.id === parseInt(id));
  const [animClass, setAnimClass] = useState('slide-in');
  const prevTab = useRef(tab);

  if (!product) return <p>Produk tidak ditemukan!</p>;

  const changeTab = (nextTab) => {
    if (nextTab === tab) return;

    const currentIndex = TAB_ORDER.indexOf(tab);
    const nextIndex = TAB_ORDER.indexOf(nextTab);

    setAnimClass(nextIndex > currentIndex ? 'slide-left' : 'slide-right');

    setTimeout(() => {
      navigate(`/product/${id}/${nextTab}`, {
        replace: false,
        state: location.state
      });
      setAnimClass('slide-in');
    }, 200);
  };

  const handleBack = () => navigate('/', { replace: true });

  useEffect(() => {
    setAnimClass('slide-in');
  }, [tab]);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        fontFamily: '"Poppins", sans-serif',
        color: 'white'
      }}
    >
      {/* === BLUR BACKGROUND IMAGE === */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${gedung})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          transform: 'scale(1.25)',
          zIndex: 0
        }}
      />

      {/* === OVERLAY === */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1
        }}
      />

      {/* === CONTENT === */}
      <div style={{ position: 'relative', zIndex: 2, padding: '40px 20px' }}>
        <style>{`
          .slide-in { animation: slideIn 0.45s ease forwards; }
          .slide-left { animation: slideLeft 0.25s ease forwards; }
          .slide-right { animation: slideRight 0.25s ease forwards; }

          @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideLeft {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(-40px); }
          }

          @keyframes slideRight {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(40px); }
          }
        `}</style>

        {/* === TITLE (MOBILE SAFE) === */}
        <h1
          style={{
            textAlign: 'center',
            fontFamily: '"Anton", sans-serif',
            fontSize: 'clamp(1.8rem, 7vw, 4.2rem)',
            marginBottom: '32px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            lineHeight: 1.15,
            padding: '0 16px',
            wordBreak: 'break-word',
            overflowWrap: 'anywhere',
            textShadow: '0 10px 22px rgba(0,0,0,0.5)'
          }}
        >
          {product.name}
        </h1>

        {/* === CARD === */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background: 'rgba(235, 23, 23, 0)',
            backdropFilter: 'blur(20px)',
            borderRadius: '30px',
            padding: '30px',
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap'
          }}
        >
          {/* IMAGE */}
          <div style={{ width: '300px', position: 'relative', margin: '0 auto' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '24px',
                objectFit: 'cover'
              }}
            />
            <button
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer'
              }}
            >
              <Heart size={24} fill={product.liked ? '#FF6B9D' : 'none'} />
            </button>
          </div>

          {/* CONTENT */}
          <div style={{ flex: 1 }}>
            {/* TABS */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '25px', flexWrap: 'wrap' }}>
              {[
                ['detail', 'Detail'],
                ['bahan', 'Bahan'],
                ['target', 'Target Pasar'],
                ['manfaat', 'Manfaat']
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => changeTab(key)}
                  style={{
                    padding: '12px 22px',
                    borderRadius: '12px',
                    border: 'none',
                    fontWeight: '700',
                    cursor: 'pointer',
                    background:
                      tab === key
                        ? 'linear-gradient(135deg,#667eea,#764ba2)'
                        : 'rgba(255,255,255,0.9)',
                    color: tab === key ? 'white' : '#333'
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT */}
            <div
              key={tab}
              className={animClass}
              style={{
                background: 'rgba(255, 255, 255, 0.96)',
                color: '#333',
                padding: '25px',
                borderRadius: '16px',
                minHeight: '160px'
              }}
            >
              {tab === 'detail' && <p>{product.description}</p>}
              {tab === 'bahan' && <p>{product.bahan || 'Belum tersedia'}</p>}
              {tab === 'target' && <p>{product.targetPasar || 'Belum tersedia'}</p>}
              {tab === 'manfaat' && <p>{product.manfaat || 'Belum tersedia'}</p>}
            </div>

            {/* BACK */}
            <button
              onClick={handleBack}
              style={{
                marginTop: '25px',
                width: '100%',
                padding: '16px',
                borderRadius: '14px',
                border: 'none',
                fontWeight: '700',
                background: 'linear-gradient(135deg,#667eea,#764ba2)',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              ⬅ Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
