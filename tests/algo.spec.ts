import { Algo } from '../src/algo'

test('Should return empty array when bitmap is empty', () => {
  let algo = new Algo();
  let result = algo.findDistanceOfNearestWhiteCell([]);
  expect(result).toEqual([]);
})

test('Should return 0 when bitmap with single cell 1', () => {
  let algo = new Algo();
  let result = algo.findDistanceOfNearestWhiteCell(
    [[1]]
  );
  expect(result).toEqual([[0]]);
})

test('Should return int.Max when bitmap with single cell 0', () => {
  let algo = new Algo();
  let result = algo.findDistanceOfNearestWhiteCell(
    [[0]]
  );
  expect(result).toEqual([[Number.MAX_SAFE_INTEGER]]);
})


test('Should return all 0 when all cells in bitmap are black', () => {
  let algo = new Algo();
  let result = algo.findDistanceOfNearestWhiteCell(
    [[1, 1, 1],
    [1, 1, 1]]
  );
  expect(result).toEqual(
    [[0, 0, 0],
    [0, 0, 0]]);
})

test('Should return correct answer for control test case', () => {
  let algo = new Algo();
  let result = algo.findDistanceOfNearestWhiteCell(
    [[0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 0]]
  );
  expect(result).toEqual(
    [[3, 2, 1, 0],
    [2, 1, 0, 0],
    [1, 0, 0, 1]]);
})

test('Should return correct answer test case when max distance 1', () => {
  let algo = new Algo();
  let result = algo.findDistanceOfNearestWhiteCell(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 1]]
  );
  expect(result).toEqual(
    [[0, 1, 1],
    [1, 1, 0],
    [1, 0, 0]]);
})
