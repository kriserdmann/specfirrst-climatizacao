import { Container } from "../ui/Container";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Edgar Garcia",
    time: "Há 5 semanas",
    text: "Tanto a instalação quanto limpeza dos aparelhos e do ambiente. Serviço impecável.",
    rating: 5
  },
  {
    name: "Karina Zibell",
    time: "Há 20 semanas",
    text: "Excelente empresa e profissionais. Indico de olhos fechados. Parabéns pelo excelente serviço.",
    rating: 5
  },
  {
    name: "Fabricio Souza",
    time: "Há 37 semanas",
    text: "É a segunda vez que utilizo o serviço de instalação, nunca tive nenhum problema com a primeira instalação. Recomendo os serviços da Winter!",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-accent-600 font-bold tracking-wider uppercase text-sm mb-2">Avaliações Incríveis</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
            O que nossos clientes dizem no Google
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} fill="currentColor" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;{r.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{r.name}</div>
                  <div className="text-sm text-gray-500">{r.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
