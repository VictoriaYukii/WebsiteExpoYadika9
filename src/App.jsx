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
      detail: 'Bantal lembut dengan gambar lucu, cocok untuk dekorasi kamar dan tidur nyaman.',
      bahan: [
        'Bantal Polos Ukuran 40x40 cm',
        'Kain Print Gambar',
      ],
      targetPasar: 'Target pasarnya merupakan individu yang menyukai dekorasi kamar unik dan personalisasi barang-barang rumah tangga, seperti remaja, anak muda, dan pecinta seni.',
    },
    {
      id: 2,
      name: 'Kalender Bertema',
      categories: ['Home', 'All'],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      liked: false,
      detail: 'Kalender kreatif dengan desain menarik, bisa untuk catatan harian atau dekorasi meja.',
      bahan: '-',
      targetPasar: 'Test tulisan',
    },
    {
      id: 3,
      name: 'Arduino Product',
      categories: ['Electronics', 'All'],
      image: ArduinoImg,
      liked: true,
      detail: 'Alat bantu navigasi untuk penyandang tunanetra menggunakan sensor ultrasonik dan vibration motor yang dikendalikan oleh arduino.',
      bahan: [ 
      'Breadboard Mini',
      'Arduino Uno R3',
      'Cable jumper',
      'Cable Jack',
      'Battery Holder 9v',
      'Sensor Ultrasonik',
      'LED',
      'Vibration Motor',
      'Tongkat',
      'Buzzer',
      ],
      targetPasar: [
        'Penyandang tunanetra yang membutuhkan alat bantu navigasi untuk mendeteksi rintangan di sekitarnya.',
        'Individu atau organisasi yang peduli terhadap inklusi sosial dan aksesibilitas bagi penyandang disabilitas.',
        'Sekolah atau lembaga pelatihan yang fokus pada pengembangan teknologi bantu untuk penyandang disabilitas.',
      ],
      manfaat: [
        'Membantu penyandang tunanetra dalam navigasi dan deteksi rintangan di sekitarnya.',
        'Membantu mendeteksi lubang jalan, got, atau penurunan permukaan yang berbahaya.',
        'Mengurangi resiko terjatuh atau terpeleset',
      ],
    },
    {
      id: 4,
      name: 'Minuman Herbal',
      categories: ['Home', 'All'],
      image: Minuman,
      liked: true,
      description: 'Minuman herbal yang menyegarkan dan menyehatkan, terbuat dari bahan alami pilihan.',
      bahan: [
        'Bunga Telang 50 lembar',
        'Andaliman 30 gram',
        'Daun Mangkokan 1 1/2 lembar',
        'Sereh 2 batang',
        'Daun Pandan 1/2 lembar',
        'Jahe 10 gram',
        'Kayu Manis 1 batang',
        'Air ± 1 liter'
      ],
      targetPasar: [
        'Gen X & Millenial : Fokus pada khasiat kontrol gula darah dan kolesterol (Andaliman & Kayu Manis)',
        'Gen Z & Gen Alpha : Fokus pada visual warna telang yang aesthetic dan pengalaman rasa unik "Getar" andaliman'
      ],
      manfaat: [
        'Mengontrol Kadar Gula Darah: Kombinasi kayu manis dan andaliman secara klinis membantu meningkatkan sensitivitas insulin dan mengatur penyerapan glukosa',
        'Relaksasi dan Detoksifikasi Alami : Perpaduan sereh dan pandan memberikan efek penenang (anti-cemas) serta membantu proses pembersihan racun dalam tubuh melalui sistem pencernaan.',
        'dan masih banyak lagi.',
      ],
      varian : [
        'Original',
        'Jeruk Nipis',
        'Gula Aren',
      ],
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
      detail: 'Kipas angin yang nyaman digunakan di rumah, cocok untuk kamar atau ruang terbuka.',
      bahan: [
        'Frame kipas polos (Warna Bebas)',
        'Kertas HVS A4 (Untuk Desain)',
        'Laminating (Untuk Melapisi Desain)',
        'Lem Perekat (Untuk Menempelkan Desain pada Frame Kipas)',
      ],
      targetPasar: 'para pengguna kipas angin yang ingin memiliki kipas dengan desain unik sesuai selera mereka.',
    },
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
