import printToConsole from "./script1";

describe("test function printToConsole", () => {
  it("is a function", () => {
    expect(typeof printToConsole).toBe("function");
  });

  it("do output into console.log with two results", () => {
    const consoleSpy = jest.spyOn(console, "log");
    printToConsole();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
  });
});
