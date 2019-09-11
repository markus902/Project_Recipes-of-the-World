//Sign up
$("#create-btn").on("click", () => {
    let newName = $("#new-name").val().trim();
    let newEmail = $("#new-email").val().trim();
    let newPassword = $("#new-password").val().trim();

    firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
})

//Sign in
$("#login-btn").on("click", () => {
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();
    console.log("success");

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            window.location.href = "./index2.html";

        } else {
            window.location.href = "./index.html";
        }
    });
});