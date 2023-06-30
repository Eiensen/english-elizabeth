import { NavigationActions } from '../enums/navigationActions';

export class NavigationDictionary {
  key: number;
  steps: NavigationActions[];

  constructor(key: number, steps: NavigationActions[]) {
    this.key = key;
    this.steps = steps;
  }
}
