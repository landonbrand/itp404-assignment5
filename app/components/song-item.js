import Ember from 'ember';

export default Ember.Component.extend({
  isPopular: function() {
    return this.get('song.playCount') > 20;
  }.property('song.playCount'),

  isExpensive: function() {
    console.log(this.get('song.price'));
    return this.get('song.price') > 1;
  }.property('song.price')
});
