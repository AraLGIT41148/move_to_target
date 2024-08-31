let a = 1;
let b = 0;
const row = 2;
const column = 3;

let targetPlaceMassage = document.getElementById("T");

function updateDisplay() {
    console.log(a);
    const currentPosition = document.getElementById(a + b);
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = "⬜");
    if ((a + b) === 6) {
        targetPlaceMassage.textContent = "You are in target place";
        currentPosition.textContent = "😃";
    } 
    else {
        targetPlaceMassage.textContent = "";
	currentPosition.textContent = "😐";
    }
}

function down() {
    if (!(a >= column))
	a = a + 1;
    updateDisplay();
}

function up() { 
    if (!(a <= 1))
	a = a - 1;
    updateDisplay();
}

function right() {
    if (!(b >= row))
	b = b + 3;
    updateDisplay();
}

function left() {
    if (!(b <= 0))
	b = b - 3;
    updateDisplay();
}

updateDisplay();
