export function totalSpent(items){
    console.log(items);
    let sum = 0;
    for(let item of items){
        sum += item.price;
    }
    return sum;
}
