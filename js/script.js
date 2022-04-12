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
        document.querySelector(".random-background span.active").classList.remove("active")
        e.target.classList.add('active')
        if(e.target.dataset.background === 'yes'){
            backgroundOption = true
            console.log(backgroundOption)
            randomize()
        }else{
            backgroundOption = false;
            console.log(backgroundOption)
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
        document.querySelector(".colors-list li.active").classList.remove("active")
        e.target.classList.add('active')
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
