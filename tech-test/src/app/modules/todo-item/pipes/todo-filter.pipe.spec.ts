import { TodoFilterPipe } from './todo-filter.pipe';

describe('TodoFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new TodoFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should pipe correct data', () => {
    const pipe = new TodoFilterPipe();
    const testArr = [{
      id: 1,
      label: 'test',
      description: 'test',
      category: 'test',
      done: true}, {
      id: 3,
      label: 'IDK',
      description: 'IDK',
      category: 'IDK',
      done: false}, {
      id: 2,
      label: 'BlahBlahBlah',
      description: 'BlahBlahBlah',
      category: 'BlahBlahBlah',
      done: true}];
    expect(pipe.transform(null, '').length).toEqual(0);
    expect(pipe.transform([], '').length).toEqual(0);
    expect(pipe.transform([], '1').length).toEqual(0);
    expect(pipe.transform(testArr, '').length).toEqual(3);
    expect(pipe.transform(testArr, 'Blah').length).toEqual(1);
    expect(pipe.transform(testArr, 'NothingToSeeHere').length).toEqual(0);
  });
});
