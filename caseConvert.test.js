function caseConvert(string) {
  if (string !== string.toLowerCase()) {
    return "The text contains capital letters";
  }

  if (string.includes("_")) {
    return "The text contains underscores";
  }

  if (string.includes(" ")) {
    return "is mandatory kebab-case";
  }
  if (string.length === 0) {
    return "You must provide some text";
  }

  const resultado = [];
  for (let i = 0; i < string.length; i++) {
    resultado.push(string[i]);
  }
  for (let i = 0; i < resultado.length; i++) {
    if (resultado[i] === "-") {
      resultado[i + 1] = resultado[i + 1].toUpperCase();
      const index = resultado.indexOf(resultado[i]);
      resultado.splice(index, 1);
    }
  }
  return resultado.join("");
}

describe("given to caseConvert a kebab-case", () => {
  test("if the input has capital letters the output is 'the Text Contains Capital Letters'", () => {
    const text = "holA";
    const expected = "The text contains capital letters";

    const result = caseConvert(text);

    expect(result).toBe(expected);
  });
  test("if the input has underscores the output is the 'The text contains underscores'", () => {
    const text = "_";
    const expected = "The text contains underscores";

    const result = caseConvert(text);

    expect(result).toBe(expected);
  });
  test("if the input is not on kebab-case output is 'is mandatory kebab-case '", () => {
    const text = "with space";
    const expected = "is mandatory kebab-case";

    const result = caseConvert(text);

    expect(result).toBe(expected);
  });
  test("if the input is empty output is 'You must provide some text'", () => {
    const input = "";
    const expected = "You must provide some text";

    const result = caseConvert(input);

    expect(result).toBe(expected);
  });
  test("if the input is 'hello-my-friend' out is 'HelloMyFriend'", () => {
    const input = "hello-my-friend";
    const expected = "helloMyFriend";

    const result = caseConvert(input);

    expect(result).toBe(expected);
  });
});
