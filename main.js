let uInput = document.querySelector("#inpDt")
let rYears = document.querySelector("#years")
let rMonths = document.querySelector("#months")
let rDays = document.querySelector("#days")
let cal = document.querySelector("button")
let invalidMsg = document.querySelector(".invalid")

let birthDate;
let currDate;
let years = 0;
let months = 0;
let days = 0;

uInput.addEventListener("change", () => {

    years = 0;
    months = 0;
    days = 0;
    currDate = new Date()
    birthDate = new Date(uInput.value)
    
    while (new Date(birthDate.getFullYear() + years + 1, birthDate.getMonth(), birthDate.getDate()) <= currDate) {
        years++;
    }

    // Calculate months
    while (new Date(birthDate.getFullYear() + years, birthDate.getMonth() + months + 1, birthDate.getDate()) <= currDate) {
        months++;
    }

    // Calculate days
    while (new Date(birthDate.getFullYear() + years, birthDate.getMonth() + months, birthDate.getDate() + days + 1) <= currDate) {
        days++;
    }

})


cal.addEventListener("click", () => {

    if (birthDate > currDate) {
        invalidMsg.innerText = "The birth date must be before the current date."
        invalidMsg.style.visibility = "visible"
    } else {
        invalidMsg.style.visibility = "hidden"
    }
    rYears.innerText = years
    rMonths.innerText = months
    rDays.innerText = days
})

