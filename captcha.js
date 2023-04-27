// ! Captcha Element Initialization
var captcha_canvas = document.querySelector("#captcha-canvas");
var captcha_text_element = captcha_canvas.getContext('2d');
captcha_text_element.font = "30px Roboto";
captcha_text_element.fillStyle = "#000000";
var captcha_txtfield = document.getElementById("captcha-text-field");

// ! Array initialization
var alphanumeric_arr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

var captcha_string = CreateCaptcha();


var submitCaptchaBtn = document.getElementById("submit-captcha-btn");
submitCaptchaBtn.addEventListener('click', CheckCaptcha)

var exitCaptchaBtn = document.getElementById("exit-captcha-btn");
exitCaptchaBtn.addEventListener('click', ExitCaptcha);

var refreshCaptchaBtn = document.getElementById("refresh-captcha-btn");
refreshCaptchaBtn.addEventListener('click', Refresh);

function PopUpCaptcha() {
  var captchaPopupDiv = document.getElementById("captcha-popup");
  var captchaContentsDiv = document.getElementById("captcha-contents");

  if (document.getElementById("captcha-checkbox").checked) {
    captchaPopupDiv.classList.add("popup-active");
    captchaContentsDiv.classList.add("popup-active");
  } else {
    captchaPopupDiv.classList.remove("popup-active");
    captchaContentsDiv.classList.remove("popup-active");
  }
}

function CheckCaptcha() {
  if (captcha_txtfield.value === captcha_string) {
    alert("Captcha is correct!");
    document.getElementById("captcha-popup").classList.remove("popup-active");
    document
      .getElementById("captcha-contents")
      .classList.remove("popup-active");
    captcha_txtfield.value = "";
  } else {
    alert("Please try again!");
    captcha_txtfield.value = "";
  }
}

function ExitCaptcha(){
    document.getElementById("captcha-popup").classList.remove("popup-active");
    document
      .getElementById("captcha-contents")
      .classList.remove("popup-active");
    document.getElementById("captcha-checkbox").checked = false;
}

function Refresh(){
    captcha_string = CreateCaptcha();
}

function CreateCaptcha(){
    captcha_txtfield.value = '';
    let alphanumerical_arr = [];
    for (let i = 0; i < 7; i++) {
      alphanumerical_arr.push(
        alphanumeric_arr[Math.floor(Math.random() * alphanumeric_arr.length)]
      );
    }
    captcha_text_element.clearRect(0, 0, captcha_canvas.width, captcha_canvas.height);
    var captcha_string = alphanumerical_arr.join("");
    captcha_text_element.fillText(
      captcha_string,
      captcha_canvas.width / 4,
      captcha_canvas.height / 2
    );
    return captcha_string;
}