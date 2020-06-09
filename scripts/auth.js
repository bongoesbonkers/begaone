const registerForm = document.querySelector('.register__form');
const loginForm = document.querySelector('.login__form');
const registerFormToggler = document.querySelector('.register__toggler');
const signOutBtn = document.querySelector('#signOut');

class Authenticator {

    constructor () {

    }

    register () {
        if(registerForm) {
            registerForm.addEventListener('submit', async e => {
                e.preventDefault();
                await auth.createUserWithEmailAndPassword(registerForm.registerEmail.value.trim(), registerForm.registerPassword.value.trim())
                .then((response)=>{
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
                .catch((err)=>{
                    //TEST
                    console.log(err);
                    indexUI.setCaption(err);
                });
            })
        }
    }

    signIn () {
        if(loginForm){
            loginForm.addEventListener('submit', e => {
                e.preventDefault();
                auth.signInWithEmailAndPassword(loginForm.loginUsername.value, loginForm.loginPassword.value)
                    .then((response)=>{
                        // TEST
                        // console.log(response);
                        // Toggle Login Message
                        const loginMessage = document.querySelector('.login__message-container');
                        loginMessage.classList.toggle('u-hidden');
                        // Check if user document exist using uid in response object
                        db.collection("users").doc(response.user.uid).get()
                        .then(async document => {
                            if(document.exists) {
                                const user = await document.data();
                                window.location.href = "home.html";
                            } else {
                                //create new user document
                                await db.collection("users").doc(response.user.uid).set({
                                    email: response.user.email
                                })
                                .then(()=>{
                                    //redirect to homepage after sign-in
                                    window.location.href = "home.html";
                                })
                            }
                        })                        
                    })
                    //fail to sign in
                    .catch((err) => {
                    loginMessage.innerHTML
                        indexUI.setCaption('That username/password is incorrect. Please try again.');
                    });
            })
        }
    }

    signOut () {
        if(signOutBtn) {
            signOutBtn.addEventListener('click', e => {
                e.preventDefault();
                auth.signOut()
                .then(()=>{
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
            if(user){
                // redirect user to home page if he is still logged in
                if(window.location.pathname == "/begaone/") {
                    const redirectToggler = document.querySelector('#redirectToggler');
                    redirectToggler.checked = true;
                    let timer = setTimeout(()=>{
                        window.location.href = "home.html";
                    }, 1200)
                }
                console.log(`user is logged in`);
                navUI.setCaption(user);
            } else {
                console.log(`no user is logged in`);
            }
        })
    }

}
