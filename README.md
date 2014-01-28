# What is happening here?

## index.html

The app, identified by *ng-app* is active in the entire document.

    <html lang="en" ng-app="myApp"> ... </html>

The view placeholder is identified by *ng-view*.

    <div ng-view></div>

All the goodies we want to use are loaded.

    ```html
    <script src="lib/angular/angular-route.js"></script>
    <script src="js/app.js"></script>
    <script src="js/services.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/filters.js"></script>
    <script src="js/directives.js"></script>

## Routing

A default route is being used - #/view1

The route's result (partial) is being displayed inside the ng-view div.

