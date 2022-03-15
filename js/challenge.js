const counter = document.querySelector("#counter")
const pauseBtn = document.querySelector('#pause')
const buttons = document.getElementsByTagName("button")
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const form = document.querySelector('#comment-form')
const heart = document.querySelector('#heart')

let count = 0
//timer increments
function timer(){
    internalID = setInterval(function(){
        count += 1
        counter.textContent = count;
    }, 1000)
}
document.addEventListener("DOMContentLoaded",timer())

//plus
function handleIncrement(){
    count++
    counter.textContent = count
}
plus.addEventListener('click', handleIncrement)


//minus
function handleDecrement(){
    count--
    counter.textContent = count
}
minus.addEventListener('click', handleDecrement)

//comment input
function handleComment(inputText){
    let p = document.createElement('p')
    p.innerHTML = inputText
    const comments = document.querySelector('#list')
    comments.append(p)
}
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    handleComment(e.target.comment.value)
})

function handleLikes(){
    let ul = document.querySelector('.likes')
    let currentTime = document.querySelector('#counter').innerHTML
    let li = document.getElementById(currentTime)
    
    if(li ){
        heartCounter++
        li.innerHTML = `${currentTime} has been liked ${heartCounter}`
    }else{
        
        
        let p = document.createElement('p')
        p.setAttribute("id", currentTime)
        p.innerHTML = `${currentTime} has been liked ${heartCounter}`
        ul.append(p)
    }
    

}
heart.addEventListener('click', handleLikes)

function pressBtn(){
    
    if(pauseBtn.innerHTML == ' pause '){
        pauseBtn.innerHTML =' resume '
    } else if(pauseBtn.innerHTML == ' resume '){
        pauseBtn.innerHTML = ' pause '
    }
 if (pauseBtn.innerHTML === ' resume '){
    clearInterval(internalID)
     for(let i = 0; i< buttons.length; i++){
        buttons[i].setAttribute("disabled", "")
     }
    pauseBtn.removeAttribute('disabled')
}

if(pauseBtn.innerHTML === ' pause ') {
    timer()
    for(let i=0; i<buttons.length; i++){
        buttons[i].removeAttribute('disabled')
    }
}
  
}
pauseBtn.addEventListener('click', pressBtn)

