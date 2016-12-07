function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
}

Thermostat.prototype.getCurrentTemp = function () {
  return this.DEFAULT_TEMERATURE;
};

module.exports = Thermostat;
