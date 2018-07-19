
var back = document.getElementById('bg');
var but = document.getElementById('next');
function changeBG() {
  var c = 1 - 0.5 + Math.random() * (36 - 1 + 1)
  c = Math.round(c);
  var bgs;
  if (c == 1) {
    bgs = "https://pp.userapi.com/c830709/v830709930/149952/4WEl7m5fMkE.jpg"
  } else if (c == 2) {
    bgs = "https://pp.userapi.com/c830709/v830709930/149965/QPp-c3xLRzY.jpg"
  } else if (c == 3) {
    bgs = "https://psv4.userapi.com/c816120/u84253946/docs/c23cd03bd9cd/673189.png?extra=B8gyEWlKOm0DiLgWaOioNZhwnPzefegVHlAqq4klJZLnNScuK8GtOGxe2iiOcBn475JfqgWidvehVaCKLMhM1xCK6GKIKBmjWEeDNvP8WIEbVHpq1AEHa-ob_5actWGQVIJnnj7hbf_N"
  } else if (c == 4) {
    bgs = "https://psv4.userapi.com/c834500/u84253946/docs/d3/c8edbe89f037/93a96d4bd14883dfa90904c0209f3fca.png?extra=A7BUkBv9EVoZ37yfiRa5X_WLHvTm2wYc3pO7bOzyKz6nkZqaG4U_DHhZyYbSfxZtoxR8z0QddGrraF7Gg9f-nJW5toyziNaxzvLCWHb762iR84ydtQ-wygOYVJs5LQqgUdpRyVFgpxep"
  } else if (c == 5) {
    bgs = "https://www.yukitheater.org/theater/loading/bg/bg17.png"
  } else if (c == 6) {
    bgs = "https://www.yukitheater.org/theater/loading/bg/bg10.jpg"
  } else if (c == 7) {
    bgs = "https://www.yukitheater.org/theater/loading/bg/bg11.jpg"
  } else if (c == 8) {
    bgs = "https://img.getbg.net/upload/full/www.GetBg.net_Anime_Hasuze_Itsuna_anime_game_of_survival_110487_.jpg"
  } else if (c == 9) {
    bgs = "https://i.imgur.com/CX4Ondq.jpg"
  } else if (c == 10) {
    bgs = "https://img.getbg.net/upload/full/www.GetBg.net_Anime_Anime_girl_on_the_bike_at_the_crossing_109305_.jpg"
  } else if (c == 11) {
    bgs = "http://1920x1080hdwallpapers.com/image/201612/anime/7316/tokyo-ghoul-side-view-kirishima-touka-sky.jpg"
  } else if (c == 12) {
    bgs = "http://wallpapers-image.ru/1920x1080/anime/wallpapers/anime-images-1920x1080-21.jpg"
  } else if (c == 13) {
    bgs = "https://1.bp.blogspot.com/-RKB1d4DQMb0/UbidBypAG7I/AAAAAAAABBg/o5pHQ_icCOs/s1600/Sky+Anime+Landscape+29.jpg"
  } else if (c == 14) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-47.jpg"
  } else if (c == 15) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-48.jpg"
  } else if (c == 16) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-49.jpg"
  } else if (c == 17) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-51.jpg"
  } else if (c == 18) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-54.jpg"
  } else if (c == 19) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-56.jpg"
  } else if (c == 20) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-58.jpg"
  } else if (c == 21) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-60.jpg"
  } else if (c == 22) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-66.jpg"
  } else if (c == 23) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-77.jpg"
  } else if (c == 24) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-79.jpg"
  } else if (c == 25) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-81.jpg"
  } else if (c == 26) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-84.jpg"
  } else if (c == 27) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-86.jpg"
  } else if (c == 28) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-87.jpg"
  } else if (c == 29) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-7.jpg"
  } else if (c == 30) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-9.jpg"
  } else if (c == 31) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-10.jpg"
  } else if (c == 32) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-11.jpg"
  } else if (c == 33) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-21.jpg"
  } else if (c == 34) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-29.jpg"
  } else if (c == 35) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-34.jpg"
  } else if (c == 36) {
    bgs = "https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-46.jpg"
  }
  back.style.background = "url('" + bgs + "') no-repeat center center";
}
but.addEventListener('click', changeBG, false);
setInterval(changeBG, 30000)