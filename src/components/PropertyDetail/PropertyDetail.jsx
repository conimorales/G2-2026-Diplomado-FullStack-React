import { useParams, Link } from 'react-router-dom'
import { PROPIEDADES } from '../../data/propiedades'
import PhotoGallery from './PhotoGallery'
import { TIPO_LABELS, getFeatureIcon } from './helpers'
import './PropertyDetail.css'

function PropertyDetail() {
  const { id } = useParams()
  const propiedad = PROPIEDADES.find((p) => String(p.id) === id)

  if (!propiedad) {
    return (
      <div className="container py-5">
        <p>No encontramos esta propiedad.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="container py-4">
      <div className="mb-3">
        <span className="badge-tipo mb-2">{TIPO_LABELS[propiedad.category]}</span>
        <h1 className="h4 mb-1">{propiedad.name}</h1>
        <p className="text-muted mb-0">{propiedad.comuna}</p>
      </div>

      <PhotoGallery imagenes={propiedad.imagenes} name ={propiedad.name} ubicacion={propiedad.ubicacion} />

      <div className="row mt-4 g-4">
        <div className="col-lg-8">
          {propiedad.descripcion && (
            <p className="mb-4">{propiedad.descripcion}</p>
          )}

          {propiedad.caracteristicas && (
            <>
              <h2 className="h6 mb-3">Lo que este lugar ofrece</h2>
              <ul className="feature-list mb-4">
                {propiedad.caracteristicas.map((c) => (
                  <li key={c}>
                    <i className={`fa-solid ${getFeatureIcon(c)}`}></i>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {propiedad.condiciones && (
            <>
              <h2 className="h6 mb-2">Condiciones</h2>
              <ul className="mb-4">
                {propiedad.condiciones.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </>
          )}

          {propiedad.documentos && (
            <>
              <h2 className="h6 mb-2">Documentos requeridos</h2>
              <ul className="mb-4">
                {propiedad.documentos.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </>
          )}
        </div>

        <div className="col-lg-4">
          <div className="card p-4">
            <p className="h5 mb-1">{propiedad.precio} <span className="text-muted fs-6">/ mes</span></p>
            {propiedad.contacto && (
              <p className="text-small text-muted mb-3">
                Contacto: {propiedad.contacto}
              </p>
            )}
            <a href="https://wa.me/56900000000" className="btn btn-primary w-100">
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail