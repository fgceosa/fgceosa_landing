// crypto marketing mobile menu
'use client';
import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
import logoDark from '@public/images/shared/logo-dark.svg';
import logoIcon from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import MenuCloseButton from './MenuCloseButton';
import MobileMenuItem from './MobileMenuItem';

export interface MobileMenuItemData {
  id: string;
  label: string;
  href: string;
}

export interface MobileMenuGroup {
  id: string;
  title: string;
  href?: string;
  submenu?: MobileMenuItemData[];
}

const MobileMenu = ({ menuData }: { menuData: MobileMenuGroup[] }) => {
  const { isOpen, closeMenu } = useMobileMenuContext();
  return (
    <aside
      className={cn(
        'dark:bg-background-8 scroll-bar fixed top-0 right-0 z-[9999] h-screen w-full translate-x-full rounded-none bg-secondary transition-all duration-300 sm:w-1/2 sm:rounded-l-3xl xl:hidden',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
      )}>
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
            <figure className="size-12 shrink-0 overflow-hidden rounded-full border-2 border-accent/20 bg-white text-center">
              <Image
                src="/images/fgceosa_logo.jpeg"
                alt="FGCEOSA Logo"
                width={60}
                height={60}
                className="size-full object-contain"
              />
            </figure>
            <div className="flex flex-col leading-tight">
              <span className="text-heading-6 font-bold tracking-tight text-accent">FGCEOSA</span>
              <span className="text-tagline-3 font-medium tracking-wider text-accent/80 uppercase">
                FGC Enugu Ex-students association
              </span>
            </div>
          </Link>
          <MenuCloseButton />
        </div>

        <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden pb-10">
          <ul className="space-y-2">
            {menuData.map((item) => (
              <li key={item.id}>
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="text-tagline-1 text-accent/80 hover:text-accent block p-2.5 font-medium transition-all duration-200">
                    {item.title}
                  </Link>
                ) : (
                  <MobileMenuItem
                    id={item.id}
                    title={item.title}
                    hasSubmenu={item.submenu && item.submenu.length > 0}>
                    <ul>
                      {item?.submenu?.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.href}
                            onClick={closeMenu}
                            className="text-tagline-1 text-accent/80 hover:text-accent ml-4 block py-2.5 text-left font-normal transition-all duration-200">
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </MobileMenuItem>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
