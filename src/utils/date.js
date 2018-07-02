
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

export function compareDates(a, b){
    if(a.year < b.year){
        return -1;
    }
    if(a.year > b.year){
        return 1;
    }
    if(a.year === b.year){
        if(a.month < b.month){
            return -1;
        }
        if(a.month > b.month){
            return 1;
        }
        if(a.month === b.month){
            if(a.date < b.date){
                return -1;
            }
            if(a.date > b.date){
                return 1;
            }
            if(a.date === b.date){
                return 0;
            }
        }
    }
}

export function toJsDate(date){
    return new Date(date.year, date.month - 1, date.date);
}

export function fromJsDate(jsDate){
    return {
        year: jsDate.getFullYear(),
        month: jsDate.getMonth() + 1,
        date: jsDate.getDate()
    }
}

export function addDays(jsDate, days){
    let clone = new Date(jsDate.valueOf());
    clone.setDate(jsDate.getDate() + days);
    return clone;
}

export function isMonday(jsDate){
    return jsDate.getDay() === 1;
}

export function mondayOfJsDate(jsDate){
    let clone = new Date(jsDate.valueOf());
    while(!isMonday(clone)){
        clone = addDays(clone, -1);
    }
    return clone;
}

export function underWeek(mondayJsDate, dateInQuestion){
    let nextMonday = addDays(mondayJsDate, 7);
    return nextMonday.valueOf() > toJsDate(dateInQuestion).valueOf();    
}