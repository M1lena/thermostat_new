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

  it('the down button increments the temperature', function() {
    $('#downButton').click();
    expect('#temperature').toContainText('19');
  });

  it('has a reset button', function() {
    expect('#resetButton').toBeVisible();
  });

  it('the reset button resets temperature to 20', function() {
    $('#upButton').click();
    $('#resetButton').click();
    expect('#temperature').toContainText('20');
  });

  it('has is a powersaving button', function() {
    expect('#powersavingButton').toBeVisible();
  });

  it('can increase temperature above 25 when powersaving button is clicked', function() {
    $('#powersavingButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    expect('#temperature').toContainText(26);
  });

  it('temperature cannot go above 32 when powersaving mode is turned off', function() {
    $('#powersavingButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    $('#upButton').click();
    expect('#temperature').toContainText(32);
  });

});