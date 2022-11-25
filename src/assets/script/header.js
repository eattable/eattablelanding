var header = ` 
<header>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg">
<div class="container-fluid">

  <a class="navbar-brand eattable-img ms-lg-5 ms-md-5 ms-sm-5 ms-xl-0" href="/index.html">
  <img src="./src/assets/img/header/Frame.svg"/>
</a>

<div style="position:relative" class="ms-auto">
<li class="nav-item d-flex ms-auto d-xs-block d-sm-block d-md-block d-lg-none d-xl-none dropdown language-item language-item-responsive">
      <p class="nav-link language-link" href="#">
        <i class="fa-solid fa-globe"></i>
      </p>
    </li>
    <div class="language-dropdown language-dropdown-responsive d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
    <ul>
      <li class="lang-item"><button id="en" class="translate">En</button></li>
      <li class="lang-item"><button id="az" class="translate">Az</button></li>
      <li class="lang-item"><button id="ru" class="translate">Ru</button></li>
    </ul>
    </div>
 </div>
<label for="ChangeTheme1" class="dark-mode-toggle dark-toggle-responsive d-md-block d-sm-block d-xl-none d-lg-none"> 
  <input type="checkbox" id="ChangeTheme1" /> 
  <span class="slide"></span>
  <i class="fa-solid fa-sun"></i>
  <i class="fa-solid fa-moon"></i>
</label>
<button class="navbar-toggler me-lg-5 me-md-5 me-sm-5 me-xl-0" id="menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <div class="menu-btn-1" onclick="menuBtnFunction(this)">
    <span></span>
  </div>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ms-auto">
    <li class="nav-item d-flex d-sm-none d-md-none d-lg-block d-xl-block align-items-center justify-content-center">
        <label for="ChangeTheme" class="dark-mode-toggle"> 
          <input type="checkbox" id="ChangeTheme" /> 
          <span class="slide"></span>
          <i class="fa-solid fa-sun"></i>
          <i class="fa-solid fa-moon"></i>
        </label>
    </li>
    <li class="nav-item nav-item-1">
      <a class="nav-link lang" key="for-business" href="./business.html" id="business">For Businesses</a>
    </li>
    <li class="nav-item nav-item-3">
      <a class="nav-link lang" key="support" id="help" href="./help.html">Help</a>
    </li>
    <li class="nav-item d-flex d-sm-none d-md-none d-lg-block d-xl-block dropdown language-item language-item-large">
      <p class="nav-link language-link" href="#">
        <i class="fa-solid fa-globe"></i>
      </p>
    </li>
    <div class="language-dropdown language-dropdown-large d-sm-none d-md-none d-lg-block d-xl-block">
    <ul>
      <li class="lang-item"><button id="en" class="translate">En</button></li>
      <li class="lang-item"><button id="az" class="translate">Az</button></li>
      <li class="lang-item"><button id="ru" class="translate">Ru</button></li>
    </ul>
    </div>
  </ul>
</div>
</div>
</nav>
</header>`;

// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", header);

var checkbox = document.getElementById("ChangeTheme"); //get the checkbox to a variable
var checkbox1 = document.getElementById("ChangeTheme1"); //get the checkbox to a variable

//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dark") {
  darkmode(); //if dark mode was on, run this funtion
} else {
  nodark(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    darkmode(); //if the checkbox is checked, run this funtion
  } else {
    nodark(); //else run this funtion
  }
});
checkbox1.addEventListener("change", function() {
  //check if the checkbox is checked or not
  if (checkbox1.checked) {
    darkmode(); //if the checkbox is checked, run this funtion
  } else {
    nodark(); //else run this funtion
  }
});

//function for checkbox when checkbox is checked
function darkmode() {
  document.body.classList.add("dark-mode"); //add a class to the body tag
  checkbox.checked = true; //set checkbox to be checked state
  sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}
function darkmode() {
  document.body.classList.add("dark-mode"); //add a class to the body tag
  checkbox1.checked = true; //set checkbox to be checked state
  sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {
  document.body.classList.remove("dark-mode"); //remove added class from body tag
  checkbox.checked = false; //set checkbox to be unchecked state
  sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}
function nodark() {
  document.body.classList.remove("dark-mode"); //remove added class from body tag
  checkbox1.checked = false; //set checkbox to be unchecked state
  sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}

//add remove active class nav items in localstorage between pages


//hambuger menu animation
function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
}

//close language dropdown when click outside
$(window).click(function(e){
  console.log(e.target)
  if(e.target.className!=="slide" && e.target.id!=="ChangeTheme" && e.target.className !== "svg-inline--fa"){
    $('.language-dropdown').removeClass('show')
  }
})


$(".language-item").click(function(event){
    event.stopPropagation()
})
//hide/show language dropdown
$(".language-item-responsive").click(function(){
  $(".language-link").toggleClass("active");
  $(".language-dropdown-responsive").toggleClass("show");
  console.log('f')
});

$(".language-item-large").click(function(){
  console.log('f')
  $(".language-link").toggleClass("active");
  $(".language-dropdown-large").toggleClass("show");

});

// $(window).load(function() {
//   $('.navbar-brand').addClass("active");
// });

//add active class lang-item
$(".lang-item").click(function(){
  $(this).addClass('selected').siblings().removeClass('selected');
  $(".language-link ").removeClass('active')
  let activeLink = localStorage.getItem('activeLink')
  $(`#${activeLink}`).parent().addClass('active');
  localStorage.clear();
   window.localStorage.clear();
});
//set Local Storage selected lang when page load
$(document).ready(function() {
 let lang = localStorage.getItem('stored_lang');
 $(`#${lang}`).parent().addClass('selected')
  let activeLink = localStorage.getItem('activeLink')
  $(`#${activeLink}`).parent().addClass('active');
  localStorage.clear();
   window.localStorage.clear();
});

$('.navbar-nav a').on('click', function () {
	$('.navbar-nav' ).find('li.active').removeClass('active');
	$('.navbar-brand' ).removeClass('active');
	$(this).parent('li').addClass('active');
  console.log($(this).attr('id'))
  localStorage.setItem('activeLink',$(this).attr('id'))
  localStorage.clear();
   window.localStorage.clear();
});
//remove active link when click logo
$('.navbar-brand').on("click",function(){
  localStorage.removeItem('activeLink')
  localStorage.clear();
   window.localStorage.clear();
})

