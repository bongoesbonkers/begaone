document.addEventListener( 'DOMContentLoaded', () => {
    let featureCards = document.querySelectorAll('.feature-cards');
    featureCards.forEach( collection => {
        collection.scrollTop = collection.scrollHeight;
        // collection.offsetTop = collection.scrollHeight;
    });
});
