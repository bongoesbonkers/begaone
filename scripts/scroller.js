//JS for website innate scroll functionalities 

//scroll for home-page feature cards
document.addEventListener( 'DOMContentLoaded', () => {
    let featureCards = document.querySelectorAll('.feature-cards');
    featureCards.forEach( collection => {
        collection.style.overflowY = "hidden";
        collection.style.overflowY = "scroll";
        let timer = setTimeout(()=> {
            collection.scrollTop = collection.scrollHeight;
        }, 1300);
    });

    let userMedals = document.querySelector('.profile__content-medals');
    if(userMedals){
        userMedals.scrollTop = userMedals.scrollHeight;
    }
});

//scroll for business pages chat
