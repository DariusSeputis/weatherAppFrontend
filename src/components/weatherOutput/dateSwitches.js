// SWITCHES FOR DATES
// - MONTHS
export const monthStringify = (month) => {
  let monthString = '';
  switch (month) {
    case 0:
      monthString = 'Jan';
      break;
    case 1:
      monthString = 'Feb';
      break;
    case 2:
      monthString = 'Mar';
      break;
    case 3:
      monthString = 'Apr';
      break;
    case 4:
      monthString = 'May';
      break;
    case 5:
      monthString = 'Jun';
      break;
    case 6:
      monthString = 'Jul';
      break;
    case 7:
      monthString = 'Aug';
      break;
    case 8:
      monthString = 'Sep';
      break;
    case 9:
      monthString = 'Oct';
      break;
    case 10:
      monthString = 'Nov';
      break;
    case 11:
      monthString = 'Dec';
      break;
    default:
      console.log('month error');
      monthString = '';
      break;
  }
  return monthString;
};

// - Days
export const weekDayStringify = (weekDay) => {
  let weekDayString = '';
  switch (weekDay) {
    case 0:
      weekDayString = 'Sunday';
      break;
    case 1:
      weekDayString = 'Monday';
      break;
    case 2:
      weekDayString = 'Tuesday';
      break;
    case 3:
      weekDayString = 'Wednesday';
      break;
    case 4:
      weekDayString = 'Thursday';
      break;
    case 5:
      weekDayString = 'Friday';
      break;
    case 6:
      weekDayString = 'Saturday';
      break;
    default:
      console.log('day error');
      weekDayString = '';
      break;
  }
  return weekDayString;
};
