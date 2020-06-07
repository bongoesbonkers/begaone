const registerResult = document.querySelector('.register__result-container p')

class IndexUI {

    setCaption(message) {
        if(registerResult){
            registerResult.innerHTML = message;
            registerResult.classList.toggle('u-hidden');
        }
    }

}