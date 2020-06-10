const registerForm = document.querySelector('.register__form');
const loginForm = document.querySelector('.login__form');
const registerFormToggler = document.querySelector('.register__toggler');
const signOutBtn = document.querySelector('#signOut');
const loginMessage = document.querySelector('.login__message-container');


class Authenticator {

    constructor() {

    }

    register() {
        if (registerForm) {
            registerForm.addEventListener('submit', async e => {
                e.preventDefault();
                await auth.createUserWithEmailAndPassword(registerForm.registerEmail.value.trim(), registerForm.registerPassword.value.trim())
                    .then((response) => {
                        //TEST
                        console.log(response);

                        //EXIT REGISTER FORM
                        registerFormToggler.checked = false;
                        //RESET REGISTER FORM
                        registerForm.reset();
                        //Sign user out
                        auth.signOut();
                        //Show message letting user know he is registered 
                        //Prompt user to sign in
                        indexUI.setCaption('Success! Please login with your e-mail and password.');
                    })
                    .catch((err) => {
                        //TEST
                        console.log(err);
                        indexUI.setCaption(err);
                    });
            })
        }
    }

    signInHandler() {
        if (loginForm) {
            loginForm.addEventListener('submit', e => {
                    e.preventDefault();
                    // SET USER PERSISTENCE
                    const persistLogin = loginForm.loginPersist.checked;
                    if (persistLogin) {
                        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                            .then(() => {
                                console.log('executing persistent login');
                                this.signInWithEmailAndPassword();
                            })
                    } else {
                        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
                            .then(() => {
                                console.log('executing session login');
                                this.signInWithEmailAndPassword();
                            })
                    }
            })
        }
    }

    signInWithEmailAndPassword() {
        auth.signInWithEmailAndPassword(loginForm.loginUsername.value, loginForm.loginPassword.value)
        .then((response) => {
            // TEST
            console.log(response);
        })
        //fail to sign in
        .catch((err) => {
            indexUI.setCaption('That username/password is incorrect. Please try again.');
            return;
        })
    }

    signOut() {
    if (signOutBtn) {
        signOutBtn.addEventListener('click', e => {
            e.preventDefault();
            auth.signOut()
                .then(() => {
                    console.log('user signed out');

                    //redirect user back to index
                    window.location.href = "index.html";
                })
                .catch(err => console.log(err))
        })
    }
    }

    authChanges() {
    auth.onAuthStateChanged(user => {
        if (user) {
            // redirect user to home page if he is still logged in
            if (
                window.location.pathname == "/index.html" ||
                window.location.pathname == "/begaone/index.html" ||
                window.location.pathname == "/" ||
                window.location.pathname == "/begaone/"
            ) {
                authUI.persistenceMessage(user);
                let timer = setTimeout(() => {
                    window.location.href = "home.html";
                }, 1500)
            }
            console.log(user);
            console.log(`user is logged in`);
            navUI.setCaption(user);
        } else {
            console.log(`no user is logged in`);
        }
    })
    }

}