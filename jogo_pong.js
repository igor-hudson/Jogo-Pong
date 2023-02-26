// Posição da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 20;
let rBolinha = dBolinha / 2;

// Velocidade da bolinha
let velocidade_xBolinha = 6;
let velocidade_yBolinha = 2;

//variáveis da raquete
let xRaquete = 5
let yRaquete = 150
let largura_Raquete = 10
let altura_Raquete = 90

//variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidade_yRaqueteOponente;

//placar do jogo
let pontosMeus = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

// Objetos do cenário
function draw() {
  background(0);
  mostraBolinha();
  velocidadeBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentoRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,dBolinha)
}

function velocidadeBolinha(){
  xBolinha += velocidade_xBolinha
  yBolinha += velocidade_yBolinha
}

function verificaColisaoBorda(){
  if (xBolinha + rBolinha > width || xBolinha - rBolinha < 0){
    velocidade_xBolinha *= -1;
  }
  if(yBolinha + rBolinha > height || yBolinha - rBolinha < 0){
    velocidade_yBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, largura_Raquete, altura_Raquete)
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - rBolinha < xRaquete + largura_Raquete &&
      yBolinha - rBolinha < yRaquete + altura_Raquete &&
      yBolinha + rBolinha > yRaquete){
    velocidade_xBolinha *= -1
  }
}
function verificaColisaoRaqueteOponente(){
  if (xBolinha + rBolinha > xRaqueteOponente - largura_Raquete &&
     yBolinha - rBolinha < yRaqueteOponente + altura_Raquete &&
     yBolinha + rBolinha > yRaqueteOponente){
    velocidade_xBolinha *= -1
  }
}
function movimentoRaqueteOponente(){
  velocidade_yRaqueteOponente = yBolinha - yRaqueteOponente - largura_Raquete / 2 - 30;
  yRaqueteOponente += velocidade_yRaqueteOponente
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(pontosMeus, 170, 25);
  fill(color(255,140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 25);
}

function marcaPonto(){
  if (xBolinha + rBolinha > 599){
    pontosMeus += 1
  }
  if (xBolinha - rBolinha < 1){
    pontosOponente += 1
  }
}