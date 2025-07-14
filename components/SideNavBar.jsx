'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const SideNavBar = ({ links }) => {
  const [active, setActive] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  const toggleContainerClasses =
    'z-60 cursor-pointer transition-all ease-in-out duration-500';
  const genericBurgerLine =
    'z-60 w-6 h-[3px] my-[8px] bg-primary transition-all ease-in-out duration-500';
  const menuContainer =
    'absolute z-40 flex flex-col items-center justify-around w-full h-screen -left-8 top-6 backgroundImage3 bg-primary shadow-lg transition-all ease-in-out duration-500 transform';

  /*  useEffect(() => {
    const content = document.getElementById('blur');
    if (content) {
      content.style.filter = active ? "blur(8px)" : "none";
    }
  }, [active]); */

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (!active) {
      setMenuVisible(true);
      setTimeout(() => setActive(true), 10);
    } else {
      setActive(false);
      setTimeout(() => setMenuVisible(false), 500);
    }
  };

  // New function to close the menu when a link is clicked.
  const closeMenu = () => {
    setActive(false);
    setTimeout(() => setMenuVisible(false), 500);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        if (active) {
          setActive(false);
          setTimeout(() => setMenuVisible(false), 500);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [active]);

  return (
    <div>
      <nav>
        <div
          onClick={toggleMenu}
          ref={toggleRef}
          className={toggleContainerClasses}
        >
          <div
            className={`${genericBurgerLine} ${
              active
                ? 'absolute z-30 bg-primary rotate-45 translate-y-0.2 -translate-x-0.5 w-8'
                : ''
            }`}
          ></div>
          <div
            className={`${genericBurgerLine} m-1 w-5 ${
              active ? 'absolute bg-primary translate-x-5 opacity-0' : ''
            }`}
          ></div>
          <div
            className={`${genericBurgerLine} ${
              active
                ? 'absolute z-30 bg-primary -rotate-45 -translate-y-0.3 -translate-x-0.5 w-8'
                : ''
            }`}
          ></div>
        </div>
      </nav>

      {menuVisible && (
        <div
          ref={menuRef}
          className={`${menuContainer} flex flex-col items-center justify-around ${
            active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <ul className="flex flex-col w-[70%] h-[70%] justify-between items-center">
            {links.map((link, index) => (
              <li
                key={index}
                className="bg-zinc-200 text-2xl w-full p-4 text-center text-secondary font-light transition-all ease-in-out duration-300 transform active:bg-petroMain  rounded-full border-b"
              >
                <Link href={link.href} onClick={closeMenu}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideNavBar;
