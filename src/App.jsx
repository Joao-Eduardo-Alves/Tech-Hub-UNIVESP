import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";

import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Vestibulando from "./pages/Vestibulando";
import Calouro from "./pages/GuiaDoCalouro/Calouro";
import Carreira from "./pages/Carreira/Carreira";
import CarreiraRoadmaps from "./pages/Carreira/CarreiraRoadmaps";
import CarreiraDicas from "./pages/Carreira/CarreiraDicas";
import CarreiraFerramentas from "./pages/Carreira/CarreiraFerramentas";
import Produtos from "./pages/produtos/Produtos";
import Polos from "./pages/Polos";
import Manual from "./pages/GuiaDoCalouro/ManualdoAluno";
import DicaTrabalhoEstudo from "./pages/GuiaDoCalouro/DicaTrabalhoEstudo";
import ScrollToTop from "./components/shared/ScrollToTop";
import Frontend from "./pages/Carreira/CarreiraSubPages/roadmaps/Frontend";
import Backend from "./pages/Carreira/CarreiraSubPages/roadmaps/Backend";
import Hardware from "./pages/Carreira/CarreiraSubPages/roadmaps/Hardware";
import Ia from "./pages/Carreira/CarreiraSubPages/roadmaps/Ia";
import Dados from "./pages/Carreira/CarreiraSubPages/roadmaps/Dados";
import Estagio from "./pages/Carreira/CarreiraSubPages/dicas/Estagio";
import Portfolio from "./pages/Carreira/CarreiraSubPages/dicas/Portfolio";
import Linkedin from "./pages/Carreira/CarreiraSubPages/dicas/Linkedin";
import CyberArena from "./pages/CyberArena/CyberArena";
import CtrlShape from "./pages/CtrlShape/CtrlShape";
import ComoComprar from "./pages/produtos/ComoComprar";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
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

          <Route path="/carreira/dicas/estagio" element={<Estagio />} />
          <Route path="/carreira/dicas/portfolio" element={<Portfolio />} />
          <Route path="/carreira/dicas/linkedin" element={<Linkedin />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/polos" element={<Polos />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/dicaTrabalhoEstudo" element={<DicaTrabalhoEstudo />} />
          <Route path="/cyber-arena" element={<CyberArena />} />
          <Route path="/ctrl-shape" element={<CtrlShape />} />
          <Route path="/produtos/como-comprar/:tag" element={<ComoComprar />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
