//código do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
   if(podeMovimentar()){
     yAtor += 3;
   }
  }
}
function verificaColisao(){
// collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], compCarros, altCarros, xAtor, yAtor,15)
    if(colisao){
      voltaAtorPosicaoInicial();
      somColisao.play();
      if(pontosMaiorQue0()) {
        meusPontos -= 1;
     }
   }
  }
}
 function  voltaAtorPosicaoInicial(){
   yAtor = 366;
 }

 function atravessou(){
   textAlign(CENTER)
   textSize(17)
   fill(color(255,219,40))
   text("Pontos: "+ meusPontos, width / 5, 22);
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaAtorPosicaoInicial();
  }
}
function pontosMaiorQue0(){
  return meusPontos > 0
}

function podeMovimentar(){
  return yAtor < 366;
}