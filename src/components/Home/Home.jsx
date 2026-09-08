import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROPIEDADES } from '../../data/propiedades'
import SearchForm from './SearchForm'
import PropertyCard from './PropertyCard'
import HowItWorks from './HowItWorks'
import ContactCTA from './ContactCTA'
import './Home.css'

function Home() {
  const [region, setRegion] = useState('')
  const [comuna, setComuna] = useState('')

  const propiedadesFiltradas = PROPIEDADES.filter((p) => {
    if (region && p.region !== region) return false
    if (comuna && p.comuna !== comuna) return false
    return true
  })

  const propiedadesDestacadas = propiedadesFiltradas.slice(0, 3)

  const handleRegionChange = (e) => {
    setRegion(e.target.value)
    setComuna('')
  }

  return (
    <>
      <section className="section1 hero-compact">
        <div className="container ">
          <h1 className="h4 mb-3">Encuentra tu próximo hogar</h1>
          <SearchForm
            region={region}
            comuna={comuna}
            onRegionChange={handleRegionChange}
            onComunaChange={setComuna}
          />
        </div>
      </section>

      <section className="section2">
        <div className="container">
          <h2 className="h5">Propiedades disponibles</h2>

          {propiedadesDestacadas.length === 0 ? (
            <p className="text-muted">
              No hay propiedades disponibles con esos filtros por ahora.
            </p>
          ) : (
            <>
              <div className='container'>
                <div className="row">
                  {propiedadesDestacadas.map((p) => (
                    <div className="col-sm-3 col-md-3" key={p.id}>
                      <PropertyCard propiedad={p} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-4">
                <Link to="/propiedades" className="btn btn-outline-primary btn-sm btn-style-1">
                  Ver todas las propiedades
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <HowItWorks />
      <ContactCTA />
      
    </>
  )
}

export default Home