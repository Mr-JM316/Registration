 const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit' , (e) => {
let messages = []
if (name.value==''|| name.value == null) {
messsages.push('name is required')
}
if(password.length <=6) {
messages.push('password must be longer than 6 characters')
}
if(password.length >=20) {
messages.push('password must be less than 20  characters')
}
if(password.value == 'password')
 {
messages.push('password cannot be password')
}
if(messages.length >0) {
e.preventDefault()
errorElement.innerText = messages.join(',")
}
}

i