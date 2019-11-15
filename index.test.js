const add = require("./index").add;


describe('add()', () => {
  it('1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  it("0 + 0 = 0", () => {
    expect(add(0, 0)).toBe(0);
  })

  it("(-1) + (-3) = (-4)", () => {
    expect(add(-1, -3)).toBe(-4);
  })
})
