var Thermostat = function(){
  this.default_temp = 20;
};

Thermostat.prototype.up = function() {
  this.default_temp ++;
};

Thermostat.prototype.down = function() {
  this.default_temp --;
};