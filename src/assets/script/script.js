
//textarea word count
$('.info-textarea').keyup(function() {
    
  var characterCount = $(this).val().length,
      current = $('#current'),
      maximum = $('#maximum'),
      theCount = $('#count');
    
  current.text(characterCount);
 
  
  /*This isn't entirely necessary, just playin around*/
  if (characterCount < 70) {
    current.css('color', '#666');
  }
  if (characterCount > 70 && characterCount < 90) {
    current.css('color', '#6d5555');
  }
  if (characterCount > 90 && characterCount < 100) {
    current.css('color', '#793535');
  }
  if (characterCount > 100 && characterCount < 120) {
    current.css('color', '#841c1c');
  }
  if (characterCount > 120 && characterCount < 139) {
    current.css('color', '#8f0001');
  }
  
  if (characterCount >= 140) {
    maximum.css('color', '#8f0001');
    current.css('color', '#8f0001');
    theCount.css('font-weight','bold');
  } else {
    maximum.css('color','#666');
    theCount.css('font-weight','normal');
  }
  
      
});


//show hide on scroll 
// let elementsArray = document.querySelectorAll(".phone-animation");
// console.log(elementsArray);
// window.addEventListener('scroll', fadeIn ); 
// function fadeIn() {
//     for (var i = 0; i < elementsArray.length; i++) {
//         var elem = elementsArray[i]
//         var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
//         if (distInView < 0) {
//             elem.classList.add("inView");
//         } else {
//             elem.classList.remove("inView");
//         }git
//     }
// }
// fadeIn();



//remove aos classes
// $(window).resize(function(){
//   if(window.innerWidth < 767){
//     $('.aos-init ').removeAttr('[data-aos=fade-left]');
//     $('.aos-init ').removeClass('aos-animate');
//   }else{
//     $('.aos-init ').attr('[data-aos=fade-left]');
//     $('.aos-init ').addClass('aos-animate');
//   }
// });


// var url = window.location.href;
// console.log(url)
// function UrlExists(url){
//   var http= new XMLHttpRequest();
//   http.open('HEAD',url,false);
//   http.send();
//    console.log(http.status);
//   if(http.status != 404){
//     alert('GUZÍ')

//   }
// }
// window.addEventListener('load',UrlExists(url))
