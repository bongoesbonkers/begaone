//JS for website innate scroll functionalities 

class Scroller {

    scrollToTop(scrollableElements) {
        if (scrollableElements) {
            scrollableElements.forEach(scrollableElement => {
                let timer = setTimeout(() => {
                    scrollableElement.scrollTop = scrollableElement.scrollHeight;
                    clearTimeout(timer);
                }, 1300);
            });
        }
    }

    sliderTouchControl(scrollableElements) {
    if (scrollableElements) {
        scrollableElements.forEach(scrollableElement => {
            scrollableElement.addEventListener('touchstart', e => {
                const startX = e.touches[0].clientX;
                const startY = e.touches[0].clientY;
                scrollableElement.addEventListener('touchmove', e => {
                    let endX = e.touches[0].clientX;
                    let endY = e.touches[0].clientY;
                    let distanceX = endX - startX;
                    let distanceY = endY - startY;
                    let rate = distanceX / 100;
                    if(distanceY > 200 || distanceY < -200) {
                        return;
                    } else {
                        if (rate > 1) {
                            scrollableElement.scrollBy(0, distanceX * rate);
                        } else {
                            scrollableElement.scrollBy(0, distanceX);
                        }
                    }
                });
            });
        });
    }
    }
}