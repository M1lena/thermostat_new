var Thermostat = function(){
  this.default_temp = 20;
};

Thermostat.prototype.up = function() {
  this.default_temp ++
};