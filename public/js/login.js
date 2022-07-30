console.log('login.js success!');
const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

$('email').addEventListener('blur', function(e){
    if(e){
        if(!this.value.trim()){
            this.classList.add('is-invalid')
            $('email-error').innerHTML = 'Debes ingresar tu email'
        }else if(!regExEmail.test(this.value.trim())){
            this.classList.add('is-invalid')
            $('email-error').innerHTML = 'El email tiene un formato incorrecto'
        }else{
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('email-error').innerHTML = null
        }
    }
})

$('password').addEventListener('blur', function(e){
    if(e){
        if(!this.value.trim()){
            this.classList.add('is-invalid')
            $('pass-error').innerHTML = 'Debes ingresar tu contraseña'
        }else{
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('pass-error').innerHTML = null
        }
    }
})