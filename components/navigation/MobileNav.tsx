'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/constants';

import { MenuIcon } from 'lucide-react';
import { Link } from '@/navigation';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('Navigation');

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="focus:outline-none" aria-label="Open categories">
            <MenuIcon />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">{t('navigate')}</h2>
              <div className="space-y-1">
                {navItems.map((items) => (
                  <Link
                    href={items.href}
                    key={items.id}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={handleLinkClick}
                  >
                    {items.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
