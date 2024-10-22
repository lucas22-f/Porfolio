import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Formacion from './components/Formacion'
import ProyectoView1 from './components/ProyectoView1'
import ProyectoView2 from './components/ProyectoView2'
import Stack from './components/Stack'
function App() {

  return (
    <>
      <Header />
      <Intro />
      <Formacion />
      <ProyectoView1 />
      <ProyectoView2 />
      <Stack />
      <Footer />
    </>
  )
}

export default App
