"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Image from "next/image";
import Link from "next/link";
import products from "@/app/jsonData/ProductsData.json";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Trending() {

    const addToWishlist = (product: any) => {
        const stored = localStorage.getItem('wishlist');
        let wishlist = stored ? JSON.parse(stored) : [];

        const exists = wishlist.some((item: any) => item.id === product.id);
        
        if(exists) {
            toast.info(' Já está nos favoritos!');
            return;
        }

        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));

        toast.success(' Adicionado aos favoritos!');
    };

    const addCart = (product: any) => {
        const stored = localStorage.getItem('cart');
        let cart = stored ? JSON.parse(stored) : [];

        const exists = cart.some((item: any) => item.id === product.id);
        
        if(exists) {
            toast.info(' Produto já está no carrinho!');
            return;
        }

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        toast.success(' Adicionado ao carrinho!');
    };

    return (
        <>
            <section className="bg-[var(--prim-light)] px-[8%] py-16 lg:px-[10%]">
                <div className="mx-auto max-w-7xl">
                    
                    {/* Header */}
                    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="golos-text text-lg text-[var(--pink)]">
                                Produtos
                            </p>

                            <h2 className="GolosText text-4xl text-[var(--black)]">
                                Trending Products
                            </h2>
                        </div>

                        <button className="rounded-md bg-[var(--pink)] px-5 py-3 text-white transition-all duration-300 hover:opacity-90">
                            Ver Todos
                        </button>
                    </div>

                    {/* Carrossel */}
                    <div className="trending-swiper">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={24}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 3 },
                            }}
                        >
                            {products.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2">
                                        
                                        {/* Área da imagem com ícones flutuantes */}
                                        <div className="relative bg-[#FFF7EC] p-8">
                                            {/* Ícones de ação */}
                                            <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
                                                <button
                                                    onClick={() => addToWishlist(item)}
                                                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-[var(--pink)] shadow-md transition-all duration-300 hover:bg-[var(--pink)] hover:text-white hover:scale-110"
                                                    aria-label="Favoritar"
                                                >
                                                    <i className="bi bi-heart text-lg"></i>
                                                </button>

                                                <button
                                                    onClick={() => addCart(item)}
                                                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-[var(--pink)] shadow-md transition-all duration-300 hover:bg-[var(--pink)] hover:text-white hover:scale-110"
                                                    aria-label="Carrinho"
                                                >
                                                    <i className="bi bi-cart3 text-lg"></i>
                                                </button>
                                            </div>

                                            {/* Imagem do produto */}
                                            <Link href={`/produto/${item.id}`}>
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={250}
                                                    height={250}
                                                    className="mx-auto h-[220px] w-auto cursor-pointer object-contain transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </Link>
                                        </div>

                                        {/* Conteúdo do produto */}
                                        <div className="p-6">
                                            <p className="text-sm text-[var(--accent)]">
                                                {item.category}
                                            </p>

                                            <Link href={`/produto/${item.id}`}>
                                                <h3 className="GolosText mt-2 cursor-pointer text-2xl text-[var(--black)] transition-colors duration-300 hover:text-[var(--pink)]">
                                                    {item.name}
                                                </h3>
                                            </Link>

                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="flex flex-col">
                                                    <span className="text-2xl font-semibold text-[var(--pink)]">
                                                        R$ {item.price}
                                                    </span>
                                                    {item.oldPrice && (
                                                        <span className="text-sm text-gray-400 line-through">
                                                            R$ {item.oldPrice}
                                                        </span>
                                                    )}
                                                </div>

                                                <Link href={`/produto/${item.id}`}>
                                                    <button className="rounded-md bg-[var(--pink)] px-4 py-2 text-white transition-all duration-300 hover:opacity-90">
                                                        Comprar
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}