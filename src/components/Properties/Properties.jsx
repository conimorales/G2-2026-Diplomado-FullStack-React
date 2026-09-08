import { useState } from 'react'
import { PROPIEDADES } from '../../data/propiedades'
import SearchForm from '../Home/SearchForm'
import PropertyCard from '../Home/PropertyCard'
import '../Home/Home.css'

function Propiedades() {
  const [region, setRegion] = useState('')
  const [comuna, setComuna] = useState('')

  const propiedadesFiltradas = PROPIEDADES.filter((p) => {
    if (region && p.region !== region) return false
    if (comuna && p.comuna !== comuna) return false
    return true
  })

  const handleRegionChange = (e) => {
    setRegion(e.target.value)
    setComuna('')
  }

  return (
    <section className="section2">
      <div className="container py-4">
        <h1 className="h4 mb-3">Todas las propiedades</h1>

        <SearchForm
          region={region}
          comuna={comuna}
          onRegionChange={handleRegionChange}
          onComunaChange={setComuna}
        />

        <div className="mt-4">
          {propiedadesFiltradas.length === 0 ? (
            <p className="text-muted">
              No hay propiedades disponibles con esos filtros por ahora.
            </p>
          ) : (
            <div className="row g-3">
              {propiedadesFiltradas.map((p) => (
                <div className="col-md-4" key={p.id}>
                  <PropertyCard propiedad={p} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Propiedades