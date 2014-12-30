var elixir = require('laravel-elixir');

elixir(function (mix) {
    mix
    .publish("bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap/", "_sass/libs/bootstrap/")
    .publish("bower_components/fontawesome/scss/", "_sass/libs/font-awesome/");
});