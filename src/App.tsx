import React, { useRef } from 'react';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  return (
    <div className="bg-neutral-100 dark:bg-zinc-900">
      <Header heroRef={heroRef} />
      <Hero ref={heroRef} />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
