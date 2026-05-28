import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Winter Climatização em Joinville",
  description: "Fale com a Winter Climatização. Orçamentos via WhatsApp, telefone ou e-mail. Atendimento rápido em Joinville.",
};

export default function Contato() {
  return (
    <div className="py-24 bg-gray-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 mb-4">
              Fale Conosco
            </h1>
            <p className="text-lg text-gray-600">
              Estamos prontos para atender sua solicitação. Entre em contato pelos canais abaixo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Telefones (WhatsApp)</h3>
                    <p className="text-gray-600">(47) 3278-6570</p>
                    <p className="text-gray-600">(47) 99970-7590</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Endereço</h3>
                    <p className="text-gray-600">Av. Kurt Meinert, 76<br/>Paranaguamirim<br/>Joinville - SC</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">E-mail</h3>
                    <p className="text-gray-600">winterjoinville@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href="https://wa.me/5547999707590"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
            
            <div className="bg-gray-100 h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.467812165215!2d-48.8354721!3d-26.34375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deba0000000001%3A0x123456789!2sAv.%20Kurt%20Meinert%2C%2076%20-%20Paranaguamirim%2C%20Joinville%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1716942000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
