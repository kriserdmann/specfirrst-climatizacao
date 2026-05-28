import { Container } from "@/components/ui/Container";
import { ShieldCheck, Users, Target } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Winter Climatização | Referência em Joinville",
  description: "Conheça a história da Winter Climatização. Mais de 7 anos e 3000 clientes satisfeitos em Joinville.",
};

export default function Sobre() {
  return (
    <div className="py-24 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 mb-6">
            Nossa História
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            A <strong>Winter Climatização e Refrigeração</strong> nasceu com um propósito claro: levar conforto, eficiência e honestidade para a casa e empresa dos moradores de Joinville - SC.
            Com mais de 7 anos de mercado, construímos uma reputação sólida baseada em confiança e na qualificação técnica contínua da nossa equipe.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Users className="text-accent-500 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">+3.000 Clientes</h3>
              <p className="text-gray-600 text-sm">Famílias e empresas que confiam em nosso trabalho diário.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <ShieldCheck className="text-accent-500 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Credenciados</h3>
              <p className="text-gray-600 text-sm">Autorizados pelas principais marcas do mercado nacional e internacional.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Target className="text-accent-500 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Foco no Cliente</h3>
              <p className="text-gray-600 text-sm">Orçamentos justos, pontualidade e transparência em todos os serviços.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold font-heading text-primary-900 mb-6">Por que escolher a Winter?</h2>
          <ul className="space-y-4 text-gray-700 mb-12">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 mt-0.5">✓</div>
              <span><strong>Atendimento Ágil:</strong> Sabemos que equipamentos quebrados causam transtornos, por isso priorizamos a rapidez.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 mt-0.5">✓</div>
              <span><strong>Peças Originais:</strong> Utilizamos componentes de alta qualidade para garantir a durabilidade do conserto.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 mt-0.5">✓</div>
              <span><strong>Garantia Estendida:</strong> Todos os nossos serviços acompanham garantia para sua tranquilidade.</span>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
