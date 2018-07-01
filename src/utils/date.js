
let now = new Date();
let [currentYear, currentMonth, currentDate, currentZone] =
    [now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getTimezoneOffset()];

export let getCurrentDate = () =>({
    date: currentDate,
    month: currentMonth,
    year: currentYear,
    zone: currentZone
});

export let daysPassed = (startDate) => { 
    let startDateMs = Date.UTC(startDate.year, startDate.month, startDate.date);
    let currentDateMs = (new Date()).getTime();
    let different = currentDateMs - startDateMs;
    let days = Math.ceil(different / 24.0 / 60.0 / 60.0 / 1000.0)
    return days ? days : 1 ;
}