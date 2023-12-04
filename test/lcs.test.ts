import { lcs } from "../src/lcs";

describe("lcm", () => {
  const samples = [
    {
      input: ["ACCGGTCGAGTGCGCGGAAGCCGGCCGAA", "GTCGTTCGGAATGCCGTTGCTCTGTAAA"],
      expected: 20,
    },
    {
      input: ["A00B0000C", "XXAXBXCXX"],
      expected: 3,
    },
  ];

  test.each(samples)("($input) => $expected", ({ input, expected }) => {
    expect(lcs(input[0], input[1])).toEqual(expected);
  });
});
