//importamos los componentes
import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
//importamos las utils
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'


//routes es un array con identificadores y valores
const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact', 
}

//aqui hacemos el render en el template
//hace una peticion hacia estos elementos en el html con el id
const router = async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')

  //innerHTML es como insert este codigo ahi
  header.innerHTML = await Header() //le damos el valor de header aunque se puede tardar

  //al abrir una ventana crea 
  let hash = getHash() //obtiene el hash si lo hay
  let route = await resolveRoutes(hash) //crea la ruta con o sin hash

  //mediante route accedemos al key en el array routes
  let render = routes[route]
    ? routes[route] // si existe mandamos el content del valor
    : Error404 //si no existe mandamos el content del error

  //esto nos manda el content correcto correspondiente a la url
  content.innerHTML = await render() //
}

export default router