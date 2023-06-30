import { NavigationActions } from '../enums/navigationActions';
import { TestCard } from './testCard';

export class NavigationDictionary {
  key: number;
  steps: TestCard[];

  constructor(key: number, steps: TestCard[]) {
    this.key = key;
    this.steps = steps;
  }
}
