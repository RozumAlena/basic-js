const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (sampleActivity === undefined) return false;  
  if (typeof sampleActivity !== 'string') return false;
  const activityNum = Number(sampleActivity);
  if (typeof activityNum === 'number' && activityNum > 0 && activityNum < MODERN_ACTIVITY) {
    return Math.ceil((Math.log(MODERN_ACTIVITY / activityNum)) / k);
  } else {
    return false;
  }
    
  };
