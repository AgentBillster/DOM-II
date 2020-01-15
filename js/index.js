nav = document.querySelector('.nav')

nav.addEventListener("mouseenter", () => {      ///1

nav.style.transform = "scale(1.2)"              

nav.style.transition = "transform 1.2s"
})

nav.addEventListener('mouseleave', () => { //2
    nav.style.transform = "scale(1)"

nav.style.transition = "transform 1.2s"
})


words = document.querySelector('.intro')
words.addEventListener('click', () => {         //3
    words.style.backgroundColor = 'blue'
})

img = document.querySelector('img')
img.addEventListener('click', (event) => {      //3 DOES NOT BUBBLE
    img.style.display = 'none'
    event.stopPropagation()
})


gone = document.querySelector('.content-section') //4
gone.addEventListener('wheel', () => {         
    gone.style.backgroundColor = 'yellow'
})

pink = document.querySelector('.footer') //5
pink.addEventListener('dblclick', () => {         
    pink.style.backgroundColor = 'pink'
})

orange = document.querySelector('.btn')
orange.addEventListener('mousedown', () => {        //6  
    orange.style.display = 'none'
})


copy = document.querySelector('.destination')   //7
copy.addEventListener('copy', () => {         
    copy.style.backgroundColor = 'green'
})

pick = document.querySelector('.content-pick')   //8
pick.addEventListener('contextmenu', () => {         
    pick.style.backgroundColor = 'purple'
})


blue = document.querySelector('body')   //9
blue.addEventListener('mouseup', () => {         
    blue.style.backgroundColor = 'blue'
})


document.querySelectorAll('.nav-link').forEach(item=>{ //10
    item.addEventListener('mousemove' , (event) => {
        event.preventDefault()
    })
})     



















