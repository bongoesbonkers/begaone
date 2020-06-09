//JS for website innate scroll functionalities 

//scroll in JS
const slideContents = document.querySelectorAll('.slider__contents');

if (slideContents) {
    slideContents.forEach(function(content) {
            content.addEventListener('touchstart', e => {
                const startX = e.touches[0].clientX;
                content.addEventListener('touchmove', e => {
                    let endX = e.touches[0].clientX;
                    let distance = endX- startX;
                    let rate = distance/100;
                    if( rate > 1) {
                        content.scrollBy(0, distance*rate);
                    } else {
                        content.scrollBy(0, distance);
                    }
                })
            })
        });
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