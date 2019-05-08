window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    let tab = document.querySelector('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontant');

        function hideTabContant(a) {
            for (i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContant(1);

        function showTabContant(b){
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove ('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for(let i = 0; i < tab.length; i++) {
                    if(target == tab[i]) {
                        hideTabContant(0);
                        showTabContant(i);
                        break;
                    }
                }
            }
        })

});

