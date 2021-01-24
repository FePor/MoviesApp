import { SortPipe } from './sort.pipe';
import { movieOne, movieTwo } from './SampleDataForTest';

describe('SortPipe', () => {
  

  it('should sort the array descending by Year lastest ', () => {
    const pipe = new SortPipe();

    expect(pipe.transform([movieOne, movieTwo], 'Released',false))
      .toEqual([movieTwo, movieOne]);
  });

  it('should sort the array descending by date oldest ', () => {
    const pipe = new SortPipe();

    expect(pipe.transform([movieTwo, movieOne], 'Released',true))
      .toEqual([movieOne, movieTwo]);
  });
});
