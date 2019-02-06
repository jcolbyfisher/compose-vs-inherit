import cuid from 'cuid';

const vehicleTable = {};
const allVehicleIds = [];

export const create = ({ make, model }) => {
  if (make && model) {
    const id = cuid();
    const vehicle = { id, make, model };

    vehicleTable[id] = vehicle;
    allVehicleIds.push(id);

    return vehicle;
  }

  return null;
};

export const update = (id, props) => {
  vehicleTable[id] = props;
};

export const getById = (id) => {
  const vehicle = vehicleTable[id];

  if (vehicle) {
    return vehicle;
  } else {
    return null;
  }
};

export const getAll = () => {
  return allVehicleIds.map((id) => {
    return getById(id);
  });
};

export const deleteById = (id) => {
  const vehicle = getById(id);

  if (vehicle) {
    vehicleTable[id] = null;

    allVehicleIds = allVehicleIds.filter((vehicle) => {
      return vehicle !== id;
    });
  }
};
