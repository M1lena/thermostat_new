describe("thermostat functionality", function() {
  it("has a default temperature of 20", function() {
    thermostat = new Thermostat();
    expect(thermostat.default_temp).toEqual(20);
  });

  it('can increase the temperature', function(){
    thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.default_temp).toEqual(21);
  });

  it('can decrease the temperature', function() {
    thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.down).toEqual(19);
  });

});
