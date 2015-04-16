var Thermostat = function(){
  this.defaultTemp = 20;
  this.minimumTemp = 10;
  this.powerSaver = true;
  this.tempColour = 'yellow';
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
  this.colour();
};

Thermostat.prototype.change = function() {
  this.powerSaver = !(this.powerSaver);
};

Thermostat.prototype.resetTemp = function() {
  this.defaultTemp = 20;
};

Thermostat.prototype.colour = function() {
  if (this.defaultTemp < 18) {
    this.tempColour = 'green';
  };
};