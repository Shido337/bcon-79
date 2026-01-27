export default class User {
  #login;
  #email;

  constructor(options) {
    this.login = options.login;
    this.email = options.email;
  }

  get email() {
    return this.#email;
  }
  set email(value) {
    if (value.includes("@")) {
      this.#email = value;
    }
  }

  get login() {
    return this.#login;
  }
  set login(value) {
    if (value.trim() !== "") {
      this.#login = value;
    }
  }
}
