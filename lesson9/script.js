window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

         function hideTabContent (a) {
            for (let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent(1);

        function showTabContent(b){
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove ('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', (event) => {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for(let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });

        //taimer

         let deadline = '2019-03-19';

             getTimeRemaining;(endtime) => {
             let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60)));

                if(minutes<10) minutes='0'+minutes;
                if(seconds<10) seconds='0'+seconds;
                if(hours<10) hours='0'+hours;

             return {
                 'total' : t,
                 'hours' : hours,
                 'minutes' : minutes,
                 'seconds' : seconds
             };
         }

                setClock;(id, endtime) => {
             let timer = document.getElementById(id),
                 hours = timer.querySelector('.hours'),
                 minutes = timer.querySelector('.minutes'),
                 seconds = timer.querySelector('.seconds'),
                 timeInterval = setInterval(updateClock, 1000);
                 

                  updateClock; () => {
                     let t = getTimeRemaining(endtime);
                      hours.textContent = t.hours;
                      minutes.textContent = t.minutes;
                      seconds.textContent = t.seconds;

                      if (t.total <= 0) {
                        clearInterval(timeInterval);
                        hours.textContent = "00";
                        minutes.textContent = "00";
                        seconds.textContent = "00";
                      }
                 }
         };

         setClock('timer', deadline);

         //Modal;

            let more = document.querySelector('.more'),
                overlay = document.querySelector('.overlay'),
                close = document.querySelector('.popup-close'),
                moreDisc = document.querySelectorAll('.description-btn'),
                overlayDisc = document.querySelector('.overlay');

                more.addEventListener('click', () => {
                    bindModal('block','hidden', this );
                });

                close.addEventListener('click', () => {
                    bindModal('none', '' , this);
                    
                });

                for (let i = 0; i < moreDisc.length; i++){
                    moreDisc[i].addEventListener('click', () => {
                        bindModal('block','hidden', moreDisc[i] );
                 
                    });
                }
               
                 bindModal; (overlay, overflow, btn) => {
                    overlayDisc.style.display = overlay;
                    btn.classList.add('more-splash');
                    document.body.style.overflow = overflow;
                }
                
});

