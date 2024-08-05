'use client';

import { useState } from 'react';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { navItems } from '@/constants';
import { useTranslations } from 'next-intl';
const NavDesktop = () => {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);

  const t = useTranslations('Navigation');

  const handleNavItemHover = (navId: string) => {
    setHoveredNavItem(navId);
  };

  const handleNavItemMouseLeave = () => {
    setHoveredNavItem(null);
  };

  return (
    <nav className="container mx-auto flex justify-between items-center">
      <ul className="flex">
        {navItems.map((nav) => (
          <li
            key={nav.id}
            onMouseMove={() => handleNavItemHover(nav.id)}
            onMouseLeave={handleNavItemMouseLeave}
            className="relative px-4 py-2"
          >
            <Link href={nav.href} className="relative z-20 text-sm">
              {t(nav.label)}
            </Link>
            {hoveredNavItem === nav.id && (
              <motion.span
                layoutId="hover"
                transition={{ type: 'spring', duration: 0.4 }}
                className="absolute inset-0 bg-accent rounded-lg"
              ></motion.span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDesktop;
