var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

playerImage = new Image();
playerImage.src = "assets/Fedora.png";

playerImage.onload = function() {
    ctx.drawImage(image, 5, 5);
};