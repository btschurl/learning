const btnConvert = document.getElementById("convert");
const inputNumber = document.getElementById("number");
const result = document.getElementById("result");

const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

const convertToNumeric = (number) => {
    const numberArray = number.split("");
    const numericArray = numberArray.map((item) => romanNumbers[item]);
    let sum = 0;
    for (let i = 0; i < numericArray.length; i++) {
        if(numericArray[i] < numericArray[i+1]) {
            sum -= numericArray[i];
        } else {
            sum += numericArray[i];
        }
    }
    return sum;
}
btnConvert.addEventListener("click", () => {
    result.innerHTML = convertToNumeric(inputNumber.value);
});
