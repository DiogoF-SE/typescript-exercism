

interface ColorMap {
  [key: string]: number;
}

export const COLORS_KV: ColorMap = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9,
};

export const COLORS: string[] = Object.keys(COLORS_KV);

export function colorCode(color: string): number | string {
  if (color in COLORS_KV) {
    return COLORS_KV[color];
  } else {
    return "Woops, this color does not exist in resistor bands";
  }
}

export function decodedValue(twoColors: [string]): number | string {
  let dValue = ""
  for (const word of twoColors ) {
    if (word in COLORS_KV && (dValue.length <2)) {
      dValue += COLORS_KV[word]
    }
  }
  if (dValue.length === 0){
    return "Woops, one or both colors do not exist in resistor bands";
  }
  else{
    return parseInt(dValue);
  }

}