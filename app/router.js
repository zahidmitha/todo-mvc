import Ember from 'ember';
 
var Router = Ember.Router.extend({
    location: TodoMvcENV.locationType
});
 
Router.map(function() {
    this.resource('todos', {path: '/'});
});

Router.map(function() {
    this.resource('todos', { path: '/' }, function() {
        this.route('active');
        this.route('complete');
    });
  this.route('todos/active');
  this.route('todos/complete');
});

 
export default Router;