AOS.init();

var swiper = new Swiper(".mySwiper", {
    centeredSlides: false,
    watchSlidesProgress: true,
    slidesPerView: 3,
    cssMode: true,
   
 
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-prevt",
    },
   
  });

  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  var x = document.getElementsByClassName("contents");
  console.log(slideIndex)
  if((slideIndex +n)>0 && slideIndex+n<x.length-1){

  
  console.log(slideIndex)
  showDivs(slideIndex += n);
  }
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("contents");
  if(x.length===n+1){

  }else{  
  x[n-1].classList.add('horizTranslate');
  x[n+1].classList.add('horizTranslate');
  x[n-1].classList.remove('shadow-lg');
  x[n+1].classList.remove('shadow-lg');
  x[n].classList.remove('horizTranslate');
  x[n].classList.add('shadow-lg');
  }
}


var swiper1 = new Swiper(".mySwiper1", {
    navigation: {
      nextEl: ".swiper-button-nex",
      prevEl: ".swiper-button-pre",
    },
  });


  // var swiper = new Swiper(".mySwiper2", {
  //   effect: "coverflow",
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: "auto",
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  // });




  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
   
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-prevt",
    },
  });

  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("actives");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }