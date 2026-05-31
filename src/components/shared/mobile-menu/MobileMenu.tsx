// crypto marketing mobile menu
'use client';
import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'bg-secondary fixed top-0 right-0 z-[9999] h-full w-full translate-x-full rounded-none transition-all duration-300 sm:w-1/2 sm:rounded-l-3xl xl:hidden',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
      )}>
      <div className="flex h-full flex-col overflow-hidden p-6">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 pb-6">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
            <figure className="border-accent/20 size-10 shrink-0 overflow-hidden rounded-full border-2 bg-white md:size-12">
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
            </div>
          </Link>
          <MenuCloseButton />
        </div>

        {/* Scrollable Content */}
        <div className="custom-scrollbar overflow-x-hidden overflow-y-auto pt-6 pb-12">
          <ul className="space-y-4">
            {menuData.map((item) => {
              const isItemActive = item.href === pathname || item.submenu?.some((sub) => sub.href === pathname);

              return (
                <li key={item.id} className="border-b border-white/5 pb-4 last:border-none">
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        'text-tagline-1 relative block p-2.5 pl-3 font-medium transition-all duration-200',
                        isItemActive ? 'text-white' : 'text-white/70 hover:text-white',
                      )}>
                      {/* Active indicator bar */}
                      {isItemActive && (
                        <span className="absolute top-1/2 left-0 h-6 w-1 -translate-y-1/2 rounded-r-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]"></span>
                      )}
                      {item.title}
                    </Link>
                  ) : (
                    <MobileMenuItem
                      id={item.id}
                      title={item.title}
                      hasSubmenu={item.submenu && item.submenu.length > 0}
                      isRouteActive={!!isItemActive}>
                      <ul className="mt-2 space-y-2">
                        {item?.submenu?.map((subItem) => {
                          const isSubActive = subItem.href === pathname;
                          return (
                            <li key={subItem.id}>
                              <Link
                                href={subItem.href}
                                onClick={closeMenu}
                                className={cn(
                                  'relative ml-6 block border-l border-white/10 py-2.5 pl-6 text-lg font-medium transition-all duration-200',
                                  isSubActive ? 'text-white' : 'text-white/60 hover:text-white',
                                )}>
                                {isSubActive && (
                                  <span className="absolute top-1/2 left-[-1px] h-5 w-1 -translate-y-1/2 rounded-r-full bg-[#d4af37]"></span>
                                )}
                                {subItem.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </MobileMenuItem>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="shrink-0 border-t border-white/10 pt-6">
          <Link
            href="https://fgceoapp.netlify.app/sign-up"
            target="_blank"
            onClick={closeMenu}
            className="text-secondary hover:bg-accent block w-full rounded-xl bg-white py-4 text-center font-bold shadow-lg transition-colors">
            Join the Community
          </Link>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
