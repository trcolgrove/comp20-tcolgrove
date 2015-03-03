// Replace this with your code...
function init(){
  canvas = document.getElementById("game_canvas");
  ctx = canvas.getContext('2d');
  img = new Image();
  img.src = "pacman10-hp-sprite.png";
  img.onload = function(){
    ctx.drawImage(img, 322, 2, 465, 136, 0, 0, 465, 136 );
    ctx.drawImage(img, 78, 20, 22, 22, 32, 28, 22, 22);
  }
}
