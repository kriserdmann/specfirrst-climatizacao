import Link from "next/link";
import { Container } from "../ui/Container";
import { Phone, MessageCircle } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="bg-primary-900 text-white text-xs py-2">
        <Container className="flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14}/> (47) 3278-6570</span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            Av. Kurt Meinert, 76 - Paranaguamirim, Joinville - SC
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-primary-900 tracking-tight">
            WINTER
            <span className="text-sm font-normal text-gray-500 block -mt-1 tracking-normal">Climatização & Refrigeração</span>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Início</Link>
            <Link href="/sobre" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Sobre Nós</Link>
            <Link href="/servicos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Serviços</Link>
            <Link href="/contato" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contato</Link>
          </nav>

          <a 
            href="https://wa.me/5547999707590"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md"
          >
            <MessageCircle size={20} />
            <span className="hidden sm:inline">Fale Conosco</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
