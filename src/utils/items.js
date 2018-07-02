import {daysPassed, compareDates, toJsDate, fromJsDate, mondayOfJsDate, underWeek, addDays} from './date'
function totalSpent(items){
    console.log(items);
    let sum = 0;
    for(let item of items){
        sum += item.price;
    }
    return sum;
}

function compareItems(a, b){
    let dateCompare = compareDates(a.date, b.date);
    if(dateCompare === 0){
        if(a.id < b.id){
            return -1;
        }
        if(a.id > b.id){
            return 1;
        }
        return 0;
    }
    return dateCompare;
}

function getSortedItemsByDateDescending(items){ 
    let clone = [...items];
    clone.sort(compareItems);
    clone.reverse();
    return clone;
}

export function sortItemsIntoWeeks(unsortedItems){
    let items = getSortedItemsByDateDescending(unsortedItems);
    // starting with the bottom,
    // walk forwards in time until today,
    // making 'week' buckets along the way
    // one iteration for every week bucket
    // if week is greater than nextItem, consume,
    // if week is less than nextItem, don't consume,
    // if there are no items left, don't consume
    let weeks = [];
    if(items.length === 0)
        return [];
    let oldestPurchase = items[items.length - 1];
    let currentMonday = mondayOfJsDate(toJsDate(oldestPurchase.date));
    let weekItems = [];
    function pushWeek(){
        let week = {
            startDate: fromJsDate(currentMonday),
            key: currentMonday.valueOf(),
            items: weekItems
        }
        weeks.unshift(week);
        weekItems = [];
        currentMonday = addDays(currentMonday, 7);
    }
    while(items.length !== 0){
        //check last item
        let nextItem = items.pop();
        if(underWeek(currentMonday, nextItem.date)){
            // add it to this week
            weekItems.unshift(nextItem);
        }else{
            // place it back on items
            items.push(nextItem);
            pushWeek();
        }
    }
    pushWeek();
    return weeks;
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