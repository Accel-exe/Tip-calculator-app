const bill = document.getElementById('valor');
const people = document.getElementById('people');
const tip = document.getElementById('amount');
const total = document.getElementById('total');
const btn = [...document.querySelectorAll(".btn")];
const custom = document.getElementById('custom');
const reset = document.getElementById('reset');
const error = document.getElementById('error');

let val = 0;
let peopleN = 0;
let btnS = 0;

btn.map((el)=>{
    el.addEventListener('click',(evt)=>{
        btn.map((i)=>{
            i.classList.remove("active");
        })

        btnS = parseFloat(el.innerHTML);
        el.classList.add("active");
        
        calc();
    })
})

custom.addEventListener('click',(evt)=>{
    btn.map((i)=>{
        i.classList.remove("active");
    })

    custom.addEventListener('input',(e)=>{
        btnS = parseInt(custom.value);
        calc();
    })
})

bill.addEventListener('input',(evt)=>{
    val = parseFloat(bill.value);
    calc();
})

people.addEventListener('input',(evt)=>{
    peopleN = parseFloat(people.value);
    calc();
})

reset.addEventListener('click',(evt)=>{
    bill.value = 0;
    people.value = 0;
    btn.map((i)=>{
        i.classList.remove("active");
    })
    custom.classList.add("active2")
    error.style.display = ("none");
})

const calc = () =>{
    if (peopleN >= 1) {
        error.style.display = ("none");
        error.classList.remove("remove");
        let gt = (val * btnS) / 100;
        let gp = gt / peopleN;
        let vp = (val + gt) / peopleN
        tip.innerHTML = `$${gp.toFixed(2)}`
        total.innerHTML = `$${vp.toFixed(2)}`;
    }else if (peopleN < 1) {
        error.style.display = ("inline");
    }
}