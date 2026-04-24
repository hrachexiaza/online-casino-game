    let casino = document.querySelector('.casino')
    let btn = document.querySelector('.logg')
    btn.addEventListener('click', ()=> {
        alert("🎰Խաղացեք հաճույքի համար🎰")
        registretion.style.display = 'none'
        slots.style.display ='flex'
        btn1.style.display = 'flex'
        sloter.style.display = 'flex'


    })

// let slot1 =document.querySelector('.slot1')
// let slot2 = document.querySelector('.slot2')
// let slot3 = document.querySelector('.slot3')





    let registretfull = document.querySelector('.registretfull')
    let register = document.querySelector('.register')
    let registretion = document.querySelector('.registretion')
    let  regBtn = document.querySelector('.regBtn')
    let fullreg = document.querySelector('.fullreg')
    let logg1 = document.querySelector('.logg1')
    let btn1 = document.querySelector(".spinBtn");
    let slot = document.querySelectorAll(".slot");
    let slots = document.querySelector('.slots')
    let sloter = document.querySelector('.sloter')
    registretfull.style.display = 'none'  
    let achave = document.querySelector('.achave')
    achave.addEventListener('click',()=> {
        registretion.style.display = 'none'
        registretfull.style.display = 'block'
    })

    logg1.addEventListener('click',()=>{
        alert("Շնորհավորում եմ դուք գրանցվեցիք🎉🥳")
        registretfull.style.display = 'none'
        registretion.style.display = 'block'

    })

    sloter.style.display = 'none'
    btn1.style.display ='none'
    slots.style.display = 'none'

if (btn1) {
    btn1.addEventListener("click", () => {
        let symbols = ["🍒", "🍋", "🔔", "💎", "7️⃣"]

        slot.forEach(s => {
            let randomIndex = Math.floor(Math.random() * symbols.length)
            s.textContent = symbols[randomIndex]
        })
    })
        // spinAnimation();
}


function spinAnimation() {
    let symbols = ["🍒", "🍋", "🔔", "💎", "7️⃣"];

    slot.forEach(s => {
        s.classList.add("spin");
    });

    let interval = setInterval(() => {
        slot.forEach(s => {
            let randomIndex = Math.floor(Math.random() * symbols.length);
            s.textContent = symbols[randomIndex];
        });
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        slot.forEach(s => {
            s.classList.remove("spin");
        });

        let values = Array.from(slot).map(s => s.textContent);

        if (values[0] === values[1] && values[1] === values[2]) {
            winAnimation();
        }

    }, 2000);
}
function winAnimation() {
    slot.forEach(s => {
        s.classList.add("win");
    });

    alert("🎉 YOU WIN! 🎉");

    setTimeout(() => {
        slot.forEach(s => {
            s.classList.remove("win");
        });
    }, 1500);
}

