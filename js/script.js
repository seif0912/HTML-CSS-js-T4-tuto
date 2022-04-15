// check if there is local storage color option
let mainColors = localStorage.getItem('color_option')

if(mainColors !== null){
    let colorO = localStorage.getItem('color_option')
    document.documentElement.style.setProperty('--main-color', colorO)
    document.querySelector(".colors-list li.active").classList.remove("active")
    document.querySelector(`li[data-color='${colorO}']`).classList.add("active")
    

}


// toggle spin class on click
document.querySelector('.toggle-settings i').onclick = function(){
    this.classList.toggle('fa-spin')
    document.querySelector('.settings-box').classList.toggle('open')
    
}

// background setting
const randomBackEl = document.querySelectorAll(".random-background span")
randomBackEl.forEach(span => {
    span.addEventListener('click', (e)=>{
        handleActive(e)
        if(e.target.dataset.background === 'yes'){
            backgroundOption = true
            //console.log(backgroundOption)
            randomize()
        }else{
            backgroundOption = false;
            //console.log(backgroundOption)
            clearInterval(bI)
        }
        //localStorage.setItem('color_option', e.target.dataset.color)
    })
})
let backgroundOption = true;
let bI;

// switch colors
const colorsLi = document.querySelectorAll(".colors-list li")
colorsLi.forEach(li => {
    li.addEventListener('click', (e)=>{
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        handleActive(e)
        localStorage.setItem('color_option', e.target.dataset.color)
    })
})



// background
let landingPage = document.querySelector('.landing-page')
let imgsArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg",]

randomize()

// random
function randomize(){
    if(backgroundOption === true){
        bI = setInterval(()=>{
            let ranN = Math.floor(Math.random() * imgsArray.length)
            landingPage.style.backgroundImage = `url("imgs/${imgsArray[ranN]}")`
        },5000)
    }
}


// skills

let skills = document.querySelector('.skills')

window.onscroll = function(){

    let skillsOffsetTop = skills.offsetTop;

    let skillsOuterHeight = skills.offsetHeight

    let windowHeight = this.innerHeight

    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop >(skillsOffsetTop + skillsOuterHeight - windowHeight)){
        let allskills = document.querySelectorAll('.skill-box .skill-progress span')
        allskills.forEach(skill =>{
            skill.style.width = skill.dataset.progress;
        })
    }
}

// gallery
let gallery = document.querySelectorAll('.gallery img')

gallery.forEach(img=>{
    img.addEventListener("click", (e)=>{
        // create overlay element
        let overlay = document.createElement("div")
        overlay.className = 'popup-overlay'
        document.body.appendChild(overlay)
        // create popup box
        let popupBox = document.createElement('div')
        popupBox.className = 'popup-box'
        if(img.alt !== null){
            let imgHeading = document.createElement('h3')
            let imgText = document.createTextNode(img.alt) 
            imgHeading.appendChild(imgText)
            popupBox.appendChild(imgHeading)
        }
        let popupImage = document.createElement('img')
        popupImage.src = img.src
        popupBox.appendChild(popupImage)
        document.body.appendChild(popupBox)
        
        let closeBtn = document.createElement("span")
        let closeBtnText = document.createTextNode('X')
        closeBtn.appendChild(closeBtnText)
        closeBtn.className = 'close-button'
        popupBox.appendChild(closeBtn)

        overlay.addEventListener('click', function(){
            overlay.remove()
            popupBox.remove()
        })
        closeBtn.addEventListener('click', function(){
            overlay.remove()
            popupBox.remove()
        })
    })
})

// links

const allLinks = document.querySelectorAll(".links a")
const allBullets = document.querySelectorAll(".nav-bullets .bullet")

scrollTo(allLinks)
scrollTo(allBullets)

function scrollTo(elements){
    elements.forEach(ele =>{
        ele.addEventListener('click', (e)=>{
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
            
        })
    })
}

// active state
function handleActive(ev){
    ev.target.parentElement.querySelectorAll('.active').forEach(element =>{
        element.classList.remove('active')
    })
    ev.target.classList.add('active')
}



///
let bulletsSpan = document.querySelectorAll('.bullets-option span')
let bulletsContainer = document.querySelector('.nav-bullets')
let bulletLocalItem = localStorage.getItem('bullets_option')

if(bulletLocalItem !== null){
    bulletsSpan.forEach(span=>{
        span.classList.remove('active')
    })
    if(bulletLocalItem === 'block'){
        bulletsContainer.style.display = 'block'
        bulletsSpan[0].classList.add('active')
    }else{
        bulletsContainer.style.display = 'none'
        bulletsSpan[1].classList.add('active')
    }
}

bulletsSpan.forEach(span =>{
    span.addEventListener('click',(e)=>{
        if(span.dataset.display === 'show'){
            bulletsContainer.style.display = 'block'
            localStorage.setItem('bullets_option','block')
        }else{
            bulletsContainer.style.display = 'none'
            localStorage.setItem('bullets_option','none')
        }
        handleActive(e)
    })
})

// reset button
document.querySelector('.reset-options').addEventListener('click',function(){
    //localStorage.clear()
    localStorage.removeItem('bullets_options')
    localStorage.removeItem('color_option')
    window.location.reload()
})