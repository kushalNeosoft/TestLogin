export default class Validator {
  static emailValidator(email: string): boolean {
    if (!email) {
      return false;
    }
    const emailRegex =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!emailRegex.test(email)) {
      return false;
    }
    return true;
  }
  static passwordValidator(phoneNumber: string): boolean {
    if (!phoneNumber) {
      return false;
    }
    const phoneNumberRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      return false;
    }
    return true;
  }
}
