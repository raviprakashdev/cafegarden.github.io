import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header';

import Home from './components/Home';
import Menu from './components/Menu';
import Coffee from './components/Coffee';
import Cakes from './components/Cakes';
import Icecreams from './components/Icecreams';
import Gallery from './components/Gallery';
import Blogs from './components/Blogs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Router>

       
        <Header />
        
        <main>
          <section>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/menu" element={<Menu />} />
              <Route exact path="/coffee" element={<Coffee />} />
              <Route exact path="/cakes" element={<Cakes />} />
              <Route exact path="/icecreams" element={<Icecreams />} />

              <Route exact path="/gallery" element={<Gallery />} />
              
              <Route exact path="/blogs" element={<Blogs />} />
              
              <Route exact path="/about" element={<About/>} />
              
              <Route exact path="/contact" element={<Contact/>} />
              
              
              
            </Routes>
          </section>
        </main>

        <Footer />
      </Router>

      

      
    </div>
  );


}

  
   





export default App;
