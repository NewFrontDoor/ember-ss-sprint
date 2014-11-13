import Ember from 'ember';

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, {
  model: function() {
    return this.store.find('repository');
  }
});
