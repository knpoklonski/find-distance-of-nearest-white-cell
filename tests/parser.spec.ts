import { Parser, ParsingError } from '../src/parser'

test('Should parse input with single test case', () => {
  let parser = new Parser();
  var input =
    "1\n" +
    "3 4\n" +
    "0001\n" +
    "0011\n" +
    "0110";

  let result = parser.parse(input);

  expect(result).toHaveLength(1);
  expect(result[0]).toEqual(
    [[0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 0]]);
})

test('Should parse input with several test case', () => {
  let parser = new Parser();
  var input =
    "2\n" +
    "3 4\n" +
    "0001\n" +
    "0011\n" +
    "0110\n" +
    "2 2\n" +
    "01\n" +
    "11\n";

  let result = parser.parse(input);

  expect(result).toHaveLength(2);
  expect(result[0]).toEqual(
    [[0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 0]]);
  expect(result[1]).toEqual(
    [[0, 1],
    [1, 1]]);
})

describe.each([
  "A",
  "-1",
  "",
  "1\n" + "22\n",
  "1\n" + "2 2\n",
  "1\n" + "2 A\n",
  "1\n" + "2 2\n A\n",
  "1\n" + "2 2\n 11\n22\n",
])(`parse input: %i`, (input) => {
  it(`should throw error`, () => {
    let parser = new Parser();
    expect(() => parser.parse(input)).toThrow(ParsingError);
  });
});