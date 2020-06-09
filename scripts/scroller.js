//JS for website innate scroll functionalities 

//scroll in JS
const slideContents = document.querySelectorAll('.slider__contents');

// sectionsContainer.addEventListener('touchstart', e => {
//     const startX = e.touches[0].screenX;
//     slideContents.forEach(function (slideContent) {
//         sectionsContainer.addEventListener('touchmove', e => {
//             if (e.target.tagName === 'UL' || e.target.tagName === 'A') {
//                 let finalX = e.touches[0].screenX;
//                 handleSlide(slideContent, startX, finalX);
//             }
//         })
//     });
// })

if (slideContents) {
    slideContents.forEach(function (content) {
            content.addEventListener('touchstart', e => {
                const startX = e.touches[0].clientX;
                content.addEventListener('touchmove', e => {
                    let endX = e.touches[0].clientX;
                    let distance = endX- startX;
                    let rate = distance/100;
                    console.log(rate);
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