const loggedOutLinks = document.querySelectorAll('.logged-out')  //  "querySelectorAll" es un metodo que nos permite traer todos los elementos con los parametros que le pasemos. 
const loggedInLinks = document.querySelectorAll('.logged-in')

console.log(loggedOutLinks)
console.log(loggedInLinks)

export const loginCheck = user => {  // Creamos una funcion en la cual el usuario hace dos cosas diferentes si existe o no.
    if (user) {                      
        loggedOutLinks.forEach(link => link.style.display = 'none')  //  Si el usuario existe recorremos los elementos que hay fuera de la autentificacion y los recorremos con un forEach.
        loggedInLinks.forEach(link => link.style.display = 'block')
    } else {
        loggedOutLinks.forEach(link => link.style.display = 'block')  //  Si el usuario no existe muestrame tambien por pantalla el signin y el signup.
        loggedInLinks.forEach(link => link.style.display = 'none')
    }
}