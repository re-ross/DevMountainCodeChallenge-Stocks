const best = (priceArray) => {
  if (priceArray.length < 2) {
    return 0;
  }
  let min = priceArray[0];
  let maxProfit = 0;
  for (let i = 1; i < priceArray.length; i++) {
    const currentPrice = priceArray[i];
    const currentProfit = currentPrice - min;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    } else if (currentPrice < min) {
      min = currentPrice;
    }
  }
  return console.log(maxProfit);
};
best([1, 2, 3, 4, 5]);
best([5, 4, 3, 2, 1]);
