import Ember from 'ember';

export default Ember.Route.extend({
  // console.log(params.id);
  model(params) {
    var promise =  $.ajax({
      url: "http://itp-api.herokuapp.com/api/artists/" + params.id + "/songs",
      type: 'get'
    });
    return promise.then(function(response){
      console.log(response.songs);
      return response.songs;
    });
  }
});
