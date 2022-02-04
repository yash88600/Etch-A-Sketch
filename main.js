const container = document.querySelector(".container");
x = prompt("enter a number between 16 & 64 to choose sketch size");

if (x <16)
{
    x=16;
}
if (x>64)
{
    x=64;
}
grid(x);
hovereffect();
toggle();



function grid(x){
for(let i=0; i<x;i++){
    for(let j=0; j<x; j++){
        const div = document.createElement('div');
        div.setAttribute('class', 'grid');
        div.style.width = (550/x).toString() +'px';
        div.style.height = (550/x).toString() +'px';
        container.appendChild(div);
    }
}

}

function color(colo)
{

    const divs = document.querySelectorAll(".grid");
    divs.forEach((square) => {
        square.addEventListener('mouseover', () =>{
            square.style.backgroundColor = colo;
        })
    })
}

function random()
{
    const divs = document.querySelectorAll(".grid");
    divs.forEach((square) => {
        square.addEventListener('mouseover', () =>{
            square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, 
                                                ${Math.floor(Math.random() * 255)},
                                                ${Math.floor(Math.random() * 255)})`
        })
    })
}

function hovereffect(){
    const red = document.querySelector('#red');
    const yellow = document.querySelector('#yellow');
    const green = document.querySelector('#green');
    const blue = document.querySelector('#blue');
    red.addEventListener('focus', ()=>{color('red')});
    yellow.addEventListener('focus', ()=>{color('yellow')});
    green.addEventListener('focus', ()=>{color('green')});
    blue.addEventListener('focus', ()=>{color('blue')});

    const dark = document.querySelector('#dark');
    const rainbow = document.querySelector('#rainbow');
    const eraser = document.querySelector('#eraser');
    dark.addEventListener('focus', ()=>{color('rgb(68, 71, 90)')});
    rainbow.addEventListener('focus', ()=>{random()});
    eraser.addEventListener('focus', ()=>{color('white')});

}





const eraser = document.querySelector('#clear');
const gri = document.querySelectorAll('.grid');
eraser.addEventListener('click', () =>{
    gri.forEach((square) => {
        square.style.backgroundColor = "white";
    })
    
})


function toggle()
{
    let k=0;
    let j=0;
    const flag = document.querySelectorAll('button');
    let check = document.querySelector('#red');
    flag.forEach((button_flag) => {
        button_flag.addEventListener('click', () =>{
            if (k > j)
            {
                var element = document.getElementById(check);
                element.style.backgroundColor = "#f8f8f2";
                element.classList.remove("toggle");
            }
            button_flag.setAttribute('class', 'toggle');
            if (button_flag.id == 'red' || button_flag.id == 'yellow' || button_flag.id == 'green' || button_flag.id == 'blue')
            {
                button_flag.style.backgroundColor = button_flag.id;
            }
            else
            {
                button_flag.style.backgroundColor = "orange";
            }
            check = button_flag.id;
            j=k;
            k++;

        })
    })
}
