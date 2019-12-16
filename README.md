# Recipes of the World

Deployment link: https://markus902.github.io/Project_Recipes-of-the-World/

### Description and usage

This app is intended for travellers that want to store vacation memories in form of local recipes on their account. Recipes of the world suggests local recipes based on your geolocation which can be stored as favourites. 

### Code structure

The frontend of the app is based on Bootstrap. Registration and account user management are built on Firebase. Upon loading the app calls a geolocation API (geo.ipify.org) that captures the country based on the current IP address. Using the obtained country information the app performs a search in a recipe API (food2fork.com) to dynamically create a list of recipes with favourite icons. When a favourite icon is clicked the corresponding recipe information get stored in firebase. If the user visits the Favourites page, the app retrieves all favourite recipes and displays the information. On both pages each recipe can be viewed individually showing all details.

### Technologies

* Bootstrap

* Geo location

* API calls

* Firebase Authentication

