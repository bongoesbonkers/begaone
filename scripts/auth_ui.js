class AuthUI {

    persistenceMessage (user) {
        const redirectToggler = document.querySelector('#redirectToggler');
        const h4 = document.querySelector('.redirect__container h4');
        let html;
        if(user) {
            html = `Already logged in as ${user.email} <br> redirecting you to the home page.`
        } else {
            return;
        }
        h4.innerHTML = html;
        redirectToggler.checked = true;
    }

}