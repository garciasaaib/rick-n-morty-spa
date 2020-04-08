/**Cuando ya obtuvimos la ruta resuleve a que template se va a 
 * enviar, es decir a home o a character o a error404
 * 
 * Para esta app tenemos la logica que el # de caracteres tiene un 
 * valor limite, hay menos de mil, entonces la logica seria: 
*/

//route = ruta obtenida
const resolveRoutes = (route) => {
//si obtenemos un numero debe tener menos de 4 caracteres
  if (route.length <= 3) { //si route es menor o igual a 3
    let validRoute = route === '/' //si es un slash escribir el mismo
      ? route 
      : '/:id' //si no es un slash escribir este texto
    return validRoute
  }
  return `/${route}` //esto nos regresa lo que mandemos, si fuera una palabra pues eso
}
export default resolveRoutes