window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let  hideTabContent = a => {
        tabContent.forEach((item,i) => {
            if (a != i) {
                item.classList.remove('show');
                item.classList.add('hide');   
            }
        });
    }
    hideTabContent(0);
    
    let showTabContent = b => {
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
    
        let setClock = (id,endTime) => {
            timer = document.getElementById(id),
            hour = timer.querySelector('.hours'),
            min = timer.querySelector('.minutes'),
            second = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock () {
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

    let openPopup = btn => {
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



    // дополнительное
    let getNameBrowser = () => {
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



// 

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

});
