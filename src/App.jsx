import { useState } from 'react';

// FontAwesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Global styles
import './index.css';

// Component imports
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Add FontAwesome icons to the library
library.add(fas, far, fab);

const App = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Publications activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
