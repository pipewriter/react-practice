
let now = new Date();
let [currentYear, currentMonth, currentDate, currentZone] =
    [now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getTimezoneOffset()];

export let getCurrentDate = () =>({
    date: currentDate,
    month: currentMonth,
    year: currentYear,
    zone: currentZone
});