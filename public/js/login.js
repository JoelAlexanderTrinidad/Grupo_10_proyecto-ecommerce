console.log('login.js success!');
const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

$('email').addEventListener('blur', function(e){
    if(e){
        if(!this.value.trim()){
            this.classList.add('is-invalid')
            $('email-error').innerHTML = 'Debes ingresar tu email'
        }else if(!regExEmail.test(this.value.trim())){
            $('icono-error').innerHTML = ''
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
            $('icono-error-pass').innerHTML = ''
            $('pass-error').innerHTML = 'Debes ingresar tu contraseña'
        }else{
            $('icono-error-pass').innerHTML = null
            $('pass-error').innerHTML = null
        }
    }
})