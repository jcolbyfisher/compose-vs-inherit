import { BaseDB } from './BaseDB';

class Person extends BaseDB {
  constructor(props) {
    super(props);

    this.create = this.create.bind(this);
  }

  create({ fname, lname }) {
    if (fname && lname) {
      return super.baseCreate({ fname, lname });
    }

    return null;
  }
}

const person = new Person('vehicle');

export const create = person.baseCreate;
export const getAll = person.baseGetAll;
