import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProteinTester from './components/ProteinTester';
import './styles/main.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProteinTester />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;