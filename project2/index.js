const main_img = document.querySelectorAll('.page1 .img-wrapper img')

  main_img.forEach((a) => {
    a.style.transform = `scale(100%)`;
  });
  $('header').addClass('open');
  $('.page1').find('.text-wrapper').find('.first').addClass('active')
  $('.page1').find('.text-wrapper').find('.first-1').addClass('active')
  $('.page1').find('.text-wrapper').find('.first-2').addClass('active')
  $('.page1').find('.text-wrapper').find('.second').addClass('active')
  $('.page1').find('.line').addClass('active');
  setTimeout(() => {
    $('.page1').find('.img-box').addClass('active')
  }, 1000);
  setTimeout(() => {
    $('.img-box').find('img').addClass('active')
  }, 2000);

$(window).on('scroll', () => {
  if(scrollY > 50) {
    $('header').addClass('active');
  }else{
    $('header').removeClass('active');
  }
});

if(scrollY > $('.page3').find('h1').offset().top) {
  $('.page3').find('h1').addClass('active');
}


const asd = document.querySelector('.page2');
const asd2 = document.querySelector('.page1');
let tcard = document.querySelectorAll('.page2 .text-card')
$(window).on('scroll', () => {
  if(scrollY > 650 && (scrollY < 849)) {
    tcard.forEach((a,idx,arr) => {
      arr[0].style.transform = `scale(100%)`;
    });
  }else if((scrollY > 850) && (scrollY < 1049)) {
    tcard.forEach((a,idx,arr) => {
      arr[1].style.transform = `scale(100%)`;
    });
  }else if((scrollY > 950) && (scrollY < 1150)) {
    tcard.forEach((a,idx,arr) => {
      arr[2].style.transform = `scale(100%)`;
    });
  }else if(scrollY > 2100) {
      tcard.forEach((a,idx,arr) => {
        a.style.transform = `scale(0%)`;
      });
  }else if((scrollY > 2000) && (scrollY < 2100)) {
    tcard.forEach((a,idx,arr) => {
      arr[2].style.transform = `scale(100%)`;
    });
  }else if((scrollY > 1900) && (scrollY<2000)) {
    tcard.forEach((a,idx,arr) => {
      arr[1].style.transform = `scale(100%)`;
    });
  }else if((scrollY > 1600) && (scrollY<1700)) {
    tcard.forEach((a,idx,arr) => {
      arr[0].style.transform = `scale(100%)`;
    });
  }else if(scrollY < 640) {
      tcard.forEach((a,idx,arr) => {
        a.style.transform = `scale(0%)`;
      });
  }
  });


  // 스와이퍼
  let bullet1 = ['Rainbow Romaine', 'Baby Romaine', 'Butter Lettuce'];
  let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className  +   ' ' + className+index  +   '" >' +  (bullet1[index]) + "</span>";
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $(window).on('scroll', () => {
    if(scrollY>1600) {
      $('.swiper-pagination-bullet1').addClass('active')
      $('.swiper-pagination-bullet2').addClass('active')
    }
  });


  gsap.registerPlugin(ScrollTrigger);

  let movementFactor = 0.7; // 
  let backgrounds = gsap.utils.toArray("div .bg");
  
  backgrounds.forEach((img, i) => {
    
    window.addEventListener("load", () => { 
      
      fitImage(img, movementFactor);
      
      gsap.fromTo(img, {
        y: () => i ? -movementFactor * 0.5 * img.parentNode.offsetHeight : 0
      }, {
        y: () => movementFactor * 0.5 * img.parentNode.offsetHeight,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentNode,
          start: () => i ? "top bottom" : "-900px top", 
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true 
        }
      });
    })
  });
  window.addEventListener("resize", () => backgrounds.forEach(img => fitImage(img, movementFactor)));
  
  function fitImage(img, marginFactor) {
    let sx = img.parentNode.offsetWidth / img.naturalWidth,
        sy = img.parentNode.offsetHeight * ( Math.abs(marginFactor)) / img.naturalHeight,
        scale = Math.max(sx, sy),
        w = Math.ceil(img.naturalWidth * scale),
        h = Math.ceil(img.naturalHeight * scale);
    gsap.set(img, {width: w, height: h, top: Math.ceil(-450), left: Math.ceil((img.parentNode.offsetWidth - w) / 2), position: "absolute"});
  }

  
