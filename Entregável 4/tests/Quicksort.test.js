const ordena = require('../funcoes/Quicksort');

test('Ordena um array', () => {
    const arrayToSort = [3, 6, 8, 10, 1, 2, 1];
    const sortedArray = ordena(arrayToSort);
    expect(sortedArray).toEqual([1, 1, 2, 3, 6, 8, 10]);
});

test('Ordena um array', () => {
    const arrayToSort = [10, 11, 4, 2, 1, 7, 9];
    const sortedArray = ordena(arrayToSort);
    expect(sortedArray).toEqual([1, 2, 4, 7, 9, 10, 11]);
});
