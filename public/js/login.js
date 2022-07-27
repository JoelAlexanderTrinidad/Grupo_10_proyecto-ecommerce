console.log('login.js success!');
const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

$('email').addEventListener('blur', function(e){
    /* switch (true) {
        case !this.value.trim(): // en caso de que no venga ningún valor en el input
            $('icono-error').innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>'
            $('email-error').innerHTML = 'Debes ingresar tu email'
            break;
        case !regExEmail.test(this.value.trim()): // testea si tiene un mail con formato válido (tira un booleano)
            $('email-error').innerHTML = 'El email tiene un formato incorrecto'
        default:
            $('icono-error').innerHTML = null
            $('email-error').innerHTML = null
            break;
    } */
    if(e){
        if(!this.value.trim()){
            $('icono-error').innerHTML = '<i class="fas fa-hand-point-left"></i>'
            $('email-error').innerHTML = 'Debes ingresar tu email'
        }else if(!regExEmail.test(this.value.trim())){
            $('icono-error').innerHTML = '<i class="fas fa-hand-point-left"></i>'
            $('email-error').innerHTML = 'El email tiene un formato incorrecto'
        }else{
            $('icono-error').innerHTML = null
            $('email-error').innerHTML = null
        }
    }
})

$('password').addEventListener('blur', function(e){
    console.log(this.value);
    if(e){
        if(!this.value.trim()){
            $('icono-error-pass').innerHTML = '<i class="fas fa-hand-point-left"></i>'
            $('pass-error').innerHTML = 'Debes ingresar tu contraseña'
        }else{
            $('icono-error-pass').innerHTML = null
            $('pass-error').innerHTML = null
        }
    }
})