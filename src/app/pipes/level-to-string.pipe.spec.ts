import { pipe } from 'rxjs';
import { LevelToStringPipe } from './level-to-string.pipe';

describe('LevelToStringPipe', () => {
  const pipe = new LevelToStringPipe();

  it('create an instance', () => {    
    expect(pipe).toBeTruthy();
  });

  it('should return string - Elementary', () =>{
    var result = pipe.transform(0);
    expect(result).toBe('Elementary')
  })
  it('should return string - Pre-Intermediate', () =>{
    var result = pipe.transform(1);
    expect(result).toBe('Pre-Intermediate')
  })
  it('should return string - Intermediate', () =>{
    var result = pipe.transform(2);
    expect(result).toBe('Intermediate')
  })
  it('should return string - Upper-Intermediate', () =>{
    var result = pipe.transform(3);
    expect(result).toBe('Upper-Intermediate')
  })
  it('should return string - Advanced', () =>{
    var result = pipe.transform(4);
    expect(result).toBe('Advanced')
  })
  it('should return string - Higher Level', () =>{
    var result = pipe.transform(5);
    expect(result).toBe('Higher Level')
  })
});
