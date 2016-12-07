var Thermostat = require('../../client/thermostat');
var thermostat;

describe("Thermostat", function () {
  'use strict';


  beforeEach(function () {
    thermostat = new Thermostat();
  });

  describe("start conditions", function () {
    it("starts with temp of 20", function () {
      expect(thermostat.getCurrentTemp()).to.equal(20);
    });
  });

  describe("temperature modifications", function () {
    it("temp can be incremented", function () {
      thermostat.up();
      expect(thermostat.current_temperature).to.equal(21);
    });
  })
});
