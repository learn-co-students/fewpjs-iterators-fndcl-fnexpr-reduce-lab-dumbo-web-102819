const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteries (batteryArray) {
  return batteryArray.reduce((totalBatteries, battery)  => {
    return totalBatteries + battery
  })
}
let totalBatteries = batteries(batteryBatches)
