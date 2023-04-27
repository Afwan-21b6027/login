function PopUpCaptcha(){
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

var captcha_canvas = document.querySelector("#captcha-canvas");
var captcha_text_element = captcha_canvas.getContext('2d');
captcha_text_element.font = "30px Roboto";
captcha_text_element.fillStyle = "#ffffff";

var captchaInputField = document.getElementById("captcha-text-field");
var refreshCaptchaBtn = document.getElementById("refresh-captcha-btn");
var submitCaptchaBtn = document.getElementById("submit-captcha-btn");

let alphanumeric_arr = [
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
let captchaSelection_arr =[];

for (let i = 0; i < 7; i++){
    captchaSelection_arr.push(alphanumeric_arr[Math.floor(Math.random() * alphanumeric_arr.length)]);
}


var exitCaptchaBtn = document.getElementById("exit-captcha-btn");
exitCaptchaBtn.addEventListener('click', ()=>{
    document.getElementById("captcha-popup").classList.remove("popup-active");
    document.getElementById("captcha-contents").classList.remove("popup-active");
    document.getElementById("captcha-checkbox").checked = false;
})


