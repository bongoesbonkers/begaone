//JS for website innate scroll functionalities 

//scroll in JS
const sectionsContainer = document.querySelector('.sections__container');

sectionsContainer.addEventListener('touchstart', e => {
    const startX = e.touches[0].screenX;
    const slideContents = document.querySelectorAll('.slider__contents');
    slideContents.forEach(function (slideContent) {
        sectionsContainer.addEventListener('touchmove', e => {
            if (e.target.tagName === 'UL' || e.target.tagName === 'A') {
                let finalX = e.touches[0].screenX;
                handleSlide(slideContent, startX, finalX);
            }
        })
    });
})

function handleSlide(content, startPoint, endPoint) {
    const distance = endPoint - startPoint;
    const rate = Math.floor(distance/100);
    content.scrollBy(0, 175*rate);
}


//scroll for home-page feature cards
document.addEventListener('DOMContentLoaded', () => {
    let sliderContents = document.querySelectorAll('.slider__contents');
    if (sliderContents) {
        sliderContents.forEach(content => {
            let timer = setTimeout(() => {
                content.scrollTop = content.scrollHeight;
                clearTimeout(timer);
            }, 1300);
        });
    }
});