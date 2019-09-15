$(function () {

    // Load the favorites from localstorage.
    let favoriteList = [];

    // get favorite list from local storage
    var database = firebase.database()

    database.ref(`/users/${sessionStorage.getItem("user")}`).on("child_added", function (snapshot) {
        snapshot.forEach(function () {
            let favorite = $("<p>");
            favorite.text(snapshot.val().recipeID);
            $("#favoriteRecipe").append(favorite);
        });
    })

    $(document).on("click", "#favoriteRecipe", function (event) {
        event.preventDefault();
        window.location.href = "./ingredients.html"
    });


});