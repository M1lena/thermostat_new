$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.defaultTemp);
  $('#temperature').css('color', 'Yellow');

  $('#upButton').click (function(){
    thermostat.up();
    $('#temperature').text(thermostat.defaultTemp);
    $('#temperature').css('color', thermostat.tempColour);
  });

  $('#downButton').click (function(){
    thermostat.down();
    $('#temperature').text(thermostat.defaultTemp);
    $('#temperature').css('color', thermostat.tempColour);
  });

  $('#resetButton').click (function(){
    thermostat.resetTemp();
    $('#temperature').text(thermostat.defaultTemp);
    $('#temperature').css('color', thermostat.tempColour);

  });

  $('#powersavingButton').click (function(){
    thermostat.change();
    $('#temperature').text(thermostat.defaultTemp);
    $('#temperature').css('color', thermostat.tempColour);
  });

});