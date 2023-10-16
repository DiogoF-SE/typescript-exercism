export class DnDCharacter {
  hitpoints = 0;
  abilities = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
  abilityScores = new Map<string, number>;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  constructor() {

    this.abilities.forEach(ability => {
      this.abilityScores.set(ability, DnDCharacter.generateAbilityScore());
    });
    this.hitpoints = 10 + (DnDCharacter.getModifierFor(this.abilityScores.get("constitution") ?? 0));
    this.strength = this.abilityScores.get("strength") ?? 0;
    this.dexterity = this.abilityScores.get("dexterity") ?? 0;
    this.constitution = this.abilityScores.get("constitution") ?? 0;
    this.intelligence = this.abilityScores.get("intelligence") ?? 0;
    this.wisdom = this.abilityScores.get("wisdom") ?? 0;
    this.charisma = this.abilityScores.get("charisma") ?? 0;
    
  }

  public static generateAbilityScore(): number {

    const numbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
    numbers.sort((a, b) => b - a);
    const sum = numbers.slice(0, 3).reduce((acc, curr) => acc + curr, 0);

    return sum;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
