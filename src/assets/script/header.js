var header = ` 
<header>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg">
<div class="container-fluid">

  <a class="navbar-brand eattable-img ms-lg-5 ms-md-5 ms-sm-5 ms-xl-0" href="/">
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
  <svg class="svg-inline--fa fa-sun"  viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.2385 0.731567C15.831 0.962402 16.0483 1.41404 16.0285 2.04632C16.0088 2.91948 16.0285 3.79264 16.0285 4.6658C16.0285 5.37838 15.5051 5.85008 14.8632 5.75975C14.3891 5.6895 14.0237 5.28805 14.0138 4.75612C13.9941 3.75249 13.9941 2.7589 14.0138 1.75527C14.0138 1.23338 14.3397 0.922257 14.794 0.731567H15.2483H15.2385Z" fill="#282828"/>
  <path d="M0.473633 15.2742C0.700779 14.672 1.1452 14.4512 1.76738 14.4713C2.62658 14.4913 3.48579 14.4713 4.34499 14.4713C5.04618 14.4713 5.51035 15.0032 5.42147 15.6556C5.35234 16.1373 4.9573 16.5086 4.43388 16.5187C3.44628 16.5388 2.46857 16.5388 1.48098 16.5187C0.967429 16.5187 0.661275 16.1875 0.473633 15.7258V15.2641V15.2742Z" fill="#282828"/>
  <path d="M22.3286 15.505C22.3187 19.5697 18.9609 22.972 14.9908 22.9319C10.991 22.9018 7.67272 19.5195 7.69247 15.485C7.70235 11.4203 11.07 8.01795 15.0303 8.05809C19.0399 8.09824 22.3385 11.4704 22.3286 15.505Z" fill="#282828"/>
  <path d="M27.0501 16.5287C26.5958 16.5287 26.1415 16.5287 25.6872 16.5287C25.0453 16.5287 24.5811 16.0871 24.591 15.495C24.591 14.9129 25.0551 14.4813 25.6971 14.4713C26.6155 14.4713 27.534 14.4713 28.4525 14.4713C29.0944 14.4713 29.5487 14.9129 29.5487 15.505C29.5487 16.0971 29.0845 16.5187 28.4426 16.5287C27.9784 16.5287 27.5142 16.5287 27.0501 16.5287Z" fill="#282828"/>
  <path d="M14.0039 27.7292C14.0039 27.2776 14.0039 26.826 14.0039 26.3743C14.0039 25.722 14.4286 25.2503 15.0014 25.2402C15.5841 25.2402 16.0186 25.7119 16.0186 26.3844C16.0186 27.3077 16.0186 28.2311 16.0186 29.1544C16.0186 29.8168 15.5939 30.2785 15.0211 30.2885C14.4286 30.2885 14.0039 29.8268 14.0039 29.1544C14.0039 28.6827 14.0039 28.211 14.0039 27.7393V27.7292Z" fill="#282828"/>
  <path d="M21.5391 7.757C21.5983 7.6466 21.6773 7.38566 21.8452 7.21504C22.5267 6.49243 23.218 5.78989 23.929 5.08735C24.3537 4.66582 24.9265 4.66582 25.3215 5.05724C25.7166 5.44865 25.7363 6.05083 25.3215 6.47236C24.6302 7.19497 23.929 7.90755 23.218 8.61009C22.9019 8.92121 22.5168 9.03161 22.102 8.82085C21.7366 8.6402 21.5489 8.31903 21.5391 7.74697V7.757Z" fill="#282828"/>
  <path d="M8.49331 23.2329C8.43406 23.3433 8.36492 23.6043 8.19703 23.7849C7.50572 24.5176 6.79465 25.2402 6.07371 25.9528C5.6688 26.3542 5.08612 26.3442 4.70096 25.9528C4.32567 25.5714 4.28617 24.9893 4.67133 24.5778C5.37252 23.8251 6.10334 23.0924 6.83416 22.3799C7.14031 22.0788 7.52547 21.9884 7.93038 22.1892C8.28592 22.3698 8.47356 22.6809 8.48344 23.2329H8.49331Z" fill="#282828"/>
  <path d="M8.49274 7.76701C8.49274 8.33908 8.29522 8.65021 7.91993 8.83086C7.54465 9.01152 7.16936 8.9513 6.87309 8.67028C6.50768 8.33908 6.17189 7.96774 5.82624 7.61647C5.45095 7.23509 5.06579 6.86375 4.71026 6.47233C4.39423 6.1311 4.34485 5.70957 4.53249 5.32819C4.71026 4.96689 5.09542 4.71598 5.48058 4.78623C5.69785 4.82638 5.94475 4.92674 6.10276 5.07728C6.8237 5.76979 7.5249 6.48237 8.20633 7.21502C8.37422 7.38563 8.44335 7.64658 8.50261 7.75698L8.49274 7.76701Z" fill="#282828"/>
  <path d="M25.5877 25.1298C25.5581 25.6517 25.3803 25.9528 25.0149 26.1334C24.6495 26.3141 24.2742 26.294 23.9878 26.013C23.2175 25.2603 22.457 24.4975 21.7262 23.7147C21.3707 23.3333 21.4299 22.7512 21.7953 22.3899C22.1607 22.0186 22.7335 21.9684 23.099 22.3297C23.8693 23.0724 24.61 23.8351 25.3408 24.618C25.4889 24.7685 25.5383 25.0194 25.5877 25.1399V25.1298Z" fill="#282828"/>
  </svg>
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
          <svg class="svg-inline--fa fa-sun"  viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.2385 0.731567C15.831 0.962402 16.0483 1.41404 16.0285 2.04632C16.0088 2.91948 16.0285 3.79264 16.0285 4.6658C16.0285 5.37838 15.5051 5.85008 14.8632 5.75975C14.3891 5.6895 14.0237 5.28805 14.0138 4.75612C13.9941 3.75249 13.9941 2.7589 14.0138 1.75527C14.0138 1.23338 14.3397 0.922257 14.794 0.731567H15.2483H15.2385Z" fill="#282828"/>
          <path d="M0.473633 15.2742C0.700779 14.672 1.1452 14.4512 1.76738 14.4713C2.62658 14.4913 3.48579 14.4713 4.34499 14.4713C5.04618 14.4713 5.51035 15.0032 5.42147 15.6556C5.35234 16.1373 4.9573 16.5086 4.43388 16.5187C3.44628 16.5388 2.46857 16.5388 1.48098 16.5187C0.967429 16.5187 0.661275 16.1875 0.473633 15.7258V15.2641V15.2742Z" fill="#282828"/>
          <path d="M22.3286 15.505C22.3187 19.5697 18.9609 22.972 14.9908 22.9319C10.991 22.9018 7.67272 19.5195 7.69247 15.485C7.70235 11.4203 11.07 8.01795 15.0303 8.05809C19.0399 8.09824 22.3385 11.4704 22.3286 15.505Z" fill="#282828"/>
          <path d="M27.0501 16.5287C26.5958 16.5287 26.1415 16.5287 25.6872 16.5287C25.0453 16.5287 24.5811 16.0871 24.591 15.495C24.591 14.9129 25.0551 14.4813 25.6971 14.4713C26.6155 14.4713 27.534 14.4713 28.4525 14.4713C29.0944 14.4713 29.5487 14.9129 29.5487 15.505C29.5487 16.0971 29.0845 16.5187 28.4426 16.5287C27.9784 16.5287 27.5142 16.5287 27.0501 16.5287Z" fill="#282828"/>
          <path d="M14.0039 27.7292C14.0039 27.2776 14.0039 26.826 14.0039 26.3743C14.0039 25.722 14.4286 25.2503 15.0014 25.2402C15.5841 25.2402 16.0186 25.7119 16.0186 26.3844C16.0186 27.3077 16.0186 28.2311 16.0186 29.1544C16.0186 29.8168 15.5939 30.2785 15.0211 30.2885C14.4286 30.2885 14.0039 29.8268 14.0039 29.1544C14.0039 28.6827 14.0039 28.211 14.0039 27.7393V27.7292Z" fill="#282828"/>
          <path d="M21.5391 7.757C21.5983 7.6466 21.6773 7.38566 21.8452 7.21504C22.5267 6.49243 23.218 5.78989 23.929 5.08735C24.3537 4.66582 24.9265 4.66582 25.3215 5.05724C25.7166 5.44865 25.7363 6.05083 25.3215 6.47236C24.6302 7.19497 23.929 7.90755 23.218 8.61009C22.9019 8.92121 22.5168 9.03161 22.102 8.82085C21.7366 8.6402 21.5489 8.31903 21.5391 7.74697V7.757Z" fill="#282828"/>
          <path d="M8.49331 23.2329C8.43406 23.3433 8.36492 23.6043 8.19703 23.7849C7.50572 24.5176 6.79465 25.2402 6.07371 25.9528C5.6688 26.3542 5.08612 26.3442 4.70096 25.9528C4.32567 25.5714 4.28617 24.9893 4.67133 24.5778C5.37252 23.8251 6.10334 23.0924 6.83416 22.3799C7.14031 22.0788 7.52547 21.9884 7.93038 22.1892C8.28592 22.3698 8.47356 22.6809 8.48344 23.2329H8.49331Z" fill="#282828"/>
          <path d="M8.49274 7.76701C8.49274 8.33908 8.29522 8.65021 7.91993 8.83086C7.54465 9.01152 7.16936 8.9513 6.87309 8.67028C6.50768 8.33908 6.17189 7.96774 5.82624 7.61647C5.45095 7.23509 5.06579 6.86375 4.71026 6.47233C4.39423 6.1311 4.34485 5.70957 4.53249 5.32819C4.71026 4.96689 5.09542 4.71598 5.48058 4.78623C5.69785 4.82638 5.94475 4.92674 6.10276 5.07728C6.8237 5.76979 7.5249 6.48237 8.20633 7.21502C8.37422 7.38563 8.44335 7.64658 8.50261 7.75698L8.49274 7.76701Z" fill="#282828"/>
          <path d="M25.5877 25.1298C25.5581 25.6517 25.3803 25.9528 25.0149 26.1334C24.6495 26.3141 24.2742 26.294 23.9878 26.013C23.2175 25.2603 22.457 24.4975 21.7262 23.7147C21.3707 23.3333 21.4299 22.7512 21.7953 22.3899C22.1607 22.0186 22.7335 21.9684 23.099 22.3297C23.8693 23.0724 24.61 23.8351 25.3408 24.618C25.4889 24.7685 25.5383 25.0194 25.5877 25.1399V25.1298Z" fill="#282828"/>
          </svg>
          
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
  
});
//set Local Storage selected lang when page load
$(document).ready(function() {
 let lang = localStorage.getItem('stored_lang');
 $(`#${lang}`).parent().addClass('selected')
  let activeLink = sessionStorage.getItem('activeLink')
  $(`#${activeLink}`).parent().addClass('active');

});

$('.navbar-nav a').on('click', function () {
	$('.navbar-nav' ).find('li.active').removeClass('active');
	$('.navbar-brand' ).removeClass('active');
	$(this).parent('li').addClass('active');
  console.log($(this).attr('id'))
  sessionStorage.setItem('activeLink',$(this).attr('id'))
  // sessionStorage.clear();
  //  window.sessionStorage.clear();
});
//remove active link when click logo
$('.navbar-brand').on("click",function(){
  sessionStorage.removeItem('activeLink')
;
})

