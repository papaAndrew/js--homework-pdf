import printConcatLength from "./script2";

describe("test function printConcatLength", () => {
  /*
  let outputData = "";
  const  storeLog = inputs => (outputData += inputs);
  test("console log Hello World", () => {
    console["log"] = jest.fn(storeLog);

    printConcatLength("a", "b");

    expect(outputData).toBe("a");
  })
*/

  it("do output into console.log with two strings", () => {
    const s1 = "Hello";
    const s2 = "World!";

    const consoleSpy = jest.spyOn(console, "log");
    printConcatLength(s1, s2);
    expect(consoleSpy).toBeCalledWith(11);
  });

  it("do output into console.log with strings and number", () => {
    const s1 = "Hello";
    const s2 = 0;

    const consoleSpy = jest.spyOn(console, "log");
    printConcatLength(s1, s2);
    expect(consoleSpy).toBeCalledWith(NaN);
  });
});
