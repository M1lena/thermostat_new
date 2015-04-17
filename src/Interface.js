$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.defaultTemp);

  $('#upButton').click (function(){
    thermostat.up();
    $('#temperature').text(thermostat.defaultTemp);
  });

  $('#downButton').click (function(){
    thermostat.down();
    $('#temperature').text(thermostat.defaultTemp);
  });

  $('#resetButton').click (function(){
    thermostat.resetTemp();
    $('#temperature').text(thermostat.defaultTemp);
  });

  $('#powersavingButton').click (function(){
    thermostat.change();
    $('#temperature').text(thermostat.defaultTemp);
  });

});