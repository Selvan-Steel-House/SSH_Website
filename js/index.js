window.addEventListener("scroll", function () {
    var scroll = document.querySelector(".scrollToTop");
    scroll.classList.toggle("active", window.scrollY > 200);
  });
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }





  
function sendNotification() {
  alert("e-Mail Subscription Not yet added.")
  // var email = document.getElementById("email").value;
  // if (!isEmpty(email) && validateEmail(email)) {
  //   document.getElementById("notify").innerHTML = "Subscribing..."
  //   var json =
  //   {
  //     'email': email
  //   };

  //   var xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //       document.getElementById("notify").innerHTML = "Thankyou!";
  //       backTotext();
  //     }
  //     document.getElementById("email").value = "";
  //   };

  //   xhttp.open("POST", "https://quatre-labs-api.herokuapp.com/api/website/get-notified", true);
  //   xhttp.setRequestHeader("Content-type", "application/json");
  //   xhttp.send(JSON.stringify(json));
  // }
  // else{
  //   window.alert("Invalid/empty email can't be accepted!");
  // }
}

function isEmpty(str) {
  return (!str || 0 === str.length);
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function backTotext(){
  setTimeout(()=> {
    // document.getElementById("contact-submit").innerHTML = "Send Message";
    document.getElementById("notify").innerHTML = "Subscribe";
    // document.getElementById("contact-submit").style.backgroundColor = "#307EFF";
    // document.getElementById("contact-submit").style.color="white";
  }, 5000)
}

function branch1(){
  document.getElementById("branch1").style.display="flex";
  document.getElementById("branch2").style.display="none";
  document.getElementById("branch3").style.display="none";
}
function branch2(){
  document.getElementById("branch2").style.display="flex";
  document.getElementById("branch1").style.display="none";
  document.getElementById("branch3").style.display="none";
}
function branch3(){
  document.getElementById("branch3").style.display="flex";
  document.getElementById("branch1").style.display="none";
  document.getElementById("branch2").style.display="none";
}