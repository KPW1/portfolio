const spo = document.querySelector(".second-page-container").offsetTop;
const footer = document.querySelector('footer');

const Navscrolled = () => {
  if(scrollY > 1) {
    $('nav').addClass('active');
  } else{
    $('nav').removeClass('active');
  }
};


// 공용 하단바 위치 조절 
const footerscroll = () => {
  if(scrollY > spo) { /* spo 부분에는 자신이 원하는 크기 */
    footer.style.opacity = 1;
  }else {
    footer.style.opacity = 0;
  }
}

addEventListener("scroll", Navscrolled);
addEventListener("scroll", footerscroll);



// 메뉴 동작
var app = function () {
  var body = undefined;
  var menu = undefined;
  var menuItems = undefined;
  var init = function init() {
  body = document.querySelector('body');
    menu = document.querySelector('.menu');
    menuItems = document.querySelectorAll('.menu-list-item');
    logo = document.querySelector('.logo');
    applyListeners();
  };

  let menus = document.querySelector('.menu-wrapper');
  var applyListeners = function applyListeners() {
    menu.addEventListener('click', function () {
      return toggleClass(body, 'menu-active');
    });
    menu.addEventListener('click', function () {
      return toggleClass(menus,'active');
    });
  };
  var toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
  };
  init();
}();




// MENU -> CLOSE
menu = document.querySelector('.menu');
$(".menu").click(function(){
  if( $(".menu p").text() == 'MENU') {
    $(".menu p").text("CLOSE");
  } else{
    $(".menu p").text("MENU");
  }
});





function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  console.log(firstElement);
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

window.addEventListener('load', Marquee('nav .text-wrapper', 0.15))
window.addEventListener('load', Marquee('.slide-text-wrapper', 0.6))
