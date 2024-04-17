const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./index');

test('capitalize function', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverseString function', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('calculator object', () => {
    expect(calculator().add(1,2)).toBe(3);
    expect(calculator().subtract(1,2)).toBe(-1);
    expect(calculator().divide(1,2)).toBe(0.5);
    expect(calculator().multiply(1,2)).toBe(2);
});

test('caesarCipher function', () => {
    expect(caesarCipher('hello', 1)).toBe('ifmmp');
    expect(caesarCipher('hello', 0)).toBe('hello');
    expect(caesarCipher('hello.', 4)).toBe('lipps.');
    expect(caesarCipher('zap!', 1)).toBe('abq!');
});

test('analyzeArray function', () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({
        average: 3,
        max: 5,
        min: 1,
        length: 5
    });
});