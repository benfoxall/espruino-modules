# espruino-modules

Espruino modules exported es6 style

## You almost certainly don't want to use this

This is an experiment to try and build [espruino modules](https://www.espruino.com/Modules) without using the web ide and using rollup es modules to create minimal builds.

It didn't really work as well as I hoped, though it's up in here just in case.

``js
// using es2015 syntax (./es)
import YourModuleName from 'espruino-modules/es/YourModuleName'

// using common (./cjs)
const YourModuleName = require('espruino-modules/cjs/YourModuleName')
```

### Modules:

(not all transpilation has worked)

* 433
* ADNS5050
* ADS1X15
* ADS7843
* ADXL335
* ADXL345
* AT
* AT24
* AT25
* ArduinoPico
* BH1750
* BME280
* BMP085
* BMP280
* BMPLoader
* Brain
* CAP1188
* CD4021BE
* Charlieplex
* Cron
* DCF77
* DHT11
* DHT22
* DMX
* DS18B20
* DS2xxx
* DS3231
* DateExt
* DigoleBuf
* DigoleHW
* ESP8266WiFi
* ESP8266WiFi_0v25
* EasyVR
* Encoder
* EspruinoWiFi
* FlashEEPROM
* Font4x4
* Font6x12
* Font6x8
* Font8x12
* Font8x16
* FontDennis8
* GPS
* Grove
* GroveArduinoPico
* GroveButton
* GroveBuzzer
* GroveLCDRGB
* GroveLED
* GroveLightSensor
* GrovePico
* GroveRelay
* GroveRotation
* GroveTemperature
* GroveTouch
* HC-SR04
* HD44780
* HMC5883
* HP03S
* HTS221
* HTU21D
* ILI9163
* ILI9341
* ILI9341pal
* IRReceiver
* InitialState
* KeyPad
* LIS2DH12
* LPD6416
* LPS25HB
* Losant
* MAG3110
* MAX31855
* MAX7219
* MCP23008
* MCP23017
* MCP23S08
* MCP23S17
* MCP4xxx
* MCP4xxx0
* MCP9808
* MFRC522
* MLX90614
* MMC212xMG
* MPL115A2
* MPL3115A2
* MPU6050
* MPU6050_DMP
* MQ135
* MQTT
* MemoryLCD
* Midi
* MySensors
* NRF24L01P
* NRF905
* OneWireTempManager
* PCD8544
* PN532
* Ping
* Pixy
* RFM69
* RGBLed
* RN2483
* Ruuvitag
* SH1106
* SHT1x
* SHT2x
* SIM900
* SSD1306
* SSD1351
* SSD1606
* ST7565
* STM32F1Flash
* SX127x
* SmartNixie
* StateMachine
* StepperMotor
* TCS3200
* TCS3472x
* TSL2561
* Thermistor
* Touchscreen
* USBKeyboard
* USBMouse
* USBTablet
* VL53L0X
* VT100
* Vizibles
* WebServer
* XBee-API1
* aws-iot-device-sdk-device
* big_number
* ble_eddystone
* ble_hid_controls
* ble_hid_keyboard
* ble_http
* ble_ibeacon
* ble_printer
* ble_simple_uart
* clock
* easyRadio
* hmac
* pronto
* servo
* wii_nunchuck
* ws


## Building

Update the docs submodule for any updates:

`git submodule foreach git pull`

Run the 'build all' script to update the modules

`./build_all.sh`
