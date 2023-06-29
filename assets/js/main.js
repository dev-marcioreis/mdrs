const openNavbarBtn = document.querySelector('.open__btn')
const closeNavbarBtn = document.querySelector('.close__btn')
const overlay = document.querySelector('.overlay')
const navbarMenu =  document.querySelector('.navbar')

const showNavbarMenu = () => {
    navbarMenu.style.left = '0'
}

openNavbarBtn.addEventListener('click', showNavbarMenu)

const hideNavbarMenu = () => {
    navbarMenu.style.left = '-100%'
}

closeNavbarBtn.addEventListener('click', hideNavbarMenu)
overlay.addEventListener('click', hideNavbarMenu)


// Close menu navbar when clicking any option
if(window.innerWidth > 0) {
    document.querySelectorAll('.navbar__list .navbar__link').forEach(nav => {
        nav.addEventListener('click', () => {
            hideNavbarMenu()
        })
    })
}


// Change menu navbar color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolling', window.scrollY)
})


// Scroll Up
const scrollUp = () => {
    const scrollUp = document.querySelector('.scroll__up')

    if(this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)
