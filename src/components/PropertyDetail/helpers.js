export const TIPO_LABELS = {
    casa: 'Casa',
    departamento: 'Departamento',
    habitacion: 'Habitación',
}

export function getFeatureIcon(texto) {
    const t = texto.toLowerCase()
    if (t.includes('dormitorio')) return 'fa-bed'
    if (t.includes('baño')) return 'fa-bath'
    if (t.includes('cocina')) return 'fa-kitchen-set'
    if (t.includes('m²') || t.includes('m2')) return 'fa-ruler-combined'
    if (t.includes('gasto común') || t.includes('gasto comun')) return 'fa-file-invoice-dollar'
    if (t.includes('ubicación') || t.includes('ubicacion') || t.includes('conectividad')) return 'fa-location-dot'
    if (t.includes('no cuenta con estacionamiento')) return 'fa-ban'
    if (t.includes('estacionamiento')) return 'fa-square-parking'
    return 'fa-circle-check'
}