import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addArtist: function() {
      var name = $("#name").val();
      var obj = {
        "name": name
      };
      $.post("http://itp-api.herokuapp.com/api/artists", obj);
      $("#name").val("");
      var mod = this.get("model");
      mod.pushObject(obj);
    }
  }
});
