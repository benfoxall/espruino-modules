/*
Ideally - this would re-export all of the sub modules so you could do something like:

import {Charlieplex} from 'espruino-modules'

…but it doesn't seem to work like that, so instead it's something like:

import Charlieplex from 'espruino-modules/es/Charlieplex'
*/


/*
export {default as _433} from './es/433.js'
export {default as ADNS5050} from './es/ADNS5050.js'
export {default as ADS1X15} from './es/ADS1X15.js'
export {default as ADS7843} from './es/ADS7843.js'
export {default as ADXL335} from './es/ADXL335.js'
export {default as ADXL345} from './es/ADXL345.js'
export {default as AT} from './es/AT.js'
export {default as AT24} from './es/AT24.js'
export {default as AT25} from './es/AT25.js'
export {default as ArduinoPico} from './es/ArduinoPico.js'
export {default as BH1750} from './es/BH1750.js'
export {default as BME280} from './es/BME280.js'
export {default as BMP085} from './es/BMP085.js'
export {default as BMP280} from './es/BMP280.js'
export {default as BMPLoader} from './es/BMPLoader.js'
export {default as Brain} from './es/Brain.js'
export {default as CAP1188} from './es/CAP1188.js'
export {default as CD4021BE} from './es/CD4021BE.js'
export {default as Charlieplex} from './es/Charlieplex.js'
export {default as Cron} from './es/Cron.js'
export {default as DCF77} from './es/DCF77.js'
export {default as DHT11} from './es/DHT11.js'
export {default as DHT22} from './es/DHT22.js'
export {default as DMX} from './es/DMX.js'
export {default as DS18B20} from './es/DS18B20.js'
export {default as DS2xxx} from './es/DS2xxx.js'
export {default as DS3231} from './es/DS3231.js'
export {default as DateExt} from './es/DateExt.js'
export {default as DigoleBuf} from './es/DigoleBuf.js'
export {default as DigoleHW} from './es/DigoleHW.js'
export {default as ESP8266WiFi} from './es/ESP8266WiFi.js'
export {default as ESP8266WiFi_0v25} from './es/ESP8266WiFi_0v25.js'
export {default as EasyVR} from './es/EasyVR.js'
export {default as Encoder} from './es/Encoder.js'
export {default as EspruinoWiFi} from './es/EspruinoWiFi.js'
export {default as FlashEEPROM} from './es/FlashEEPROM.js'
export {default as Font4x4} from './es/Font4x4.js'
export {default as Font6x12} from './es/Font6x12.js'
export {default as Font6x8} from './es/Font6x8.js'
export {default as Font8x12} from './es/Font8x12.js'
export {default as Font8x16} from './es/Font8x16.js'
export {default as FontDennis8} from './es/FontDennis8.js'
export {default as GPS} from './es/GPS.js'
export {default as Grove} from './es/Grove.js'
export {default as GroveArduinoPico} from './es/GroveArduinoPico.js'
export {default as GroveButton} from './es/GroveButton.js'
export {default as GroveBuzzer} from './es/GroveBuzzer.js'
export {default as GroveLCDRGB} from './es/GroveLCDRGB.js'
export {default as GroveLED} from './es/GroveLED.js'
export {default as GroveLightSensor} from './es/GroveLightSensor.js'
export {default as GrovePico} from './es/GrovePico.js'
export {default as GroveRelay} from './es/GroveRelay.js'
export {default as GroveRotation} from './es/GroveRotation.js'
export {default as GroveTemperature} from './es/GroveTemperature.js'
export {default as GroveTouch} from './es/GroveTouch.js'
export {default as HC_SR04} from './es/HC-SR04.js'
export {default as HD44780} from './es/HD44780.js'
export {default as HMC5883} from './es/HMC5883.js'
export {default as HP03S} from './es/HP03S.js'
export {default as HTS221} from './es/HTS221.js'
export {default as HTU21D} from './es/HTU21D.js'
export {default as ILI9163} from './es/ILI9163.js'
export {default as ILI9341} from './es/ILI9341.js'
export {default as ILI9341pal} from './es/ILI9341pal.js'
export {default as IRReceiver} from './es/IRReceiver.js'
export {default as InitialState} from './es/InitialState.js'
export {default as KeyPad} from './es/KeyPad.js'
export {default as LIS2DH12} from './es/LIS2DH12.js'
export {default as LPD6416} from './es/LPD6416.js'
export {default as LPS25HB} from './es/LPS25HB.js'
export {default as Losant} from './es/Losant.js'
export {default as MAG3110} from './es/MAG3110.js'
export {default as MAX31855} from './es/MAX31855.js'
export {default as MAX7219} from './es/MAX7219.js'
export {default as MCP23008} from './es/MCP23008.js'
export {default as MCP23017} from './es/MCP23017.js'
export {default as MCP23S08} from './es/MCP23S08.js'
export {default as MCP23S17} from './es/MCP23S17.js'
export {default as MCP4xxx} from './es/MCP4xxx.js'
export {default as MCP4xxx0} from './es/MCP4xxx0.js'
export {default as MCP9808} from './es/MCP9808.js'
export {default as MFRC522} from './es/MFRC522.js'
export {default as MLX90614} from './es/MLX90614.js'
export {default as MMC212xMG} from './es/MMC212xMG.js'
export {default as MPL115A2} from './es/MPL115A2.js'
export {default as MPL3115A2} from './es/MPL3115A2.js'
export {default as MPU6050} from './es/MPU6050.js'
export {default as MPU6050_DMP} from './es/MPU6050_DMP.js'
export {default as MQ135} from './es/MQ135.js'
export {default as MQTT} from './es/MQTT.js'
export {default as MemoryLCD} from './es/MemoryLCD.js'
export {default as Midi} from './es/Midi.js'
export {default as MySensors} from './es/MySensors.js'
export {default as NRF24L01P} from './es/NRF24L01P.js'
export {default as NRF905} from './es/NRF905.js'
export {default as OneWireTempManager} from './es/OneWireTempManager.js'
export {default as PCD8544} from './es/PCD8544.js'
export {default as PN532} from './es/PN532.js'
export {default as Ping} from './es/Ping.js'
export {default as Pixy} from './es/Pixy.js'
export {default as RFM69} from './es/RFM69.js'
export {default as RGBLed} from './es/RGBLed.js'
export {default as RN2483} from './es/RN2483.js'
export {default as Ruuvitag} from './es/Ruuvitag.js'
export {default as SH1106} from './es/SH1106.js'
export {default as SHT1x} from './es/SHT1x.js'
export {default as SHT2x} from './es/SHT2x.js'
export {default as SIM900} from './es/SIM900.js'
export {default as SSD1306} from './es/SSD1306.js'
export {default as SSD1351} from './es/SSD1351.js'
export {default as SSD1606} from './es/SSD1606.js'
export {default as ST7565} from './es/ST7565.js'
export {default as STM32F1Flash} from './es/STM32F1Flash.js'
export {default as SX127x} from './es/SX127x.js'
export {default as SmartNixie} from './es/SmartNixie.js'
export {default as StateMachine} from './es/StateMachine.js'
export {default as StepperMotor} from './es/StepperMotor.js'
export {default as TCS3200} from './es/TCS3200.js'
export {default as TCS3472x} from './es/TCS3472x.js'
export {default as TSL2561} from './es/TSL2561.js'
export {default as Thermistor} from './es/Thermistor.js'
export {default as Touchscreen} from './es/Touchscreen.js'
export {default as USBKeyboard} from './es/USBKeyboard.js'
export {default as USBMouse} from './es/USBMouse.js'
export {default as USBTablet} from './es/USBTablet.js'
export {default as VL53L0X} from './es/VL53L0X.js'
export {default as VT100} from './es/VT100.js'
export {default as Vizibles} from './es/Vizibles.js'
export {default as WebServer} from './es/WebServer.js'
export {default as XBee_API1} from './es/XBee-API1.js'
export {default as aws_iot_device_sdk_device} from './es/aws-iot-device-sdk-device.js'
export {default as big_number} from './es/big_number.js'
export {default as ble_eddystone} from './es/ble_eddystone.js'
export {default as ble_hid_controls} from './es/ble_hid_controls.js'
export {default as ble_hid_keyboard} from './es/ble_hid_keyboard.js'
export {default as ble_http} from './es/ble_http.js'
export {default as ble_ibeacon} from './es/ble_ibeacon.js'
export {default as ble_printer} from './es/ble_printer.js'
export {default as ble_simple_uart} from './es/ble_simple_uart.js'
export {default as clock} from './es/clock.js'
export {default as easyRadio} from './es/easyRadio.js'
export {default as hmac} from './es/hmac.js'
export {default as pronto} from './es/pronto.js'
export {default as servo} from './es/servo.js'
export {default as wii_nunchuck} from './es/wii_nunchuck.js'
export {default as ws} from './es/ws.js'
*/