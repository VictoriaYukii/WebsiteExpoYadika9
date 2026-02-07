import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CatalogPage from './catalogpage';
import ProductDetail from './productdetail';
import ArduinoImg from './Images/arduino.png';
import BantalImg from './Images/bantal.png';

function App() {
  const categories = [
    { id: 'All', name: 'Semua Produk', color: '#FF6B9D' },
    { id: 'Electronics', name: 'Elektronik', color: '#4ECDC4' },
    { id: 'Fashion', name: 'Fashion', color: '#FFE66D' },
    { id: 'Home', name: 'Home & Living', color: '#95E1D3' },
  ];

  const products = [
    { 
      id: 1, 
      name: 'Bantal Bergambar', 
      categories: ['Home', 'All'],
      image: BantalImg,
      liked: false,
      description: 'Bantal lembut dengan gambar lucu, cocok untuk dekorasi kamar dan tidur nyaman.'
    },
    { 
      id: 2, 
      name: 'Kalender Bertema', 
      categories: ['Home', 'All'],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', 
      liked: true,
      description: 'Kalender kreatif dengan desain menarik, bisa untuk catatan harian atau dekorasi meja.'
    },
    { 
      id: 3, 
      name: 'Arduino Product', 
      categories: ['Electronics', 'All'],
      image: ArduinoImg,  
      liked: false,
      description: 'Kit Arduino lengkap untuk eksperimen elektronik, cocok untuk pemula dan hobi.'
    },
    { 
      id: 4, 
      name: 'Mechanical Keyboard', 
      categories: ['Electronics', 'All'],
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400', 
      liked: true,
      description: 'Keyboard mekanik dengan tactile switch, nyaman untuk mengetik dan gaming.'
    },
    { 
      id: 5, 
      name: 'Manik Manik Homemade', 
      categories: ['Fashion', 'All'],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', 
      liked: false,
      description: 'Gantungan kunci buatan tangan, unik dan cocok dijadikan hadiah.'
    },
    { 
      id: 6, 
      name: 'Ceramic Plant Pot', 
      categories: ['Home', 'All'],
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400', 
      liked: false,
      description: 'Pot keramik elegan untuk tanaman hias, menambah keindahan interior rumah.'
    },
    {
      id: 7,
      name: 'Test',
      categories:['Home','All'],
      image:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400',
      liked: false,
      description: 'test aja sih sebenernya mah'
    }
  ];

  // State kategori disimpan di parent supaya tetap ada saat navigasi
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <CatalogPage 
            products={products} 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
        }
      />
      <Route
        path="/product/:id"
        element={<ProductDetail products={products} />}
      />
    </Routes>
  );
}

export default App;