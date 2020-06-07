const navUI = new NavUI();
const indexUI = new IndexUI();
const app_auth = new Authenticator();

app_auth.register();
app_auth.signIn();
app_auth.authChanges();
app_auth.signOut();



