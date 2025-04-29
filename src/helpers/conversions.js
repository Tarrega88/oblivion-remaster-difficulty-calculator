const to3Decimals = (num) => Math.round(num * 1000) / 1000;
const to2Decimals = (num) => Math.round(num * 100) / 100;
const decimalToPercentNum = (num) => Math.round(num * 100);
const decimalToPercentString = (num) => `${Math.round(num * 100)}%`;


//          td.innerText = `${Math.round(obj[header] * 100)}%`;

export { to3Decimals, to2Decimals, decimalToPercentString, decimalToPercentNum }