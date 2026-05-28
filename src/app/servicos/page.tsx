import { Container } from "@/components/ui/Container";
import { Services } from "@/components/home/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Serviços | Ar Condicionado e Eletrodomésticos",
  description: "Instalação, manutenção, limpeza de ar condicionado e conserto de lavadoras, secadoras, microondas e geladeiras.",
};

export default function Servicos() {
  return (
    <div className="bg-white">
      <div className="bg-primary-900 py-16 text-white text-center">
        <Container>
          <h1 className="text-4xl font-bold font-heading mb-4">Catálogo de Serviços</h1>
          <p className="text-primary-100 max-w-2xl mx-auto">
            Soluções técnicas especializadas com garantia de qualidade. Atendemos Joinville e região.
          </p>
        </Container>
      </div>
      
      {/* Reaproveitando o componente Services da Home */}
      <Services />
      
      <Container className="py-16">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-900 mb-4">Precisa de algo que não está na lista?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Nossa equipe técnica é multidisciplinar e pode ajudar com outros equipamentos de refrigeração comercial e residencial.
          </p>
          <a 
            href="https://wa.me/5547999707590"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </Container>
    </div>
  );
}
