$(window).on('scroll', () => {
  if(scrollY > 100) {
    $('header').addClass('active');
  }else{
    $('header').removeClass('active');
  }
});

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
  console.log(scrollY)
  if(scrollY > 650 && (scrollY < 849)) {
    tcard.forEach((a,idx,arr) => {
      arr[0].style.transform = `scale(100%)`;
    });
  }else if((scrollY > 850) && (scrollY < 949)) {
    tcard.forEach((a,idx,arr) => {
      arr[1].style.transform = `scale(100%)`;
    });
  }else if((scrollY > 950) && (scrollY < 1000)) {
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

  


// 마우스 휠
  // class Scrooth {
  //   constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
  //     this.element = element;
  //     this.distance = strength;
  //     this.acceleration = acceleration;
  //     this.deceleration = deceleration;
  //     this.running = false;
  
  //     this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
  //     this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
  //     this.scroll = this.scroll.bind(this);
  //   }
  
  //   scrollHandler(e) {
  //     e.preventDefault();
  
  //     if (!this.running) {
  //       this.top = this.element.pageYOffset || this.element.scrollTop || 0;
  //       this.running = true;
  //       this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
  //       this.isDistanceAsc = true;
  //       this.scroll();
  //     } else {
  //       this.isDistanceAsc = false;
  //       this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
  //     }
  //   }
  
  //   scroll() {
  //     if (this.running) {
  //       this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
  //       Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
  //       Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
  
  //       this.top += this.currentDistance;
  //       this.element.scrollTo(0, this.top);
        
  //       requestAnimationFrame(this.scroll);
  //     }
  //   }
  // }
  
  // const scroll = new Scrooth({
  //   element: window,
  //   strength: 15, //스크롤 한번에 이동하는 거리
  // });


  // 스와이퍼
  let bullet1 = ['Rainbow Romaine', 'Baby Romaine', 'Butter Lettuce'];
  let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (bullet1[index]) + "</span>";
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });