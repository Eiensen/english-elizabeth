import { NavigationActions } from "../enums/navigationActions";
import { NavigationDictionary } from "./navigationDictionary";
import { TestCard } from "./testCard";

export class Navigations{
    dictionary: NavigationDictionary[];
    
    constructor() {
        this.dictionary = [
            new NavigationDictionary(
              1,
              [
                NavigationActions.forward,
              ],
            )
          ];        
    }
}