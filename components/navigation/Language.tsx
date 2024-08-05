'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import { Link, usePathname } from '@/navigation';
import { locales } from '@/navigation';

export default function Language() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((locale) => (
          <Link key={locale} href={pathname} locale={locale}>
            <DropdownMenuItem>
              {locale === 'en' ? 'English' : locale === 'zh-CN' ? '简体中文' : '繁體中文'}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
