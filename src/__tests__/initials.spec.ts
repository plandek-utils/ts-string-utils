import { describe, expect, it } from "vitest";

import { initials } from "..";

describe("initials()", () => {
  it("returns expected initials for a space separated string", () => {
    const input = "foo bar doe";
    const res = initials(input);
    const expected = "f b d";
    expect(res).toEqual(expected);
  });

  it("returns expected initials for a space separated string of non alphabetical characters", () => {
    const input = "111 ^^^ @@@ []";
    const res = initials(input);
    const expected = "1 ^ @ [";
    expect(res).toEqual(expected);
  });

  it("returns expected initials for a space separated string, padded by white space", () => {
    const input = "     foo bar doe     ";
    const res = initials(input);
    const expected = "f b d";
    expect(res).toEqual(expected);
  });

  it("returns single initial for a non separated string", () => {
    const input = "foobardoe";
    const res = initials(input);
    const expected = "f";
    expect(res).toEqual(expected);
  });

  it("returns single initial for a non-space separated string", () => {
    const input = "foo-bar---doe";
    const res = initials(input);
    const expected = "f";
    expect(res).toEqual(expected);
  });

  it("returns empty string if input is an empty string of length 0", () => {
    const input = "";
    const res = initials(input);
    const expected = "";
    expect(res).toEqual(expected);
  });

  it("returns empty string if input is an empty string of length >0", () => {
    const input = "     ";
    const res = initials(input);
    const expected = "";
    expect(res).toEqual(expected);
  });
});
