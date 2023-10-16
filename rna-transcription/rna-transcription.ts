const dnaToRna = new Map<string, string>([
  ["G", "C"],
  ["C", "G"],
  ["T", "A"],
  ["A", "U"],
]);

export function toRna(dna: string): string {
  let complement = "";

  for (const char of dna) {
    if (dnaToRna.has(char)) {
      complement += dnaToRna.get(char);
    } else {
      throw new Error("Invalid input DNA.");
    }
  }
  return complement;
}
