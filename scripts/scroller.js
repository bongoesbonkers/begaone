//JS for website innate scroll functionalities 

//scroll in JS
document.addEventListener('DOMContentLoaded', () => {
    let slideContents = document.querySelectorAll('.slider__contents');
    if (slideContents) {
        slideContents.forEach(content => {
            let timer = setTimeout(() => {
                content.scrollTop = content.scrollHeight;
                clearTimeout(timer);
            }, 1300);
            content.addEventListener('touchstart', e => {
                const startX = e.touches[0].clientX;
                content.addEventListener('touchmove', e => {
                    let endX = e.touches[0].clientX;
                    let distance = endX - startX;
                    let rate = distance / 100;
                    if (rate > 1) {
                        content.scrollBy(0, distance * rate);
                    } else {
                        content.scrollBy(0, distance);
                    }
                })
            })
        });

    }
});