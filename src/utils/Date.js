const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function isLeapYear(date) {
  var year = date.getFullYear();
  return !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)));
}

export function getDaysInMonth(date) {
  const m = date.getMonth();
  return m === 1 && isLeapYear(date) ? 29 : daysInMonth[m];
}

export function getFirstDayOfMonth(date) {
  var day = (date.getDay() - (date.getDate() - 1)) % 7;
  return day < 1 ? day + 7 : day;
}

export function getWeeksInMonth(date) {
  const daysInMonth = getDaysInMonth(date);
  const firstDayOfMonth = getFirstDayOfMonth(date);

  return Math.ceil((daysInMonth + firstDayOfMonth - 1) / 7);
}

export function getMonthName(date){
    return monthNames[date.getMonth()];
}

export function getToday(){
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}