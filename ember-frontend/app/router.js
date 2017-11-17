import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('items');
  this.route('additem')


  this.route('destination');
  this.route('adddestination');


  this.route('route');
  this.route('addroute')
  
});

export default Router;
