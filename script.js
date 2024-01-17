const allButtons = document.querySelectorAll(".button");
const input = document.querySelector(".input-box input");
const result = document.querySelector(".input-box h3");

const AC = () => {
    input.value = "";
    result.innerHTML = "0";
}

const deleteNumber = () => {
    input.value = input.value.slice(0, input.value.length - 1);
}

const calculate = () => {
    result.innerHTML = eval(input.value);
}

for(let button of allButtons) {
    button.addEventListener("click", event => {
        let buttonText = event.target.innerHTML;
        
        if(buttonText == "÷") {
            buttonText = "/";
        }

        if(buttonText == "×") {
            buttonText = "*";
        }

        input.value += buttonText;
    });
}