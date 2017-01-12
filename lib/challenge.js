'use strict'

const AtcQueue = function () {

  this.aircraftQueue = [];

};

AtcQueue.prototype.aircraftCount = function () {

};


AtcQueue.prototype.enqueue = function (/* aircraft */) {

};


AtcQueue.prototype.dequeue = function () {
  let aircraft;
  let removeAircraft;
    this.aircraftQueue.forEach(aircraft, removeAircraft) {
      if (aircraft.type === 'passenger') {
      removeAircraft = aircraft;
    } else if (aircraft.size === 'large') {
      removeAircraft = aircraft;
    }
  }

return;

};


module.exports = AtcQueue;
