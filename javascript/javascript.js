$(document).ready(function () {
  let $santaClaus = $('body .santa-claus'),
      animatedTime = 250;

  // Анимация после загрузки
  if (document.cookie.search(/santa-claus/i) === -1) $santaClaus.addClass('play');

  setTimeout(function () {
    $santaClaus.find('.animated-after-unload').addClass('play');
  }, 2000);

  // Анимация при наведении
  $santaClaus.hover(function () {
    animatedOnHover($(this), animatedTime);
  }, function () {
    animatedOffHover($(this), animatedTime);
  });

  $santaClaus.on('click', function () {
    $(this).find('.santa-claus__pop-up').css('display', 'block');
    animatedOnHover($(this), animatedTime);
  });

  $santaClaus.find('.santa-claus__pop-up .santa-claus__close').on('click', function () {
    $(this).closest('.santa-claus__pop-up').css('display', 'none');
    animatedOffHover($santaClaus, animatedTime);
    return false;
  });

  // Прячем санту до следующего года
  $santaClaus.find('.santa-claus__pop-up .santa-claus__link').on('click', function () {
    document.cookie = 'santa-claus=true; max-age=2'; // 518400
    window.open('https://example.com/');
  });
});

function animatedOnHover($_thet, animatedTime) {
  let $animatedAfter = $_thet.find('.animated-after-unload');

  $animatedAfter.css({
    '-webkit-transform': 'rotate(34deg)',
    '-ms-transform': 'rotate(34deg)',
    transform: 'rotate(34deg)',
  });
  $animatedAfter.animate({
    right: '10px',
  }, animatedTime);
  $animatedAfter.find('.mouth').animate({
    width: '5px',
  }, animatedTime);
  $animatedAfter.find('.face').attr({
    'src': 'assets/img/face_active.svg',
  });
  $animatedAfter.find('.cap').animate({
    right: '24px',
  }, animatedTime);
}

function animatedOffHover($_thet, animatedTime) {
  let $animatedAfter = $_thet.find('.animated-after-unload');

  $animatedAfter.css({
    '-webkit-transform': 'rotate(28deg)',
    '-ms-transform': 'rotate(28deg)',
    transform: 'rotate(28deg)',
  });
  $animatedAfter.animate({
    right: '5px',
  }, animatedTime);
  $animatedAfter.find('.mouth').animate({
    width: '3px',
  }, animatedTime);
  $animatedAfter.find('.face').attr({
    'src': 'assets/img/face_active.svg',
  });
  $animatedAfter.find('.cap').animate({
    right: '26px',
  }, animatedTime);
}
