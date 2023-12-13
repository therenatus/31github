const maxProfit = (prices: number[]): number => {
  let result: number = 0;

  for (let i: number = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      result += prices[i] - prices[i - 1];
    }
  }

  return result;
};