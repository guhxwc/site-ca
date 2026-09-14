import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ServicoPerfisAluminio } from './pages/ServicoPerfisAluminio';
import { ServicoCargasSiderurgicas } from './pages/ServicoCargasSiderurgicas';
import { ServicoCargasSecas } from './pages/ServicoCargasSecas';
import { ServicoLogisticaDedicada } from './pages/ServicoLogisticaDedicada';
import { RegioesRotas } from './pages/RegioesRotas';
import { Sobre } from './pages/Sobre';
import { Contato } from './pages/Contato';
import { NotFound } from './pages/NotFound';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transporte-perfis-aluminio" element={<ServicoPerfisAluminio />} />
          <Route path="/transporte-cargas-siderurgicas" element={<ServicoCargasSiderurgicas />} />
          <Route path="/transporte-cargas-secas" element={<ServicoCargasSecas />} />
          <Route path="/logistica-dedicada" element={<ServicoLogisticaDedicada />} />
          <Route path="/regioes-e-rotas" element={<RegioesRotas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
