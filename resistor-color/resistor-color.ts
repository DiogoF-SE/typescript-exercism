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


