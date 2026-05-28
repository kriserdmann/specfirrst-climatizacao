import { Container } from "@/components/ui/Container";
import { Services } from "@/components/home/Services";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Serviços | Ar Condicionado e Eletrodomésticos",
  description: "Instalação, manutenção, limpeza de ar condicionado e conserto de lavadoras, secadoras, microondas e geladeiras.",
};

export default function Servicos() {
  return (
    <div className="bg-white">
      <div className="bg-primary-900 py-20 text-white text-center">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Catálogo de Serviços</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluções técnicas especializadas com garantia de qualidade. Atendemos Joinville e região metropolitana com agilidade.
          </p>
        </Container>
      </div>
      
      {/* Detalhamento com imagens */}
      <Container className="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50">
            <Image 
              src="/images/service-ac.jpg" 
              alt="Manutenção de Ar Condicionado" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold font-heading text-primary-900 mb-6">Especialistas em Climatização</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Realizamos a instalação e manutenção preventiva e corretiva de sistemas de ar condicionado (Split, Inverter, Cassete, Piso Teto). A limpeza regular garante não apenas o resfriamento ideal, mas também a saúde da sua família eliminando fungos e bactérias.
            </p>
            <ul className="space-y-3 text-gray-800 font-semibold mb-8">
              <li>✓ Carga de gás (Fluidos refrigerantes)</li>
              <li>✓ Higienização química profunda</li>
              <li>✓ Conserto de vazamentos</li>
              <li>✓ Infraestrutura para obras</li>
            </ul>
            <a href="https://wa.me/5547999707590" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent-600 font-bold hover:text-accent-700 transition-colors">
              Agendar visita técnica para Ar Condicionado &rarr;
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold font-heading text-primary-900 mb-6">Eletrodomésticos Linha Branca</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Sua máquina de lavar parou de centrifugar ou a geladeira não gela? Nossa equipe possui vasta experiência no reparo de linha branca multimarca. Trocamos peças e recuperamos equipamentos aumentando a vida útil do seu eletrodoméstico.
            </p>
            <ul className="space-y-3 text-gray-800 font-semibold mb-8">
              <li>✓ Lavadoras de roupas (Top Load e Front Load)</li>
              <li>✓ Lava e Seca e Secadoras</li>
              <li>✓ Geladeiras (Frost Free, Duplex, Side by Side)</li>
              <li>✓ Micro-ondas e conserto de placas eletrônicas</li>
            </ul>
            <a href="https://wa.me/5547999707590" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent-600 font-bold hover:text-accent-700 transition-colors">
              Solicitar conserto de Eletrodomésticos &rarr;
            </a>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50">
            <Image 
              src="/images/service-appliance.jpg" 
              alt="Conserto de Geladeiras e Lavadoras" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </Container>
      
      {/* Reaproveitando o componente Services da Home (Cards) */}
      <div className="bg-gray-50 pt-1">
        <Services />
      </div>
      
      <Container className="py-24">
        <div className="bg-white rounded-3xl p-8 md:p-16 text-center border shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-50" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-primary-900 mb-6">Precisa de algo que não está na lista?</h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Nossa equipe técnica é multidisciplinar e também atende a projetos de refrigeração comercial, reparo de placas específicas e instalações complexas.
            </p>
            <a 
              href="https://wa.me/5547999707590"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-primary-900 hover:bg-primary-800 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              Consultar Disponibilidade com Especialista
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
