const talkingCalendar = function(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dateSplit = date.split('/');
  let month ='';
  const dateNumber = Number(dateSplit[2]);
  let dateWithOrdinal = 0;
  const year = Number(dateSplit[0]);

  for (let i = 0; i < months.length; i ++) {
    if (i + 1 === Number(dateSplit[1])){
      month = months[i];
    }
  }
  
  if (dateNumber === 1 || dateNumber === 21 || dateNumber === 31) {
    dateWithOrdinal = dateNumber + 'st';
  } else if (dateNumber === 2 || dateNumber === 22) {
    dateWithOrdinal = dateNumber + 'nd';
  } else if (dateNumber === 3 || dateNumber === 23) {
    dateWithOrdinal = dateNumber + 'rd';
  } else {
    dateWithOrdinal = dateNumber + 'th';
  }

  return `${month} ${dateWithOrdinal}, ${year}`;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1973/03/01"));
