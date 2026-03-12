'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi';


export default function MiddleNav() {
    const [query, setQuery] = useState('');

    return (

         <div className="w-full bg-[var(--primary)] border-b border-gray-300 relative">
            <div className="flex items-center justify-between py-3 px-[8%] lg:px-[16%]">

                {/* Logo */}
                <Link href='/' className="text-4xl lg:text-5xl font-bold text-white">
                    <span className="waffle-mango">Guinea</span>
                    <span className="waffle-mango text-[var(--pink)]">Store</span>
                </Link>

                { /* Search box */}
                <div className="relative mx-0 ms-6 flex flex-1 flex-col rounded-lg bg-white lg:max-w-2xl">
                    <div className="flex items-center">
                        <input 
                        type="text"
                        placeholder="Busque por produtos para seu pig"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 rounded-l-lg px-4 py-4 outline-none"
                        />

                        <button className="cursor-pointer px-3 text-2xl">
                        <BiSearch />
                        </button>
                    </div>
                </div>

                { /* Contato */ }
                <div className="flex items-center gap-2">
                    <Image 
                        src='/guinea-pig.png'
                        alt='Suporte'
                        width={50}
                        height={50}
                        />

                        <div className="flex flex-col">
                            <h2 className="GolosText ps-2 text-[var(--pink)] text-xs 
                            font-bold">Suporte</h2>
                            <h1 className="GolosText font-semibold text-[var(--white)]">12 98312-1860</h1>
                        </div>
                </div>
            </div>
         </div>

    )
}

