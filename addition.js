const input0 = document.getElementById("num1");
const input1 = document.getElementById("num2");
const output = document.getElementById("output");
const optionSelector = document.getElementById("ops");

const addition = () => {
    //parses input value to float and does the maths
    const num1 = parseFloat(input0.value);
    const num2 = parseFloat(input1.value);
    const answer = parseFloat(num1) + parseFloat(num2);
    return answer;
}

const subtraction = () => {
    //parses input value to float and does the maths
    const num1 = parseFloat(input0.value);
    const num2 = parseFloat(input1.value);
    const answer = parseFloat(num1) - parseFloat(num2);
    return answer;
}

const multiplication = () => {
    const num1 = parseFloat(input0.value);
    const num2 = parseFloat(input1.value);
    const answer = num1 * num2;
    return answer;
}

const division = () => {
    const num1 = parseFloat(input0.value);
    const num2 = parseFloat(input1.value);
    const answer = num1 / num2;
    return answer;
}

    const button = () => {
            //getting optionSelector value into selectedOption for switch to know what is selected
        const selectedOption = optionSelector.value;
        switch(selectedOption){
            case 'add':
                    const solvedA = addition();
                    //outputs value of addition() function
                    output.value = solvedA;
                    console.log("it works");
                break;
            case 'minus':
                    const solvedS = subtraction();
                    //outputs value of subtraction() function
                    output.value = solvedS;
                    console.log("it works");
                break;
            case 'multiply':
                    const solvedM = multiplication();
                    output.value = solvedM;
                    console.log("it worksss");
                break;
            case 'divide':
                    const solvedD = division();
                    output.value = solvedD;
                break;
        }
    }

    //adds a event listener click to solve all your problems ;3
    document.getElementById("solve").addEventListener("click", button);