const test = document.querySelector('.page3 h1')
const test2 = document.querySelector('.page2')
let sh = screen.height

  $(window).on('scroll',() => {
    let a = test2.offsetHeight
    let b = test.offsetTop
    let c = b-a;
    if(scrollY> c) {
      $('.page3').find('h1').addClass('active')
      $('.page3').find('h1').find('.first').addClass('active')
      $('.page3').find('h1').find('.second').addClass('active')
      $('.page3').find('h1').find('.third').addClass('active')
      setTimeout(() => {
        $('.page3').find('h1').find('.line').addClass('active')
      }, 700);
    if(scrollY>c +200) {
      $('.swiper-button-next').addClass('active')
    }
  }
  })

  $(window).on('scroll', () => {
    const test = document.querySelector('.page4')
    let a = test.offsetTop
    let c = a-sh
    if(scrollY > c) {
      setTimeout(() => {
        $('.page4').find('h1').find('.first-1').addClass('active')
        $('.page4').find('h1').find('.first-2').addClass('active')
      }, 200);
      setTimeout(() => {
        $('.page4').find('h1').find('.little').addClass('active')
      }, 600);
      setTimeout(() => {
        $('.page4').find('h1').find('.line').addClass('active')
      }, 1000);
    }
  })

  $(window).on('scroll', () => {
    const test = document.querySelector('.page5')
    let a = test.offsetTop
    let c = a-sh
    if(scrollY > c) {
      setTimeout(() => {
        $('.page5').find('h1').find('.first-1').addClass('active')
        $('.page5').find('h1').find('.first-2').addClass('active')
        $('.page5').find('h1').find('.first-3').addClass('active')
      }, 200);
      setTimeout(() => {
        $('.page5').find('h1').find('.second-1').addClass('active')
        $('.page5').find('h1').find('.second-2').addClass('active')
      }, 600);
      setTimeout(() => {
        $('.page5').find('h1').find('.line').addClass('active')
      }, 1000);
    }
  })

  $(window).on('scroll', () => {
    const test = document.querySelector('.page6')
    let a = test.offsetTop
    let c = a-sh
    if(scrollY > c) {
      setTimeout(() => {
        $('.page6').find('.first').addClass('active')
      }, 200);
      setTimeout(() => {
        $('.page6').find('.second').addClass('active')
      }, 300);
      setTimeout(() => {
        $('.page6').find('.third').addClass('active')
      }, 400);
    }
  })

$(window).on('scroll', () => {
  const test = document.querySelector('.page8')
  let a = test.offsetTop
  let b = a-sh
  if(scrollY>b) {
    $('.page8').find('h1').addClass('active')
  }
})

  $(window).on('scroll', () => {
    let a = $('.page7').offset().top
    let b = $('.page6').outerHeight()
    let c = a-b;
    if(scrollY>c){
      $('.page7').find('.page7-wrapper').width('90%');
      $('.page7').find('.page7-wrapper').find('.text-box').addClass('active')
    }else{
      $('.page7').find('.page7-wrapper').width('95%');
      $('.page7').find('.page7-wrapper').find('.text-box').removeClass('active')
  }
  })

  $(window).on('scroll', () => {
    const a = $('.page4').find('.box1').offset().top
    const b = $('.page4').find('.box2').offset().top
    const c = $('.page4').find('.box3').offset().top
    let as = a-sh;
    let bs = b-sh;
    let cs = c-sh
    if(scrollY>bs)
    $('.page4').find('.box2').addClass('active')
    setTimeout(() => {
      if(scrollY>as)
      $('.page4').find('.box1').addClass('active')
    }, 400);
    if(scrollY>cs)
    $('.page4').find('.box3').addClass('active')
  })

  $(window).on('scroll', () => {
    const a = $('.page5').find('.video-box').offset().top
    let as = a-sh;
    if(scrollY>as) {
      $('.page5').find('.video-box').addClass('active')
    }
  })

  $(window).on('scroll', () => {
    const a = $('.page6').find('.icon-box').find('.icon-first').offset().top
    const b = $('.page6').find('.icon-box').find('.icon-second').offset().top
    let as = a-sh+120;
    let bs = b-sh+120;
    if(scrollY>as) {
      $('.page6').find('.icon-box').find('.a1').addClass('active')
      $('.page6').find('.icon-box').find('.a2').addClass('active')
      $('.page6').find('.icon-box').find('.a3').addClass('active')
    }
    if(scrollY>bs) {
      $('.page6').find('.icon-box').find('.a4').addClass('active')
      $('.page6').find('.icon-box').find('.a5').addClass('active')
      $('.page6').find('.icon-box').find('.a6').addClass('active')
    }
  })

  let prevScroll = window.scrollY;
  $(window).on('scroll', () => {
    let currentScroll = window.scrollY;
    if (prevScroll > currentScroll) {
      $('footer').find('.left').css({ left: -20 });
    } else {
      $('footer').find('.left').css({ left: 0 });
    }
    prevScroll = currentScroll;
  });
  $(window).on('scroll', () => {
    let a = $('.footer-last').offset().top
    let b = a-sh+150
    if(scrollY> b){
      $('.footer-last').addClass('active')
    }else {
      $('.footer-last').removeClass('active')
    }
  })

  const scroll = new Scrooth({
    element: window,
    strength: 15,
    accelration:1.5,
    deceleration: 0.975,
  });

  $('#nav-icon4').click(function(){
      $(this).toggleClass('open');
    });

  $('.header-left').find('.menu').on('click', () => {
    $('body').addClass('menu')
  })

  $('.close').on('click', () => {
    $('body').removeClass('menu')
    $('#nav-icon4').toggleClass('open');
  })
  $('.menu-bg').on('click', () => {
    $('body').removeClass('menu')
    $('#nav-icon4').toggleClass('open');
  })