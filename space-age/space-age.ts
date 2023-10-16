const planetsMap = new Map<string, number>([
  ["mercury", 0.2408467],
  ["venus", 0.61519726],
  ["earth", 1.0],
  ["mars", 1.8808158],
  ["jupiter", 11.862615],
  ["saturn", 29.447498],
  ["uranus", 84.016846],
  ["neptune", 164.79132],
]);

export function age(planet: string, seconds: number): number {
  let earthAge = 0;
  let secondsInAnEarthYear = 31557600;
  let planetName = planet.replace(/^.*on\s+(\w+).*$/i, "$1");

  if (planetsMap.has(planetName)) {
    earthAge =
      seconds / planetsMap.get(planetName)! / secondsInAnEarthYear ?? 0;
  }
  return parseFloat(earthAge.toFixed(2));
}
