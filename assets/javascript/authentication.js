$(document).ready(function () {

    //check if user signed in
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

            console.log("signed in");

        } else {
            console.log("not signed in");
            window.location.href = "./index.html";
        }
    });

    //Sign out
    $("#signout-btn").on("click", (event) => {
        event.preventDefault();
        firebase.auth().signOut().then(function () {
            console.log("signed out");
        }).catch(function (error) {
            // An error happened.
        });
    });


});