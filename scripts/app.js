window.onload = function () {
    let ui = new UI;
    const app_auth = new Authenticator();
    app_auth.register();
    app_auth.signInHandler();
    app_auth.authChanges(ui);
    app_auth.signOut();

}

document.addEventListener('DOMContentLoaded', ()=>{
    // QUERY FOR SLIDABLE ELEMENTS
    let slidableElements = document.querySelectorAll('.slider__contents');
    //  DEPLOY SCROLLER LOGIC ONLY IF SLIDABLE ELEMENTS EXIST
    if(slidableElements.length > 0) {
        let scrollHandler = new Scroller();
        scrollHandler.scrollToTop(slidableElements);
        scrollHandler.sliderTouchControl(slidableElements);
    }
})

