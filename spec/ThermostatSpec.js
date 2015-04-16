describe("thermostat functionality", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20', function() {
    expect(thermostat.defaultTemp).toEqual(20);
  });

  it('can increase the temperature', function(){
    thermostat.up();
    expect(thermostat.defaultTemp).toEqual(21);
  });

  it('can decrease the temperature', function() {
    thermostat.down();
    expect(thermostat.defaultTemp).toEqual(19);
  });

  it('has a minimum temperature of 10', function(){
    thermostat.defaultTemp = 10;
    expect( function(){ thermostat.down(); } ).toThrow(new Error('10 is the minimum temp'));
  });

  it('has Power Saving mode that is automatically on', function() {
    expect(thermostat.powerSaver).toBe(true);
  });

  it('has a switch function that turns powersaving off when its on', function() {
    thermostat.change();
    expect(thermostat.powerSaver).toBe(false);
  });

  it('has a switch function that turns powersaving on when its off', function() {
    thermostat.change();
    thermostat.change();
    expect(thermostat.powerSaver).toBe(true);
  });

  it('has a maximum temperature of 25 when powersaving is on', function() {
    thermostat.defaultTemp = 25;
    expect( function(){ thermostat.up(); } ).toThrow(new Error('25 is the maximum when powersaving'));
  });

  it('has a maximum temperature of 32 when powersaving is off', function() {
    thermostat.change();
    thermostat.defaultTemp = 32;
    expect( function(){ thermostat.up(); } ).toThrow(new Error('32 is the maximum'));
  });

  it('has a reset function that resets the temperature to 20', function() {
    thermostat.up();
    thermostat.resetTemp();
    expect(thermostat.defaultTemp).toEqual(20);
  });

  it('temperature color starts off as yellow', function(){
    expect(thermostat.tempColour).toEqual('yellow');
  });

  it('temperature color is green when the temperature is below 18', function() {
    thermostat.defaultTemp = 18;
    thermostat.down();
    expect(thermostat.tempColour).toEqual('green');
  });

  it('temperature color changes to yellow when it rises above 18', function() {
    thermostat.tempColour = 'green';
    thermostat.defaultTemp = 17;
    thermostat.up();
    expect(thermostat.tempColour).toEqual('yellow');
  });

});
