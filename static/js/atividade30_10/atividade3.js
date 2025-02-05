const table = document.getElementById('table');

function generateLine() {

  for (let number = 0; number <= 997; number++) {

    const line = document.createElement('div');
    line.classList.add('line')
    line.innerHTML = `
      <div>${number}</div>
      <div>nome ${number}</div>
      <div>sobrenome ${number}</div>
      <div>nome@exemplo.com ${number}</div>
      <div><i class="material-symbols-outlined delete">delete</i><i class="material-symbols-outlined edit">edit</i></div>`
    document.querySelector('#table').appendChild(line);
  }
}

generateLine();