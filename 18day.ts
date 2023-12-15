function iWantToGet(amountRequired: number): number[] {
  const availableNotes: number[] = [100, 50, 20, 10];
  const result: number[] = [];

  if (amountRequired > 0) {
    for (let i: number = 0; i < availableNotes.length; i++) {
      let note: number = availableNotes[i];

      while (amountRequired - note >= 0) {
        amountRequired -= note;
        result.push(note);
      }
    }
  } else {
    console.log("Pls enter new amount");
  }

  return result;
}
