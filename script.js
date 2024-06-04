"use strict"
let burger = document.querySelector(".header__burger")
let menu = document.querySelector('.header__list')
let logo = document.querySelector(".header__logo")
if (window.screen.width <= 1200){
    menu.classList.add("hidden")
}else{
    menu.classList.remove("hidden")
}
window.addEventListener("resize", ()=>{
    if (window.screen.width <= 1200){
        menu.classList.add("hidden")
    }else{
        menu.classList.remove("hidden")
    }
})
burger.addEventListener("click", ()=>{
    logo.classList.toggle("hidden")
    menu.classList.toggle("hidden")
})