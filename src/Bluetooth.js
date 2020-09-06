const noble = require('@abandonware/noble');
const EventTarget = require('./EventTarget');
const requestDevice = require('./requestDevice');
const RequestDeviceDelegate = require('./RequestDeviceDelegate');
const getAvailability = require('./getAvailability');

const bluetooth = new EventTarget();
noble.on('stateChange', (state) => {
	bluetooth.emit('onavailabilitychanged', state === 'poweredOn');
});

bluetooth.requestDevice = requestDevice;
bluetooth.RequestDeviceDelegate = RequestDeviceDelegate;
bluetooth.getAvailability = getAvailability;

global.navigator = {
	...global.navigator,
	bluetooth: bluetooth
};

module.exports = bluetooth;
