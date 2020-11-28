import promptUserData from "./script1";
/*
import promptUserEmail from "./script1";
import promptUserPhone from "./script1";
*/

describe("test functions to return formatted string", () => {
  /*
Определить с
помощью регулярного выражения, является ли
введённая строка:
1.Датой.
2.Адресом электронной почты.
3.*Номером телефона.
*/
  const funcPropmpt = window.prompt;
  afterAll(() => {
    window.prompt = funcPropmpt;
  });

  describe("Test got prompted good value is according to expected format", () => {
    [
      ["2020-11-29", "DATE"],
      ["12/31/2020", "DATE"],
      ["01.01.2021", "DATE"],
      ["123456@i.ru", "EMAIL"],
      ["123456@ru.name.ru", "EMAIL"],
      ["login@i.ru", "EMAIL"],
      ["логин-1@i.ru", "EMAIL"],
      ["login.3@i.ru", "EMAIL"],
      ["login.3-67@i.ru", "EMAIL"],
      ["1login@ru.name.ru", "EMAIL"],
      ["+79261234567", "PHONE"],
      ["89261234567", "PHONE"],
      ["79261234567", "PHONE"],
      ["+7 926 123 45 67", "PHONE"],
      ["8(926)123-45-67", "PHONE"],
      ["123-45-67", "PHONE"],
      ["9261234567", "PHONE"],
      ["79261234567", "PHONE"],
      ["(495)1234567", "PHONE"],
      ["(495) 123 45 67", "PHONE"],
      ["89261234567", "PHONE"],
      ["8-926-123-45-67", "PHONE"],
      ["8 927 1234 234", "PHONE"],
      ["8 927 12 12 888", "PHONE"],
      ["8 927 12 555 12", "PHONE"],
      ["8 927 123 8 123", "PHONE"],
      // ?      ['8    927 123 8 123', 'PHONE'],
    ].forEach((el) => {
      it(`check whether the value ${el[0]} is ${el[1]}`, () => {
        window.prompt = jest.fn(() => el[0]);
        expect(promptUserData()).toEqual(el[1]);
      });
    });
  });

  describe("Test got prompted bad value disagree to expected format", () => {
    [
      ["", "DATE"],
      ["A020-11-29", "DATE"],
      //      ['20020-11-29', 'DATE'],
      ["2020-13-29", "DATE"],
      ["2020-11-32", "DATE"],
      ["2020\\11\\30", "DATE"],
      ["", "EMAIL"],
      ["1login_@i.ru", "EMAIL"],
      ["_login@i.ru", "EMAIL"],
      ["_login@ru.name.ru", "EMAIL"],
      ["логинlogin@i.ru", "EMAIL"],
      ["loginлогин@i.ru", "EMAIL"],
      [".123456@i.ru ", "EMAIL"],
      ["123456-@i.ru", "EMAIL"],
      ["@123456@i.ru", "EMAIL"],
      ["123456@.ru", "EMAIL"],
      ["123456@ru", "EMAIL"],
      ["login@.ru", "EMAIL"],
      ["123456@ru.name.ru.ua", "EMAIL"],
      ["123456@i.ру", "EMAIL"],
      ["123456@ru.name.ру", "EMAIL"],
      ["A79261234567", "PHONE"],
      ["-79261234567", "PHONE"],
      //      ['+792612345670000000', 'PHONE'],
    ].forEach((el) => {
      it(`check whether the value ${el[0]} is not ${el[1]}`, () => {
        window.prompt = jest.fn(() => el[0]);
        expect(promptUserData()).not.toEqual(el[1]);
      });
    });
  });
  /*
  it("is a phone", () => {
     expect('Вася').toMatch(/ася/);
  });
*/
});
