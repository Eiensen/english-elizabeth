export class LevelDescription {
  name: string = "";

  constructor(points: number) {
    if (points >= 0 && points <= 10) this.name = 'Beginner';
    if (points >= 11 && points <= 18) this.name = 'Elementary';
    if (points >= 19 && points <= 25) this.name = 'Pre-Intermediate';
    if (points >= 26 && points <= 32) this.name = 'Intermediate';
    if (points >= 33 && points <= 39) this.name = 'Upper-Intermediate';
    if (points >= 40 && points <= 46) this.name = 'Advanced';
    if (points >= 47 && points <= 50) this.name = 'Proficiency';
  }
}
