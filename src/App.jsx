import "./App.css";
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'//import Logo from "./img/logo.png";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewTrip from "./components/pages/NewTrip";
import Navbar from "./components/layoult/Navbar";
import Footer from "./components/layoult/Footer";

import Container from "./components/layoult/Container";
import Trips from "./components/pages/Trips";
import { Trip } from "./components/pages/Trip";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newtrip" element={<NewTrip />} />
          <Route path="/trip/:id" element={<Trip />} />
          {/* o param após o /trip/, que no caso é p id, dirá que viagem eu estou mexendo */}
        </Routes>
      </Container >
      <Footer />
    </BrowserRouter>
  );
}

export default App;
