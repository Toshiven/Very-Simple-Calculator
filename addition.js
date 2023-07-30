const input0 = document.getElementById("num1");
const input1 = document.getElementById("num2");
const output = document.getElementById("output");
const optionSelector = document.getElementById("ops");

//event listener to know if selection option changed
optionSelector.addEventListener("change", () =>{
    //getting optionSelector value into selectedOption for switch to know what is selected
    const selectedOption = optionSelector.value;

    //
    switch(selectedOption){
        case 'add':
            //on click of solve button will call addition() function
            document.getElementById("solve").addEventListener("click", function () {
                const solved = addition();
                //outputs value of addition() function
                output.value = solved;
                console.log("it works");
            })
            
            const addition = () => {
                //parses input value to float and does addition
                const num1 = parseFloat(input0.value);
                const num2 = parseFloat(input1.value);
                const answer = parseFloat(num1) + parseFloat(num2);
                return answer;
            }
            break;
        case 'minus':
            //on click of solve button will call subtraction() function
            document.getElementById("solve").addEventListener("click", function () {
                //outputs value of subtraction() function
                const solved = subtraction();
                output.value = solved;
                console.log("it works");
            })

            const subtraction = () => {
                //parses input value to float and does addition
                const num1 = parseFloat(input0.value);
                const num2 = parseFloat(input1.value);
                const answer = parseFloat(num1) - parseFloat(num2);
                return answer;
            }
            break;

    }
})
console.log(addition());
document.getElementById("output").value = addition();