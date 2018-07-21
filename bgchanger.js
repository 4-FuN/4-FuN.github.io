
var back = document.getElementById('bg');
var but = document.getElementById('next');
function changeBG() {
  var c = 1 - 0.5 + Math.random() * (11 - 1 + 1)
  c = Math.round(c);
  var bgs;
  if (c == 1) {
    bgs = "https://pp.userapi.com/c830709/v830709930/149952/4WEl7m5fMkE.jpg"
  } else if (c == 2) {
    bgs = "https://pp.userapi.com/c830709/v830709930/149965/QPp-c3xLRzY.jpg"
  } else if (c == 3) {
    bgs = "https://www.yukitheater.org/theater/loading/bg/bg17.png"
  } else if (c == 4) {
    bgs = "https://www.yukitheater.org/theater/loading/bg/bg10.jpg"
  } else if (c == 5) {
    bgs = "https://www.yukitheater.org/theater/loading/bg/bg11.jpg"
  } else if (c == 6) {
    bgs = "https://img.getbg.net/upload/full/www.GetBg.net_Anime_Hasuze_Itsuna_anime_game_of_survival_110487_.jpg"
  } else if (c == 7) {
    bgs = "https://i.imgur.com/CX4Ondq.jpg"
  } else if (c == 8) {
    bgs = "https://img.getbg.net/upload/full/www.GetBg.net_Anime_Anime_girl_on_the_bike_at_the_crossing_109305_.jpg"
  } else if (c == 9) {
    bgs = "https://pp.userapi.com/c848528/v848528247/30faf/q0w2SPWeHBQ.jpg"
  } else if (c == 10) {
    bgs = "https://1.bp.blogspot.com/-RKB1d4DQMb0/UbidBypAG7I/AAAAAAAABBg/o5pHQ_icCOs/s1600/Sky+Anime+Landscape+29.jpg"
  } else if (c == 11) {
    bgs = "https://pp.userapi.com/c846019/v846019790/aaa80/aD2nZe-rp6E.jpg"
  }
  console.log(c); 
  back.style.background = "url('" + bgs + "') no-repeat center center";
}
but.addEventListener('click', changeBG, false);
setInterval(changeBG, 30000)