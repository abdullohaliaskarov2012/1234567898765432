let counterValue = 0;

function setCounter() {
  const inputValue = parseInt(document.getElementById('numberInput').value);
  if (!isNaN(inputValue)) {
    counterValue = inputValue;
    document.getElementById('counter').textContent = counterValue;
  }
}

function increase() {
  counterValue++;
  document.getElementById('counter').textContent = counterValue;
  document.getElementById('counterContainer').style.backgroundColor = 'green';
}

function decrease() {
  counterValue--;
  document.getElementById('counter').textContent = counterValue;
  document.getElementById('counterContainer').style.backgroundColor = 'red';
}

function changeBackgroundColor() {
  const color = document.getElementById('colorPicker').value;
  document.body.style.backgroundColor = color;
}
