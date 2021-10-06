function caseConvert(string) {
  if (string !== string.toLowerCase()) {
    console.log("The text contains capital letters");
  }

  if (string.includes("_")) {
    console.log("The text contains underscores");
  }

  if (string.includes(" ")) {
    console.log("is mandatory kebab-case");
  }

  const resultado = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "-") {
      string[i + 1].toUpperCase();
    } else {
      resultado.push(string[i]);
    }
  }
  console.log(resultado.split());
}

describe("function caseConvert, that check if it´s kebab-case and return lowerCamelCase", () => {
  test("the input 'the-text-contains-capital-letters' should be the output 'theTextContainsCapitalLetters'", () => {
    const input = "the-text-contains-capital-letters";
    const result = "theTextContainsCapitalLetters";

    expect(input).toBe(result);
  });
});
