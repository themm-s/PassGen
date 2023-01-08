var password = document.getElementById("password");
let history = [];
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 function genPassword() {
    var length = document.getElementById('len').value;
    var passwordLength = length;
    var password = "";
 for (var i = 1; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
const p1 = document.querySelector('.history');
history.push('<h4>' + password + '</h4>');;
p1.innerHTML = history.join('<br>');
console.log(history);

$('#clear-history').click(function() {
  history = [];
  p1.innerHTML = '';
});

document.getElementById("password").value = password;
}
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  document.getElementById('lenght').innerHTML = "Пароль скопирован!";
  setTimeout(deleteLenght, 1000);
}

function boxCheck() {
  var chbox;
chbox = document.getElementById('checkMy');
  if (chbox.checked) {
    chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
}
function liveRange() {
  var rng=document.getElementById('len');
  var p=document.getElementById('one');
  p.innerHTML=rng.value;
}

function deleteLenght() {
  document.getElementById('lenght').innerHTML = '';
}

function dropDown() {
  document.getElementById('myDropdown').classList.toggle('show')
}

window.onclick = function(event) {
 //! "!" Возвращает противоположное значение (В данном случае возвращает 
 //! true если клик по окну вне кнопки)
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      //? dropdowns[i] Возвращает каждый элемент dropdown-content
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





























/**
 * Стандарт
 * * Выделен
 * ! Красный цвет
 * ? Вопросик
 * TODO: Тудушник
 */