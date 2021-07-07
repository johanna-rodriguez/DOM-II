let logo = document.querySelector('.logo-heading')
logo.onmouseover = function(){
    logo.style.color = "#ff0000";
    logo.style.fontSize = "30px";

}

logo.onmouseout = function(){
    logo.style.color = "#000000";
    logo.style.fontSize = "40px";
}


let header = document.querySelector('header')

let body = document.querySelector('body')
body.onwheel = function(){
    body.style.background= "#daf9ff"
    header.style.background= "#f7ffda"

}

body.onmousemove = function(){
    logo.textContent = 'Welcome to Fun Bus'
};

body.onmouseleave = function(){
    logo.textContent = 'Fun Bus'
};

body.onkeydown = function(){
    alert("OOPS!!! Don't touch me!")
}


let button1 = document.getElementsByClassName('btn')[0]
button1.onclick = function(even){
    if (confirm("Are you ready for the adventure Fun In The Sun?")){
        button1.textContent = "Signed!"
        button1.style.background = "green"
        button1.style.color = "white"
    }
}

let button2 = document.getElementsByClassName('btn')[1]
button2.onclick = function(even){
    if (confirm("Are you ready for the adventure Mountain Excursion?")){
        button2.textContent = "Signed!"
        button2.style.background = "green"
        button2.style.color = "white"
        
    }
}

let button3 = document.getElementsByClassName('btn')[2]
button3.onclick = function(even){
    if (confirm("Are you ready for the adventure Island Getaway?")){
        button3.textContent = "Signed!"
        button3.style.background = "green"
        button3.style.color = "white"
    }
}

let nav1 = document.getElementsByClassName('nav-link')[0]
nav1.onmousedown = function(){
    nav1.style.color = 'red'
}
nav1.onmouseup = function(){
    nav1.style.color = 'black'
}

let nav2 = document.getElementsByClassName('nav-link')[1]
nav2.onmousedown = function(){
    nav2.style.color = 'red'
}
nav2.onmouseup = function(){
    nav2.style.color = 'black'
}

let nav3 = document.getElementsByClassName('nav-link')[2]
nav3.onmousedown = function(){
    nav3.style.color = 'red'
}
nav3.onmouseup = function(){
    nav3.style.color = 'black'
}

let nav4 = document.getElementsByClassName('nav-link')[3]
nav4.onmousedown = function(){
    nav4.style.color = 'red'
}
nav4.onmouseup = function(){
    nav4.style.color = 'black'
}

nav1.onclick = function(event){
    event.preventDefault()
    event.stopImmediatePropagation()
}
nav2.onclick = function(event){
    event.preventDefault()
    event.stopImmediatePropagation()
}
nav3.onclick = function(event){
    event.preventDefault()
    event.stopImmediatePropagation()
}
nav4.onclick = function(event){
    event.preventDefault()
    event.stopImmediatePropagation()
}

function listener(event){
    console.log(event.currentTarget)
}

body.addEventListener('click',listener)