const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

function runTests() {
  const testCases = [
      { input: 1234, expected: "1,234" },
      { input: 1000000, expected: "1,000,000" },
      { input: 9876543210, expected: "9,876,543,210" },
      { input: 6, expected: "6" },
      { input: -10, expected: "-10" },
      { input: -5678, expected: "-5,678" },
  ];

  testCases.forEach((testCase, index) => {
      const result = formatNumberWithCommas(testCase.input);
      if (result === testCase.expected) {
          console.log(`Test ${index + 1} passed.`);
      } else {
          console.error(`Test ${index + 1} failed. Expected ${testCase.expected} but got ${result}.`);
      }
  });
}

runTests();

