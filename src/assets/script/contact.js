const button  =document.querySelector('buttom');

(function () {
    // emailjs.init("USERID");
    emailjs.init("zSVfTIa3GsIujFB8p");
})();

/**
  emailjs.send("SERVICE ID", "TEMPLATE NAME", {
    to_name: "USERNAME",
    from_name: "FROM NAME",
    message: "MESSAGE",
  });
 **/

function validate() {
    let loader = document.querySelector(".loader");

    let email = document.querySelector(".email");
    ;
    let name = document.querySelector(".name");
    let phone = document.querySelector(".phone");
    let message = document.querySelector(".message");
    

    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (email.value == "") {
            emptyerror();
        } else {
            loader.style.display = "flex";
            console.log(email.value)
            sendmail(email.value,name.value,phone.value,message.value);
            success();
            loader.style.display = "none";
        }
    });
}
validate();

function sendmail(email,name,phone,message) {
    console.log(email)
    emailjs.send("service_2wh4c5q", "template_e9gl9bu", {
        from_name: "Global Import",
        email: email,
        name:name,
        phone:phone,
        message:message
        
    });
}

function emptyerror() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fields cannot be empty!",
    });
}

function error() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
    });
}

function success() {
    Swal.fire({
        icon: "success",
        title: "Success...",
        text: "Successfully sent message",
    });
}