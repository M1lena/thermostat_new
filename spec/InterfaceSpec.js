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
    for (i = 0; i < 6; i++) {
      $('#upButton').click();
    }
    expect('#temperature').toContainText(26);
  });

  it('temperature cannot go above 32 when powersaving mode is turned off', function() {
    $('#powersavingButton').click();
    for (i = 0; i < 12; i++) {
      $('#upButton').click();
    }
    expect('#temperature').toContainText(32);
  });

  it('if temperature is above 25, and powersaving is activated temperature falls to 25', function() {
    $('#powersavingButton').click();
    for (i = 0; i < 6; i++) {
      $('#upButton').click();
    }
    $('#powersavingButton').click();
    expect('#temperature').toContainText(25);
  });

  it('temperature is displayed as yellow initially', function() {
    expect('#temperature').toHaveCss({color: "rgb(255,255,0)"});
  });

});