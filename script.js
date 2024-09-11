let hours = document.querySelector("#hours small")
let minut = document.querySelector("#minuts small")
let secend = document.querySelector("#secend small")

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")

let buttom = document.querySelector(".buttom")

let hours1 = 0;
let minut1 = 0;
let secend1 = 0;
let index = 0;
btn1.addEventListener("click", () => {
    btn1.setAttribute("disabled", "disabled")
    let vaqt = setInterval(() => {
        secend1++;
        if (secend1 === 60) {
            secend1 = 0;
            minut1 += 1;
            if (minut1 === 60) {
                minut1 = 0;
                hours1 += 1
            }
        }
        hours.innerHTML = hours1
        minut.innerHTML = minut1
        secend.innerHTML = secend1
    }, 1000);
    btn2.addEventListener("click", () => {
        pausa(vaqt)
        btn3.setAttribute("disabled", "disabled")
    })
    btn4.addEventListener("click", () => {
        btn3.setAttribute("disabled", "disabled")
        btn1.removeAttribute("disabled", "disabled")
        clearInterval(vaqt)
        hours1 = 0;
        minut1 = 0;
        secend1 = 0;
        hours.innerHTML = hours1;
        minut.innerHTML = minut1;
        secend.innerHTML = secend1;
        buttom.innerHTML = ``
    })
    btn3.addEventListener("click", () => {
        let h3 = document.createElement("h3")
        index++;
        h3.innerHTML += `${index}) ${hours1}:${minut1}:${secend1}`
        buttom.appendChild(h3)
    })
    btn3.removeAttribute("disabled", "disabled")
})

function pausa(time) {
    clearInterval(time)
    btn1.removeAttribute("disabled", "disabled")
}
