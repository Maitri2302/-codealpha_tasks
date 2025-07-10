const display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    clearDisplay();
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/−/g, '-'));
  } catch (e) {
    display.innerText = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key.match(/[0-9+\-*/.%]/)) {
    append(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
