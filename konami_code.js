const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;

    if (key === code[index]) { 

     if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    }
    else {
      index = 0;
    }
  });
}