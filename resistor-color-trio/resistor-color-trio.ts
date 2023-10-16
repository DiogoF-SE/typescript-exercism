import { error } from "console";

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

export function colorCode(color: string): number{
  if (color in COLORS_KV) {
    return COLORS_KV[color];
  } else {
    throw new Error("Invalid input")
  }
}

export function decodedValue(twoColors: [string,string]): number {
  let dValue = ""
  for (const word of twoColors ) {
    if (word in COLORS_KV && (dValue.length < 2)) {
      dValue += COLORS_KV[word]
    }
  }
  if (dValue.length === 0){
    throw new Error("No valid color in input");
  }
  else{
    return parseInt(dValue);
  }

}

export function decodedResistorValue(resistorColors: [string, string, string]): string {
  let ohms = decodedValue([resistorColors[0],resistorColors[1]])*(10**colorCode(resistorColors[2]));

  if (ohms >= 1000 && ohms < 1000000) {
    return  ohms/1000+" kiloohms";
  }

  else if (ohms<999){
    return ohms+" ohms";}

  else if (ohms > 1000000000){
    return ohms/1000000000+" gigaohms"
  }

  else {
     return ohms/1000000+" megaohms";
  }
}