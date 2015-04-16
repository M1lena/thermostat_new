$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.defaultTemp);

  $('#upButton').click (function(){
    thermostat.up();
    $('#temperature').text(thermostat.defaultTemp);
  });
});