function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearEntry() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, display.value.lastIndexOf(' ') + 1);
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch (error) {
        display.value = 'Error';
    }
}

