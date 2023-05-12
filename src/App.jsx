import "./App.css";
import {  Routes, Route, BrowserRouter, Link } from 'react-router-dom'//import Logo from "./img/logo.png";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewTrip from "./components/pages/NewTrip";
import Navbar from "./components/layoult/Navbar";

import Container from "./components/layoult/Container";
import Trips from "./components/pages/Trips";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
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
