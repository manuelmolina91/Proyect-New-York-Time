export function showMessage(message, type = "success") {
    Toastify({  //  Cuando el usuario se registre se lanza el toastify.
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: type === "success" ? "green" : "red",  // Si el type es igual es success saldra el mensaje en verde de lo contrario saldra en rojo
        },
        onClick: function(){} // Callback after click
      }).showToast();
}