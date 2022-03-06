// Slide logic

const slides = document.getElementsByClassName('slideParent')

let slideIndex = 0,
    scrollTop = 0

document.addEventListener('keydown', hotKeyManager)

function hotKeyManager(event) {

    const key = event.key

    if (key == 'ArrowLeft') {

        previousSlide()
        return
    }
    if (key == 'ArrowRight') {

        nextSlide()
        return
    }
}

function nextSlide() {

    if (slideIndex + 1 == slides.length) return

    slideIndex++

    const slide = slides[slideIndex]

    scrollTop = slide.offsetTop
    console.log(scrollTop)
    window.scroll({
        top: scrollTop,
        behavior: 'smooth'
    })
}

function previousSlide() {

    if (slideIndex - 1 == -1) return

    slideIndex--

    const slide = slides[slideIndex]

    scrollTop = slide.offsetTop

    window.scroll({
        top: scrollTop,
        behavior: 'smooth'
    })
}