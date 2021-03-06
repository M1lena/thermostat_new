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
  this.colour();
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
  if (this.powerSaver && this.defaultTemp > 25) {
    this.defaultTemp = 25;
    this.colour;
  }
};

Thermostat.prototype.resetTemp = function() {
  this.defaultTemp = 20;
  this.colour();
};

Thermostat.prototype.colour = function() {
  if (this.defaultTemp < 18) {
    return this.tempColour = 'green';
  };
  if (this.defaultTemp > 17 && this.defaultTemp < 25) {
    return this.tempColour = 'yellow';
  };
  this.tempColour = 'red';
};