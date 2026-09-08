import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Propiedades from './components/Properties/Properties'
import PropertyDetail from './components/PropertyDetail/PropertyDetail'
import Contacto from './components/Contact/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/propiedades" element={<Propiedades />} />
      <Route path="/propiedades/:id" element={<PropertyDetail />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}

export default App