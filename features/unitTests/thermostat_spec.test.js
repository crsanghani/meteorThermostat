describe("Thermostat", function () {
  'use strict';
  var Thermostat = require('../../client/thermostat.js');
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  describe("start conditions", function () {
    it("starts with temp of 20", function () {
      expect(thermostat.getCurrentTemp()).to.equal(20);
    });
  });

});
