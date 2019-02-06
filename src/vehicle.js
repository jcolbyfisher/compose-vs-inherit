import { BaseDB } from './BaseDB';

class Vehicle extends BaseDB {
  constructor(props) {
    super(props);

    this.create = this.create.bind(this);
  }

  create({ make, model }) {
    if (make && model) {
      return super.baseCreate({ make, model });
    }

    return null;
  }
}

const vehicle = new Vehicle('vehicle');

export const create = vehicle.create;
export const getAll = vehicle.baseGetAll;
