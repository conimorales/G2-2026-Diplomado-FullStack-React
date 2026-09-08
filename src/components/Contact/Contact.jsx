import { useState } from 'react'

function Contacto() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí podrías conectar con un backend o servicio de email (ej: WhatsApp, Formspree, etc.)
    setEnviado(true)
    e.target.reset()
  }

  const handleReset = () => {
    setEnviado(false)
  }

  return (
    <div className="container py-4">
      <h1 className="h4 mb-4">Contacto</h1>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className="row">
              {/* Correo */}
              <div className="col-md-12">
                <label htmlFor="correo" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  name="correo"
                  placeholder="usuario@empresa.cl"
                  required
                />
              </div>

              {/* Módulo */}
              <div className="col-md-6">
                <label htmlFor="modulo" className="form-label">
                  Módulo
                </label>
                <select className="form-select" id="modulo" name="modulo" required>
                  <option value="">Seleccionar módulo</option>
                  <option value="DTE">DTE</option>
                  <option value="ABASTECIMIENTO">Abastecimiento</option>
                  <option value="OTRO">Otro</option>
                </select>
              </div>

              {/* Sistema */}
              <div className="col-md-6">
                <label htmlFor="sistema" className="form-label">
                  Sistema
                </label>
                <select className="form-select" id="sistema" name="sistema" required>
                  <option value="">Seleccionar sistema</option>
                  <option value="SIGA">SIGA</option>
                  <option value="OTRO">Otro</option>
                </select>
              </div>

              {/* Nombre */}
              <div className="col-12">
                <label htmlFor="nombre" className="form-label">
                  Nombre de la solicitud
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  placeholder="Ej: Reclasificación de mano de obra"
                  required
                />
              </div>

              {/* Descripción */}
              <div className="col-12">
                <label htmlFor="descripcion" className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  id="descripcion"
                  name="descripcion"
                  rows="4"
                  placeholder="Describa detalladamente la solicitud..."
                  required
                ></textarea>
              </div>
            </div>

            <div className="btn-margin-top">
              <button type="submit" className="btn btn-primary col-12 col-sm-4 col-lg-4 g-2">
                <i className="fa-solid fa-circle-check"></i> Enviar solicitud
              </button>

              <button type="reset" className="btn btn-outline-secondary col-12 col-sm-4 col-lg-4 g-2">
                Cancelar
              </button>
            </div>

            {enviado && (
              <div className="alert alert-success mt-3" role="alert">
                ✅ Tu solicitud fue enviada correctamente.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto