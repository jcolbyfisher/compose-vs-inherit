import cuid from 'cuid';

// store all infos
const db = {};

// all is stored separate, so make name get easier
const getAllArrayName = (tableName) => {
  return `all${tableName}Ids`;
};

// create the table on the db
export const initTable = (tableName) => {
  db[tableName] = {};
  db[getAllArrayName(tableName)] = [];
};

export const create = (tableName, props) => {
  const id = cuid();
  const entity = { id, ...props };

  // add new entity
  db[tableName][id] = entity;

  // make record of new entity's id
  db[getAllArrayName(tableName)].push(id);

  return entity;
};

export const update = (id, props) => {
  db[tableName][id] = props;
};

export const getById = (tableName, id) => {
  const entity = db[tableName][id];

  if (entity) {
    return entity;
  } else {
    return null;
  }
};

export const getAll = (tableName) => {
  return db[getAllArrayName(tableName)].map((id) => {
    return getById(tableName, id);
  });
};

export const deleteById = (tableName, id) => {
  const entity = getById(tableName, id);

  if (entity) {
    db[tableName][id] = null;

    db[getAllArrayName(tableName)] = db[getAllArrayName(tableName)].filter(
      (entityId) => {
        return entityId !== id;
      }
    );
  }
};
