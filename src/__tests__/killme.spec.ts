import { testString } from "..";

describe("common", () => {
  it("should have black and white", () => {
    expect(testString).toBe("testing");
  });
});
