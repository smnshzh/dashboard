// src/app/layout.js
import Navbar from '../components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <title>داشبورد</title>
      </head>
      <body>
        <Navbar /> {/* نوار ناوبری */}
        <main>{children}</main>
      </body>
    </html>
  );
}