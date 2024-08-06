import { Link } from '@/navigation';
import NavDesktop from './NavDesktop';
import Language from './Language';
import { MobileNav } from './MobileNav';

export default function NavBar() {
  return (
    <>
      <header className="sticky inset-0 z-50  border-b bg-background/90 backdrop-blur-md">
        <nav className=" container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-4 flex lg:mr-0 gap-x-2">
              <p className="font-bold text-xl">Pettys Paws</p>
            </Link>
            <div className="hidden lg:block">
              <NavDesktop />
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <Language />
            {/* <ModeToggle />*/}

            <div className=" flex lg:hidden items-center">
              <MobileNav />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
