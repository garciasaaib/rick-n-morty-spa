//obtenemos toda la logica de routes
import router from './routes'

//escucha la cuando se carga por primera vez
window.addEventListener('load', router)


//escucha la cuando se carga la siguiente vez
window.addEventListener('hashchange', router)

