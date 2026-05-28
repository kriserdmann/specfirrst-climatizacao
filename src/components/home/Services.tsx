import { Container } from "../ui/Container";
import { Snowflake, WashingMachine, Microwave, CircuitBoard } from "lucide-react";

const services = [
  {
    icon: <Snowflake size={40} />,
    title: "Ar Condicionado",
    desc: "Instalação, limpeza e manutenção de todas as marcas. Técnicos credenciados."
  },
  {
    icon: <WashingMachine size={40} />,
    title: "Lavadoras e Secadoras",
    desc: "Conserto de máquina de lavar, lava e seca e secadora. Peças originais."
  },
  {
    icon: <CircuitBoard size={40} />,
    title: "Conserto de Placas",
    desc: "Reparo especializado em placas eletrônicas de equipamentos de refrigeração."
  },
  {
    icon: <Microwave size={40} />,
    title: "Eletrodomésticos",
    desc: "Manutenção em geladeiras e micro-ondas. Garantia total do serviço."
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-accent-600 font-bold tracking-wider uppercase text-sm mb-2">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
            Soluções completas para sua casa ou empresa
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h4>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
