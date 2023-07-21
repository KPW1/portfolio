const main_img = document.querySelectorAll('.page1 .img-wrapper img')


$(document).ready(function() {
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
})


const test = document.querySelector('.page3 h1')
const test2 = document.querySelector('.page2')

$(window).on('scroll', () => {
  console.log( 'scrollY'+ ':' + scrollY)
  let a = test2.offsetHeight
  let b = test.offsetTop
  let c = b-a;
  // console.log(test2.offsetHeight)
  // console.log(test.offsetTop)
  console.log(c)
  if(scrollY> c) {
    $('.page3').find('h1').addClass('active')
    setTimeout(() => {
      $('.page3').find('h1').find('.line').addClass('active')
    }, 700);
  }
  // console.log(scrollY);
  if(scrollY > 50) {
    $('header').addClass('active');
  }else{
    $('header').removeClass('active');
  }
});

if(scrollY > $('.page3').find('h1').offset().top) {
  $('.page3').find('h1').addClass('active');
}
// $(document).ready(function() {
//   $('html').smoothWheel()
// });

const asd = document.querySelector('.page2');
const asd2 = document.querySelector('.page1');
$(window).on('scroll', () => {
  // console.log(scrollY)
  // let a1 = asd.offsetHeight;
  // let a2 = asd2.offsetHeight;
  // console.log(a1);
});
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

!function(e,n){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],n):"object"==typeof exports?(require("gsap"),n(require("scrollmagic"),TweenMax,TimelineMax)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.TweenMax||e.TweenLite,e.TimelineMax||e.TimelineLite)}(this,function(e,n,o){"use strict";var t=window.console||{},r=Function.prototype.bind.call(t.error||t.log||function(){},t);e||r("(animation.gsap) -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),n||r("(animation.gsap) -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."),e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var e,t=this,r=function(){t._log&&(Array.prototype.splice.call(arguments,1,0,"(animation.gsap)","->"),t._log.apply(this,arguments))};t.on("progress.plugin_gsap",function(){i()}),t.on("destroy.plugin_gsap",function(e){t.removeTween(e.reset)});var i=function(){if(e){var n=t.progress(),o=t.state();e.repeat&&-1===e.repeat()?"DURING"===o&&e.paused()?e.play():"DURING"===o||e.paused()||e.pause():n!=e.progress()&&(0===t.duration()?n>0?e.play():e.reverse():t.tweenChanges()&&e.tweenTo?e.tweenTo(n*e.duration()):e.progress(n).pause())}};t.setTween=function(a,s,l){var c;arguments.length>1&&(arguments.length<3&&(l=s,s=1),a=n.to(a,s,l));try{(c=o?new o({smoothChildTiming:!0}).add(a):a).pause()}catch(e){return r(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),t}if(e&&t.removeTween(),e=c,a.repeat&&-1===a.repeat()&&(e.repeat(-1),e.yoyo(a.yoyo())),t.tweenChanges()&&!e.tweenTo&&r(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."),e&&t.controller()&&t.triggerElement()&&t.loglevel()>=2){var u=n.getTweensOf(t.triggerElement()),p=t.controller().info("vertical");u.forEach(function(e,n){var o=e.vars.css||e.vars;if(p?void 0!==o.top||void 0!==o.bottom:void 0!==o.left||void 0!==o.right)return r(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1})}if(parseFloat(TweenLite.version)>=1.14)for(var g,d,f=e.getChildren?e.getChildren(!0,!0,!1):[e],w=function(){r(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")},h=0;h<f.length;h++)g=f[h],d!==w&&(d=g.vars.onOverwrite,g.vars.onOverwrite=function(){d&&d.apply(this,arguments),w.apply(this,arguments)});return r(3,"added tween"),i(),t},t.removeTween=function(n){return e&&(n&&e.progress(0).pause(),e.kill(),e=void 0,r(3,"removed tween (reset: "+(n?"true":"false")+")")),t}})});
  


var html = document.documentElement;
  var body = document.body;

  var scroller = {
    target: document.querySelector(".scroll-container"),
    ease: 0.09, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
  };

  var requestId = null;

  TweenLite.set(scroller.target, {
    rotation: 0.01,
    force3D: true
  });

  window.addEventListener("load", onLoad);

  function onLoad() {    
    updateScroller();  
    window.focus();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll); 
  }

  function updateScroller() {
    
    var resized = scroller.resizeRequest > 0;
      
    if (resized) {    
      var height = scroller.target.clientHeight;
      body.style.height = height + "px";
      scroller.resizeRequest = 0;
    }
        
    var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
      scroller.y = scrollY;
      scroller.scrollRequest = 0;
    }
    
    TweenLite.set(scroller.target, { 
      y: -scroller.y 
    });
    
    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  }

  function onScroll() {
    scroller.scrollRequest++;
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  }

  function onResize() {
    scroller.resizeRequest++;
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  } 


  const controller = new ScrollMagic.Controller();

  var forEach = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };

  var myNodeList = document.querySelectorAll(".img-loader");

  forEach(myNodeList, function(index, value) {
    const tween = TweenMax.to(value, 2, { borderTopLeftRadius:"100%", borderTopRightRadius:"100%", delay:0.3, height: 0, ease: Power2.easeOut });
    
    const itemScene = new ScrollMagic.Scene({
      triggerElement: value,
      triggerHook: 0.6,
      reverse: false
    })
    .setTween(tween)
    .addTo(controller);
  });


  // 스크롤 매직

  gsap.registerPlugin(ScrollTrigger);

  let movementFactor = 0.7; // controls how much the backgrounds move. It's a percentage of the section's height. This can be negative if you want to move in the other direction.
  let backgrounds = gsap.utils.toArray("div .bg");
  
  backgrounds.forEach((img, i) => {
    
    img.addEventListener("load", () => { // wait until the image loads because we need to ascertain the naturalWidth/naturalHeight
      
      fitImage(img, movementFactor);
      
      // the first image (i === 0) should be handled differently because it should start at the very top.
      // use function-based values in order to keep things responsive
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
          invalidateOnRefresh: true // to make it responsive
        }
      });
    })
    
  
  });
  
  // whenever the window resizes, we should adjust the backgrounds to fit properly.
  window.addEventListener("resize", () => backgrounds.forEach(img => fitImage(img, movementFactor)));
  
  // fits the image into the parent proportionally while ensuring there's enough of a margin for the vertical movement.
  function fitImage(img, marginFactor) {
    let sx = img.parentNode.offsetWidth / img.naturalWidth,
        sy = img.parentNode.offsetHeight * ( Math.abs(marginFactor)) / img.naturalHeight,
        scale = Math.max(sx, sy),
        w = Math.ceil(img.naturalWidth * scale),
        h = Math.ceil(img.naturalHeight * scale);
    gsap.set(img, {width: w, height: h, top: Math.ceil(-450), left: Math.ceil((img.parentNode.offsetWidth - w) / 2), position: "absolute"});
  }