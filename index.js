
console.log(`Welcome!`);
let userValid = true;
let emailValid = true;
let phoneNoValid = true;
const userName = document.getElementById(`userName`);
userName.addEventListener(`blur`, () => {
    let regex = /^[a-zA-Z]([ a-zA-Z0-9]){0,12}$/;
    let strName = userName.value;
    console.log(userName.value);


    if (regex.test(strName)) {
        console.log(`correct Name`);
        userName.classList.remove(`is-invalid`)
        userValid = true
    }
    else {
        userName.classList.add(`is-invalid`)
        console.log(`Incorrect Name`);
        userValid = false
    }

})
const email = document.getElementById(`email`);
email.addEventListener(`blur`, () => {
    let regexemail = /^([a-zA-Z0-9]+)@([a-z]+)\.([a-z]){0,6}$/;
    let stremail = email.value;
    console.log(email.value);


    if (regexemail.test(stremail)) {
        console.log(`correct Email`);
        email.classList.remove(`is-invalid`)
        emailValid = true;
    }
    else {
        email.classList.add(`is-invalid`)
        console.log(`Incorrect Email`);
        emailValid = false;

    }

})
const phoneNo = document.getElementById(`phoneNo`); phoneNo.addEventListener(`blur`, () => {
    let regexphoneNo = /^[0-9]([0-9 ]){0,11}$/;
    let strphoneNo = phoneNo.value;
    console.log(phoneNo.value);


    if (regexphoneNo.test(strphoneNo)) {
        console.log(`correct phoneNo`);
        phoneNo.classList.remove(`is-invalid`)
        phoneNoValid = true
    }
    else {
        phoneNo.classList.add(`is-invalid`)
        console.log(`Incorrect phoneNo`);
        phoneNoValid = false
    }

})
let btnSubmit = document.getElementById(`btn-submit`).addEventListener(`click`, (e) => {
    e.preventDefault();
    if (userValid && emailValid && phoneNoValid) {
        alertForm.classList.remove(`show`);
        success.classList.add(`show`);
        setInterval(() => {
            success.classList.remove(`show`);
        }, 4000);

    } else {
        alertForm.classList.add(`show`);
        success.classList.remove(`show`);

        setInterval(() => {
            alertForm.classList.remove(`show`);
        }, 4000);
    }
})



