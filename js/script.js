let firstname = document.querySelector("#firstname");
let secondname = document.querySelector("#lastname");
let nation = document.querySelector("#Nationality");
let native = document.querySelector("#live");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let submit = document.querySelector("#submit");
var letters = /^[A-Za-z]+$/;
var phoneno = /^\d{10}$/;
let error1 = document.querySelector(".err1");
let error2 = document.querySelector(".err2");
let error3 = document.querySelector(".err3");
let error6 = document.querySelector(".err6");
var errorInd = false;
var errorInd2 = false;
var errorInd3 = false;
var errorInd6 = false;
var nativeValue;
var nationalityValue;

let firstnameValueFine = true;

// submit.addEventListener("click",(e)=>{
//     if(firstname == ""){
//         alert("Firstname cannot be empty");
//     }else{
//         localStorage.setItem("firstname",firstname);
//     }
// })

firstname.addEventListener("keyup", (e) => {
    var firstValue = e.target.value;
    if (firstValue == "") {
        error1.innerHTML = "Firstname cannot be empty";
    } else {
        if (firstValue.match(letters)) {
            error1.innerHTML = "";
        } else {
            if (errorInd == false) {
                error1.innerHTML = "Plesae enter only Alphabets";
                errorInd = true;
            } else {
                error1.innerHTML = "Plesae enter only Alphabets";
                errorInd = false;
            }
        }
    }
});


secondname.addEventListener("keyup", (e) => {
    var secondValue = e.target.value;
    if (secondValue == "") {
        error2.innerHTML = "Lastname cannot be empty";
    } else {
        if (secondValue.match(letters)) {
            error2.innerHTML = "";
        } else {
            if (errorInd2 == false) {
                error2.innerHTML = "Plesae enter only Alphabets";
                errorInd2 = true;
            } else {
                error2.innerHTML = "Plesae enter only Alphabets";
                errorInd2 = false;
            }
        }
    }
});

nation.addEventListener("keyup", (e) => {
    var nationValue = e.target.value;
    if (nationValue == "") {
        error3.innerHTML = "Nation cannot be empty";
    } else {
        if (nationValue.match(letters)) {
            error3.innerHTML = "";
        } else {
            if (errorInd3 == false) {
                error3.innerHTML = "Plesae enter only Alphabets";
                errorInd3 = true;
            } else {
                error3.innerHTML = "Plesae enter only Alphabets";
                errorInd3 = false;
            }
        }
    }
});

phone.addEventListener("keyup", (e) => {
    var phoneValue = e.target.value;
    if (phoneValue.length <= 10) {
        if (phoneValue == "") {
            error6.innerHTML = "Phone Number cannot be empty";
        } else {
            if (phoneValue.match(phoneno)) {

                error6.innerHTML = "";
            } else {
                if (errorInd6 == false) {
                    error6.innerHTML = "Phone Number is not Valid";
                    errorInd6 = true;
                } else {
                    error6.innerHTML = "Phone Number is not Valid";
                    errorInd6 = false;
                }
            }
        }
    } else {
        error6.innerHTML = "Plesae enter between (1-10)digits";
    }
});



submit.addEventListener("click", (eventSubmit) => {
    eventSubmit.preventDefault();


    if (error1.innerHTML == "" && error2.innerHTML == "" && error6.innerHTML == "") {
        if ((!firstname.value == "" && !secondname.value == "" && !phone.value == "")) {
            var fn = firstname.value;
            var ln = secondname.value;
            var nt = nativeValue;
            var cnty = nationalityValue
            var ph = phone.value;
            localStorage.setItem("First Name", fn);
            localStorage.setItem("Last Name", ln);
            localStorage.setItem("Nation", cnty);
            localStorage.setItem("Phone", ph);
            localStorage.setItem("Location", nt);
            alert("Data Submitted Successfully");
            clearForm();
        } else {
            alert("Please fill all required fields..");
            return false;
        }
    } else {
        if (!(error1.innerHTML == "")) {
            alert("Please fill all required fields..!")
            firstname.focus();
        } if (!(error2.innerHTML == "")) {
            alert("Please fill all required fields..!")
            secondname.focus();
        }
        // if (!(error3.innerHTML == "")) {
        //     alert("Please fill all required fields..!")
        //     nation.focus();
        // }
        if (!(error6.innerHTML == "")) {
            alert("Please fill all required fields..!")
            phone.focus();
        }
    }
});


function clearForm() {
    document.querySelector("form").reset();

}



live.addEventListener("change", () => {
    var e = document.getElementById("live");
    nativeValue  = e.options[e.selectedIndex].value;
    console.log(nativeValue);
    
});

nation.addEventListener("change",()=>{
    nationalityValue = nation.options[nation.selectedIndex].value;
    console.log(nationalityValue);
})
