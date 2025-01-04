import React from 'react';
import { Instagram, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-emerald-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Store Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Pistache Granel & Saúde</h3>
            <p className="text-emerald-200">
              Sua loja especializada em pistache e produtos naturais de alta qualidade.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://api.whatsapp.com/message/3GTA6YW2J3I6G1?autoload=1&app_absent=0" 
                 className="text-emerald-200 hover:text-emerald-400 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/pistachegranel/" 
                 className="text-emerald-200 hover:text-emerald-400 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-emerald-200 hover:text-emerald-400 transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#receitas" className="text-emerald-200 hover:text-emerald-400 transition-colors">
                  Receitas
                </a>
              </li>
              <li>
                <a href="#curiosidades" className="text-emerald-200 hover:text-emerald-400 transition-colors">
                  Curiosidades
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-emerald-200">
                <MapPin className="w-5 h-5" />
                <span>Avenida Edmeia Mattos Lazarotti, 1381</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-200">
                <Phone className="w-5 h-5" />
                <span>(31) 8337-8233</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-200">
                <Mail className="w-5 h-5" />
                <span>contato@pistachegranel.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-emerald-900">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-emerald-400">
            {currentYear} Pistache Granel & Saúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
