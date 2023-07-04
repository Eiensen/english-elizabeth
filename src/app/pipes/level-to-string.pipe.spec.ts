import { LevelToStringPipe } from './level-to-string.pipe';

describe('LevelToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new LevelToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
