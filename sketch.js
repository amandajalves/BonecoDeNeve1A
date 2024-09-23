function setup() {
  createCanvas(400, 400);
  background(255);

}

function draw() {
  noStroke();
  fill(135, 206, 235); // Cor do céu (azul claro)
  rect(0, 0, 400, 200); // Desenha o céu na metade superior
  
  noStroke();
  fill(255, 223, 0); // Cor do sol (amarelo)
  circle(280, 160, 80); // Desenha o sol

  noStroke();
  fill(0, 105, 148); // Cor do mar (azul)
  rect(0, 200, 400, 200); // Desenha o mar na metade inferior
  
  stroke(0); // Cor da linha do grid
  strokeWeight(1); // Espessura da linha do grid
  
  // Desenha as linhas verticais
  for (let x = 0; x <= width; x += 10) {
    line(x, 0, x, height);
  }
  
  // Desenha as linhas horizontais
  for (let y = 0; y <= height; y += 10) {
    line(0, y, width, y);
  }
}
