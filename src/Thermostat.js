var Thermostat = function(){
  this.defaultTemp = 20;
  this.minimumTemp = 10;
  this.powerSaver = true;
};

Thermostat.prototype.up = function() {
  if (this.defaultTemp === 25 && this.powerSaver) {
    throw new Error('25 is the maximum when powersaving');
  };
  if (this.defaultTemp === 32) {
    throw new Error('32 is the maximum');
  };
  this.defaultTemp ++;
};

Thermostat.prototype.down = function() {
  if (this.defaultTemp === this.minimumTemp) {
    throw new Error('10 is the minimum temp');
  };
  this.defaultTemp --;
};

Thermostat.prototype.change = function() {
  this.powerSaver = !(this.powerSaver);
};

Thermostat.prototype.resetTemp = function() {
  this.defaultTemp = 20;
};