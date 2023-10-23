const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer= (accumelator, item) => accumelator += item; 

const totalBatteries = batteryBatches.reduce(reducer, 0);
// Code your solution here
