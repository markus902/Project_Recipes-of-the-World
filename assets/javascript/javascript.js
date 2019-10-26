//AJAX call to recipe API
$(document).ready(function () {
    // Call recipe API

    // let recipeKey = "69d0e213894baf3dbaef4e09fa5215d8";
    // let recipeKey = "a94ca399f777a17059a15f621c0854e7";
    let recipeKey = "1ea52a5202149f9ac4dc33174c85c140";

    let apiRecipes;


    function recipeCall(searchTerm) {
        $.ajax({
            url: searchTerm,
            method: "GET",
        }).then(function (response) {

            // console.log(response);
            $(".search-form").hide();
            $("#current-dish").empty();

            // let random = Math.floor(Math.random() * 30);
            response = JSON.parse(response);

            apiRecipes = response.recipes;
            // console.log(apiRecipes);

            // response1 = JSON.parse(response1);
            for (i = 0; i < response.recipes.length; i++) {
                // console.log("Recipes API List addition")
                let favIcon = $("<i>")
                    .addClass("fav")
                    // .attr("value", JSON.stringify(apiRecipes))
                    .attr("data-recipe-index", i)
                    .addClass("fa fa-heart fa_custom");

                let titleImg = $("<img>")
                    .attr("src", response.recipes[i].image_url)
                    .css("max-width", "500px");

                let dishTitle = $("<h5>")
                    .text(response.recipes[i].title)
                    .addClass("font")
                    .css("text-align", "center")
                    .prepend(favIcon);

                let newListDiv = $("<div>")
                    .addClass("jumbotron justify-content-center click-hook")
                    .css("width", "fit-content")
                    .css("margin", "10px auto")
                    .append(dishTitle)
                    .append(titleImg)

                $("#current-dish").append(newListDiv);
            }
        });
    };

    // Call Location API on load

    var ip = "";
    var api_key = 'at_mCt8AJmwKicWzBoNboBTeR0SOFRhj';
    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            dataType: "json",
            data: {
                apiKey: api_key,
                ipAddress: ip
            },
            success: function (data) {
                // $("body").append("<pre>" + JSON.stringify(data, "", 2) + "</pre>");

                let countryCode = data.location.country;

                // conversion of country code to nationality

                countryObject.forEach(element => {
                    if (element.Code == countryCode) {
                        console.log("TRUE");
                        apiInput = `https://www.food2fork.com/api/search?key=${recipeKey}&q=${element.Nationality}`;
                        recipeCall(apiInput);
                    }
                });
            }
        });
    });

    //--------------------------Front end functionality - linking buttons------------------------------

    $(".search-form").hide();
    $("#favorite-btn").on("click", () => {
        window.location.href = "./favorite.html"
    });
    $("#about-btn").on("click", () => {
        window.location.href = "./about.html"
    });

    //-------------------------------------Search function--------------------------------------

    $("#search-btn").on("click", function () {
        $(".search-form").toggle() //showing search form
    });

    $("#search-btn2").on("click", function () {
        let searchTerm = $("#search-input").val();
        let apiInput = `https://www.food2fork.com/api/search?key=${recipeKey}&q=${searchTerm}`;
        recipeCall(apiInput);
    });

    //--------------------------------Click to favorite--------------------------------------------

    var database = firebase.database()
    let newElement;
    let data = [];
    $(document).on("click", ".fav", function (event) {
        console.log("click works")
        event.preventDefault();

        //Functionality for favorites
        newElement = $(this).attr("data-recipe-index");

        database.ref(`/users/${sessionStorage.getItem("user")}`).on("child_added", function (snapshot) {
            snapshot.forEach(function () {
                data.push(snapshot.val().recipeID)
            });
        });
        console.log(data);

        data.forEach(function (element) {
            console.log(element)
        });
        console.log("test")
    });
    // database.ref(`/users/${sessionStorage.getItem("user")}`).on("child_added", function (snapshot) {
    //     snapshot.forEach(function () {
    //         console.log(snapshot.val().recipe.recipe_id);
    //     });
    // });

    database.ref(`/users/${sessionStorage.getItem("user")}`).push({
        recipe: apiRecipes[newElement],
        recipeID: apiRecipes[newElement].recipe_id,
    });
    console.log(apiRecipes[newElement].recipe_id, "element pushed");






    // database.ref(`/users`).orderByChild(`${sessionStorage.getItem("user")}`).once("value", function (snapshot) {

    //     console.log(snapshot);
    // })

    // database.ref("/users").orderByChild("recipeID").equalTo(apiRecipes[newElement].recipe_id).once("value", function (snapshot) {
    //     if (snapshot.exists()) {
    //         console.log("already there!");
    //     };

    // });




});