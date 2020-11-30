import printSummary from "./script3";

describe("test function printSummary which coumt sum of digits and print it to console.log", () => {
  it("must have user's input", () => {
    const consoleSpy = jest.spyOn(console, "log");
    printSummary();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  /*
  it("do output into console.log with strings and number", () => {

    let s1 = 'Hello';
    let s2 = 0;

    const consoleSpy = jest.spyOn(console, 'log');
    printConcatLength(s1, s2);
    expect(consoleSpy).toBeCalledWith(NaN);
  });
*/
});
