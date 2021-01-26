import { SortPipe } from './sort.pipe';
import { movieOne, movieTwo } from './SampleDataForTest';

describe('SortPipe', () => {
  

  it('should sort the array descending by Year lastest ', () => {
    const pipe = new SortPipe();

    expect(pipe.transform([movieOne, movieTwo], 'Lastest',false))
      .toEqual([movieTwo,movieOne]);
  });

  it('should sort the array descending by date oldest ', () => {
    const pipe = new SortPipe();

    expect(pipe.transform([movieOne, movieTwo], 'Oldest',true))
      .toEqual([movieOne,movieTwo]);
  });
});
