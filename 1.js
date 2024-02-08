// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.

const arr = [];
let arrSize = parseInt(prompt("Enter array length"));
let value;

if (isNaN(arrSize)) {
    while (isNaN(arrSize)) {
        arrSize = parseInt(prompt("Please, enter number for declaring the array length"));

    }
}

for (let i = 0; i < arrSize; i++) {
    value = parseInt(prompt("Enter your number:"))
    if (isNaN(value)) {
        while (isNaN(value)) {
            value = parseInt(prompt("You can enter only numbers! Enter your number:"));

        }
    }
    arr.push(value);
}
document.write("<p>" + arr + "</p>");

// Відсортувати масив за зростанням.

function compareNumbers(a, b) {
    return a - b;
}
document.write("<p>" + arr.sort(compareNumbers) + "</p>");

// Видалити елементи з масиву з 2 по 4 (включно!).

if (arr.length < 4) {
    do {
        value = parseInt(prompt("For the next step the array's length have to be not less than 4. To add more el, enter your number:"))
        if (isNaN(value)) {
            while (isNaN(value)) {
                value = parseInt(prompt("You can enter only numbers! Enter your number:"));
            }
        }
        arr.push(value);
    } while (arr.length < 4)
    document.write("<p>" + arr.sort(compareNumbers) + "</p>");
}



arr.splice(2, 3)
document.write("<p>" + arr + "</p>");
