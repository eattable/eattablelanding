//phone animation on scrolling

gsap.from(".line video", {
  scrollTrigger: {
    trigger: ".orange",
    scrub: true,
    pin: true,
    // start: "top top",
    end: "+=100%"
  },
  scaleX: 2, 
  scaleY: 2, 
  // transformOrigin: "left center", 
  ease: "none"
});


AOS.init({
duration: 1200,
})


//business page advanced slider

var $slider_ini = $(".Advance-Slider");
  var total_slide = 0;
  $slider_ini.on("init", function(event, slick ,  currentSlide, nextSlide){
      $('button.slick-arrow').append('<div class="thumb"></div>');
      total_slide = slick.slideCount;
      console.log(total_slide);
      next_img = $(slick.$slides[1]).find('img').attr('src'); 
      prev_img = $(slick.$slides[total_slide - 1]).find('img').attr('src'); 
      $('button.slick-next .thumb').append('<img src="'+next_img+'">');
      $('button.slick-prev .thumb').append('<img src="'+prev_img+'">');
      
  });
  $slider_ini.slick({
      autoplay:true,
      autoplaySpeed:4000,
      speed:1000,
      slidesToShow:1,
      slidesToScroll:1,
      dots:true,
      pauseOnHover:false,
      infinite:true,
      customPaging: function(slider, i) {
          var thumb = $(slider.$slides[i]).find('.dots-img').attr('src');
          console.log(thumb);
          return '<button><div class="mextrix"><a><img src="'+thumb+'"></a></div></button>';

      }
    });


  

  $( "button.slick-arrow , .Advance-Slider ul.slick-dots li button" ).hover(function() {
      $( this ).addClass( "hover-in" );
      $( this ).removeClass( "hover-out" );
    }, function() {
      $( this ).removeClass( "hover-in" );
      $( this ).addClass( "hover-out" );
    }
  );


 

  $slider_ini.on('afterChange', function (event, slick, currentSlide) {
      console.log('afterChange: '+ currentSlide);

      prev_img = $(slick.$slides[currentSlide - 1]).find('img').attr('src'); 
      next_img = $(slick.$slides[currentSlide + 1]).find('img').attr('src'); 

      if (currentSlide == total_slide) {
        prev_img = $(currentSlide - 1).find('img').attr('src');           
      }

      if (currentSlide == 0) {
        console.log('if call');
        prev_img = $(slick.$slides[total_slide - 1]).find('img').attr('src'); 
      }

      if (currentSlide == total_slide - 1) {
        next_img = $(slick.$slides[0]).find('img').attr('src');         
      }
      
      $('button.slick-arrow ').find('img').remove();

      $('button.slick-next .thumb').append('<img src="'+next_img+'">');
      $('button.slick-prev .thumb').append('<img src="'+prev_img+'">');
      
  });









// // //This prevents the action of right clicking
// //This is now pointless after what I implemented above
// var preventRightClick = window.addEventListener("contextmenu",function(e) {
//   e.preventDefault();
//   alert("Not allowed to right click, sorry");
// });

// //This prevents the Ctrl+C keyboard shortcut...
// //Umm...ok...No it doesn't :-/
// var preventCtrlC = window.addEventListener("keypress",function(e) {
//   var str;
//   for (i in e) {
//     str = str + i + ": " + e[i] + "<br />";
//   }
//   document.getElementById("innerContainer").innerHTML = str;
// });


//regret page reload
function preventBack() { window. history. forward(); } setTimeout("preventBack()", 0); 


//multiple file selection
$('#file').on('change',function(){
  _readFileDataUrl(this,function(err,files){
        if(err){return}
        console.log(files)//contains base64 encoded string array holding the 
  });
});
var _readFileDataUrl=function(input,callback){
 var len=input.files.length,_files=[],res=[];
 var readFile=function(filePos){
     if(!filePos){
         callback(false,res);
     }else{
         var reader=new FileReader();
         reader.onload=function(e){              
             res.push(e.target.result);
             readFile(_files.shift());
         };
         reader.readAsDataURL(filePos);
     }
 };
 for(var x=0;x<len;x++){
     _files.push(input.files[x]);
 }
 readFile(_files.shift());
};



window.onbeforeunload = function() {
  localStorage.removeItem('activeLink',$(this).attr('id'));
  return '';
};

window.onunload = () => {
  // Clear the local storage
  window.localStorage.clear()
}

// function clearStorage() {

//   let session = sessionStorage.getItem('activeLink');

//   if (session == null) {
  
//       localStorage.removeItem('activeLink');

//   }
//   sessionStorage.setItem('activeLink', 1);
// }
// window.addEventListener('load', clearStorage);