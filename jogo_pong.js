  // Posição da bolinha
  let xBolinha = 300;
  let yBolinha = 200;
  let dBolinha = 20;
  let rBolinha = dBolinha / 2;
  
    // Velocidade da bolinha
  let velocidade_xBolinha = 4;
  let velocidade_yBolinha = 2;
  
  function setup() {
    createCanvas(600, 400);
  }
  
  // Objetos do cenário
  function draw() {
    background(0);
    mostraBolinha();
    velocidadeBolinha();
    verificaColisaoBorda();
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