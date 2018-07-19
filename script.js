    $(function() {
      var title = document.title,
        animSeq = ["/", "-", "-", "|", "\\"],
          animIndex = 0,
          titleIndex = 0;
      function doInverseSpinZeroPitch() {
          var loadTitle = title.substring(0, titleIndex);
          if (titleIndex > title.length) {
              animIndex = 0;
              titleIndex = 0
          }
          if (animIndex > 1) {
              titleIndex++;
              animIndex = 0
          }
          document.title = loadTitle + animSeq[animIndex];
          animIndex++
      }
      window.setInterval(doInverseSpinZeroPitch, 300);
  });

$(function() {
	$(".typed").typed({
        strings: ["Привет ты на моем сайте 😊.", "Я аниме дебил 😎.", "Web Developer 😏.", "Quake 3 Arena ❤.", "OSU! player 😳.", "Если ты до сих пор тут знай я тебя люблю ❤.", "Тут еще много фраз.", "Хаха. Ты мне поверил я соврал у меня нет фантазии.", "Хаха. Ты мне поверил 2 раз я соврал дальше идут рандомные цитаты.", "Лови мгновение, пока спит время, старина.", "Как-то засмотрелся на нее, пока она шла мимо, и вырвал пациенту здоровый зуб вместо больного.", "Памятка: никогда не обсуждай геополитику с человеком который думает, что в конфетах «птичье молоко» реально птичье молоко.", "Люблю, когда ты упрямишься. Это меня трогает до самой глубины моих плавок." ],
        typeSpeed: 80,
        loop: true,
        cursorChar: "|",
    });
});
// bg
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.5)';

    $('#bg').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (30 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (30 * lMouseY) / 100;

});

moveBackground();
