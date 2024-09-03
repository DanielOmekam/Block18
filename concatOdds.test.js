test("concatOdds([], []) should return []", () => {
    expect(calculations.concatOdds([], [])).toEqual([]);
});


test("concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) should return [-1, 1, 3, 9, 15]", () => {
    expect(calculations.concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toEqual([-1, 1, 3, 9, 15]);
});

test('concatOdds([1, 5, 7], [1, 5, 7]) should return [1, 5, 7]', () => {
    expect(calculations.concatOdds([1, 5, 7], [1, 5, 7])).toEqual([1, 5, ]);
});