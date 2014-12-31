var elixir = require('laravel-elixir');

elixir(function (mix) {
    mix
    .publish("bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap/", "_sass/libs/bootstrap/")
    .publish("bower_components/ionicons/scss/", "_sass/libs/ionicons/")
    .publish("bower_components/ionicons/fonts/", "assets/fonts/")
    .publish("bower_components/headroom.js/dist/headroom.min.js", "assets/js/headroom.min.js")
    .publish("bower_components/headroom.js/dist/jQuery.headroom.min.js", "assets/js/jQuery.headroom.min.js");
});
