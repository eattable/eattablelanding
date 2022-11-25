var footer = `
<footer class="footer-section">
  <div class="container-fluid">
    <div class="grid">
      <div class="grid-item-1">
        <div class="logo">
         <a href="./index.html"><img src="./src/assets/img/header/Frame.svg" alt="logo"></a>
        </div>
        <div class="download-btns">
        <div class="download-apple">
          <img src="./src/assets/img/downloadApple.svg" alt="download apple">
        </div>
        <div class="download-androids">
          <img src="./src/assets/img/downloadAndroid.svg" alt="download android">
        </div>
        </div>
      </div>
      <div class="grid-item-1">
        <h3 class="lang" key="our-products">Contact</h3>
        <ul class="footer-nav">
          <li><a class="lang" key="contact-us" href="./contact-us.html"  id="contact-us">Contact us</a></li>
        </ul>
      </div>
      <div class="grid-item-1">
        <h3 class="lang" key="discover">Discover</h3>
        <ul class="footer-nav">
          <li><a class="lang" href="./dining-rewards.html" key="dining-rewards" id="dining-rewards">EATTABLE Coins</a></li>
          <li ><a class="lang" href="./benefits.html" key="reservation-benefits" id="reservation-benefits">Reservation benefits</a></li>
        </ul>
      </div>
      <div class="grid-item-1">
        <h3 class="lang" key="support">Help</h3>
        <ul class="footer-nav">
          <li><a class="lang" href="./faq-customer.html" key="faq" id="faq">FAQ</a></li>
          <li ><a class="lang" href="./privacy.html" key="privacy-policy" id="privacy-policy">Privacy Policy</a></li>
          <li ><a class="lang" href="./term-of-use.html" key="term-of-use-footer" id="term-of-use">Terms of use</a></li>
        </ul>
      </div>
      <div class="grid-item-1 d-none">
        <div class="subscribe">
          <input type="email" class="lang lang-input" key="enter-email" placeholder="Enter your email">
          <button class="btn lang" key="subscribe" >Subscribe</button>
        </div>
        <h6 class="lang" key="follow-us">FOLLOW US</h6>
        <ul class=" d-flex align-items-center social-medias">
          <li>
            <i class="fa-brands fa-facebook-f"></i>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-linkedin-in"></i>
          </li>
          <li>
            <i class="fa-brands fa-youtube"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="grid-item-1">
    <div class="download-btns-copy">
    <div class="download-apple">
      <img src="./src/assets/img/downloadApple.svg" alt="download apple">
    </div>
    <div class="download-android">
      <img src="./src/assets/img/downloadAndroid.svg" alt="download android">
    </div>
    </div>
  </div>
  <div>
  </div>
  </div>
</div>
  </div>
  
</div>
</footer>`;

document.body.insertAdjacentHTML("beforeend", footer);

function sendEmail() {
  let emailUser = document.querySelector(".subscribe-inp").value;

  if (emailUser) {
    Email.send({
      secureToken: '826f83a9-145c-4543-9d11-60cb551f6948',
      // Host: "smtp.elasticemail.com",
      // Username: "qayaasgerov@gmail.com",
      // Password: "6C2D0589893A12C6AC8530DE76A8E1C533D0",
      To: "qayaasgerov@gmail.com",
      From: emailUser,
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then((message) => alert(message));
  }
}
$(document).ready(function() {
   let activeLink = localStorage.getItem('activeLink')
   $(`#${activeLink}`).parent().addClass('active')
 });
 
 $('.footer-nav a' ).on('click', function () {
   $('.footer-nav' ).find('li.active').removeClass('active');
   $(this).parent('li').addClass('active');
   localStorage.setItem('activeLink',$(this).attr('id'))
 });

 $(".apply-btn").click(function(e) {
 
  if(window.innerWidth < 992){
    document.querySelector('.apply-section-responsive').scrollIntoView({ block: 'center',behavior: "smooth" })
  }else{
    document.getElementById('apply-section').scrollIntoView({ block: 'center',behavior: "smooth" })
  }

});

$('.logo').on("click",function(){
  localStorage.removeItem('activeLink')
})

//regret page reload
// function preventBack() { window. history. forward(); } setTimeout("preventBack()", 0); 



//partner registration
// const partnerRegistration = document.getElementById('partner-registration');
// // console.log(partnerRegistration)
// partnerRegistration.addEventListener('click',function(){
//   console.log(window.location)
//   if(window.location.href.includes("business")){
//   if(window.innerWidth < 992){
//     document.querySelector('.apply-section-responsive').scrollIntoView({ block: 'center',behavior:"smooth" })
//   }else{
//     document.getElementById('apply-section').scrollIntoView({ block: 'center',behavior:"smooth"  })
//   }
//   }else{
//     if(window.innerWidth < 992){
//       partnerRegistration.setAttribute("href",'./business.html#apply-section-responsive')
//     //   var myDiv = document.getElementById("apply-section-responsive");
//      window.scrollTo(0, myDiv.innerHeight);
//     }else{
//       partnerRegistration.setAttribute("href",'./business.html#apply-section')
//     }

//   }
// })
//become partner button
 $(".apply-btn").click(function(e) {
  if(window.innerWidth < 992){
    document.querySelector('.apply-section-responsive').scrollIntoView({ block: 'center' ,behavior:"smooth"})
  }else{
    document.getElementById('apply-section').scrollIntoView({ block: 'center',behavior:"smooth" })
  }

});

