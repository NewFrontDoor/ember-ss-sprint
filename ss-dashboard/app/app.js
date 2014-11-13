import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.Application.initializer({
    name: 'userapp',
    initialize: function(container, application) {
        Ember.UserApp.setup(application, { appId: '546477401b040', indexRoute: 'repositories' });
    }
});

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
