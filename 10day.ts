const isPalindromeNumber = function (num: number): boolean {
  if (num < 0) return false;
  if (num < 10) return true;
  if (num % 10 === 0) return false;

  let rev = 0;

  while (num > rev) {
    rev *= 10;
    rev += num % 10;
    num = Math.trunc(num / 10);
  }

  return num === rev || num === Math.trunc(rev / 10);
};