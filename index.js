const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (accumulator, battery) => {
   console.log(accumulator, battery)
    let total = accumulator + battery;
    return total

}

let totalBatteries = batteryBatches.reduce(reducer,0)
