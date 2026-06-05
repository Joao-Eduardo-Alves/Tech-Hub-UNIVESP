import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";

import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos/Cursos";
import Vestibulando from "./pages/Vestibulando/Vestibulando";
import Calouro from "./pages/GuiaDoCalouro/Calouro";
import Carreira from "./pages/Carreira/Carreira";
import CarreiraRoadmaps from "./pages/Carreira/CarreiraRoadmaps";
import CarreiraDicas from "./pages/Carreira/CarreiraDicas";
import CarreiraFerramentas from "./pages/Carreira/CarreiraFerramentas";
import Produtos from "./pages/produtos/Produtos";
import Polos from "./pages/Polos/Polos";
import Manual from "./pages/GuiaDoCalouro/ManualdoAluno";
import DicaTrabalhoEstudo from "./pages/GuiaDoCalouro/DicaTrabalhoEstudo";
import ScrollToTop from "./components/shared/ScrollToTop";
import Frontend from "./pages/Carreira/CarreiraSubPages/roadmaps/Frontend";
import Backend from "./pages/Carreira/CarreiraSubPages/roadmaps/Backend";
import Hardware from "./pages/Carreira/CarreiraSubPages/roadmaps/Hardware";
import Ia from "./pages/Carreira/CarreiraSubPages/roadmaps/Ia";
import Dados from "./pages/Carreira/CarreiraSubPages/roadmaps/Dados";
import Vaga from "./pages/Carreira/CarreiraSubPages/dicas/Vaga";
import Portfolio from "./pages/Carreira/CarreiraSubPages/dicas/Portfolio";
import Linkedin from "./pages/Carreira/CarreiraSubPages/dicas/Linkedin";
import CyberArena from "./pages/CyberArena/CyberArena";
import CtrlShape from "./pages/CtrlShape/CtrlShape";
import ComoComprar from "./pages/produtos/ComoComprar";
import SaveUnivesp from "./pages/SaveUnivesp/SaveUnivesp";
import Sobre from "./pages/Footer/Sobre";
import PoliticaPrivacidade from "./pages/Footer/PoliticaPrivacidade";
import TermosDeUso from "./pages/Footer/TermosDeUso";
import Report from "./pages/Footer/Report";
import Sugestao from "./pages/Footer/Sugestao";
import Contato from "./pages/Footer/Contato";
import Ides from "./pages/Carreira/CarreiraSubPages/ferramentas/Ides";
import DesignUx from "./pages/Carreira/CarreiraSubPages/ferramentas/DesignUx";
import Automacao from "./pages/Carreira/CarreiraSubPages/ferramentas/Automacao";
import DeployFree from "./pages/Carreira/CarreiraSubPages/ferramentas/DeployFree";
import TesteApis from "./pages/Carreira/CarreiraSubPages/ferramentas/TesteApis";
import Redacao from "./pages/Vestibulando/VestibulandoSubPages/Redacao";
import Matematica from "./pages/Vestibulando/VestibulandoSubPages/Matematica";
import GestaoDeTempo from "./pages/Vestibulando/VestibulandoSubPages/GestaoDeTempo";
import DiaDaProva from "./pages/Vestibulando/VestibulandoSubPages/DiaDaProva";
import MaterialEstudo from "./pages/Vestibulando/VestibulandoSubPages/MaterialEstudo";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/vestibulando/redacao" element={<Redacao />} />
          <Route path="/vestibulando/matematica" element={<Matematica />} />
          <Route
            path="/vestibulando/gestaoDeTempo"
            element={<GestaoDeTempo />}
          />
          <Route path="/vestibulando/diaDaProva" element={<DiaDaProva />} />
          <Route
            path="/vestibulando/materialEstudo"
            element={<MaterialEstudo />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/vestibulando" element={<Vestibulando />} />
          <Route path="/calouro" element={<Calouro />} />
          <Route path="/carreira" element={<Carreira />} />
          <Route path="/carreira/roadmaps" element={<CarreiraRoadmaps />} />
          <Route path="/carreira/dicas" element={<CarreiraDicas />} />
          <Route
            path="/carreira/ferramentas"
            element={<CarreiraFerramentas />}
          />

          <Route path="/carreira/roadmaps/frontend" element={<Frontend />} />
          <Route path="/carreira/roadmaps/backend" element={<Backend />} />
          <Route path="/carreira/roadmaps/dados" element={<Dados />} />
          <Route path="/carreira/roadmaps/hardware" element={<Hardware />} />
          <Route path="/carreira/roadmaps/ia" element={<Ia />} />

          <Route path="/carreira/dicas/vaga" element={<Vaga />} />
          <Route path="/carreira/dicas/portfolio" element={<Portfolio />} />
          <Route path="/carreira/dicas/linkedin" element={<Linkedin />} />
          <Route path="/carreira/ferramentas/ides" element={<Ides />} />
          <Route path="/carreira/ferramentas/designux" element={<DesignUx />} />
          <Route
            path="/carreira/ferramentas/automacao"
            element={<Automacao />}
          />
          <Route
            path="/carreira/ferramentas/deployfree"
            element={<DeployFree />}
          />
          <Route
            path="/carreira/ferramentas/testeapis"
            element={<TesteApis />}
          />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/polos" element={<Polos />} />
          <Route path="/calouro/manual" element={<Manual />} />
          <Route
            path="/calouro/dicaTrabalhoEstudo"
            element={<DicaTrabalhoEstudo />}
          />
          <Route path="/cyber-arena" element={<CyberArena />} />
          <Route path="/ctrl-shape" element={<CtrlShape />} />
          <Route path="/salve-a-univesp" element={<SaveUnivesp />} />
          <Route path="/produtos/como-comprar/:tag" element={<ComoComprar />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/politica-de-privacidade"
            element={<PoliticaPrivacidade />}
          />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/report" element={<Report />} />
          <Route path="/sugestao" element={<Sugestao />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
