//código do carro

let xCarros = [400, 400, 400, 400,400,400];
let yCarros = [40, 96, 150,210,250,318];
let velocidadeCarros = [4.5, 4.5, 4.2,5,3,5.3];
let compCarros = 40;
let altCarros = 30;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){  image(imagemCarros[i],xCarros[i],yCarros[i],compCarros,altCarros); 
  } 
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTela(xCarros[i])){
    xCarros[i] = 600;
   }
 }
}
function passouTela(xCarro){
  return xCarro < -50;
}






