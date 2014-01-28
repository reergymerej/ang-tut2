# What is happening here?

## index.html

The app, identified by *ng-app* is active in the entire document.

    <html lang="en" ng-app="myApp"> ... </html>

The view placeholder is identified by *ng-view*.

    <div ng-view></div>

All the goodies we want to use are loaded.

    <script src="lib/angular/angular-route.js"></script>
    <script src="js/app.js"></script>
    <script src="js/services.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/filters.js"></script>
    <script src="js/directives.js"></script>

## The App

Our app's module is called *myApp*.  Where is it?

/app/js/app.js has the definition of our module.  It is defined with the following dependencies:

* ngRoute
* myApp.filters
* myApp.services
* myApp.directives
* myApp.controllers

The **config** method for our module injects the **$routeProvider** provided by **ngRoute**.  Using the **$routeProvider**, two routes are defined.

    $routeProvider.when(
      // the path
      '/view1', 

      {
        // the html to use
        templateUrl: 'partials/partial1.html',

        // the controller
        controller: 'MyCtrl1'
      }
    );

    // default route
    $routeProvider.otherwise({ redirectTo: '/view1' });

### The Controller

OK, the app has defined some routes and the routes point at html and controllers.  Where is the controller?

Surprisingly, the controllers are defined in /app/js/controllers.  They are defined as **myApp.controllers**.  Remember that thing we injected into our app's module in /app/js/app.js?

So, the route loads the controller, but the controller doesn't do anything.

    angular.module('myApp.controllers', []).
      controller('MyCtrl1', [function() {

      }]);

### The Partial

The controller doesn't *need* to do anything, it's just there if we want to use it.  The main thing the route does is it loads the partial (template, snippet, whatever).  The partial used for our default route is in /app/partials/partial1.html.

This html is loaded and displayed inside the **ng-view** div.  We have a Ferrari and we're using it to walk the dog.

### Making the Partial Dynamic

Let's make use of that controller.  

Add
    <p>The current time is: {{ time }}.</p>

Refresh your page, and you see:

> The current time is: .