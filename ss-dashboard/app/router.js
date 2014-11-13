import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend(Ember.UserApp.ApplicationRouteMixin, {
  location: config.locationType
});

Router.map(function() {
  this.route('repositories', { path: '/'}, function() {
    this.resource('repository', { path: 'repository/:repository_id' }, function() { });
  });
  this.route('login');
  this.route('signup');
});

export default Router;
