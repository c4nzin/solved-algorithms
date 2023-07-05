function NamedOne(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  Object.defineProperty(this, "fullname", {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      let parts = value.split(" ");
      if (parts.length === 2) {
        this.firstName = parts[0];
        this.lastName = parts[1];
      }
    },
  });
}
