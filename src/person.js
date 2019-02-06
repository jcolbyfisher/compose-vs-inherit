import cuid from 'cuid';

const personTable = {};
const allPersonIds = [];

export const create = ({ fname, lname }) => {
  const id = cuid();
  const person = { id, fname, lname };

  personTable[id] = person;
  allPersonIds.push(id);

  return person;
};

export const update = (id, props) => {
  personTable[id] = props;
};

export const getById = (id) => {
  const person = personTable[id];

  if (person) {
    return person;
  } else {
    return null;
  }
};

export const getAll = () => {
  return allPersonIds.map((id) => {
    return getById(id);
  });
};

export const deleteById = (id) => {
  const person = getById(id);

  if (person) {
    personTable[id] = null;

    allPersonIds = allPersonIds.filter((personId) => {
      return personId !== id;
    });
  }
};
