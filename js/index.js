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
  // alert("e-Mail Subscription Not yet added.")
  var email = document.getElementById("email").value;
  if (!isEmpty(email) && validateEmail(email)) {
    document.getElementById("notify").innerHTML = "Subscribing..."
    var json =
    {
      email: email
    };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("notify").innerHTML = "Thank you :) ";
        backTotext();
      }
      document.getElementById("email").value = "";
    };

    xhttp.open("POST", "http://ec2-13-127-191-145.ap-south-1.compute.amazonaws.com:3000/v1/api/website/general/subscribeuser", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
  }
  else{
    window.alert("Invalid/empty email can't be accepted!");
  }
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
    document.getElementById("notify").innerHTML = "Subscribe";
  }, 10000)
}

function branch1(){
  document.getElementById("branch_des1").style.display="flex";
  document.getElementById("branch_des2").style.display="none";
  // document.getElementById("branch_des3").style.display="none";
}
function branch2(){
  document.getElementById("branch_des2").style.display="flex";
  document.getElementById("branch_des1").style.display="none";
  // document.getElementById("branch_des3").style.display="none";
}
// function branch3(){
//   document.getElementById("branch_des3").style.display="flex";
//   document.getElementById("branch_des1").style.display="none";
//   document.getElementById("branch_des2").style.display="none";
// }

function close_des(){
  // document.getElementById("branch_des3").style.display="none";
  document.getElementById("branch_des1").style.display="none";
  document.getElementById("branch_des2").style.display="none";
}