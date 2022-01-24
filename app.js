const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

//buttons
const previousBtn = document.querySelector('#previousBtn')
const nextBtn = document.querySelector('#nextBtn')

//counter
let counter = 1
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'


//button listener

nextBtn.addEventListener('click', ()=> {
    if(counter >= carouselImages.length - 1) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

previousBtn.addEventListener('click', ()=> {
    if (counter <= 0) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

carouselSlide.addEventListener('transitionend', () => {
    console.log(carouselImages[counter])
    if (carouselImages[counter].id === 'lastimgclone'){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - 2
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if (carouselImages[counter].id === 'firstimgclone'){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})

//cards
const products = document.querySelector(".product")

function createCard([img,product,category,brand,msrp]){
    let code = `
        <div class="card">
            <img src="${img}" alt="${product}">
            <div class="text">
            <p class="category">${category}</p>
            <h2 class="brand">${brand}</h2>
            <p class="msrp">${msrp}</p>
            </div>
        </div>
    `
    products.innerHTML += code
}