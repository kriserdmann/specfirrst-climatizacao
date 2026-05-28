import { Container } from "../ui/Container";
import { Wrench, ShieldCheck, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-primary-900 text-white overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800" />
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-sm font-semibold text-primary-100 border border-primary-700">
              <ShieldCheck size={16} /> Especialistas em Joinville - SC
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Manutenção Especializada em Climatização e Refrigeração
            </h1>
            <p className="text-lg lg:text-xl text-primary-100 mb-8 leading-relaxed max-w-xl">
              Conserto e instalação de ar-condicionado, lavadoras, geladeiras e mais. 
              Atendimento rápido, técnico credenciado e com garantia de qualidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5547999707590" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 text-white text-center px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Solicitar Orçamento
              </a>
              <a 
                href="#servicos" 
                className="bg-white/10 hover:bg-white/20 text-white text-center px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
              >
                Ver Serviços
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Clock className="text-accent-500" size={32} />
                <div>
                  <div className="font-bold text-2xl">+7 anos</div>
                  <div className="text-primary-200 text-sm">de mercado</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="text-accent-500" size={32} />
                <div>
                  <div className="font-bold text-2xl">+3.000</div>
                  <div className="text-primary-200 text-sm">clientes felizes</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="w-full h-[500px] bg-gradient-to-tr from-primary-800 to-primary-600 rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
