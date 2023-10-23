export class Robot {
  static usedRobotNames = new Set<string>();
  private static LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private static DIGITS = "0123456789";
  private robotName = "";

  constructor() {
    this.robotName = this.generateRobotName();
    Robot.usedRobotNames.add(this.name);
  }

  public get name(): string {
    return this.robotName;
  }

  public resetName(): void {
    this.robotName = this.generateRobotName();
    Robot.usedRobotNames.add(this.name);
  }

  public static releaseNames(): void {
    Robot.usedRobotNames.clear();
  }

  private generateRobotName(): string {
    let name = "";
    do {
      for (let i = 0; i < 2; i++) {
        const index = Math.floor(Math.random() * Robot.LETTERS.length);
        name += Robot.LETTERS.charAt(index);
      }

      for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * Robot.DIGITS.length);
        name += Robot.DIGITS.charAt(index);
      }
    } while (Robot.usedRobotNames.has(name));
    return name;
  }
}
