//getHash obtiene el numero despues del # para obtener el render indicado por la url
const getHash = () => 
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
export default getHash

/*
location.hash  trae el fragmento de la url a partir de un #. en este caso traería #/1/
.slice(1)  separa la url y muestra a partir del primer elemento /1/
.toLocaleLowerCase() convierte a minuscula la cadena
.split('/') separa la cadena en un array y elimina el / ['','1','']
[1] obtiene el elemento 1 en el array en este caso seria el 1
|| '/' si no obtiene nada entonces solo asigna la ruta /
*/