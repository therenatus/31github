function findVowels(str: string): number {
  let count: number = 0;
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
}

function findVowels2(str: string): number {
  const matched: RegExpMatchArray | null = str.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
}
