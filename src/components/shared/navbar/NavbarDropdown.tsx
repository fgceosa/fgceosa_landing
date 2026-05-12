'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface SubmenuItem {
  id: string;
  label: string;
  href: string;
}

interface NavbarDropdownProps {
  title: string;
  submenu: SubmenuItem[];
  isActive: boolean;
}

const NavbarDropdown = ({ title, submenu, isActive }: NavbarDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <li 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "text-tagline-2 text-accent/80 hover:text-accent flex items-center gap-1 px-3 py-2 font-medium transition-all duration-200 cursor-pointer",
          isOpen && "text-accent"
        )}
      >
        <span>{title}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor" 
          className={cn("size-4 transition-transform duration-300", isOpen && "rotate-180")}
        >
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-full left-0 z-50 pt-2 transition-all duration-300 ease-out",
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <ul className="bg-white dark:bg-background-8 border border-accent/10 rounded-xl shadow-2xl py-2 min-w-[220px]">
          {submenu.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="block px-5 py-2.5 text-sm text-secondary/80 hover:text-secondary dark:text-accent/80 dark:hover:text-accent hover:bg-secondary/5 dark:hover:bg-accent/5 font-medium transition-all duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default NavbarDropdown;
