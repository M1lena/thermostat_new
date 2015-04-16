describe("Interface functionality", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays default temperature', function() {
    expect('#temperature').toContainText('20');
  });

  it('has up button to increase temperature', function() {
    expect('#upButton').toBeVisible();
  });

  it('the up button increments the temperature', function(){
    $('#upButton').click();
    expect('#temperature').toContainText('21');
  });

  it('has down button to decrease temperature', function(){
    expect('#downButton').toBeVisible();
  });

});