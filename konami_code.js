const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  function keyDown(e) {
    const key = e.key;

    if (key === code[index]) {
      index++;
    }

    if (index === code.length -1) {
      alert('Hurray!');

      index = 0;
    }

    else {
      index = 0;
    }
  }
}
document.body.addEventListener('keydown', keyDown(e), false);
