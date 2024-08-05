import { Link } from '@/navigation';
import NavDesktop from './NavDesktop';
import Language from './Language';
import Image from 'next/image';

export default function NavBar() {
  return (
    <>
      <header className="sticky inset-0 z-50  border-b bg-background/90 backdrop-blur-md">
        <div className="container flex h-14 items-center gap-x-6">
          <Link href={'/'}>
            <Image src="/logo.png" alt="Petty's Paws Logo" width={50} height={50} priority />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-x-4 lg:justify-between">
            {/*   <NavigationDesktop /> */}
            <NavDesktop />
            {/* moblieNav */}
            <div className="hidden items-center gap-2 lg:flex">
              {/* <ModeToggle /> */}
              <Language />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
