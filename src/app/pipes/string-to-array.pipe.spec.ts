import { StringToArrayPipe } from './string-to-array.pipe';

describe('StringToArrayPipe', () => {
  let pipe: StringToArrayPipe;

  beforeEach(() => {
    pipe = new StringToArrayPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an array of words from the comma separated string using the separator ","', () => {
    const transformedArray = pipe.transform('Virat,Sachin,Rahul');
    expect(transformedArray).toEqual(['Virat', 'Sachin', 'Rahul']);
  });
});
