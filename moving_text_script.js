window.onload = function () { // there can only be one window.onload event in a document
    var moving_text = document.getElementsByClassName("moving_text")[0];
    moving_text.style.width = moving_text.clientHeight / 3.8 * moving_text.innerHTML.length + "px";
    var root_ = document.querySelector(':root');
    root_.style.setProperty('--moving_text_100', '-' + moving_text.style.width);
}