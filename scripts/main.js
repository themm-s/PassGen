var password = document.getElementById("password");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 function genPassword() {
    var length = document.getElementById('len').value;
    var passwordLength = length;
    var password = "";
 for (var i = 1; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
document.getElementById("password").value = password;
 }
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  document.getElementById('lenght').innerHTML = "Пароль скопирован!";
}

function rangeCurr(val) {
  document.getElementById('current').value=val;
  document.getElementById('current').innerHTML = document.getElementById('current').value
}

function boxCheck() {
  var chbox;
chbox=document.getElementById('checkMy');
  if (chbox.checked) {
    chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
}
function liveRange() {
  var rng=document.getElementById('len'); //rng - это Input
  var p=document.getElementById('one'); // p - абзац
  p.innerHTML=rng.value;
}