

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    class Reddiv {
        constructor (height='200px',width='200px',bg='#f00',fontSize='16px',textAlign='center') {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        creatDiv (divText ='я красный див') {
            let div=document.createElement('div');
            div.textContent = divText;
            div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
            document.body.appendChild(div);
        }
    }
    let squere = new Reddiv ('300px','400px',undefined ,'20px');
    squere.creatDiv('Hello World');
});