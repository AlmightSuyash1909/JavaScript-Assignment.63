let form = document.querySelector("form")

let userInfo = {}

let errorMessages = {}

function displayError(name){
    let elm = form.elements[name]
    elm.nextElementSibling.innerText = errorMessages[name]
    // form.elements[name].parentElement.classList.add("error")
}
function displaySuccess(name){
    let elm = form.elements[name]
    elm.nextElementSibling.innerText = ""
    errorMessages[name] = ""
}

function handleSubmit(event) {
    event.preventDefault()

    let elements = event.target.elements;
    const username = elements.username.value
    const name = elements.name.value
    const email = elements.email.value
    const phone = elements.phone.value
    const password = elements.password.value
    const passwordCheck = elements['password-check'].value;


   //  Username can't be less than 4 characters
   if(username.length < 4) {
        errorMessages.username  = "Username can't be less than 4 characters"
        displayError("username")
    } else {
        displaySuccess("username")
    }

   //  Name can't be numbers
   if(!isNaN(name)) {
    errorMessages.name = "Name can't be numbers"
    displayError("name")
   } else{
    displaySuccess("name")
   }

   //  Email must contain the symbol @
   //  Email must be at least 6 characters
   if(!email.includes("@")){
    errorMessages.email = "Email must contain the symbol @"
    displayError("email")
   } else if(email.length < 6) {
    errorMessages.email = "Email must be at least 6 characters"
    displayError("email")
   } else {
    displaySuccess("email")
   }

   //  Phone numbers can only be a number
   //  Length of phone number can't be less than 7
   if(isNaN(phone)) {
    errorMessages.phone = "Phone numbers can only be a number"
    displayError("phone")
   } else if(phone.length < 10) {
    errorMessages.phone = "Length of phone number can't be less than 10"
    displayError("phone")
   } else {
    displaySuccess("phone")
   }

   //  Password and confirm password must be same.
   if(password !== passwordCheck) {
    errorMessages.password = " Password and confirm password must be same"
    displayError("password")
   } else {
    displaySuccess("password")
    displaySuccess("password-check")
   }

}


form.addEventListener("submit", handleSubmit)