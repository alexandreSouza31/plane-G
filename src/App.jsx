import "./App.css";
import {  Routes, Route, BrowserRouter, Link } from 'react-router-dom'//import Logo from "./img/logo.png";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewTrip from "./components/pages/NewTrip";

import Container from "./components/layoult/Container";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newtrip">Novo Projeto</Link>
      </ul>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newtrip" element={<NewTrip />} />
        </Routes>
      </Container >
      <footer>redes sociais</footer>
    </BrowserRouter>
  );
}

export default App;
