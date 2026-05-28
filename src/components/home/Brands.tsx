import { Container } from "../ui/Container";

const brands = [
  "Philco", "Fujitsu", "TCL", "Gree", "Komeco", "Elgin", "York", "Agratto"
];

export function Brands() {
  return (
    <section className="py-12 border-b border-gray-100 bg-white">
      <Container>
        <p className="text-center text-sm font-semibold text-gray-400 mb-8 uppercase tracking-widest">
          Marcas Autorizadas e Credenciadas
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, i) => (
            <div key={i} className="text-2xl font-bold font-heading text-gray-800">
              {brand}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
