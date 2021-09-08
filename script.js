function registration() {

  var name = document.getElementById("t1").value;
  var email = document.getElementById("t2").value;
  var pwdl = document.getElementById("t4").value;

  var pwdl_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (name == '') {
    alert('Please enter your name');
  } else if (!letters.test(name)) {
    alert('Name field required only alphabet characters');
  } else if (email == '') {
    alert('Please enter your user email id');
  } else if (!filter.test(email)) {
    alert('Invalid email');
  } else if (pwdl == '') {
    alert('Please enter Password');
  } else if (!pwdl_expression.test(pwdl)) {
    alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
  } else if (document.getElementById("t4").value.length < 6) {
    alert('Password minimum length is 6');
  } else if (document.getElementById("t4").value.length > 12) {
    alert('Password max length is 12');
  } else {
    alert('Thank You for Login & You are Redirecting to Richer Lands Website');
  }
}


function clearFunc() {
  document.getElementById('t1').value = "";
  document.getElementById('t2').value = "";
  document.getElementById('t4').value = "";
}



function login() {
  var user1 = document.getElementById("user").value;
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("pwd1").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;


  if (user1 == '') {
    alert('Please enter your name');
  } else if (!letters.test(user1)) {
    alert('Name field required only alphabet characters');
  }
  if (uname == '') {
    alert("please enter user name.");
  } else if (pwd == '') {
    alert("enter the password");
  } else if (!filter.test(uname)) {
    alert("Enter valid email id.");
  } else if (pwd.length < 6 || pwd.length > 6) {
    alert("Password min and max length is 6.");
  } else {
    alert('Thank You for Login & You are Redirecting to Richer Lands Website');
  }
}

function clearFunc() {
  document.getElementById("email").value = "";
  document.getElementById("user").value = "";
  document.getElementById("pwd1").value = "";
}




const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

var rafId = null;
var delay = 400;
var lTime = 0;

function scroll() {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height()
  var visibleTop = scrollTop + height;
  $('.reveal').each(function() {
    var $t = $(this);
    if ($t.hasClass('reveal_visible')) {
      return;
    }
    var top = $t.offset().top;
    if (top <= visibleTop) {
      if (top + $t.height() < scrollTop) {
        $t.removeClass('reveal_pending').addClass('reveal_visible');
      } else {
        $t.addClass('reveal_pending');
        if (!rafId) requestAnimationFrame(reveal);
      }
    }
  });
}

function reveal() {
  rafId = null;
  var now = performance.now();

  if (now - lTime > delay) {
    lTime = now;
    var $ts = $('.reveal_pending');
    $($ts.get(0)).removeClass('reveal_pending').addClass('reveal_visible');
  }
  if ($('.reveal_pending').length >= 1) rafId = requestAnimationFrame(reveal);
}

$(scroll);
$(window).scroll(scroll);
$('.reveal').removeClass('reveal_visible').removeClass('reveal_pending');
lTime = performance.now() + 500;
var top = $(window).scrollTop();
$(window).scrollTop(top === 0 ? 1 : top - 1);
