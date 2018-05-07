const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

let index = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
    let key = e.key;

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