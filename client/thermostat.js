function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.current_temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.getCurrentTemp = function () {
  return this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.up = function () {
  this.current_temperature += 1;
};

module.exports = Thermostat;
