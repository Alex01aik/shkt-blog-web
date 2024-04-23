export class AuthExcaption extends Error {
  constructor(message = "Unautorized") {
    super(message);
    this.name = "AuthExcaption";
  }
}
