// toggle spin class on click
document.querySelector('.toggle-settings i').onclick = function(){
    this.classList.toggle('fa-spin')
    document.querySelector('.settings-box').classList.toggle('open')
    
}

// switch colors
const colorsLi = document.querySelectorAll(".colors-list li")
colorsLi.forEach(li => {
    li.addEventListener('click', (e)=>{
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        document.querySelector(".colors-list li.active").classList.remove("active")
        e.target.classList.add('active')
    })
})

// selection of the landing page elements
let landingPage = document.querySelector('.landing-page')

// array of images
let imgsArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg",]

// changing the backgroung url


// get random number

setInterval(()=>{
    let ranN = Math.floor(Math.random() * imgsArray.length)
    landingPage.style.backgroundImage = `url("imgs/${imgsArray[ranN]}")`
},10000)