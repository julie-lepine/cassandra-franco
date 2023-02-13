var form = document.querySelector('form')
var email = document.getElementById('email')
var regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/
var emailConfirm = document.getElementById('email-confirm')
var newsletter = document.getElementsByName('newsletter')

// email format ok 
email.addEventListener('input', (event) => {
    if (!regexEmail.test(event.target.value)) {
        errorEmail.innerText = `Le format de l'email n'est pas bon`
    } else {
        errorEmail.innerText = ''
    }
})

// email identiques
emailConfirm.addEventListener('input', () => {
    if (email.value !== emailConfirm.value) {
        errorEmails.innerText = `Les emails ne sont pas identiques`
    } else {
        errorEmails.innerText = ''
    }
})