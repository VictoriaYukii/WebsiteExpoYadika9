import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CatalogPage from './catalogpage';
import ProductDetail from './productdetail';
import ArduinoImg from './Images/arduino.png';
import BantalImg from './Images/bantal.png';
import Kipas from './Images/kipas.png';
import Manik from './Images/manik.png';
import Minuman from './Images/minuman.png';

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
      description: 'Bantal lembut dengan gambar lucu, cocok untuk dekorasi kamar dan tidur nyaman.',
      bahan: '-',
      targetPasar: '-',
      manfaat: '-',
    },
    {
      id: 2,
      name: 'Kalender Bertema',
      categories: ['Home', 'All'],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      liked: true,
      description: 'Kalender kreatif dengan desain menarik, bisa untuk catatan harian atau dekorasi meja.',
      bahan: '-',
      targetPasar: 'Test tulisan',
      manfaat: '-',
    },
    {
      id: 3,
      name: 'Arduino Product',
      categories: ['Electronics', 'All'],
      image: ArduinoImg,
      liked: false,
      description: 'Kit Arduino lengkap untuk eksperimen elektronik, cocok untuk pemula dan hobi.',
      bahan: '-',
      targetPasar: '-',
      manfaat: '-',
    },
    {
      id: 4,
      name: 'Minuman Herbal',
      categories: ['Home', 'All'],
      image: Minuman,
      liked: true,
      description: 'Minuman segar yang menyegarkan, cocok untuk menemani aktivitas sehari-hari.',
      bahan: '-',
      targetPasar: '-',
      manfaat: '-',
    },
    {
      id: 5,
      name: 'Manik Manik Homemade',
      categories: ['Fashion', 'All'],
      image: Manik,
      liked: false,
      description: 'Gantungan kunci buatan tangan, unik dan cocok dijadikan hadiah.',
      bahan: '-',
      targetPasar: '-',
      manfaat: '-',
    },
    {
      id: 6,
      name: 'Kipas Custom Design',
      categories: ['Home', 'All'],
      image: Kipas,
      liked: false,
      description: 'Kipas angin yang nyaman digunakan di rumah, cocok untuk kamar atau ruang terbuka.',
      bahan: '-',
      targetPasar: '-',
      manfaat: '-',
    },
    {
      id: 7,
      name: 'Test',
      categories: ['Home', 'All'],
      image: 'https://images.unsplash.com/photo-1662500015066-2026db62f23e?q=80&w=872',
      liked: false,
      description: 'test aja sih sebenernya mah',
      bahan: '-',
      targetPasar: '-',
      manfaat: '-',
    }
  ];

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

      {/* WAJIB ADA DUA ROUTE INI */}
      <Route
        path="/product/:id"
        element={<ProductDetail products={products} />}
      />
      <Route
        path="/product/:id/:tab"
        element={<ProductDetail products={products} />}
      />
    </Routes>
  );
}

export default App;
