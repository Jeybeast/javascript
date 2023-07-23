var btn = document.getElementById("btn")
var back = document.getElementById("blue")
var code = document.getElementById("green")
var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
btn.addEventListener('click', generate);

function generate() {
    let hexo = "#";
    for (i = 0; i < 6; i++) {
        hexo += randhex();
    }

    back.style.backgroundColor = hexo;
    code.textContent = hexo;
}

function randhex() {
    return hex[Math.floor(Math.random() * 16)];

}