let menu = document.querySelector ('.menu'),
    item = document.querySelectorAll(".menu-item"),
    img = document.querySelector('body'),
    clmn = document.querySelectorAll(".column")[1],
    adv = document.querySelector(".adv"),
    proomt = document.getElementById("prompt"),
    title = document.getElementById("title");



img.style.background = "url(img/apple_true.jpg) center no-repeat";



let li = document.createElement('li'),
    text = document.createTextNode('Пятый пункт');
li.classList.add("menu-item");
li.innerHTML = "Пятый пункт";
menu.appendChild(li);



clmn.removeChild(adv);


menu.insertBefore(item[2], item[1]);

let q = prompt("отношение к технике apple?", "");
proomt.innerHTML = q;

title.innerHTML = "Мы продаем только подлинную технику Apple";

