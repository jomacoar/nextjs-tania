'use client';

import { LayoutGrid, Menu, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { menuLinksPT } from './MenuLinks';

export default function GlassmorphNavbar({ personal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${personal} rounded-full py-3 px-5 md:w-6/12 lg:w-5/12 xl:w-4/12`}
    >
      <div className="lg:flex lg:justify-around">
        {menuLinksPT.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-primary hover:border-1 transition-colors duration-300"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="size-4" />
        </button>
      </div>

      {/* {isOpen && (
        <div className="flex flex-col items-center justify-center gap-3 px-5 py-3 md:hidden">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.title}
            </Link>
          ))}
        </div>
      )} */}
    </nav>
  );
}
