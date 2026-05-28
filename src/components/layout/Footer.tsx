import Link from "next/link";
import { Container } from "../ui/Container";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300 pt-16 pb-8 border-t-4 border-accent-500">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-4 font-heading">
              WINTER<br/>
              <span className="text-lg font-normal text-primary-100">Climatização & Refrigeração</span>
            </h3>
            <p className="text-primary-100 leading-relaxed">
              Especialistas em instalação e conserto de ar-condicionado e eletrodomésticos em Joinville. 
              Mais de 7 anos no mercado e mais de 3 mil clientes atendidos com garantia e confiança.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-heading">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre a Empresa</Link></li>
              <li><Link href="/servicos" className="hover:text-white transition-colors">Nossos Serviços</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato e Localização</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-heading">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent-500 shrink-0 mt-1" size={20} />
                <span>Av. Kurt Meinert, 76<br/>Paranaguamirim, Joinville - SC</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent-500 shrink-0" size={20} />
                <span>(47) 3278-6570<br/>(47) 99970-7590</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent-500 shrink-0" size={20} />
                <span>winterjoinville@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-100">
          <p>&copy; {new Date().getFullYear()} Winter Climatização. Todos os direitos reservados.</p>
          <p>Marcas atendidas: Gree, TCL, Komeco, Agratto, Elgin, York, Fujitsu e Philco</p>
        </div>
      </Container>
    </footer>
  );
}
