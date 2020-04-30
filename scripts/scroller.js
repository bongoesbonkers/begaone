document.addEventListener( 'DOMContentLoaded', () => {
    let featureCards = document.querySelectorAll('.feature-cards');
    featureCards.forEach( collection => {
        collection.style.overflowY = "hidden";
        collection.scrollTop = collection.scrollHeight;
        collection.style.overflowY = "scroll";
    });
});
