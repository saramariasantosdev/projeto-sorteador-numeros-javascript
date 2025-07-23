function sortear(){
    let quantidade = parseInt(document.querySelector('#quantidade').value);
    let de = parseInt(document.querySelector('#de').value);
    let ate = parseInt(document.querySelector('#ate').value);

    let numero = obterNumeroAleatorio(de, ate);
    alert(`Número Aleatório ${numero}`);
}

function obterNumeroAleatorio(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}