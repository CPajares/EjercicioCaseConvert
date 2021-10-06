describe("function caseConvert, that check if it´s kebab-case and return lowerCamelCase", () => {
  test("the input 'the-text-contains-capital-letters' should be the output 'theTextContainsCapitalLetters'", () => {
    const input = "the-text-contains-capital-letters";
    const result = "theTextContainsCapitalLetters";

    expect(input).toBe(result);
  });
});
