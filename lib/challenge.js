'use strict';

// Write your code below
const AtcQueue = function () {
  this.aircraftQueue = [];
};

AtcQueue.prototype.aircraftCount = function () {
  return this.aircraftQueue.length;
};

AtcQueue.prototype.enqueue = function (aircraft) {
  this.aircraftQueue.push(aircraft);
};

AtcQueue.prototype.dequeue = function () {
  let dequeuedPlane;
  let index;
  this.aircraftQueue.forEach(function (aircraft, aircraftIndex) {
    if (aircraftIndex === 0) {
      dequeuedPlane = aircraft;
      index = 0;
    } else {
      if (dequeuedPlane.type === aircraft.type) {
        if (dequeuedPlane.size !== aircraft.size &&
        aircraft.size === 'large') {
          dequeuedPlane = aircraft;
          index = aircraftIndex;
        }
      } else if (aircraft.type === 'passenger') {
        dequeuedPlane = aircraft;
        index = aircraftIndex;
      }
    }

    return;
  });

  this.aircraftQueue.splice(index, 1);
  return dequeuedPlane;
};

module.exports = AtcQueue;
