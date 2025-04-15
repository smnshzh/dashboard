// src/app/map/page.js
"use client"; // این خط حتماً باید اضافه شود

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// تنظیم آیکون‌های Leaflet فقط در سمت کلاینت
if (typeof window !== "undefined") {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

// بارگذاری دینامیکی کامپوننت‌های Leaflet
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

export default function MapPage() {
  // نقاط مشخص شده روی نقشه
  const points = [
    { name: 'Point A', position: [35.6892, 51.3890] }, // تهران
    { name: 'Point B', position: [32.6539, 51.6694] }, // اصفهان
    { name: 'Point C', position: [36.2921, 59.6097] }, // مشهد
  ];

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      
      <MapContainer
        center={[35.6892, 51.3890]} // مرکز نقشه
        zoom={6}
        style={{ height: '90%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* نمایش نقاط مشخص شده */}
        {points.map((point, index) => (
          <Marker key={index} position={point.position}>
            <Popup>{point.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}