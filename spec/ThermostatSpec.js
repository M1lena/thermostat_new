describe("thermostat functionality", function() {

  it("has a default temperature of 20", function() {
    thermostat = new Thermostat();
    expect(thermostat.default_temp()).toEqual(20);

  });

});
