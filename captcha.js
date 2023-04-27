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



