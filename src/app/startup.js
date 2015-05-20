define(['jquery', 'underscore', 'knockout', './router', 'bootstrap', 'knockout-projections'], function($, _, ko, router) {

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('home-page', { require: 'components/home-page/home' });
  ko.components.register('youtube-search', { require: 'components/youtube-search/youtube-search' });
  ko.components.register('youtube-video', { require: 'components/youtube-video/youtube-video' });

  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
