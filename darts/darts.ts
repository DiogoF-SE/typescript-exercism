
const targetPoints: Map<string, number> = new Map([
  ["outer", 1],
  ["middle", 5],
  ["inner", 10],
  ["outside", 0]
]);

export function score(x: number, y: number): number {

  const distance = Math.sqrt(x ** 2 + y ** 2);
  let points = 0;

  if (distance > 10) {
    // Dart lands outside the target
    points = targetPoints.get("outside") ?? 0;
  } else if (distance > 5) {
    // Dart lands in the outer circle
    points = targetPoints.get("outer")?? 0;
  } else if (distance > 1) {
    // Dart lands in the middle circle
    points = targetPoints.get("middle") ?? 0;
  } else {
    // Dart lands in the inner circle
    points = targetPoints.get("inner") ?? 0;
  }
  

  return points;
}
