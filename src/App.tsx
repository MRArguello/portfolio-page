import React from 'react'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Header from './components/Header'

function App() {
  return (
    <div className='bg-neutral-100 dark:bg-zinc-900'>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
