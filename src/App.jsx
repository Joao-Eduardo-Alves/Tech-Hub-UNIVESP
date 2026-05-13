import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";

import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Vestibulando from "./pages/Vestibulando";
import Calouro from "./pages/GuiaDoCalouro/Calouro";
import Carreira from "./pages/CarreiraTech/Carreira";
import CarreiraRoadmaps from "./pages/CarreiraTech/CarreiraRoadmaps";
import CarreiraDicas from "./pages/CarreiraTech/CarreiraDicas";
import CarreiraFerramentas from "./pages/CarreiraTech/CarreiraFerramentas";
import Produtos from "./pages/Produtos";
import Polos from "./pages/Polos";
import Manual from "./pages/GuiaDoCalouro/ManualdoAluno";
import DicaTrabalhoEstudo from "./pages/GuiaDoCalouro/DicaTrabalhoEstudo";
import ScrollToTop from "./components/shared/ScrollToTop";
import Frontend from "./pages/CarreiraTech/CarreiraTechSubPages/roadmaps/Frontend";
import Backend from "./pages/CarreiraTech/CarreiraTechSubPages/roadmaps/Backend";
import Hardware from "./pages/CarreiraTech/CarreiraTechSubPages/roadmaps/Hardware";
import Ia from "./pages/CarreiraTech/CarreiraTechSubPages/roadmaps/Ia";
import Dados from "./pages/CarreiraTech/CarreiraTechSubPages/roadmaps/Dados";
import Estagio from "./pages/CarreiraTech/CarreiraTechSubPages/dicas/Estagio";
import Portfolio from "./pages/CarreiraTech/CarreiraTechSubPages/dicas/Portfolio";
import Linkedin from "./pages/CarreiraTech/CarreiraTechSubPages/dicas/Linkedin";

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
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
