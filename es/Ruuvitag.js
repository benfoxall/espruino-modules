import LIS2DH12 from 'LIS2DH12';
import BME280 from 'BME280';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var Ruuvitag = createCommonjsModule(function (module, exports) {
/* Copyright (c) 2017 Gordon Williams, Pur3 Ltd. See the file LICENSE for copying permission. */

var spi = new SPI();
spi.setup({ mosi:D25,miso:D28,sck:D29 });
exports.accel = LIS2DH12.connectSPI(spi, D8); // LIS2DH12
// also: accelerometer int1:D2, int2:D6 unused at the moment
exports.env = BME280.connectSPI(spi, D3); // BME280
exports.env.setPower(0); // turn environment sensor off for now

/** Set whether the environmental sensor is on or off */
exports.setEnvOn = function(on) {
  exports.env.setPower(on);
};
/** Set whether the accelerometer is on or off. A callback can be supplied
  which will be called with an {x,y,z} argument */
exports.setAccelOn = function(on, callback) {
  exports.accel.setPowerMode(on?"low":"powerdown");
  exports.accel.callback = callback;
};
/** Get the last received environment data { temp: degrees_c, pressure: kPa, humidity: % }*/
exports.getEnvData = function(on) {
  return exports.env.getData();
};
/** Get the last received accelerometer data, or undefined */
exports.getAccelData = function(on) {
  return exports.accel.getXYZ();
};
/*
var Ruuvitag = require("Ruuvitag");
Ruuvitag.setEnvOn(true);
Ruuvitag.setAccelOn(true);
Ruuvitag.getEnvData();
Ruuvitag.getAccelData();
*/
});

var Ruuvitag_1 = Ruuvitag.accel;
var Ruuvitag_2 = Ruuvitag.env;
var Ruuvitag_3 = Ruuvitag.setEnvOn;
var Ruuvitag_4 = Ruuvitag.setAccelOn;
var Ruuvitag_5 = Ruuvitag.getEnvData;
var Ruuvitag_6 = Ruuvitag.getAccelData;

export { Ruuvitag_1 as accel, Ruuvitag_2 as env, Ruuvitag_3 as setEnvOn, Ruuvitag_4 as setAccelOn, Ruuvitag_5 as getEnvData, Ruuvitag_6 as getAccelData };export default Ruuvitag;