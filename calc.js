var data = "";

function calcHistory () {
    return data;
}

function clearHistory () {
    return data = "";
}

function clearInput () {
    inputField1.value = '';
    inputField2.value = '';
}

function calculation (operator) {
    let number1 = Number(document.getElementById("value1").value);
    let number2 = Number(document.getElementById("value2").value);
    let result = 0;
    if (isNaN(number1) || isNaN(number2)) {
        alert("calculation can only operate with numbers!");
        return 0;
    }
    switch (operator) {
        case '+':
            result = number1 + number2;
            data += number1 + " + " + number2 + " = " + result + '<br>';
            return result;
        case '-':
            result = number1 - number2;
            data += number1 + " - " + number2 + " = " + result + '<br>';
            return result;
        case '*':
            result = number1 * number2;
            data += number1 + " * " + number2 + " = " + result + '<br>';
            return result;
        case '/':
            if (number2 == '' || number2 == 0) {
                alert("number can not be divided by 0")
                return 0;
            }
            result = number1 / number2;
            data += number1 + " / " + number2 + " = " + result + '<br>';
            return result;
        default:
            result = 0;            
    }
}