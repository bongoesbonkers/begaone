//JS for website innate scroll functionalities 

//scroll for home-page feature cards
document.addEventListener( 'DOMContentLoaded', () => {
    let sliderContents = document.querySelectorAll('.slider__contents');
    if(sliderContents){
        sliderContents.forEach( content => {    
            let timer = setTimeout(()=> {
                content.scrollTop = content.scrollHeight;
                clearTimeout(timer);
            }, 1300);
        });
    }

});

//scroll for business pages chat
