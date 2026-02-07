import React, { useState } from 'react';
import { Grid, List, Heart, Star } from 'lucide-react';

export default function ProductCatalog() {
  const [view, setView] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua Produk', color: '#FF6B9D' },
    { id: 'electronics', name: 'Elektronik', color: '#4ECDC4' },
    { id: 'fashion', name: 'Fashion', color: '#FFE66D' },
    { id: 'home', name: 'Home & Living', color: '#95E1D3' },
    { id: 'beauty', name: 'Kecantikan', color: '#F38181' },
  ];

  const products = [
    { id: 1, name: 'Wireless Earbuds Pro', category: 'electronics', price: 'Rp 899.000', rating: 4.8, image: 'https://images.unsplash.com/photo-1590658165737-15a047b7a3b8?w=400', liked: false },
    { id: 2, name: 'Minimalist Backpack', category: 'fashion', price: 'Rp 450.000', rating: 4.6, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', liked: true },
    { id: 3, name: 'Smart LED Lamp', category: 'home', price: 'Rp 320.000', rating: 4.9, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', liked: false },
    { id: 4, name: 'Organic Skincare Set', category: 'beauty', price: 'Rp 680.000', rating: 4.7, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400', liked: false },
    { id: 5, name: 'Mechanical Keyboard', category: 'electronics', price: 'Rp 1.250.000', rating: 4.9, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400', liked: true },
    { id: 6, name: 'Cotton T-Shirt Basic', category: 'fashion', price: 'Rp 159.000', rating: 4.5, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', liked: false },
    { id: 7, name: 'Ceramic Plant Pot', category: 'home', price: 'Rp 180.000', rating: 4.8, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400', liked: false },
    { id: 8, name: 'Facial Serum Vitamin C', category: 'beauty', price: 'Rp 425.000', rating: 4.6, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400', liked: true },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      fontFamily: '"Poppins", sans-serif',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Bebas+Neue&display=swap');
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
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
      `}</style>

      {/* Hero Header */}
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(20px)',
        borderBottom: '2px solid rgba(255,255,255,0.2)',
        padding: '40px 20px',
        animation: 'fadeInUp 0.8s ease',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontFamily: '"Bebas Neue", sans-serif',
            background: 'linear-gradient(45deg, #fff, #ffd6ff, #e7c6ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center',
            margin: '0 0 20px 0',
            letterSpacing: '0.05em',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}>
            KATALOG PRODUK
          </h1>
          <p style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.95)',
            fontSize: '1.3rem',
            fontWeight: '300',
            margin: 0,
          }}>
            Temukan produk favorit Anda
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Filter Bar */}
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '24px',
          padding: '30px',
          marginBottom: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
          animation: 'scaleIn 0.6s ease 0.2s both',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div style={{
            display: 'flex',
            gap: '10px',
            background: '#f0f0f0',
            padding: '8px',
            borderRadius: '12px',
          }}>
            <button
              onClick={() => setView('grid')}
              style={{
                padding: '12px 20px',
                border: 'none',
                background: view === 'grid' ? '#667eea' : 'transparent',
                color: view === 'grid' ? 'white' : '#666',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
            >
              <Grid size={20} /> Grid
            </button>
            <button
              onClick={() => setView('list')}
              style={{
                padding: '12px 20px',
                border: 'none',
                background: view === 'list' ? '#667eea' : 'transparent',
                color: view === 'list' ? 'white' : '#666',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
            >
              <List size={20} /> List
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          marginBottom: '40px',
          justifyContent: 'center',
          animation: 'fadeInUp 0.6s ease 0.4s both',
        }}>
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`category-badge ${selectedCategory === cat.id ? 'active' : ''}`}
              style={{
                padding: '16px 32px',
                border: 'none',
                borderRadius: '50px',
                background: selectedCategory === cat.id ? cat.color : 'rgba(255,255,255,0.9)',
                color: selectedCategory === cat.id ? 'white' : '#333',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: selectedCategory === cat.id ? `0 8px 25px ${cat.color}80` : '0 4px 15px rgba(0,0,0,0.1)',
                animation: `scaleIn 0.4s ease ${0.5 + idx * 0.1}s both`,
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid/List */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: view === 'grid' ? 'repeat(auto-fill, minmax(280px, 1fr))' : '1fr',
          gap: '30px',
        }}>
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                display: view === 'list' ? 'flex' : 'block',
                animation: `fadeInUp 0.5s ease ${0.6 + idx * 0.1}s both`,
              }}
            >
              <div style={{
                position: 'relative',
                width: view === 'list' ? '250px' : '100%',
                height: view === 'list' ? '100%' : '300px',
                overflow: 'hidden',
              }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <button style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(255,255,255,0.95)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                }}>
                  <Heart
                    size={22}
                    fill={product.liked ? '#FF6B9D' : 'none'}
                    color={product.liked ? '#FF6B9D' : '#666'}
                  />
                </button>
              </div>

              <div style={{ padding: '25px', flex: 1 }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#333',
                  margin: '0 0 10px 0',
                }}>
                  {product.name}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '15px',
                }}>
                  <Star fill="#FFD700" color="#FFD700" size={18} />
                  <span style={{ fontWeight: '600', color: '#666' }}>
                    {product.rating}
                  </span>
                </div>

                <p style={{
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: '0 0 20px 0',
                }}>
                  {product.price}
                </p>

                <button style={{
                  width: '100%',
                  padding: '16px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '14px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          }}>
            <p style={{
              fontSize: '1.8rem',
              color: '#666',
              fontWeight: '600',
            }}>
              Tidak ada produk ditemukan 😔
            </p>
          </div>
        )}
      </div>
    </div>
  );
}