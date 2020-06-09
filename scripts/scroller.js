//JS for website innate scroll functionalities 

//scroll in JS
const sectionsContainer = document.querySelector('.sections__container');

sectionsContainer.addEventListener('touchstart', e => {
    if (e.target.tagName === 'UL' || e.target.tagName === 'A') {
        const startX = e.touches[0].screenX;
        sectionsContainer.addEventListener('touchmove', e => {
            let finalX = e.touches[0].screenX;
            const slideContent = sectionsContainer.querySelector('ul');
            handleSlide(slideContent, startX, finalX);
        });
    }
})

function handleSlide(container, startPoint, endPoint) {
    if(startPoint > endPoint) {
        console.log('scroll to right');
        container.scrollBy(0, -200);
    } else {
        console.log('scroll to left');
        container.scrollBy(0, 200);
    }
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


