import Image from "next/image";

const categories = [
  {
    title: "Alimentação",
    image: "/products/feno.png",
  },
  {
    title: "Casinhas",
    image: "/products/toca.png",
  },
  {
    title: "Acessórios",
    image: "/products/bebedouro.png",
  },
  {
    title: "Brinquedos",
    image: "/products/brinquedo.png",
  },
];

export default function Category() {
  return (
    <section className="bg-white px-[8%] py-16 lg:px-[10%]">
      <div className="mx-auto max-w-7xl">
        
        {/* Título */}
        <div className="mb-10 text-center">
          <p className="golos-text text-[var(--pink)] text-lg">
            Categorias
          </p>

          <h2 className="GolosText text-4xl text-[var(--black)]">
            Tudo para seu porquinho
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[var(--prim-light)] p-6 text-center transition-all duration-300 hover:-translate-y-2"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="mx-auto"
              />

              <h3 className="GolosText mt-4 text-xl text-[var(--black)]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}