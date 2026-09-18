import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { About } from './pages/About';
import { MenuPage } from './pages/Menu';
import { Activities } from './pages/Activities';
import { GalleryPage } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return <BrowserRouter><Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/om-oss" element={<About />} />
    <Route path="/mat-og-drikke" element={<MenuPage />} />
    <Route path="/aktiviteter" element={<Activities />} />
    <Route path="/galleri" element={<GalleryPage />} />
    <Route path="/kontakt" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes></Layout></BrowserRouter>;
}
