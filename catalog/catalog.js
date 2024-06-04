"use strict"
let button = document.querySelectorAll(".card__button")
let content = document.querySelector(".main__container")
let card = document.querySelectorAll(".main__content")
let windows = document.querySelector(".card__open-menu")
let openBg = document.querySelectorAll(".main__active")
let Bd = {
    "1": {
        title: "Багет",
        img: "/catalog_img/1_1.svg",
        compound: "Масса: 350гр Состав: Дрожжи, мука, сахар, вода, соль.",
        description: "Багет из слоеного дрожжевого теста на настоящем сливочном масле. Всегда свежий, всегда хрустящий",
        money: "52 рубля"
    },
    "2": {
        title: "Буханка",
        img: "/catalog_img/1-2.svg",
        compound: "Масса: 500гр Состав: Дрожжи, мука, сахар, вода, соль, закваска, солод.",
        description: "Буханка из слоеного дрожжевого теста",
        money: "41 рубль"
    },
    "3": {
        title: "Круасан",
        img: "/catalog_img/1-3.svg",
        compound: "Масса: 150гр Состав: Дрожжи, мука, сахар, вода, соль, сливочное масло, глютен пшеничный.",
        description: "Ароматный круассан",
        money: "61 рубль"
    },
    "4": {
        title: "Пирожное медовик",
        img: "/catalog_img/2-1.svg",
        compound: "Масса:200г Состав: Яйца, дрожжи, сахарная пудра, вода, соль, сода, мука",
        description: "Изысканный десерт с коржами и кремом",
        money: "130 рублей"
    },
    "5": {
        title: "Кекс",
        img: "/catalog_img/2-2.svg",
        compound: "Масса:100г Cостав: Яйца, сливочное масло, сода, сахар, соль, дрожжи, мука",
        description: "Классический кекс с сахаром",
        money: "40 рублей"
    },
    "6": {
        title: "Ромовая баба",
        img: "/catalog_img/2-3.svg",
        compound: "Масса: 250г Состав: пшеничная мука, сливочное масло, яйца, изюм, ром, темная глазурь",
        description: "Выпечка, налитая ароматным сиропом",
        money: "255 рубля"
    }

}
button.forEach(function (event) {
    event.addEventListener("click", () => {
        content.classList.add('active')
        windows.classList.add("active")
        openBg.forEach(function (e) {
            e.classList.add("active")
        })
        let number = 1
        for (number in key){
            if (event.value == number){
                document.querySelector(".open-menu__name").innerHTML = Bd[number].title
                document.querySelector(".open-menu__compound").innerHTML = Bd[number].compound
                document.querySelector(".open-menu__description").innerHTML = Bd[number].description
                document.querySelector(".open-menu__money").innerHTML = Bd[number].money
                document.querySelector(".open-menu__img").src = Bd[number].img
                break
            }else if(number == 5){
                document.querySelector(".open-menu__name").innerHTML = Bd[6].title
                document.querySelector(".open-menu__compound").innerHTML = Bd[6].compound
                document.querySelector(".open-menu__description").innerHTML = Bd[6].description
                document.querySelector(".open-menu__money").innerHTML = Bd[6].money
                document.querySelector(".open-menu__img").src = Bd[6].img
            }
        }
    })
})
document.addEventListener("click", (e) => {
    if (e.target === content) {
        content.classList.remove("active")
        windows.classList.remove('active')
        openBg.forEach(function (e) {
            e.classList.remove("active")
        })
    }
})
let key = Object.keys(Bd)