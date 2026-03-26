'use client';
import Link from 'next/link';
import Image from 'next/image';
import { BsSearchHeart } from "react-icons/bs";
import { useState } from 'react';

export default function MiddleNav() {
  const [query, setQuery] = useState('');

  return (
    <div className="relative w-full border-b border-[#b8895e] bg-[var(--primary)]">
      <div className="flex items-center justify-between px-[8%] py-3 lg:px-[16%]">

        {/* Logo */}
        <Link href="/" className="text-4xl font-bold lg:text-5xl">
          <span className="waffle-mango text-white">Guinea</span>
          <span className="waffle-mango text-[var(--pink)]">Store</span>
        </Link>

        {/* Search Box */}
        <div className="relative mx-0 ms-6 flex flex-1 flex-col rounded-full bg-white shadow-inner lg:max-w-2xl">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Busque por produtos para seu pig..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 rounded-l-full px-5 py-3 text-sm outline-none golos-text text-[var(--text)]"
            />
            <BsSearchHeart />
          </div>
        </div>

        {/* Support */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <Image
              src="/guinea-pig.png"
              alt="Suporte GuineaStore"
              width={36}
              height={36}
            />
          </div>
          <div className="flex flex-col">
            <span className="golos-text text-[10px] font-bold uppercase tracking-widest text-[var(--pink)]">
              Suporte
            </span>
            <span className="golos-text font-semibold text-white">
              12 98312-1860
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}