const MissingParamError = require('../helpers/missing-param-error');
const LoginRouter = require('./login-router');

describe('Login Router', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = new LoginRouter();
    const httpRequest = {
      body: {
        password: 'any_password',
      },
    };
    const httpReponse = sut.route(httpRequest);
    expect(httpReponse.statusCode).toBe(400);
    expect(httpReponse.body).toEqual(new MissingParamError('email'));
  });

  test('Should return 400 if no password is provided', () => {
    const sut = new LoginRouter();
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
      },
    };
    const httpReponse = sut.route(httpRequest);
    expect(httpReponse.statusCode).toBe(400);
    expect(httpReponse.body).toEqual(new MissingParamError('password'));
  });

  test('Should return 500 if no httpRequest is provided', () => {
    const sut = new LoginRouter();
    const httpReponse = sut.route();
    expect(httpReponse.statusCode).toBe(500);
  });

  test('Should return 500 if no httpRequest had no body', () => {
    const sut = new LoginRouter();
    const httpRequest = {};
    const httpReponse = sut.route(httpRequest);
    expect(httpReponse.statusCode).toBe(500);
  });
});
