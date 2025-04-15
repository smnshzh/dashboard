'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'خانه', href: '/' },
    { name: 'درباره ما', href: '/about' },
    { name: 'نقشه', href: '/map' },
    { name: 'تماس', href: '/contact' },
  ];

  return (
    <nav className="navbar" dir='rtl'>
      <div className="navbar-container">
        {/* لوگو */}
        <div className="navbar-logo">
          <Link href="/">لوگوی شما</Link>
        </div>

        {/* منوی دسکتاپ */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`navbar-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* دکمه منوی موبایل */}
        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="نمایش/پنهان کردن منو"
        >
          <span className={`navbar-toggle-icon ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* منوی موبایل */}
      <div className={`navbar-mobile ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`navbar-mobile-link ${pathname === link.href ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}