const birthday = new Date("1969-04-07");
const dateToday = new Date();
const timeDifference = dateToday.getTime() - birthday.getTime();
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log("Birthday: ", birthday);
console.log("Today's date: ", dateToday);
console.log(`I have been alive for ${daysDifference} days`);
