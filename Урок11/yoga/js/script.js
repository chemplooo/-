window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        tabContent.forEach((item,i) => {
            if (a != i) {
                item.classList.remove('show');
                item.classList.add('hide');   
            }
        });
    }
    hideTabContent(0);
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            tab.forEach((item,i) =>{
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
            }
        });
        }
    });

    // Timer
    function fix2(n) {
        return (n < 10) ? '0' + n : n;
    }
    let deadline = "2019-03-22";

    // function getTimeRemaning(endTime) {
    //     let t = Date.parse(endTime) - Date.parse(new Date()),
    //         sec = Math.floor((t / 1000) % 60),
    //         min = Math.floor((t / 1000 / 60) % 60),
    //         hour = Math.floor((t / (1000 * 60 * 60)));
    //     if (t > 0) {
    //         return {
    //             'tital': t,
    //             'sec': fix2(sec),
    //             'min': fix2(min),
    //             'hour': fix2(hour)
    //         }
    //     } else {
    //         return {
    //             'tital': t,
    //             'sec': '00',
    //             'min': '00',
    //             'hour': '00'
    //         }
    //     }
    // }
    let getTimeRemaning = (endTime) => {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            sec = Math.floor((t / 1000) % 60),
            min = Math.floor((t / 1000 / 60) % 60),
            hour = Math.floor((t / (1000 * 60 * 60)));
        if (t > 0) {
            return {
                'tital': t,
                'sec': fix2(sec),
                'min': fix2(min),
                'hour': fix2(hour)
            };
        } else {
            return {
                'tital': t,
                'sec': '00',
                'min': '00',
                'hour': '00'
            };
        }
    };
    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hour = timer.querySelector('.hours'),
            min = timer.querySelector('.minutes'),
            second = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock() {
            let t = getTimeRemaning(endTime);
            hour.textContent = t.hour;
            min.textContent = t.min;
            second.textContent = t.sec;
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
    }
    setClock('timer', deadline);

    // модальное окно
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        closeButton = document.querySelector('.popup-close'),
        allButtons = document.querySelectorAll('.description-btn');

        allButtons.forEach((item) => {
            openPopup(item);
        });

    function openPopup(btn) {
        btn.addEventListener('click',  (e) => {
            overlay.style.display = 'block';
            e.target.classList.add('more-spash');
            document.body.style.overflow = 'hidden';
        });
    }

    closeButton.addEventListener('click', (e) => {
        overlay.style.display = 'none';
        e.target.classList.remove('more-spash');
        document.body.style.overflow = '';
    });

    function getNameBrowser(){
        let ua = navigator.userAgent;    
        if (ua.search(/MSIE/) > 0) {return 'Internet Explorer'};
        return 'Не определен';
    }
     
    let browser = getNameBrowser(),
        popup = document.querySelector('.popup');

    if (browser == 'Internet Explorer') {
        popup.classList.add('ease');
        openPopup(more);
    } else {
        more.addEventListener('click', (e) => {
            overlay.style.display = 'block';
            e.target.classList.add('more-spash');
            document.body.style.overflow = 'hidden';
            let popup = document.querySelector('.popup'),
                left = -25,
                timer = setInterval( () => {
                    popup.style.left = left + '%';
                    left++;
                    if (left == 51) {clearInterval(timer)}
                }, 20);
        });
    }


});


let nav = document.querySelector('nav');
nav.addEventListener('click', function (e) {
    event.preventDefault(e);
    let target = e.target,
    itemName = target.getAttribute("href"),
    item = document.querySelector(itemName);
    item.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    //Form

    let message = {
        loading: 'Загрузка....',
        succes: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };
    let form = document.querySelector('.main-form'),
        input = form.getElementByTagName('input'),
        statusMesssage = document.createElement('div');

        statusMesssage.classList.add('status');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMesssage);

            let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            
            let formData = new FormData(form);

            let obj = {};
            formData.forEach(function(value, key){
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

                request.send(json);

                request.addEventListener('readystatechange', function() {
                    if (request.readyState < 4){
                        statusMesssage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200){
                        statusMesssage.innerHTML = message.succes;
                    } else {
                        statusMesssage.innerHTML = message.failure;
                    }
                });
                for (let i = 0; i < input.lenght; i++){
                    input[i].value = '';
                }


        });

});