let pFactor = require('./PrimeFactor')



test('Expected <null> but was []', () =>
{
    expect(pFactor.num(1)).toBe(null);
})

test('Expected <2> but was []', () =>
{
    expect(pFactor.num(2)).toEqual([2]);
})

test('Expected <3> but was [2]', () =>
{
    expect(pFactor.num(3)).toEqual([3]);
})

test('Expected <2,2> but was [4]', () =>
{
    expect(pFactor.num(4)).toEqual([2,2]);
})

test('Expected <2,2,2> but was [2,4]', () =>
{
    expect(pFactor.num(8)).toEqual([2,2,2]);
})

test('Expected <3,3> but was [9]', () =>
{
    expect(pFactor.num(9)).toEqual([3,3]);
})

test('Expected <3,3,3,47> but was [1269]', () =>
{
    expect(pFactor.num(1269)).toEqual([3,3,3,47]);
})