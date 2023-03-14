import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Resume from './pages/resume';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
               <Route path="/react-portfolio/" element={<About />} />
                <Route path="/react-portfolio/portfolio" element={<Portfolio />} />
                <Route path="/react-portfolio/contact" element={<Contact />} />
                <Route path="/react-portfolio/resume" element={<Resume />} />
                <Route path="/react-portfolio/*" element={<h2>404 page not found.</h2>} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
