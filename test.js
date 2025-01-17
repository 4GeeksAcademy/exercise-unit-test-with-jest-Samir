const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; // Este es el cálculo manual que hicimos
    expect(dollars).toBe(expected);
})

test("One dollar should be 156.5 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = (3.5 / 1.07) * 156.5; // Este es el cálculo manual que hicimos
    expect(yen).toBe(expected);
})

test("One yen should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(3.5);
    const expected = (3.5 / 156.5) * 0.87;
    expect(pounds).toBe(expected);
})

