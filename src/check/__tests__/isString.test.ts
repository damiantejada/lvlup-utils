import { it, expect, describe } from "vitest";

import { isString } from "@src/check/isString";
describe("isString", () => {
  it('should return true if params is ""', () => {
    expect(isString("")).toBe(true);
  });

  it("should return false if param is null", () => {
    expect(isString(null)).toBe(false);
  });

  it("should return false if param is undefined", () => {
    expect(isString(undefined)).toBe(false);
  });

  it("should return false if param is number", () => {
    expect(isString(2)).toBe(false);
  });
});
