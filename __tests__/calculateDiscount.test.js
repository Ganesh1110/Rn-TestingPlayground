// ✅ Import the function to test
import {
  calculateDiscount,
  calculateDiscountExample,
} from "../src/utils/calculateDiscount";

describe("calculateDiscount", () => {
  // groups related tests together defined as describe block
  test("calculates 10% discount on 100", () => {
    // Expected result: 100 - (10% of 100) = 90
    expect(calculateDiscount(100, 10)).toBe(90);
  });

  test("calculates 50% discount on 200", () => {
    expect(calculateDiscount(200, 50)).toBe(100);
  });

  test("calculates 0% discount (no change)", () => {
    expect(calculateDiscount(150, 0)).toBe(150);
  });

  test("throws error when price is negative", () => {
    expect(() => calculateDiscount(-100, 10)).toThrow(
      "Inputs cannot be negative"
    );
  });

  test("throws error when percentage is negative", () => {
    expect(() => calculateDiscount(100, -10)).toThrow(
      "Inputs cannot be negative"
    );
  });

  test("throws error when percentage is over 100", () => {
    expect(() => calculateDiscount(100, 150)).toThrow(
      "Discount cannot exceed 100%"
    );
  });

  test("throws error when inputs are not numbers", () => {
    expect(() => calculateDiscount("100", "10")).toThrow(
      "Inputs must be numbers"
    );
  });
});

describe("calculateDiscountExample", () => {
  test("returns 0 for null or undefined inputs", () => {
    expect(calculateDiscountExample(null, 10)).toBe(0);
    expect(calculateDiscountExample(100, null)).toBe(0);
    expect(calculateDiscountExample(undefined, undefined)).toBe(0);
  });

  test("returns 0 for negative inputs", () => {
    expect(calculateDiscountExample(-100, 10)).toBe(0);
    expect(calculateDiscountExample(100, -10)).toBe(0);
  });

  test("calculates correct discount for valid inputs", () => {
    expect(calculateDiscountExample(200, 10)).toBe(180);
  });
});
