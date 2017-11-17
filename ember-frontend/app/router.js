import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('items');
  this.route('additem');
  this.route('viewitems');


  this.route('destination');
  this.route('adddestination');
  this.route('viewdestinations')


  this.route('route');
  this.route('addroute')
  this.route('viewroutes');

});

export default Router;
