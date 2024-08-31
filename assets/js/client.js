"use strict";

window.addEventListener("scroll", rotate); // при скролле показываем скрытые блоки и текст

let link = document.querySelectorAll(".linkBlock");
let textThirdScreen = document.querySelectorAll('.third_screen p');
let block = document.querySelectorAll('.four_screen .internal_div');

//увеличение картинок во втором экране 1.Бесплатная консультация, 2. Калькулятор, 3. Пройти тест 
for (let i of link) {
    i.onpointerover = (e) => {
        if(e.target.className == 'linkBlock'){
            e.target.parentNode.children[2].firstElementChild.style.transform = 'scale(1.1)';
        }  
    };
    i.onpointerleave = (e) => {
        if(e.target.className == 'linkBlock'){
            e.target.parentNode.children[2].firstElementChild.style.transform = 'scale(1)';
        }    
    };   
}
//Конец увеличения картинок

function rotate() {
    //появление текста 3 экран
    if(textThirdScreen[0].getBoundingClientRect().top < document.documentElement.clientHeight){
        textThirdScreen[0].style.opacity = '1';
        textThirdScreen[1].style.opacity = '1';
        textThirdScreen[0].style.transform = 'scale(1)';
        textThirdScreen[1].style.transform = 'scale(1)';
        textThirdScreen[0].style.transition = '2s';
        textThirdScreen[1].style.transition = '2s';
    }
    //появление двух блоков в 4 экране
    if (block[1].getBoundingClientRect().top < document.documentElement.clientHeight) {
        block[1].style.opacity = '1';
        block[2].style.opacity = '1';
        block[1].style.transform = 'scale(1)';
        block[2].style.transform = 'scale(1)';
        block[1].style.transition = '2s';
        block[2].style.transition = '2s';
    }  
}
