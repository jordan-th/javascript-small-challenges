const DAY_CODES = {
  "Sunday": 0,
  "Monday": 1, 
  "Tuesday": 2, 
  "Wednesday" : 3,
  "Thursday" : 4, 
  "Friday" : 5,
  "Saturday" : 6, 
}
const TEENS = [13, 14, 15, 16, 17, 18, 19];

function meetupDay(year, month, day, descriptor) {
  let dayOfInterest = DAY_CODES[day];
  let monthOfDates = [];
  
  for (let date = 1; date <= 31; date += 1) {
    monthOfDates.push(new Date(year, month, date));
  }

  allDatesOfxDay = monthOfDates
    .filter(day => day.getMonth() === month)
    .filter(day => day.getDay() === dayOfInterest)
    .map(date => date.getDate())

  if (descriptor.match(/^\d/)) {
    let xth = Number(descriptor[0]);
    if (xth > allDatesOfxDay.length) {
      throw new Error();
    }
    let xDate = allDatesOfxDay[xth - 1];
    return new Date(year, month, xDate);
  } else if (descriptor.match(/last/i)) {
    let xDate = allDatesOfxDay[allDatesOfxDay.length - 1];
    return new Date(year, month, xDate);
  } else if (descriptor.match(/teenth/i)) {
    let xDate = allDatesOfxDay.filter(date => TEENS.includes(date))[0];
    return new Date(year, month, xDate);
  }
}

module.exports = meetupDay;