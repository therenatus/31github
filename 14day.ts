function isValid(s: string): boolean {
  const brackets: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  const st: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (isClosedBracket(s[i])) {
      if (brackets[s[i]] !== st.pop()) return false;
    } else {
      st.push(s[i]);
    }
  }
  return st.length === 0;
}

function isClosedBracket(ch: string): boolean {
  return [")", "]", "}"].indexOf(ch) > -1;
}