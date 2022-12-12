const validator = require('validator');

class EmailValidator {
  isValid(email) {
    return validator.isEmail(email);
  }
}

const makeSut = () => {
  return new EmailValidator();
};

describe('Email Validator', () => {
  test('Should return true if validator retuns true', () => {
    const sut = makeSut();
    const isEmailValid = sut.isValid('valid_email@mail.com');
    expect(isEmailValid).toBe(true);
  });

  test('Should return false if validator retuns false', () => {
    validator.isEmailValid = false;
    const sut = makeSut();
    const isEmailValid = sut.isValid('invalid_email@mail.com');
    expect(isEmailValid).toBe(false);
  });
});