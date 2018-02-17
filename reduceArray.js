const Orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

let orderAmount = 0;

function totalAmount(array) {
    for (let i = 0; i < array.length; i++) {

        orderAmount += array[i].amount
    }
    return orderAmount;

}

console.log(totalAmount(Orders))


function amountTotal(array1) {
    let reducerFunction = (acc, cur) => acc + cur.amount;
    let reducer = array1.reduce(
        reducerFunction, 0)
    return reducer
}


var total = amountTotal(Orders)
console.log(total)
