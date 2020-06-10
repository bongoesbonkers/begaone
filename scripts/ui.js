const nav = document.querySelector('nav');
const navCaption = document.querySelector('.nav__search-caption');
const registerResult = document.querySelector('.register__result-container p')

class UI {

    persistenceMessage (user) {
        const redirectToggler = document.querySelector('#redirectToggler');
        const h4 = document.querySelector('.redirect__container h4');
        let html;
        if(user) {
            html = `Logging in as ${user.email} <br> redirecting you to the home page.`
        } else {
            return;
        }
        h4.innerHTML = html;
        redirectToggler.checked = true;
    }

    navCaption(user) {
        if(nav) {
            if (!user) {
                navCaption.innerHTML = `Welcome to Begaone. <label for="register"><span class="nav__caption-username highlight--cta">Register</span></label> to maximise your use of the website!`
            }
            else if(user.displayName != null) {
                navCaption.innerHTML = `Hello <span class="nav__caption-username highlight--info">${user.displayName}</span>, what are you looking for today?`
            } else {
                navCaption.innerHTML = `Welcome! It looks like you are new here. <a href='begaone/user_profile.html'><span class="highlight--cta">Complete your profile</span></a> to start earning medals and rewards while using and contributing to the site! <a href="#"><span class="highlight--info">Learn more</span>`;
            }
        }
    }

    registerCaption(message) {
        if(registerResult){
            registerResult.innerHTML = message;
            registerResult.classList.toggle('u-hidden');
        }
    }

}
