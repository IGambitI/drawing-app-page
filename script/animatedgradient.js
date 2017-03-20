var colors = new Array(
  [102,102,255],
  [230,242,255],
  [179,179,255],
  [153,153,255],
  [255,255,255],
  [204,204,255]
);
var step = 0;
var colorOrder = [0,1,2,3];
var speed = 0.002;

function upgradeColor(){
  if ( $===undefined ) return;
  var c0_0 = colors[colorOrder[0]];
  var c0_1 = colors[colorOrder[1]];
  var c1_0 = colors[colorOrder[2]];
  var c1_1 = colors[colorOrder[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";

  $('.dane').css({
    background: "linear-gradient(from("+color1+"), to("+color2+"))"
  }).css({
    background: "linear-gradient("+color1+" 0%, "+color2+" 100%)"
  });

  step += speed;
  if (step >= 1){
    step %= 1;
    colorOrder[0] = colorOrder[1];
    colorOrder[2] = colorOrder[3];

    colorOrder[1] = (colorOrder[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    colorOrder[3] = (colorOrder[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(upgradeColor,10)
