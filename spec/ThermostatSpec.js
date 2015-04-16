describe("thermostat functionality", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has a default temperature of 20", function() {
    expect(thermostat.default_temp).toEqual(20);
  });

  it('can increase the temperature', function(){
    thermostat.up();
    expect(thermostat.default_temp).toEqual(21);
  });

  it('can decrease the temperature', function() {
    thermostat.down();
    expect(thermostat.default_temp).toEqual(19);
  });

  it('has a minimum temperature of 10', function(){
    thermostat.default_temp = 10;
    expect( function(){ thermostat.down(); } ).toThrow(new Error('10 is the minimum temp'));
  });

  it('has Power Saving mode that is automatically on', function() {
    expect(thermostat.powerSaver).toBe(true);
  });

  it('has a maximum temperature of 25 when powersaving is on', function() {
    thermostat.default_temp = 25;
    expect( function(){ thermostat.up(); } ).toThrow(new Error('25 is the maximum when powersaving'));
  });

  it('has a switch function that turns off powersaving', function() {
    thermostat.switch();
    expect(thermostat.powerSaver).toBe(false)
  });

});
