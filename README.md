UptimeRobot to serial
=====================================

__Work in progress!__

Simple node server that polls UptimeRobot monitors and fires commands to
a connected serial device.

## Usage
* Copy sample.env to .env and provide your own UptimeRobot main API-key
* Hook up a serial device that listens to the commands from the
 `./src/helpers/serialHelper.js`-file.
* Run `docker-compose up`