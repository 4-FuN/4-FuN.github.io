
var back = document.getElementById('bg');
var but = document.getElementById('next');
function changeBG() {
  var c = 1 - 0.5 + Math.random() * (24 - 1 + 1)
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
    bgs = "https://pp.userapi.com/c848528/v848528247/30faf/q0w2SPWeHBQ.jpg"
  } else if (c == 12) {
    bgs = "https://psv4.userapi.com/c834703/u491552351/docs/d14/7bdd2f0b0228/7.jpg?extra=EuTXYR4sgfk5n2drud75lVexvbEQKWggBubbkoZhyYiH1Rcgi2kSFIvl6nYNPDrGXDFNrGxa_j9JXFVc5g1oF9iXAGK1U35baOFZxtZsZlzaLUnwO3i-4pL-Zy_6YZ06eFxV-JTymyvNyw"
  } else if (c == 13) {
    bgs = "https://1.bp.blogspot.com/-RKB1d4DQMb0/UbidBypAG7I/AAAAAAAABBg/o5pHQ_icCOs/s1600/Sky+Anime+Landscape+29.jpg"
  } else if (c == 14) {
    bgs = "https://psv4.userapi.com/c848020/u491552351/docs/d14/c7a1f4561ccb/de71304637ef23cf3a1703ea21b270a54f4bcb61_s2_n2.jpg?extra=EXwCPhGwXS-OJXU6zwniGMZvjzyMUk088g2m3e9PQZdBCaUessqcEDP0ghS38MyVJ6DHLDGn3tM3B_vuJ4JF730J55Q2MVRjI7FL9i80GC4Hdp-rJ_iwD5tY6cbpQi0XiQaLu5Db7FpTLQ"
  } else if (c == 15) {
    bgs = "https://psv4.userapi.com/c834700/u491552351/docs/d14/95286f12dd03/01e1c20222e18db29edba22c177238b9c0b78616_s2_n2.png?extra=-3ndQkwzOSNETUOaHfdwRtx9vJ6Zy1J_bTBIjbeyrwFGih9-MnEG1ncaM03G2jYmEk1KIDzn3BvacX3zRCqiLA3fwgpAHf5KYf6wPX-bCHb7PCiflIkyREsXkZXFG3b59wlSInJoPsbApA"
  } else if (c == 16) {
    bgs = "https://psv4.userapi.com/c848332/u491552351/docs/d12/e17c6f852d8b/nkl.jpg?extra=nhrgi5hCyq_jHvfQDy-4HGmqj43f-X24eomt64FJT-PEwVQ094sOpNZ3_fuvZQ6dDdgwuCvQmiucswmJVP43pi3-GimOrl9cGQDEkz07580t9PS96RcPcUJSMwNlxgt4cfdD9L_r03iNqA"
  } else if (c == 17) {
    bgs = "https://psv4.userapi.com/c848336/u491552351/docs/d7/4c094b7edf19/Hatsune_Miku_full_2037044.jpg?extra=VBunOHYfZhFgoV2-5sesmI00GHHRVdAewInWIb-VEwfdr9lEcyvCDsq1--88kgBw_pXyEx49BZe60TpHHBSevuCGDHWyBjLyods7P0WutK9kNJcFDgXQFGeKn_yUn0c7-pmv-UPQCvWtBg"
  } else if (c == 18) {
    bgs = "https://psv4.userapi.com/c848136/u491552351/docs/d17/f570fde108fa/girls_delight_protest_flyers_posters_21624_1600x900.jpg?extra=j14mIKao2wzLpUplXDRCtkAf6icMpEYX5yCJAB7aCGjknrZoNMZmSIrjvs6EqWfEwgMXwCmMQTMNk8DpsP64l0af467AAs2fRfMTC9Ypk8RgBz8P2SVUrDLnGiZfxUzEABuLjmAc-8b3HA"
  } else if (c == 19) {
    bgs = "https://psv4.userapi.com/c848220/u491552351/docs/d7/214d6a5141e0/Bez_imeni-111.png?extra=ca6QKgKmLdPdg39uaQxECgTn8SJkR86_WO8oHFLxgtjuvotvNCLkN5ngz53ftqGaFSvFBtDRQ4xmgHmsawhXJwJ_dXEhxQKKu5m9Dq7RDwTymNJmYU9Ew4ihWJcy2Xdb5kQJJZjl6IlcCw"
  } else if (c == 20) {
    bgs = "https://psv4.userapi.com/c848428/u491552351/docs/d14/0f3731e15b02/wxbs.png?extra=UHFJ7vlRshW5aYK24UgsDa-XVCC0MinNb40cAetin3-9Pas7sjpN_0DFIOvPOTQc9gl6aVnZtTnOyKfabYP0K4R-pGEQjeunBnaSn5GbWWj6prVjgm-WAmtFKglt_Tca92A9ZQwyrrzaJw"
  } else if (c == 21) {
    bgs = "https://psv4.userapi.com/c834601/u491552351/docs/d16/be5eaa9602f2/86b091ebb640e020a6c0b690c31da715.jpg?extra=ATkaaAbT_B1LL0d76GlsU2aJaSVyVU1h8mbrWgBaNwVoLogprMzvYtlztVOLh2CLaYpltbmuUW3YOWrPWPddR3uRgV0gBU-gmAvA33QUfeRmCWp1YeaIZTnDX3v6C4OxxcWWbXn_OSHTgQ"
  } else if (c == 22) {
    bgs = "https://psv4.userapi.com/c834701/u491552351/docs/d6/f8d52d10a20b/anime-touhou-art-60mai-yakumo-yukari-dev-859389.jpg?extra=cZzslIiT6Prnq2AWYBAbT8uqo3sfiwBKBlpa7Fca_PIJvzpf6BlPat9gUkn8IUwt54L5ji4SfPKT6nmmxv9R3vKhp3WxSZbMRwQ3w8NVOHgfIGu5tLprdcGHRmtIluJN_GD0Yzt8Wm0tQA"
  } else if (c == 23) {
    bgs = "https://psv4.userapi.com/c848336/u491552351/docs/d8/e1aaefbac850/60848489_p0.jpg?extra=7ePrrcInFZOQThijzS1mNidsPzKlXndQDpxbpysgtJ_Oqf8HXb_bcKQvFjRPpwvxASj2CAdCCrsUd225I7fOn-LudtMc-gBREDx854uJDzLSLYRHC4fEjRUCFsvSQrqIUVvPzASjGm6BPQ"
  } else if (c == 24) {
    bgs = "https://psv4.userapi.com/c834702/u491552351/docs/d12/f2a6784637d9/1920x1080_990389_www_ArtFile_ru.jpg?extra=E3jmD_IwYzkmeCYqGgRwW057XsM4NvRTGzQGmu2-1y7MVYVgKgA4OQE59VN2_f1DJPnERPIsUOk6sHkHZNxDouqGAkbtUAPL8LdLNppaOu-49IQiQlG6I6fE7yPjaUKO1LcqQvJM0_mDNw"
  }
  console.log(c); 
  back.style.background = "url('" + bgs + "') no-repeat center center";
}
but.addEventListener('click', changeBG, false);
setInterval(changeBG, 30000)