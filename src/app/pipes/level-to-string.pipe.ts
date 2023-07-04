import { Pipe, PipeTransform } from '@angular/core';
import { LevelDescription } from '../enums/levelDescription';

@Pipe({
  name: 'levelToString'
})
export class LevelToStringPipe implements PipeTransform {

  transform(value: number): string {
    let result: string = '';
    switch (value) {
      case LevelDescription.elementary:
        result = "Elementary";
        break;
      case LevelDescription.preIntermediate:
        result = "Pre-Intermediate";
        break;
      case LevelDescription.intermediate:
        result = "Intermediate";
        break;
      case LevelDescription.upperIntermediate:
        result = "Upper-Intermediate";
        break;
        case LevelDescription.advanced:
        result = "Advanced";
        break;
        case LevelDescription.higherLevel:
        result = "Higher Level";
        break;
    }
    return result;
  }


}
