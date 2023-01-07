import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signupForm = document.querySelector('#signup-form')  //  Creamos una constante e identificamos el elemento.

signupForm.addEventListener('submit',  async (e) => {  //  Vamos a "escuchar" al elemento y vamos a recibir su informacion cuando pulsemos submit.
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value  //  En las lineas 6 y 7 declaramos dos constantes y extraemos su valor.

    console.log(email, password)

    try {
        const userCreate = await createUserWithEmailAndPassword(auth, email, password)  //  Guardamos el resultado de la promesa en una constante.
        console.log(userCreate)
        
        const SignupModal = document.querySelector('#SignupModal')  // Le decimos el modal que queremos seleccionar.
        const modal = bootstrap.Modal.getInstance(SignupModal)  // Le pedimos que obtenga la informacion del modal a traves de bootstrap.
        modal.hide()  //  Desde la linea 18 a la 20 sirve para limpiar el modal del Signup.

        showMessage("Welcome " + userCreate.user.email)  //  Le damos la bienvenida al nuevo usuario y lanzamos el success.

        location = '../views/dashboard.html'

        

    }   catch (error) {

        //  Con estos condicionales hacemos que nos muestre el error por pantalla.
        if (error.code === 'auth/email-already-in-use') {
            showMessage("Email already in use", "error")
        }else if (error.code === 'auth/invalid-email') {
            showMessage("Invalid email", "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage("Password is too weak", "error")
        } else if (error.code) {
            showMessage(error.message, "error")
        }
    }
})