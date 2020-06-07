const nav = document.querySelector('nav');
const navCaption = document.querySelector('.nav__search-caption');

class NavUI {

    setCaption(user) {
        if(nav) {
            if (!user) {
                navCaption.innerHTML = `Welcome to Begaone. <label for="register"><span class="nav__caption-username highlight--cta">Register</span></label> to maximise your use of the website!`
            }
            else if(user.displayName != null) {
                navCaption.innerHTML = `Hello <span class="nav__caption-username highlight--info">${user.displayName}</span>, what are you looking for today?`
            } else {
                navCaption.innerHTML = `Welcome! It appears that you have not set up your username. <a href='../user_profile.html'><span class="highlight--cta">Click here to update your profile</span></a>.`;
            }
        }
    }
}
