const navUI = new NavUI();
const indexUI = new IndexUI();
const app_auth = new Authenticator();
let authUI = new AuthUI();

app_auth.register();
app_auth.signIn();
app_auth.authChanges();
app_auth.signOut();



