export function isPangram(sentence: string): boolean {

  const cleanSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
  const uniqueLetters = new Set(cleanSentence);

  if(uniqueLetters.size === 26){
    return true;
  }

  return false;
}
