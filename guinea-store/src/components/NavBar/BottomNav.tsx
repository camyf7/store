'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Loja', href: '/loja' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Produtos',
    href: '/produtos',
    dropdown: [
      { label: 'Rações', href: '/produtos/racoes' },
      { label: 'Brinquedos', href: '/produtos/brinquedos' },
      { label: 'Casinhas', href: '/produtos/casinhas' },
      { label: 'Higiene', href: '/produtos/higiene' },
    ],
  },
  { label: 'Fale Conosco', href: '/contato' },
];

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  // Componente do Menu-dot.svg com espaçamento
  const MenuDot = () => (
    <span className="mx-3 inline-block w-2 h-2">
      <Image
        src="/Menu-dot.svg"
        alt="•"
        width={8}
        height={8}
        className="w-full h-full"
      />
    </span>
  );

  return (
    <div
      className={`w-full bg-white py-4 shadow-sm transition-all duration-500 ${
        isFixed ? 'fixed-nav fixed left-0 top-0 z-50' : ''
      }`}
    >
      <div className="flex w-full items-center justify-between px-[8%] text-[var(--text)] lg:px-[16%]">

        {/* Logo mobile */}
        <Link href="/" className="lg:hidden">
          <span className="waffle-mango text-3xl text-[var(--primary)]">Guinea</span>
          <span className="waffle-mango text-3xl text-[var(--pink)]">Store</span>
        </Link>

        {/* Logo desktop ao fixar */}
        {isFixed && (
          <Link href="/" className="hidden lg:block">
            <span className="waffle-mango text-3xl text-[var(--primary)]">Guinea</span>
            <span className="waffle-mango text-3xl text-[var(--pink)]">Store</span>
          </Link>
        )}

        {/* Menu desktop com Menu-dot.svg entre os itens */}
        <div className="hidden justify-center lg:flex">
          <nav className="flex items-center">
            {navLinks.map((link, index) => (
              <div key={link.label} className="flex items-center">
                {index > 0 && <MenuDot />}
                {link.dropdown ? (
                  <div className="group relative">
                    <Link
                      href={link.href}
                      className="golos-text flex items-center gap-1 font-semibold text-[var(--secondary)] transition-colors hover:text-[var(--primary)]"
                    >
                      {link.label}
                      <i className="bi bi-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                    </Link>

                    <div className="absolute left-0 top-full hidden min-w-[180px] rounded-2xl border border-[var(--prim-light)] bg-white p-2 shadow-xl group-hover:block">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="golos-text block rounded-xl px-4 py-2 text-sm text-[var(--secondary)] transition-colors hover:bg-[var(--prim-light)] hover:text-[var(--primary)]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="golos-text font-semibold text-[var(--secondary)] transition-colors hover:text-[var(--primary)]"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Direita desktop */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/login"
            className="golos-text font-semibold text-[var(--secondary)] transition-colors hover:text-[var(--primary)] border-b border-gray-300 pb-0.5"
          >
            Login / Cadastro
          </Link>

          <Link
            href="/carrinho"
            className="relative text-2xl text-[var(--secondary)] transition-colors hover:text-[var(--primary)]"
            aria-label="Carrinho"
          >
            <i className="bi bi-cart3"></i>
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--pink)] text-xs text-white font-bold">
              0
            </span>
          </Link>
        </div>

        {/* Mobile direita */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link href="/carrinho" className="relative text-2xl text-[var(--secondary)]" aria-label="Carrinho">
            <i className="bi bi-cart3"></i>
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--pink)] text-xs text-white font-bold">
              0
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl text-[var(--secondary)]"
            aria-label="Abrir menu"
          >
            <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="mt-3 border-t border-[var(--prim-light)] bg-white lg:hidden">
          <nav className="flex flex-col px-[6%] py-4">
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="golos-text border-b border-gray-100 px-2 py-3 font-semibold text-[var(--secondary)] hover:text-[var(--primary)]"
            >
              Login / Cadastro
            </Link>

            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="border-b border-gray-100 py-1">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(link.label)}
                    className="golos-text flex w-full items-center justify-between rounded-md px-2 py-3 text-left font-semibold text-[var(--secondary)] hover:text-[var(--primary)]"
                  >
                    {link.label}
                    <i
                      className={`ri-arrow-down-s-line transition-transform duration-300 ${
                        openDropdowns[link.label] ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdowns[link.label] ? 'max-h-60' : 'max-h-0'
                    }`}
                  >
                    <div className="flex flex-col gap-2 rounded-xl bg-[var(--prim-light)] p-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="golos-text rounded-lg bg-white px-3 py-2 text-sm text-[var(--secondary)] hover:text-[var(--primary)]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="golos-text border-b border-gray-100 px-2 py-3 font-semibold text-[var(--secondary)] hover:text-[var(--primary)]"
                >
                  {link.label}
                </Link>
              ),
            )}

            {/* Redes sociais mobile */}
            <div className="mt-4 flex items-center gap-4 px-2 text-2xl text-[var(--secondary)]">
              <Link href="https://instagram.com" aria-label="Instagram">
                <i className="bi bi-instagram hover:text-[var(--pink)]"></i>
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook">
                <i className="bi bi-facebook hover:text-[var(--primary)]"></i>
              </Link>
              <Link href="https://wa.me/5512999995555" aria-label="WhatsApp">
                <i className="bi bi-whatsapp hover:text-green-500"></i>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}