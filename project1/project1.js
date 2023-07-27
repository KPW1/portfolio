let prevScroll = window.scrollY;
console.log(prevScroll);

$(window).on('scroll', () => {
  // 스크롤시 변수에 저장
  let currentScroll = window.scrollY;
  console.log('currentScroll: ', currentScroll);
  console.log('1 prevScroll: ', prevScroll);

  // 이전 스크롤 값이 크면 true, 스크롤을 올리면 header 보임
  if (prevScroll > currentScroll) {
    // $('header').show();
    $('header').css({ top: 0 });
  } else {// 이후 스크롤 값이 크면 false, 스크롤을 내리면 header 숨김
    // $('header').hide();
    $('header').css({ top: -100 });
  }

  // prev에 현재 스크롤 값 대입
  prevScroll = currentScroll;
  console.log('2 prevScroll: ', prevScroll);
});

$(window).on('click',(e) => {
  e.preventDefault();
})

$('footer').find('.portfolio').find('a').on('click',(e) => {
  $(this).unbind('click').click()
})

const carlist = document.querySelectorAll('.careers ul li')
const carimg = document.querySelectorAll('.careers .career-img img')
const cararr = document.querySelectorAll('.careers .arrow-box')
let carnum = 0;

$('.careers').find('.next').on('click', () => {
  ++carnum;
  if (carnum < 3) {
    carlist.forEach((a,idx,arr) => {
      a.classList.remove('active')
      setTimeout(() => {
        $('.careers').find('.arrow-box').find('p').text(carnum+1 + " / " + 3 )
        arr[carnum].classList.add('active')
      }, 1000);
    });
    carimg.forEach((a,idx,arr)=> {
      a.classList.remove('active')
      arr[carnum].classList.add('active')
    }); 
  } else {
    carlist.forEach((a,idx,arr) => {
      a.classList.remove('active')
      setTimeout(() => {
        arr[0].classList.add('active')
        $('.careers').find('.arrow-box').find('p').text(carnum+1 + " / " + 3 )
      }, 1000)
    });
    carimg.forEach((a,idx,arr)=> {
      a.classList.remove('active')
      arr[0].classList.add('active')
    }); 
    carnum = 0;
  }
})

$('.careers').find('.prev').on('click', () => {
  --carnum;
  if(carnum <0) {
    carnum=2;
    carlist.forEach((a,idx,arr) => {
      a.classList.remove('active')
      setTimeout(() => {
        $('.careers').find('.arrow-box').find('p').text(carnum+1 + " / " + 3 )
        arr[2].classList.add('active')
      }, 1000);
    });
    carimg.forEach((a,idx,arr)=> {
      a.classList.remove('active')
      arr[2].classList.add('active')
    }); 

  }else if((carnum> -1)|| (carnum = 0)){
    carlist.forEach((a,idx,arr) => {
      a.classList.remove('active')
      setTimeout(() => {
        $('.careers').find('.arrow-box').find('p').text(carnum+1 + " / " + 3 )
        arr[carnum].classList.add('active')
      }, 1000);
    });
    carimg.forEach((a,idx,arr)=> {
      a.classList.remove('active')
      arr[carnum].classList.add('active')
    }); 

  }
})
const cenlist = document.querySelectorAll('.centers .mobile-center .txt-box')
const cenimg = document.querySelectorAll('.centers .center-img img')
let cennum = 0;

$('.centers').find('.next').on('click', () => {
  ++cennum;
  if(cennum <3) {
    cenlist.forEach((a,idx,arr)=> {
      a.classList.remove('active') 
      setTimeout(() => {
        arr[cennum].classList.add('active')
        $('.centers').find('.arrow-box').find('p').text(cennum+1 + " / " + 3 )
      }, 1000);
    })
    cenimg.forEach((a,idx,arr)=> {
      a.classList.remove('active')
      arr[cennum].classList.add('active')
    });
  }
  else {
    cenlist.forEach((a,idx,arr) => {
      a.classList.remove('active')
      setTimeout(() => {
        arr[0].classList.add('active')
        $('.centers').find('.arrow-box').find('p').text(cennum+1 + " / " + 3 )
      }, 1000);
    });
    cenimg.forEach((a,idx,arr)=> {
      a.classList.remove('active')
      arr[0].classList.add('active')
    });
    cennum = 0;
  }
})

$('.centers').find('.prev').on('click', () => {
  --cennum;
  if(cennum <0) {
    cennum=2
    cenlist.forEach((a,idx,arr)=> {
      a.classList.remove('active') 
      setTimeout(() => {
        arr[2].classList.add('active')
        $('.centers').find('.arrow-box').find('p').text(cennum+1 + " / " + 3 )
      }, 1000);
    })
    cenimg.forEach((a,idx,arr)=> {
      a.classList.remove('active')
      arr[2].classList.add('active')
    });
  } else if ((cennum >-1) || (cennum=0)) {
    cenlist.forEach((a,idx,arr) => {
      a.classList.remove('active')
      setTimeout(() => {
        arr[cennum].classList.add('active')
        $('.centers').find('.arrow-box').find('p').text(cennum+1 + " / " + 3 )
      }, 1000);
    });
    cenimg.forEach((a,idx,arr)=> {
      a.classList.remove('active')
      arr[cennum].classList.add('active')
    });
  }
})



