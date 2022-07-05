let header = document.querySelector('h1');
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let res = document.querySelector('.res');


//increase
function increase (){
    header.textContent++
    if(header.textContent > 0){
        document.body.style.backgroundColor = 'red'
    }
}
inc.addEventListener('click', increase)

//decrease
function decrease (){
    header.textContent--
    if(header.textContent < 0){
        document.body.style.backgroundColor = 'blue'
    }
}
dec.addEventListener('click', decrease)

//reset
function reset (){
    header.textContent = 0
    if(header.textContent == 0){
        document.body.style.backgroundColor = 'gold'
    }
}
res.addEventListener('click', reset)

