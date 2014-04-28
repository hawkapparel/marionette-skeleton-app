require.config({
  baseUrl: 'libs',
  paths : {
    backbone : 'backbone',
    underscore : 'underscore',
    jquery : 'jquery',
    marionette : 'backbone.marionette',
    wreqr : 'backbone.wreqr',
    eventbinder : 'backbone.eventbinder',
    babysitter : 'backbone.babysitter'
  },
  shim : {
    jquery : {
      exports : 'jQuery'
    },
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    },
    wreqr: {
      deps : ['backbone']
    },
    eventbinder : {
      deps : ['backbone']
    },
    babysitter : {
      deps: ['backbone']
    },
    marionette : {
      deps: ['wreqr', 'eventbinder', 'babysitter'],
      exports : 'Marionette'
    }
  }
});

// Loading dependences and execute Marionette App
require( ["marionette"], function (Marionette) {
    // set up the app instance
    var MyApp = new Marionette.Application();

    MyApp.on("initialize:after", function(){
      alert("Application has started!");
    });

    MyApp.start();
});
