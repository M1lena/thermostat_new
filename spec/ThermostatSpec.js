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
    expect(thermostat.default_temp).toEqual(19);
  });

  it('has a minimum temperature of 10', function(){
    thermostat = new Thermostat();
    thermostat.default_temp = 10;
    expect( function(){ thermostat.down(); } ).toThrow(new Error('10 is the minimum temp'));
  });

});
