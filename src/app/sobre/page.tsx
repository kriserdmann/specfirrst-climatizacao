import { Container } from "@/components/ui/Container";
import { ShieldCheck, Users, Target, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Winter Climatização | Referência em Joinville",
  description: "Conheça a história da Winter Climatização. Mais de 7 anos e 3000 clientes satisfeitos em Joinville.",
};

export default function Sobre() {
  return (
    <div className="py-24 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 mb-6">
              Nossa História
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <strong>Winter Climatização e Refrigeração</strong> nasceu com um propósito claro: levar conforto, eficiência e honestidade para a casa e empresa dos moradores de Joinville - SC.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Com mais de 7 anos de mercado, construímos uma reputação sólida baseada em confiança e na qualificação técnica contínua da nossa equipe. Não somos apenas instaladores; somos consultores técnicos preocupados em oferecer a melhor solução em climatização e refrigeração para o seu espaço.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-800 font-semibold">
                <CheckCircle2 className="text-accent-500" /> Corpo técnico altamente qualificado
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-semibold">
                <CheckCircle2 className="text-accent-500" /> Ferramentas de última geração
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-semibold">
                <CheckCircle2 className="text-accent-500" /> Transparência total no orçamento
              </li>
            </ul>
          </div>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/about.jpg" 
              alt="Técnico Especializado da Winter Climatização" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Users className="text-accent-500 mb-4" size={40} />
            <h3 className="font-bold text-2xl mb-2 text-primary-900">+3.000 Clientes</h3>
            <p className="text-gray-600">Famílias e empresas que confiam em nosso trabalho diário em Joinville e região metropolitana.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <ShieldCheck className="text-accent-500 mb-4" size={40} />
            <h3 className="font-bold text-2xl mb-2 text-primary-900">Credenciados</h3>
            <p className="text-gray-600">Autorizados oficiais pelas principais marcas do mercado nacional e internacional (Gree, TCL, Philco, etc).</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Target className="text-accent-500 mb-4" size={40} />
            <h3 className="font-bold text-2xl mb-2 text-primary-900">Foco no Cliente</h3>
            <p className="text-gray-600">Orçamentos justos, pontualidade britânica e total transparência antes, durante e após a execução do serviço.</p>
          </div>
        </div>
        
        <div className="bg-primary-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold font-heading mb-6">Por que escolher a Winter?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center text-accent-500 font-bold text-xl mb-4">1</div>
              <h4 className="font-bold text-xl mb-2">Atendimento Ágil</h4>
              <p className="text-primary-100">Sabemos que equipamentos quebrados causam transtornos, por isso priorizamos a rapidez no agendamento e execução.</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center text-accent-500 font-bold text-xl mb-4">2</div>
              <h4 className="font-bold text-xl mb-2">Peças Originais</h4>
              <p className="text-primary-100">Utilizamos apenas componentes de alta qualidade e com certificação para garantir a durabilidade e segurança do conserto.</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center text-accent-500 font-bold text-xl mb-4">3</div>
              <h4 className="font-bold text-xl mb-2">Garantia Estendida</h4>
              <p className="text-primary-100">Confiamos tanto no nosso trabalho que todos os nossos serviços acompanham garantia documentada para sua tranquilidade.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

