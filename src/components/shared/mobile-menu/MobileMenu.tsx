// crypto marketing mobile menu
'use client';
import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
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
        'fixed top-0 right-0 z-[9999] h-full w-full translate-x-full rounded-none bg-secondary transition-all duration-300 sm:w-1/2 sm:rounded-l-3xl xl:hidden',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
      )}>
      <div className="p-6 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 shrink-0">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
            <figure className="size-10 md:size-12 shrink-0 overflow-hidden rounded-full border-2 border-accent/20 bg-white">
              <Image
                src="/images/fgceosa_logo.jpeg"
                alt="FGCEOSA Logo"
                width={60}
                height={60}
                className="size-full object-contain"
              />
            </figure>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-white">FGCEOSA</span>
              <span className="text-[10px] font-medium tracking-wider text-white/60 uppercase">
                FGC Enugu Ex-students association
              </span>
            </div>
          </Link>
          <MenuCloseButton />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pt-6 pb-12 custom-scrollbar">
          <ul className="space-y-4">
            {menuData.map((item) => (
              <li key={item.id} className="border-b border-white/5 last:border-none pb-4">
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="text-tagline-1 text-white/70 hover:text-white block p-2.5 font-medium transition-all duration-200">
                    {item.title}
                  </Link>
                ) : (
                  <MobileMenuItem
                    id={item.id}
                    title={item.title}
                    hasSubmenu={item.submenu && item.submenu.length > 0}>
                    <ul className="space-y-2 mt-2">
                      {item?.submenu?.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.href}
                            onClick={closeMenu}
                            className="text-lg text-white/60 hover:text-white ml-6 block py-2.5 font-medium transition-all duration-200 border-l border-white/10 pl-4">
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

        {/* Footer CTA */}
        <div className="pt-6 border-t border-white/10 shrink-0">
          <Link
            href="/signup"
            onClick={closeMenu}
            className="w-full bg-white text-secondary py-4 rounded-xl font-bold text-center block hover:bg-accent transition-colors shadow-lg">
            Join the Community
          </Link>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
