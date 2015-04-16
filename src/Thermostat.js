var Thermostat = function(){
  this.default_temp = 20;
  this.minimum_temp = 10;
};

Thermostat.prototype.up = function() {
  this.default_temp ++;
};

Thermostat.prototype.down = function() {
  if (this.default_temp === this.minimum_temp) {
    throw new Error('10 is the minimum temp');
  };
  this.default_temp --;
};