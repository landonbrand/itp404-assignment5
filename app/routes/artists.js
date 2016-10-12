import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var promise =  $.ajax({
      url: "http://itp-api.herokuapp.com/api/artists",
      type: 'get'
    });
    return promise.then(function(response){
      // console.log(response.artists);
      return response.artists;
    });
  },

  actions: {
    invalidateModel: function() {
      this.refresh();
    }
  }
});
