const add = function (a, b) { return a + b }
test('Add two numbert', () => {
    expect(add(1, 3)).toBe(4)
})