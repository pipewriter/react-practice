import {daysPassed} from './date'
function totalSpent(items){
    console.log(items);
    let sum = 0;
    for(let item of items){
        sum += item.price;
    }
    return sum;
}

function compare(a, b){
    if(a.date.year < b.date.year){
        return -1;
    }
    if(a.date.year > b.date.year){
        return 1;
    }
    if(a.date.year === b.date.year){
        if(a.date.month < b.date.month){
            return -1;
        }
        if(a.date.month > b.date.month){
            return 1;
        }
        if(a.date.month === b.date.month){
            if(a.date.date < b.date.date){
                return -1;
            }
            if(a.date.date > b.date.date){
                return 1;
            }
            if(a.date.date === b.date.date){
                if(a.id < b.id){
                    return -1;
                }
                if(a.id > b.id){
                    return 1;
                }
            }
        }
    }
}

function getSortedItemsByDateDescending(items){ 
    let clone = [...items];
    clone.sort(compare);
    clone.reverse();
    return clone;
}

export function sortItemsIntoWeeks(items){
    let sorted = getSortedItemsByDateDescending(items);
    console.log(sorted);
    // starting with the bottom,
    // walk forwards in time until today,
    // making 'week' buckets along the way
    // one iteration for every week bucket
    // if week is greater than nextItem, consume,
    // if week is less than nextItem, don't consume,
    // if there are no items left, don't consume
    
}

export default function calcRates(items, startDate){
    let total = totalSpent(items);
    let days = daysPassed(startDate);
    let months = days / 30.45;
    let weeks = days / 7;
    let years = days / 365.25;
    let dailyRate = total / days;
    let monthlyRate = total / months;
    let weeklyRate = total / weeks;
    let yearlyRate = total / years;
    return {
        total,
        dailyRate,
        monthlyRate,
        weeklyRate,
        yearlyRate
    }
}