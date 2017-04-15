### exports =

Aren't mapped by cjs-to-es6

* lib/ArduinoPico.js:exports = {
* lib/Cron.js:exports = function (tp,utc) {
* lib/FlashEEPROM.js:exports = FlashEEPROM;
* lib/GroveArduinoPico.js:exports = {
* lib/GroveButton.js:exports = GroveButton;
* lib/GroveBuzzer.js:exports = GroveBuzzer;
* lib/GroveLCDRGB.js:exports = GroveLCDRGB;
* lib/GroveLED.js:exports = GroveLED;
* lib/GroveLightSensor.js:exports = GroveLightSensor;
* lib/GrovePico.js:exports = {
* lib/GroveRelay.js:exports = GroveRelay;
* lib/GroveRotation.js:exports = GroveRotation;
* lib/GroveTemperature.js:exports = GroveTemperature;
* lib/GroveTouch.js:exports = GroveTouch;
* lib/RN2483.js:exports = RN2483;
* lib/StepperMotor.js:exports = StepperMotor;
* lib/ws.js:exports = function (host, options) {

ws.js is double interesting, because the web server gets mapped, but not the client
