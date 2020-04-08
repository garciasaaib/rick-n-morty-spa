/*
Hacer fetch a la api de rick and morty
Si nuestra funcion no recibe un id entonces terona home
Si recibe un 1 id hace la llamada a la api
*/

const API = 'https://rickandmortyapi.com/api/character/' //variable
const getData = async (id) => { //funcion a exportar url api
  const apiURL = id //if there is an id
    ? `${API}${id}` //set api + id
    : API //if not, set just api
  try {
    const response = await fetch(apiURL) //do the request to the api
    const data = await response.json() //convert data to json
    return data //return the json data
  } catch (error) {
    console.log('Fetch Error', error)
  }
}
export default getData

