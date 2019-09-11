//Sign up
$("#create-btn").on("click", (event) => {
    event.preventDefault();
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
$("#login-btn").on("click", (event) => {
    event.preventDefault();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
});

//Guest
$("#guest-btn").on("click", (event) => {
    event.preventDefault();
    guestAccess = true;
    window.location.href = "./index2.html";
});