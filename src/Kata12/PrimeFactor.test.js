let pFactor = require('./PrimeFactor')

test('Expected null received []', () =>
{
    expect(pFactor.number(1)).toBe(null)
})

test('Expected 2 received []', () =>
{
    expect(pFactor.number(2)).toEqual([2])
})

test('Expected 3 received [2]', () =>
{
    expect(pFactor.number(3)).toEqual([3])
})

test('Expected 2,2 received [4]', () =>
{
    expect(pFactor.number(4)).toEqual([2,2])
})

test('Expected 2,2,2 received [8]', () =>
{
    expect(pFactor.number(8)).toEqual([2,2,2])
})

test('Expected 3,3 received [9]', () =>
{
    expect(pFactor.number(9)).toEqual([3,3])
})

test('Expected 3,5 received [15]', () =>
{
    expect(pFactor.number(15)).toEqual([3,5])
})