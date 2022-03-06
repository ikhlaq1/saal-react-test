export const convertDate = (inputDateString) => {
  //convertin date string into date obj
  const date = new Date(inputDateString);
  //getting year using getFullYear method provided by date
  let year = date.getFullYear();

  //getting month number getMonth method provided by date
  let month = (1 + date.getMonth()).toString();
  //appending 0 as prefix is month number is single digit (1-9)
  month = month.length > 1 ? month : "0" + month;

  //getting day number getDate method provided by date
  let day = date.getDate().toString();
  //appending 0 as prefix is day number is single digit (1-9)
  day = day.length > 1 ? day : "0" + day;

  //returning concatinated string of  day month and year in this format DD/MM/YY
  return day + "/" + month + "/" + year;
};
