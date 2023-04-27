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

var exitCaptchaBtn = document.getElementById("exit-captcha-btn");
exitCaptchaBtn.addEventListener('click', ()=>{
    document.getElementById("captcha-popup").classList.remove("popup-active");
    document.getElementById("captcha-contents").classList.remove("popup-active");
    document.getElementById("captcha-checkbox").checked = false;
})


