import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import {loginCheck} from './loginCheck.js'

import './signupForm.js'
import './signinForm.js'
import './googleLogin.js'
import './facebookLogin.js'
import './githubLogin.js'
import './logout.js'

onAuthStateChanged(auth, async (user) => {  //  Con esta funcion la aplicacion sabe si estas conectado o no.
    loginCheck(user)
    //if (user) {
    //    loginCheck(user)
    //} else {
    //    loginCheck(user)
    //}
})