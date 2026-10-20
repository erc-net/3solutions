import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WebAppDevPage from './pages/WebAppDevPage';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import PenetrationTesting from './pages/PenetrationTesting';
import CloudSolutions from './pages/CloudSolutions';
import ITsupport from './pages/ITsupport';
import ArchitecturalSolutions from './pages/ArchitecturalSolutions';
import ItConsultation from './pages/ItConsultation';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-app-development" element={<WebAppDevPage />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/penetration-testing" element={<PenetrationTesting />} />
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/it-support" element={<ITsupport />} />
          <Route path="/architectural-solutions" element={<ArchitecturalSolutions />} />
          <Route path="/it-consultation" element={<ItConsultation />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
