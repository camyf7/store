import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[var(--prim-light)] px-[8%] py-12 lg:px-[10%]">
      {/* Container principal */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row">
        
        {/* Coluna da esquerda - Texto */}
        <div className="w-full lg:w-1/2">
          <div className="hero-content">
            {/* Título de destaque */}
            <h1 className="GolosText text-5xl font-semibold leading-[1.05] text-[var(--black)] md:text-6xl lg:text-[5rem]">
              O cuidado com seu Animalzinho
              <span className="mt-2 flex items-center gap-3">
                <Image
                  src="/hero-shape1.png"
                  alt="Ícone decorativo"
                  width={40}
                  height={40}
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <span className="text-[var(--second)]">começa aqui</span>
              </span>
              
              
            </h1>

            {/* Descrição frete grátis */}
            <p className="GolosText mt-5 text-lg text-[var(--black)] md:text-xl">
              Fretes grátis nas compras acima de{' '}
              <span className="font-mono text-[var(--second)]">R$150,00</span>
            </p>

            {/* Botões */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="GolosText rounded-md bg-[var(--pink)] px-6 py-3 text-lg text-[var(--white)] transition-all duration-300 hover:opacity-90">
                Comprar
              </button>
              <button className="GolosText rounded-md border border-[var(--pink)] px-6 py-3 text-lg text-[var(--black)] transition-all duration-300 hover:bg-[var(--pink)] hover:text-[var(--white)]">
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>

        {/* Coluna da direita - Imagem Hero com elementos decorativos */}
        <div className="hero-image w-full lg:w-1/2">
          {/* Estrelas/Shapes decorativos */}
          <div className="hero-shape3"></div>
          <div className="hero-shape4"></div>
          
          {/* Formas onduladas */}
          <div className="wave-shape1"></div>
          
          {/* Imagem principal Hero */}
          <Image
            src="/Hero.png"
            alt="Hero Banner"
            width={500}
            height={500}
            className="relative z-10 w-full md:w-[80%] lg:w-[80%] mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}